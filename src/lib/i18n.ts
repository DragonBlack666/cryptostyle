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
    title: "A Platform Where the Rules Never Change",
    intro:
      "Crypto Style isn't just another affiliate platform built on promises. It's a decentralized ecosystem on the TON blockchain where every transaction is secured by smart contracts, and only you control your funds.",
    items: [
      { title: "Transparency", desc: "Every transaction is permanently recorded on the blockchain. No hidden terms. No manipulation. Just transparent smart contracts." },
      { title: "Instant payouts", desc: "Rewards are calculated automatically and sent directly to your wallet. No waiting. No manual transfers." },
      { title: "Decentralization", desc: "Smart contracts execute automatically according to predefined rules." },
      { title: "NFT profile", desc: "Your account exists as an NFT on the TON blockchain. It cannot be forged, deleted, or frozen—not even by our team." },
    ],
  },
  nft: {
    eyebrow: "Your digital identity",
    title: "Your NFT Identity on the TON Blockchain",
    intro:
      "Your Crypto Style profile isn't just an account. It's an NFT permanently recorded on the TON blockchain—your digital passport within the ecosystem.",
    points: [
      "Impossible to forge or copy",
      "Cannot be deleted or frozen",
      "No one but you can access your funds",
      "Full control through your TON wallet",
      "Can be inherited or sold",
    ],
    quote:
      "Not even Crypto Style itself can block your account. Only the wallet owner controls access to the funds.",
    caption: "Crypto Style NFT Passport",
  },
  ton: {
    eyebrow: "BUILT ON TON",
    title: "Why TON?",
    intro:
      "TON (The Open Network) is one of the world's fastest-growing blockchains, seamlessly integrated with Telegram. The entire Crypto Style ecosystem is built on it.",
    items: [
      { title: "High speed", desc: "Transactions are confirmed within seconds, and payouts arrive in your wallet almost instantly." },
      { title: "Low fees", desc: "Transaction fees are just a fraction of a cent, allowing you to keep nearly all of your rewards." },
      { title: "Telegram integration", desc: "TON is closely integrated with Telegram, making blockchain services accessible through Mini Apps." },
      { title: "Global network", desc: "A global network that gives users seamless access to digital assets without geographical limitations." },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "From Affiliate Programs to a Complete Ecosystem",
    intro:
      "Crypto Style is an evolving ecosystem that grows step by step, rewarding early participants.",
    stages: [
      { name: "Stage 1", title: "Convenience", desc: "Telegram Mini App with NFT profiles. A seamless experience designed for everyday use—no complicated websites or separate logins." },
      { name: "Stage 2", title: "Stability", desc: "CS Coin backed by real-world assets. A diverse range of affiliate programs. Reduced exposure to market volatility." },
      { name: "Stage 3", title: "Economy", desc: "CS USD with real-world utility. Integrated marketplace. Multiple commerce models. Seamless fiat conversion." },
      { name: "Stage 4", title: "Decentralization", desc: "DAO governance. Listings on major DEXs and CEXs. Staking through Nominator Pools. Dedicated network validators." },
      { name: "Stage 5", title: "Intelligence", desc: "Build personalized marketing strategies with AI that adapt to every user's objectives." },
    ],
  },
  cta: {
    title: "Start Today",
    intro:
      "Crypto Style is built for long-term growth. Every new stage creates more value for early participants.",
    stats: [
      { value: "0", label: "Middlemen", desc: "Direct smart contract payouts from wallet to wallet" },
      { value: "5", label: "Growth stages", desc: "From a Telegram Mini App to a complete decentralized ecosystem" },
      { value: "TON", label: "Built on TON", desc: "Built on one of the world's fastest-growing blockchain networks" },
    ],
    btn1: "Connect TON wallet",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Open in Telegram",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Your Money. Your Rules. Your Future.",
  },
  footer: "© Crypto Style. All rights reserved.",
};

