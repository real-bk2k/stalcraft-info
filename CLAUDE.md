# Claude Code Configuration

## Язык общения
Весь диалог ведётся **на русском языке**.

## Централизованные знания

При решении типовых задач (dev environment, деплой, отладка) — проверь готовые рецепты:

```
~/projects/sentorium/knowledge/recipes/
├── dev-environment/    # SSH туннели, локальная разработка
├── deployment/         # Деплой, CI/CD
├── debugging/          # Отладка, диагностика
└── security/           # Безопасность
```

## Git workflow
- Коммиты сопровождаются push
- Сообщения коммитов на русском или английском (по контексту)

## Технические решения

### Стек
- **Frontend**: Astro 5 + Tailwind CSS 4 + TypeScript
- **Хостинг**: GitVerse Pages (статика)
- **i18n**: EN/RU с автоопределением по браузеру

### Архитектура (планируется)
- **Аналитика**: PostgreSQL (транзакции) + ClickHouse (time-series цен)
- **API**: Stalcraft API (eapi.stalcraft.net) — требуется заявка

## Долги (TODO)

### Высокий приоритет
- [ ] **Форма подписки**: Подключить Яндекс Формы
  - Создать форму на forms.yandex.ru с полем email
  - Добавить `formUrl` prop в SubscribeForm компонент
  - Файл: `src/components/SubscribeForm.astro`

- [ ] **Заявка на API**: Подать заявку на Stalcraft API
  - URL: https://eapi.stalcraft.net
  - Указать stalcraft.info как проект

### Средний приоритет
- [ ] Настроить GitVerse Pages для деплоя
- [ ] Добавить OG-картинку (`public/images/og-image.png`)

### Низкий приоритет
- [ ] Добавить другие языки (DE, etc.)
- [ ] Добавить соцсети в footer когда появятся
