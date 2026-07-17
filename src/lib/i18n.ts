import { createContext, useContext } from "react";

export const LANGUAGES = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "kk", label: "Қазақша", flag: "🇰🇿" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

export type Dict = {
  nav: { features: string; nft: string; ton: string; roadmap: string };
  hero: { title1: string; title2: string; subtitle: string; cta1: string; cta2: string; cta1Link: string };
  social: { youtube: string; twitter: string; telegram: string };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  nft: {
    eyebrow: string;
    title: string;
    intro: string;
    points: string[];
    quote: string;
    caption: string;
  };
  ton: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  roadmap: {
    eyebrow: string;
    title: string;
    intro: string;
    stages: { name: string; title: string; desc: string }[];
  };
  cta: {
    title: string;
    intro: string;
    stats: { value: string; label: string; desc: string }[];
    btn1: string;
    btn1Link: string;
    btn2: string;
    btn2Link: string;
    tagline: string;
  };
  footer: string;
};

const ru: Dict = {
  nav: { features: "Возможности", nft: "NFT-профиль", ton: "TON", roadmap: "Дорожная карта" },
  hero: {
    title1: "Crypto Style",
    title2: "Платформа нового поколения",
    subtitle:
      "Партнёрские программы без админов и посредников. Мгновенные выплаты прямо на ваш кошелёк, NFT-паспорта участников и 100% прозрачность на блокчейне TON.",
    cta1: "Подключить кошелёк",
    cta2: "Узнать больше",
    cta1Link: "https://cryptostylematrix.github.io/frontend/",
  },
  social: {
    youtube: "https://www.youtube.com/@CryptoStyleOfficial",
    twitter: "https://x.com/CryptoStyleTON",
    telegram: "https://t.me/CryptoStyleMatrix",
  },
  why: {
    eyebrow: "Почему Crypto Style?",
    title: "Платформа, где правила нельзя изменить",
    intro:
      "Crypto Style — это не очередной сетевой проект с обещаниями. Это инфраструктура на блокчейне TON, где каждая транзакция зафиксирована смарт-контрактом, а доступ к средствам есть только у вас.",
    items: [
      { title: "Прозрачность", desc: "Все транзакции записаны в блокчейн. Никакого мошенничества, никаких скрытых условий — только открытый код смарт-контракта." },
      { title: "Мгновенные выплаты", desc: "Вознаграждения начисляются автоматически и сразу приходят на ваш кошелёк. Без ожиданий, без ручных переводов." },
      { title: "Децентрализация", desc: "Нет администраторов, которые могут задержать выплаты. Смарт-контракт работает по заданным правилам всегда." },
      { title: "NFT-профиль", desc: "Ваш аккаунт — это NFT на блокчейне TON. Его невозможно подделать, удалить или заморозить даже администраторам." },
    ],
  },
  nft: {
    eyebrow: "Ваша цифровая личность",
    title: "NFT-профиль на блокчейне TON",
    intro:
      "Ваш профиль в системе Crypto Style — это не просто аккаунт. Это NFT, навсегда записанный в блокчейн TON. Это ваш цифровой паспорт в экосистеме.",
    points: [
      "Невозможно подделать или скопировать",
      "Нельзя удалить или заморозить",
      "Администраторы не имеют доступа к вашим средствам",
      "Полный контроль только через ваш кошелёк",
      "Передаётся по наследству или может быть продан",
    ],
    quote:
      "Даже сам Crypto Style не может заблокировать ваш аккаунт. Доступ к средствам есть только у владельца кошелька.",
    caption: "NFT-карта Crypto Style",
  },
  ton: {
    eyebrow: "Расчёты в криптовалюте",
    title: "Почему TON?",
    intro:
      "TON (The Open Network) — один из самых быстрорастущих блокчейнов в мире, интегрированный с Telegram. Именно на нём построена вся инфраструктура Crypto Style.",
    items: [
      { title: "Высокая скорость", desc: "Транзакции обрабатываются за секунды. Выплаты поступают на кошелёк практически мгновенно." },
      { title: "Низкие комиссии", desc: "Комиссия в сети TON — доли цента. Вы получаете почти всё вознаграждение без потерь." },
      { title: "Интеграция с Telegram", desc: "TON — нативный блокчейн Telegram. Миллиарды пользователей уже имеют доступ к кошельку и Mini Apps." },
      { title: "Глобальная сеть", desc: "Объединяет пользователей по всему миру и обеспечивает удобную работу с цифровыми активами без географических ограничений." },
    ],
  },
  roadmap: {
    eyebrow: "Дорожная карта",
    title: "От партнёрских программ к инфраструктуре",
    intro:
      "Crypto Style — это живая экосистема, которая развивается поэтапно, давая преимущества тем, кто присоединился раньше.",
    stages: [
      { name: "Этап 1", title: "Удобство", desc: "Mini App в Telegram. NFT-профили. Сервис для ежедневного использования без сложных сайтов и логинов." },
      { name: "Этап 2", title: "Стабильность", desc: "Властная монета CS USD на реальном обеспечении. Разнообразие партнёрских программ. Снижение зависимости от волатильности." },
      { name: "Этап 3", title: "Экономика", desc: "CS USD с реальным применением. Маркетплейс. Товарные модели. Частичная конвертация в фиат." },
      { name: "Этап 4", title: "Децентрализация", desc: "DAO — управление сообществом. Выход Coin на DEX и CEX. Стейкинг через Nominator Pool. Собственные валидаторы." },
      { name: "Этап 5", title: "Интеллект", desc: "Платформа для создания собственных маркетингов. AI-модель, которая строит бизнес под цели каждого пользователя." },
    ],
  },
  cta: {
    title: "Начните прямо сейчас",
    intro:
      "Crypto Style — это не история «зайти и выйти». Это система, которая усиливается со временем. Каждый этап развития даёт преимущества тем, кто был внутри раньше.",
    stats: [
      { value: "0", label: "Посредников", desc: "Прямые выплаты смарт-контрактом кошелёк → кошелёк" },
      { value: "5", label: "Этапов развития", desc: "От Mini App в Telegram до децентрализованной инфраструктуры" },
      { value: "TON", label: "Блокчейн-основа", desc: "Построен на одном из самых быстрых блокчейнов в мире" },
    ],
    btn1: "Подключить TON кошелёк",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Открыть в Telegram",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Ваши деньги. Ваши правила. Ваш блокчейн.",
  },
  footer: "© Crypto Style. Все права защищены.",
};

