export const languages = {
  en: 'English',
  ru: 'Русский',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Meta
    'meta.title': 'Stalcraft.info — Auction Analytics & Crafting Guide',
    'meta.description': 'Advanced auction statistics, price analytics, crafting calculator and market insights for STALCRAFT: X',

    // Header
    'header.coming_soon': 'Coming Soon',

    // Hero
    'hero.title': 'Master the Zone Economy',
    'hero.subtitle': 'Advanced auction analytics, crafting calculator, and market insights for STALCRAFT: X players',
    'hero.notify': 'Get notified on launch',
    'hero.email_placeholder': 'your@email.com',
    'hero.subscribe': 'Notify me',
    'hero.success': 'Thanks! We\'ll notify you on launch.',
    'hero.already': 'You\'re already subscribed!',
    'hero.error': 'Something went wrong. Please try again.',

    // Features
    'features.title': 'Planned Features',

    'features.auction.title': 'Auction Analytics',
    'features.auction.desc': 'Real-time price tracking, historical trends, price-per-unit calculations, and lot volume analysis across all regions',

    'features.crafting.title': 'Crafting Calculator',
    'features.crafting.desc': 'Calculate production costs, profit margins, and get optimal purchasing recommendations based on current market prices',

    'features.meta.title': 'Market Meta',
    'features.meta.desc': 'Trading profitability rankings, sales velocity by time of day, weekly cycles, and ROI optimization for your capital',

    'features.regions.title': 'All Regions',
    'features.regions.desc': 'Full support for RU, EU, NA, and SEA servers with region-specific statistics and cross-region price comparison',

    // Footer
    'footer.project': 'A community project for STALCRAFT: X players',
    'footer.disclaimer': 'Not affiliated with EXBO Studio. All game assets belong to their respective owners.',
  },
  ru: {
    // Meta
    'meta.title': 'Stalcraft.info — Аналитика аукциона и справочник крафта',
    'meta.description': 'Расширенная статистика аукциона, ценовая аналитика, калькулятор крафта и рыночные инсайты для STALCRAFT: X',

    // Header
    'header.coming_soon': 'Скоро запуск',

    // Hero
    'hero.title': 'Освой экономику Зоны',
    'hero.subtitle': 'Продвинутая аналитика аукциона, калькулятор крафта и рыночные инсайты для игроков STALCRAFT: X',
    'hero.notify': 'Узнай о запуске первым',
    'hero.email_placeholder': 'your@email.com',
    'hero.subscribe': 'Уведомить меня',
    'hero.success': 'Спасибо! Мы сообщим о запуске.',
    'hero.already': 'Вы уже подписаны!',
    'hero.error': 'Что-то пошло не так. Попробуйте ещё раз.',

    // Features
    'features.title': 'Планируемые функции',

    'features.auction.title': 'Аналитика аукциона',
    'features.auction.desc': 'Отслеживание цен в реальном времени, исторические тренды, расчёт цены за единицу и анализ объёмов лотов по всем регионам',

    'features.crafting.title': 'Калькулятор крафта',
    'features.crafting.desc': 'Расчёт себестоимости, маржинальности и рекомендации по оптимальным закупкам на основе текущих рыночных цен',

    'features.meta.title': 'Рыночная мета',
    'features.meta.desc': 'Рейтинги доходности, скорость продаж по времени суток, недельные циклы и оптимизация ROI для вашего капитала',

    'features.regions.title': 'Все регионы',
    'features.regions.desc': 'Полная поддержка серверов RU, EU, NA и SEA с региональной статистикой и кросс-региональным сравнением цен',

    // Footer
    'footer.project': 'Комьюнити-проект для игроков STALCRAFT: X',
    'footer.disclaimer': 'Не аффилирован с EXBO Studio. Все игровые ассеты принадлежат их правообладателям.',
  },
} as const;

export function t(lang: Lang, key: keyof typeof translations['en']): string {
  return translations[lang][key] || translations[defaultLang][key] || key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}
