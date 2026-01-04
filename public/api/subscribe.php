<?php
/**
 * Email subscription endpoint
 * Receives email via POST, stores in MySQL
 */

header('Content-Type: application/json; charset=utf-8');

// Load config
$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server configuration missing']);
    exit;
}

$config = require $configPath;

// CORS handling
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'] ?? [])) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only POST allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get email from POST or JSON body
$email = $_POST['email'] ?? null;
if (!$email) {
    $json = json_decode(file_get_contents('php://input'), true);
    $email = $json['email'] ?? null;
}

// Validate email
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

$email = strtolower(trim($email));
$lang = $_POST['lang'] ?? $json['lang'] ?? 'en';
$lang = preg_match('/^[a-z]{2}$/', $lang) ? $lang : 'en';

try {
    // Connect to database
    $pdo = new PDO(
        "mysql:host={$config['db']['host']};dbname={$config['db']['name']};charset=utf8mb4",
        $config['db']['user'],
        $config['db']['pass'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );

    // Create table if not exists
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS subscribers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            lang VARCHAR(2) DEFAULT 'en',
            ip VARCHAR(45),
            user_agent VARCHAR(500),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_email (email)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    // Insert subscriber (ignore duplicates)
    $stmt = $pdo->prepare("
        INSERT IGNORE INTO subscribers (email, lang, ip, user_agent)
        VALUES (:email, :lang, :ip, :ua)
    ");

    $stmt->execute([
        ':email' => $email,
        ':lang' => $lang,
        ':ip' => $_SERVER['REMOTE_ADDR'] ?? null,
        ':ua' => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500),
    ]);

    $isNew = $stmt->rowCount() > 0;

    echo json_encode([
        'success' => true,
        'message' => $isNew ? 'subscribed' : 'already_subscribed',
    ]);

} catch (PDOException $e) {
    error_log("Subscribe error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error']);
}
