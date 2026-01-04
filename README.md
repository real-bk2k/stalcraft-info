# stalcraft.info

Auction analytics, crafting calculator, and market insights for STALCRAFT: X players.

## Tech Stack

- **Framework**: Astro 5
- **Styling**: Tailwind CSS 4
- **i18n**: EN, RU (extensible)
- **Output**: Static HTML

## Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── i18n/           # Translations
├── layouts/        # Page layouts
├── pages/
│   ├── en/         # English pages
│   └── ru/         # Russian pages
└── styles/         # Global CSS
```

## Deployment (Timeweb)

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to hosting
3. Configure domain to point to uploaded files

For Timeweb shared hosting:
- Upload `dist/*` to `public_html/` via FTP or file manager
- SSL certificate will be auto-configured

## Adding Languages

1. Add language code to `src/i18n/translations.ts` in `languages` object
2. Add translations to the `translations` object
3. Create `src/pages/{lang}/index.astro` (copy from existing)