const en: Dict = {
  nav: { features: "Features", nft: "NFT profile", ton: "TON", roadmap: "Roadmap" },
  hero: {
    title1: "Crypto Style",
    title2: "The Next-Generation Affiliate Platform",
    subtitle:
      "A decentralized affiliate platform with instant payouts, NFT membership passports, and complete transparency secured by the TON blockchain.",
    cta1: "Connect wallet",
    cta2: "Learn more",
    cta1Link: "https://cryptostylematrix.github.io/frontend/",
  },
  social: {
    youtube: "https://www.youtube.com/@CryptoStyleOfficial-EN",
    twitter: "https://x.com/CryptoStyleTON",
    telegram: "https://t.me/CryptoStyleMatrix",
  },
  why: {
    eyebrow: "Why Crypto Style?",
    title: "A platform where the rules can't be changed",
    intro:
      "Crypto Style is not another network project with promises. It's an infrastructure on the TON blockchain where every transaction is locked in a smart contract and only you have access to your funds.",
    items: [
      { title: "Transparency", desc: "Every transaction is recorded on chain. No fraud, no hidden terms — only open smart-contract code." },
      { title: "Instant payouts", desc: "Rewards are calculated automatically and land in your wallet right away. No waiting, no manual transfers." },
      { title: "Decentralization", desc: "No administrators who can delay payouts or change the rules. The smart contract runs by its logic, always." },
      { title: "NFT profile", desc: "Your account is an NFT on the TON blockchain. It can't be faked, deleted or frozen — not even by the team." },
    ],
  },
  nft: {
    eyebrow: "Your digital identity",
    title: "An NFT profile on the TON blockchain",
    intro:
      "Your Crypto Style profile isn't just an account. It's an NFT written to the TON blockchain forever — your digital passport inside the ecosystem.",
    points: [
      "Impossible to forge or copy",
      "Cannot be deleted or frozen",
      "Admins have no access to your funds",
      "Full control only through your wallet",
      "Can be inherited or sold",
    ],
    quote:
      "Not even Crypto Style itself can block your account. Access to funds belongs only to the wallet owner.",
    caption: "Crypto Style NFT card",
  },
  ton: {
    eyebrow: "Crypto settlements",
    title: "Why TON?",
    intro:
      "TON (The Open Network) is one of the fastest-growing blockchains in the world, integrated with Telegram. The entire Crypto Style infrastructure is built on it.",
    items: [
      { title: "High speed", desc: "TON transactions settle in seconds. Payouts arrive in your wallet almost instantly." },
      { title: "Low fees", desc: "Network fees are a fraction of a cent. You keep almost the full reward." },
      { title: "Telegram integration", desc: "TON is Telegram's native blockchain. Billions of users already have a wallet and Mini Apps in-app." },
      { title: "Global network", desc: "Connects users worldwide and ensures convenient work with digital assets without geographical restrictions." },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "From affiliate programs to infrastructure",
    intro:
      "Crypto Style is a living ecosystem that grows in stages, rewarding those who joined earlier.",
    stages: [
      { name: "Stage 1", title: "Convenience", desc: "Telegram Mini App. NFT profiles. A daily-use service with no complex sites or logins." },
      { name: "Stage 2", title: "Stability", desc: "Our own CS USD backed by real assets. A variety of affiliate programs. Lower dependency on volatility." },
      { name: "Stage 3", title: "Economy", desc: "CS USD with real utility. Marketplace. Commerce models. Partial fiat conversion." },
      { name: "Stage 4", title: "Decentralization", desc: "DAO governance. Coin listing on DEX and CEX. Staking via Nominator Pool. Our own validators." },
      { name: "Stage 5", title: "Intelligence", desc: "A platform to design your own marketing flows. An AI model that shapes a business around each user's goals." },
    ],
  },
  cta: {
    title: "Start right now",
    intro:
      "Crypto Style isn't a get-in-get-out story. It's a system that compounds with time. Every stage rewards those who were already inside.",
    stats: [
      { value: "0", label: "Middlemen", desc: "Direct smart-contract payouts, wallet → wallet" },
      { value: "5", label: "Growth stages", desc: "From a Telegram Mini App to full decentralized infrastructure" },
      { value: "TON", label: "Blockchain base", desc: "Built on one of the fastest blockchains in the world" },
    ],
    btn1: "Connect TON wallet",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Open in Telegram",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Your money. Your rules. Your blockchain.",
  },
  footer: "© Crypto Style. All rights reserved.",
};

// For all other languages, fall back to English content but with translated nav/hero CTAs where useful.
// To keep this lean, we start with EN as base for de/fr/it/es/pt/uk/kk/pl/hu.
// You can extend these dictionaries per-language over time.
const de: Dict = {
  ...en,
  nav: { features: "Funktionen", nft: "NFT-Profil", ton: "TON", roadmap: "Roadmap" },
  hero: { ...en.hero, title2: "Die Plattform der nächsten Generation", cta1: "Wallet verbinden", cta2: "Mehr erfahren" },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-DE" },
};
const fr: Dict = {
  ...en,
  nav: { features: "Fonctionnalités", nft: "Profil NFT", ton: "TON", roadmap: "Feuille de route" },
  hero: { ...en.hero, title2: "La plateforme de nouvelle génération", cta1: "Connecter le portefeuille", cta2: "En savoir plus" },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-FR" },
};
const it: Dict = {
  ...en,
  nav: { features: "Funzionalità", nft: "Profilo NFT", ton: "TON", roadmap: "Roadmap" },
  hero: { ...en.hero, title2: "La piattaforma di nuova generazione", cta1: "Collega il wallet", cta2: "Scopri di più" },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-IT" },
};
const es: Dict = {
  ...en,
  nav: { features: "Funciones", nft: "Perfil NFT", ton: "TON", roadmap: "Hoja de ruta" },
  hero: { ...en.hero, title2: "La plataforma de nueva generación", cta1: "Conectar wallet", cta2: "Saber más" },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-ES" },
};
const pt: Dict = {
  ...en,
  nav: { features: "Funcionalidades", nft: "Perfil NFT", ton: "TON", roadmap: "Roteiro" },
  hero: { ...en.hero, title2: "A plataforma da nova geração", cta1: "Conectar carteira", cta2: "Saiba mais" },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-PT" },
};
const uk: Dict = {
  nav: { features: "Можливості", nft: "NFT-профіль", ton: "TON", roadmap: "Дорожня карта" },
  hero: {
    title1: "Crypto Style",
    title2: "Платформа нового покоління",
    subtitle:
      "Партнерські програми без адміністраторів і посередників. Миттєві виплати прямо на ваш гаманець, NFT-паспорти учасників і 100% прозорість у блокчейні TON.",
    cta1: "Підключити гаманець",
    cta2: "Дізнатися більше",
    cta1Link: ru.hero.cta1Link,
  },
  social: { ...ru.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-UA" },
  why: {
    eyebrow: "Чому Crypto Style?",
    title: "Платформа, де правила не можна змінити",
    intro:
      "Crypto Style — це не черговий мережевий проєкт з обіцянками. Це інфраструктура на блокчейні TON, де кожна транзакція зафіксована смартконтрактом, а доступ до коштів маєте лише ви.",
    items: [
      { title: "Прозорість", desc: "Усі транзакції записані в блокчейн. Жодного шахрайства, жодних прихованих умов — лише відкритий код смартконтракту." },
      { title: "Миттєві виплати", desc: "Винагороди нараховуються автоматично й одразу надходять на ваш гаманець. Без очікування, без ручних переказів." },
      { title: "Децентралізація", desc: "Немає адміністраторів, які можуть затримати виплати. Смартконтракт працює за заданими правилами завжди." },
      { title: "NFT-профіль", desc: "Ваш акаунт — це NFT на блокчейні TON. Його неможливо підробити, видалити чи заморозити навіть адміністраторам." },
    ],
  },
  nft: {
    eyebrow: "Ваша цифрова особистість",
    title: "NFT-профіль на блокчейні TON",
    intro:
      "Ваш профіль у системі Crypto Style — це не просто акаунт. Це NFT, назавжди записаний у блокчейн TON. Це ваш цифровий паспорт в екосистемі.",
    points: [
      "Неможливо підробити або скопіювати",
      "Не можна видалити чи заморозити",
      "Адміністратори не мають доступу до ваших коштів",
      "Повний контроль лише через ваш гаманець",
      "Передається у спадок або може бути проданий",
    ],
    quote:
      "Навіть сам Crypto Style не може заблокувати ваш акаунт. Доступ до коштів має лише власник гаманця.",
    caption: "NFT-картка Crypto Style",
  },
  ton: {
    eyebrow: "Розрахунки в криптовалюті",
    title: "Чому TON?",
    intro:
      "TON (The Open Network) — один із найшвидше зростаючих блокчейнів у світі, інтегрований із Telegram. Саме на ньому побудована вся інфраструктура Crypto Style.",
    items: [
      { title: "Висока швидкість", desc: "Транзакції обробляються за секунди. Виплати надходять на гаманець практично миттєво." },
      { title: "Низькі комісії", desc: "Комісія в мережі TON — частки цента. Ви отримуєте майже всю винагороду без втрат." },
      { title: "Інтеграція з Telegram", desc: "TON — нативний блокчейн Telegram. Мільярди користувачів уже мають доступ до гаманця та Mini Apps." },
      { title: "Глобальна мережа", desc: "Об'єднує користувачів по всьому світу та забезпечує зручну роботу з цифровими активами без географічних обмежень." },
    ],
  },
  roadmap: {
    eyebrow: "Дорожня карта",
    title: "Від партнерських програм до інфраструктури",
    intro:
      "Crypto Style — це жива екосистема, яка розвивається поетапно, даючи переваги тим, хто приєднався раніше.",
    stages: [
      { name: "Етап 1", title: "Зручність", desc: "Mini App у Telegram. NFT-профілі. Сервіс для щоденного використання без складних сайтів і логінів." },
      { name: "Етап 2", title: "Стабільність", desc: "Власна монета CS USD із реальним забезпеченням. Різноманіття партнерських програм. Зниження залежності від волатильності." },
      { name: "Етап 3", title: "Економіка", desc: "CS USD із реальним застосуванням. Маркетплейс. Товарні моделі. Частічна конвертація у фіат." },
      { name: "Етап 4", title: "Децентралізація", desc: "DAO — управління спільнотою. Вихід Coin на DEX і CEX. Стейкінг через Nominator Pool. Власні валідатори." },
      { name: "Етап 5", title: "Інтелект", desc: "Платформа для створення власних маркетингів. AI-модель, яка будує бізнес під цілі кожного користувача." },
    ],
  },
  cta: {
    title: "Розпочніть просто зараз",
    intro:
      "Crypto Style — це не історія «зайти й вийти». Це система, яка посилюється з часом. Кожен етап розвитку дає переваги тим, хто був усередині раніше.",
    stats: [
      { value: "0", label: "Посередників", desc: "Прямі виплати смартконтрактом гаманець → гаманець" },
      { value: "5", label: "Етапів розвитку", desc: "Від Mini App у Telegram до децентралізованої інфраструктури" },
      { value: "TON", label: "Блокчейн-основа", desc: "Побудований на одному з найшвидших блокчейнів у світі" },
    ],
    btn1: "Підключити TON гаманець",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Відкрити в Telegram",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Ваші гроші. Ваші правила. Ваш блокчейн.",
  },
  footer: "© Crypto Style. Усі права захищені.",
};
const kk: Dict = {
  ...ru,
  nav: { features: "Мүмкіндіктер", nft: "NFT-профиль", ton: "TON", roadmap: "Жол картасы" },
  hero: { ...ru.hero, title2: "Жаңа буын платформасы", cta1: "Әмиянды қосу", cta2: "Толығырақ" },
  social: { ...ru.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-KK" },
};
const pl: Dict = {
  ...en,
  nav: { features: "Funkcje", nft: "Profil NFT", ton: "TON", roadmap: "Plan działania" },
  hero: { ...en.hero, title2: "Platforma nowej generacji", cta1: "Połącz portfel", cta2: "Dowiedz się więcej" },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-PL" },
};
const hu: Dict = {
  ...en,
  nav: { features: "Funkciók", nft: "NFT profil", ton: "TON", roadmap: "Ütemterv" },
  hero: { ...en.hero, title2: "Az új generációs platform", cta1: "Tárca csatlakoztatása", cta2: "Tudj meg többet" },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-HU" },
};

export const DICTS: Record<LangCode, Dict> = {
  ru, en, de, fr, it, es, pt, uk, kk, pl, hu,
};

export const I18nContext = createContext<{ lang: LangCode; setLang: (l: LangCode) => void; t: Dict }>({
  lang: "ru",
  setLang: () => {},
  t: ru,
});

export const useI18n = () => useContext(I18nContext);
