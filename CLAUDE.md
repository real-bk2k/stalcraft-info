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
- **Хостинг**: GitHub Pages (статика)
- **i18n**: EN/RU с автоопределением по браузеру

### Архитектура (планируется)
- **Аналитика**: PostgreSQL (транзакции) + ClickHouse (time-series цен)
- **API**: Stalcraft API (eapi.stalcraft.net)
  - Приложение: **stalcinfo** (название без "stalcraft" из-за ограничений)
  - Статус: заявка подана (2026-01-04)

## Долги (TODO)

### Высокий приоритет
- [ ] **Форма подписки**: Подключить Яндекс Формы
  - Создать форму на forms.yandex.ru с полем email
  - Добавить `formUrl` prop в SubscribeForm компонент
  - Файл: `src/components/SubscribeForm.astro`

- [x] **Заявка на API**: Подана (2026-01-04)
  - Приложение: stalcinfo
  - Ожидает одобрения от @stalcraft_api_bot

### Средний приоритет
- [x] ~~Настроить GitVerse Pages для деплоя~~ → GitHub Pages (настроено)
- [ ] Добавить OG-картинку (`public/images/og-image.png`)

### Низкий приоритет
- [ ] Добавить другие языки (DE, etc.)
- [ ] Добавить соцсети в footer когда появятся