// For all other languages, fall back to English content but with translated nav/hero CTAs where useful.
// To keep this lean, we start with EN as base for de/fr/it/es/pt/uk/kk/pl/hu.
// You can extend these dictionaries per-language over time.
const de: Dict = {
  nav: { features: "Funktionen", nft: "NFT-Profil", ton: "TON", roadmap: "Roadmap" },
  hero: {
    title1: "Crypto Style",
    title2: "Die nächste Generation des Affiliate-Marketings",
    subtitle:
      "Eine dezentrale Affiliate-Plattform mit sofortigen Auszahlungen, NFT-Mitgliedspässen und vollständiger Transparenz durch die TON-Blockchain.",
    cta1: "Wallet verbinden",
    cta2: "Mehr erfahren",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-DE" },
  why: {
    eyebrow: "WARUM CRYPTO STYLE?",
    title: "Eine Plattform, deren Regeln sich niemals ändern",
    intro:
      "Crypto Style ist nicht einfach nur eine weitere Affiliate-Plattform mit leeren Versprechen. Es ist ein dezentrales Ökosystem auf der TON-Blockchain, in dem jede Transaktion durch Smart Contracts abgesichert ist und nur Sie die Kontrolle über Ihr Vermögen haben.",
    items: [
      { title: "Transparenz", desc: "Jede Transaktion wird dauerhaft auf der Blockchain gespeichert. Keine versteckten Bedingungen. Keine Manipulation. Nur transparente Smart Contracts." },
      { title: "Sofortige Auszahlungen", desc: "Belohnungen werden automatisch berechnet und direkt an Ihre Wallet ausgezahlt. Keine Wartezeiten. Keine manuellen Überweisungen." },
      { title: "Dezentralisierung", desc: "Smart Contracts werden automatisch nach festgelegten Regeln ausgeführt." },
      { title: "NFT-Profil", desc: "Ihr Konto existiert als NFT auf der TON-Blockchain. Es kann weder gefälscht, gelöscht noch eingefroren werden – nicht einmal von unserem Team." },
    ],
  },
  nft: {
    eyebrow: "IHRE DIGITALE IDENTITÄT",
    title: "Ihre NFT-Identität auf der TON-Blockchain",
    intro:
      "Ihr Crypto Style-Profil ist mehr als nur ein Konto. Es ist ein dauerhaft auf der TON-Blockchain gespeichertes NFT – Ihr digitaler Ausweis innerhalb des Ökosystems.",
    points: [
      "Unmöglich zu fälschen oder zu kopieren",
      "Kann weder gelöscht noch eingefroren werden",
      "Nur Sie haben Zugriff auf Ihr Vermögen",
      "Volle Kontrolle über Ihre TON-Wallet",
      "Kann vererbt oder verkauft werden",
    ],
    quote:
      "Nicht einmal Crypto Style selbst kann Ihr Konto sperren. Nur der Inhaber der Wallet hat Zugriff auf die Vermögenswerte.",
    caption: "Crypto Style NFT-Pass",
  },
  ton: {
    eyebrow: "AUF TON AUFGEBAUT",
    title: "Warum TON?",
    intro:
      "TON (The Open Network) gehört zu den am schnellsten wachsenden Blockchains der Welt und ist nahtlos in Telegram integriert. Das gesamte Crypto Style-Ökosystem basiert auf TON.",
    items: [
      { title: "Hohe Geschwindigkeit", desc: "Transaktionen werden innerhalb weniger Sekunden bestätigt und Auszahlungen erfolgen nahezu sofort auf Ihre Wallet." },
      { title: "Niedrige Gebühren", desc: "Die Transaktionsgebühren betragen nur einen Bruchteil eines Cents, sodass Sie nahezu Ihre gesamte Belohnung behalten." },
      { title: "Telegram-Integration", desc: "TON ist eng mit Telegram integriert und macht Blockchain-Dienste über Mini Apps leicht zugänglich." },
      { title: "Globales Netzwerk", desc: "Ein globales Netzwerk, das Nutzern weltweit einen nahtlosen Zugang zu digitalen Vermögenswerten ohne geografische Einschränkungen ermöglicht." },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "Von Affiliate-Programmen zu einem vollständigen Ökosystem",
    intro:
      "Crypto Style ist ein sich ständig weiterentwickelndes Ökosystem, das Schritt für Schritt wächst und frühe Teilnehmer belohnt.",
    stages: [
      { name: "PHASE 1", title: "Komfort", desc: "Telegram Mini App mit NFT-Profilen. Ein nahtloses Nutzererlebnis für den Alltag – ohne komplizierte Websites oder zusätzliche Anmeldungen." },
      { name: "PHASE 2", title: "Stabilität", desc: "CS Coin, gedeckt durch reale Vermögenswerte. Vielfältige Affiliate-Programme. Geringere Abhängigkeit von Marktschwankungen." },
      { name: "PHASE 3", title: "Wirtschaft", desc: "CS USD mit echtem Nutzen. Integrierter Marktplatz. Vielfältige Geschäftsmodelle. Nahtlose Fiat-Konvertierung." },
      { name: "PHASE 4", title: "Dezentralisierung", desc: "DAO governance. Listings on major DEXs and CEXs. Staking through Nominator Pools. Dedicated network validators." },
      { name: "PHASE 5", title: "Intelligenz", desc: "KI-gestützte Marketingstrategien, die sich automatisch an die Ziele jedes Nutzers anpassen." },
    ],
  },
  cta: {
    title: "Jetzt starten",
    intro:
      "Crypto Style ist auf langfristiges Wachstum ausgelegt. Jede neue Phase schafft zusätzlichen Mehrwert für frühe Teilnehmer.",
    stats: [
      { value: "0", label: "Vermittler", desc: "Direkte Auszahlungen per Smart Contract – Wallet zu Wallet" },
      { value: "5", label: "Entwicklungsphasen", desc: "Von einer Telegram Mini App zu einem vollständig dezentralen Ökosystem" },
      { value: "TON", label: "Auf TON aufgebaut", desc: "Basiert auf einer der am schnellsten wachsenden Blockchain-Netzwerke der Welt." },
    ],
    btn1: "TON-Wallet verbinden",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "In Telegram öffnen",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Ihr Geld. Ihre Regeln. Ihre Zukunft.",
  },
  footer: en.footer,
};
const fr: Dict = {
  nav: { features: "Fonctionnalités", nft: "Profil NFT", ton: "TON", roadmap: "Feuille de route" },
  hero: {
    title1: "Crypto Style",
    title2: "La plateforme d'affiliation nouvelle génération",
    subtitle:
      "Une plateforme d'affiliation décentralisée avec des paiements instantanés, des passeports NFT et une transparence totale garantie par la blockchain TON.",
    cta1: "Connecter votre portefeuille",
    cta2: "En savoir plus",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-FR" },
  why: {
    eyebrow: "POURQUOI CRYPTO STYLE ?",
    title: "Une plateforme où les règles ne changent jamais",
    intro:
      "Crypto Style n'est pas une simple plateforme d'affiliation fondée sur des promesses. C'est un écosystème décentralisé basé sur la blockchain TON, où chaque transaction est sécurisée par des smart contracts et où vous seul gardez le contrôle de vos fonds.",
    items: [
      { title: "Transparence", desc: "Chaque transaction est enregistrée de manière permanente sur la blockchain. Aucune condition cachée. Aucune manipulation. Des smart contracts entièrement transparents." },
      { title: "Paiements instantanés", desc: "Les récompenses sont calculées automatiquement et versées directement sur votre portefeuille. Aucun délai. Aucun transfert manuel." },
      { title: "Décentralisation", desc: "Les smart contracts s'exécutent automatiquement selon des règles prédéfinies." },
      { title: "Profil NFT", desc: "Votre compte existe sous forme de NFT sur la blockchain TON. Il ne peut être ni falsifié, ni supprimé, ni gelé, pas même par notre équipe." },
    ],
  },
  nft: {
    eyebrow: "VOTRE IDENTITÉ NUMÉRIQUE",
    title: "Votre identité NFT sur la blockchain TON",
    intro:
      "Votre profil Crypto Style est bien plus qu'un simple compte. Il s'agit d'un NFT enregistré de façon permanente sur la blockchain TON : votre passeport numérique au sein de l'écosystème.",
    points: [
      "Impossible à falsifier ou à copier",
      "Ne peut être ni supprimé ni gelé",
      "Vous seul avez accès à vos fonds",
      "Contrôle total via votre portefeuille TON",
      "Peut être transmis par héritage ou vendu",
    ],
    quote:
      "Même Crypto Style ne peut pas bloquer votre compte. Seul le propriétaire du portefeuille contrôle l'accès aux fonds.",
    caption: "Passeport NFT Crypto Style",
  },
  ton: {
    eyebrow: "PROPULSÉ PAR TON",
    title: "Pourquoi TON ?",
    intro:
      "TON (The Open Network) est l'une des blockchains à la croissance la plus rapide au monde, parfaitement intégrée à Telegram. Tout l'écosystème Crypto Style repose sur TON.",
    items: [
      { title: "Haute vitesse", desc: "Les transactions sont confirmées en quelques secondes et les paiements arrivent presque instantanément sur votre portefeuille." },
      { title: "Frais réduits", desc: "Les frais de transaction ne représentent qu'une fraction de centime, ce qui vous permet de conserver presque l'intégralité de vos récompenses." },
      { title: "Intégration à Telegram", desc: "TON est étroitement intégré à Telegram, rendant les services blockchain facilement accessibles via les Mini Apps." },
      { title: "Réseau mondial", desc: "Un réseau mondial offrant aux utilisateurs un accès fluide aux actifs numériques, sans aucune restriction géographique." },
    ],
  },
  roadmap: {
    eyebrow: "FEUILLE DE ROUTE",
    title: "Des programmes d'affiliation à un écosystème complet",
    intro:
      "Crypto Style est un écosystème en constante évolution, qui se développe étape par étape et récompense les premiers participants.",
    stages: [
      { name: "ÉTAPE 1", title: "Simplicité", desc: "Mini App Telegram. Profils NFT. Domaine .TON. Un service conçu pour un usage quotidien, sans sites complexes ni connexions multiples." },
      { name: "ÉTAPE 2", title: "Stabilité", desc: "Notre CS Coin, adossé à des actifs réels. Une large gamme de programmes d'affiliation. Une exposition réduite à la volatilité des marchés." },
      { name: "ÉTAPE 3", title: "Économie", desc: "CS USD avec une véritable utilité. Marketplace intégré. Modèles de commerce. Conversion partielle en monnaie fiduciaire." },
      { name: "ÉTAPE 4", title: "Décentralisation", desc: "Gouvernance DAO. Cotation sur les principales plateformes DEX et CEX. Staking via les Nominator Pools. Propres validateurs du réseau." },
      { name: "ÉTAPE 5", title: "Intelligence", desc: "Une plateforme permettant de créer des stratégies marketing personnalisées. Une IA qui adapte votre activité aux objectifs de chaque utilisateur." },
    ],
  },
  cta: {
    title: "Commencez dès aujourd'hui",
    intro:
      "Crypto Style est conçu pour une croissance à long terme. Chaque nouvelle étape crée davantage de valeur pour les premiers participants.",
    stats: [
      { value: "0", label: "intermédiaire", desc: "Paiements directs par smart contract, de portefeuille à portefeuille." },
      { value: "5", label: "étapes de développement", desc: "D'une Mini App Telegram à un écosystème entièrement décentralisé." },
      { value: "TON", label: "Construit sur TON", desc: "Basé sur l'un des réseaux blockchain connaissant la croissance la plus rapide au monde." },
    ],
    btn1: "Connecter votre portefeuille TON",
    btn1Link: en.cta.btn1Link,
    btn2: "Ouvrir dans Telegram",
    btn2Link: en.cta.btn2Link,
    tagline: "Votre argent. Vos règles. Votre avenir.",
  },
  footer: "© Crypto Style. Tous droits réservés.",
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
