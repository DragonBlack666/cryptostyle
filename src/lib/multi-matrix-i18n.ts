import type { LangCode } from "@/lib/i18n";

/* Seat line template kinds — combined with amount/count at render time. */
export type SeatTmpl = {
  wallet: (amount: string) => string;
  accum: (amount: string) => string;
  curator: (amount: string) => string;
  grow: (amount: string) => string;
  clonesP1: (n: number) => string;
  clonesP2: (n: number) => string;
  reinvest: string;
};

export type PlatformStrings = {
  title: string;
  incomeSummary: string;
  incomeNote: string[];
  transitionText?: string;
  transitionTo?: string;
};

export type MMDict = {
  docTitle: string;
  back: string;
  nav: {
    intro: string;
    income: string;
    platforms: string;
    summary: string;
    extras: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title2: string;
    subtitle: string;
    stats: { platforms: string; minEntry: string; directIncome: string; newClones: string };
    videoHint: string;
    videoTitle?: string;
  };
  income: {
    eyebrow: string;
    title: string;
    intro: string;
    types: { title: string; text: string }[];
  };
  platforms: {
    eyebrow: string;
    title: string;
    intro: string;
    of: (i: number, total: number) => string; // "Площадка i из total"
    costLabel: string;
    incomeLabel: string;
    distribution: string;
    transitionLabel: string; // "Переход"
    reinvestBadge: string; // "Реинвест · 1 200 TON"
    reinvestText: string;
    you: string;
  };
  seat: SeatTmpl;
  platformStrings: PlatformStrings[]; // length 6
  summary: {
    eyebrow: string;
    title: string;
    intro: string;
    cols: { platform: string; income: string; clones: string; ref: string };
    refShort: string;
    total: string;
    rows: { platform: string; clones: string; ref: string }[]; // length 6, income shared with platformStrings
    incomeValues: string[]; // per row
    finalNoteHtml: string; // HTML string with <b> tags
  };
  extras: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    registerBtn: string;
    backBtn: string;
  };
};

/* ---------- Russian (source) ---------- */

const ruClonesP1 = (n: number) =>
  `${n} ${n < 5 ? "клона" : "клонов"} по 15 TON в 1-ю площадку`;
const ruClonesP2 = (n: number) => `${n} клона по 45 TON во 2-ю площадку`;

const ru: MMDict = {
  docTitle: "MULTI Matrix — Партнёрская программа · Crypto Style",
  back: "Все программы",
  nav: {
    intro: "О программе",
    income: "4 вида дохода",
    platforms: "Площадки",
    summary: "Сводка",
    extras: "Управление",
    cta: "Старт",
  },
  hero: {
    eyebrow: "Партнёрская программа",
    title2: "Инновационная бизнес-система для предпринимателей",
    subtitle:
      "MULTI Matrix — бизнес-система, разработанная для масштабирования вашего дела и увеличения дохода. Уникальная матричная модель с автоматической дубликацией бизнес-мест и управлением структурой.",
    stats: { platforms: "Площадок", minEntry: "Мин. вход", directIncome: "Прямой доход", newClones: "Новых клонов" },
    videoHint: "Видео не открывается? Выберите другой источник:",
    videoTitle: "Видео презентация MULTI Matrix",
  },
  income: {
    eyebrow: "Четыре вида дохода",
    title: "Многоканальная система прибыли",
    intro:
      "MULTI Matrix предлагает четыре канала получения дохода — для максимальной финансовой отдачи от одного основного бизнес-места.",
    types: [
      { title: "Основной доход по маркетингу", text: "При закрытии определённых мест в ваших бизнес-площадках вы получаете денежные суммы согласно маркетинг-плану." },
      { title: "Дубликация дохода", text: "Система создаёт дополнительные бизнес-места (клоны) со своими площадками — они тоже закрываются и приносят доход по маркетингу так же, как основное место." },
      { title: "Реферальный бонус", text: "Дополнительные денежные вознаграждения за закрытие площадок ваших приглашённых партнёров." },
      { title: "Дубликация реферального бонуса", text: "У ваших партнёров также создаются дополнительные бизнес-места. Маркетинг предусматривает реферальный бонус и за клонов ваших партнёров." },
    ],
  },
  platforms: {
    eyebrow: "6 бизнес-площадок",
    title: "Семиместная бинарная матрица",
    intro:
      "В основе системы — семиместная бинарная неделящаяся матрица. Верхушка — вы, первая линия (2 места) — партнёры, вторая линия (4 места) — источник дохода. Полное закрытие второй линии автоматически открывает следующую площадку.",
    of: (i, total) => `Площадка ${i} из ${total}`,
    costLabel: "Стоимость места",
    incomeLabel: "Доход",
    distribution: "Распределение",
    transitionLabel: "Переход",
    reinvestBadge: "Реинвест · 1 200 TON",
    reinvestText:
      "Финальная площадка обеспечивает постоянный цикличный доход: закрытие первого места автоматически создаёт нового клона в этой же площадке.",
    you: "Вы",
  },
  seat: {
    wallet: (a) => `${a} на кошелёк`,
    accum: (a) => `${a} накопление`,
    curator: (a) => `${a} куратору`,
    grow: (a) => `${a} на развитие`,
    clonesP1: ruClonesP1,
    clonesP2: ruClonesP2,
    reinvest: "РЕИНВЕСТ 1 200 TON — новый клон в этой же площадке",
  },
  platformStrings: [
    {
      title: "Площадка 1 · Начало пути",
      incomeSummary: "15 TON",
      incomeNote: [
        "Закрытие одного из четырёх нижних мест приносит вам 15 TON напрямую на кошелёк.",
        "Полное закрытие оставшихся трёх мест второй линии суммарно приносит 45 TON.",
      ],
      transitionText: "45 TON автоматически направляются на открытие вашей второй бизнес-площадки.",
      transitionTo: "Площадка 2",
    },
    {
      title: "Площадка 2 · Расширение возможностей",
      incomeSummary: "20 TON + 4 клона",
      incomeNote: [
        "Закрытие 1-го и 3-го места приносит вам по 10 TON сразу на кошелёк.",
        "Закрытие 2-го и 4-го места создаёт 2 клона по 15 TON, которые встают в первую матрицу.",
      ],
      transitionText:
        "Полное закрытие второй линии аккумулирует 100 TON, которые автоматически направляются на активацию третьей бизнес-площадки.",
      transitionTo: "Площадка 3",
    },
    {
      title: "Площадка 3 · Ускорение роста",
      incomeSummary: "50 TON + 6 клонов",
      incomeNote: [
        "Закрытие 1-го и 3-го места приносит 25 TON на кошелёк и 10 TON вашему куратору.",
        "Закрытие 2-го и 4-го места создаёт 3 клона по 15 TON для первой матрицы.",
      ],
      transitionText:
        "При полном закрытии мест второй линии, 240 TON автоматически накапливаются для открытия четвёртой бизнес-площадки.",
      transitionTo: "Площадка 4",
    },
    {
      title: "Площадка 4 · Масштабирование дохода",
      incomeSummary: "200 TON + 12 клонов",
      incomeNote: [
        "Закрытие 1-го и 3-го места приносит 100 TON на кошелёк и 20 TON вашему куратору.",
        "Закрытие 2-го и 4-го места генерирует 6 клонов по 15 TON для первой матрицы, а 20 TON направляются на развитие системы.",
      ],
      transitionText:
        "При полном закрытии мест второй линии, 500 TON автоматически накапливаются для открытия пятой бизнес-площадки.",
      transitionTo: "Площадка 5",
    },
    {
      title: "Площадка 5 · Прорыв к большому доходу",
      incomeSummary: "400 TON + 16 клонов",
      incomeNote: [
        "Закрытие 1-го и 3-го места приносит 200 TON на кошелёк и 40 TON вашему куратору.",
        "Закрытие 2-го и 4-го места создаёт 8 клонов по 15 TON для первой матрицы, а 40 TON идёт на развитие системы.",
      ],
      transitionText:
        "При полном закрытии мест второй линии, 1 200 TON автоматически накапливаются для открытия финальной шестой бизнес-площадки.",
      transitionTo: "Площадка 6",
    },
    {
      title: "Площадка 6 · Финальная цель и Реинвест",
      incomeSummary: "2 760 TON + 12 клонов",
      incomeNote: [
        "Закрытие первого места запускает РЕИНВЕСТ 1 200 TON — новый логин (клон) автоматически занимает свободное место в этой же площадке.",
        "За каждое из трёх оставшихся мест: 920 TON на кошелёк, 4 клона по 45 TON во 2-ю площадку, 50 TON куратору и 50 TON на развитие.",
      ],
    },
  ],
  summary: {
    eyebrow: "Общая сводка",
    title: "Доходы с одного бизнес-места",
    intro:
      "Потенциал заработка и развития структуры с одного основного бизнес-места при прохождении всех шести площадок.",
    cols: { platform: "Площадка", income: "Доход", clones: "Клоны", ref: "Реферальные" },
    refShort: "Реф.",
    total: "Итого",
    rows: [
      { platform: "Площадка 1", clones: "—", ref: "—" },
      { platform: "Площадка 2", clones: "4", ref: "—" },
      { platform: "Площадка 3", clones: "6", ref: "20 TON" },
      { platform: "Площадка 4", clones: "12", ref: "40 TON" },
      { platform: "Площадка 5", clones: "16", ref: "80 TON" },
      { platform: "Площадка 6", clones: "12 → 2 пл.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> прямого дохода, <b class="text-gold">50</b> новых «клонов» для усиления структуры и <b class="text-gold">290 TON</b> реферальных бонусов — это ваш результат с одного основного бизнес-места, не считая постоянного реинвеста на шестой площадке и клонов.',
  },
  extras: {
    eyebrow: "Уникальные «фишки»",
    title: "Особенности маркетинга MULTI Matrix",
    items: [
      { title: "Гибкие возможности расширения", text: "Возможность приобретения дополнительных бизнес-мест по вашему усмотрению на любой площадке." },
      { title: "Функция «Следующее место»", text: "Автоматически подбирает оптимальную позицию для быстрого роста вашей структуры." },
      { title: "Реинвест на 6-й площадке", text: "Постоянный цикличный доход: при закрытии первого места автоматически создаётся новый клон в этой же площадке." },
      { title: "Управление клонами", text: "Направляйте клонов к нужным партнёрам и ускоряйте закрытие приоритетных бизнес-площадок." },
      { title: "Автоматические переходы", text: "Накопления с каждой площадки автоматически открывают следующую — без ручных действий." },
    ],
  },
  cta: {
    eyebrow: "Присоединяйтесь",
    title: "Начните с MULTI Matrix",
    subtitle:
      "Шесть площадок, автоматические переходы, клоны, реинвест и прогнозируемый рост — всё в одной бизнес-системе на TON.",
    registerBtn: "Регистрация в MULTI Matrix",
    backBtn: "Все программы",
  },
};

/* ---------- English ---------- */

const en: MMDict = {
  docTitle: "MULTI Matrix — Partner Program · Crypto Style",
  back: "All partner programs",
  nav: {
    intro: "About",
    income: "4 income streams",
    platforms: "Platforms",
    summary: "Summary",
    extras: "Management",
    cta: "Start",
  },
  hero: {
    eyebrow: "Partner program",
    title2: "An innovative business system for entrepreneurs",
    subtitle:
      "MULTI Matrix is a business system designed to scale your enterprise and grow your income. A unique matrix model with automatic duplication of business seats and structure management.",
    stats: { platforms: "Platforms", minEntry: "Min. entry", directIncome: "Direct income", newClones: "New clones" },
    videoHint: "Video not loading? Choose another source:",
  },
  income: {
    eyebrow: "Four income streams",
    title: "A multi-channel profit system",
    intro:
      "MULTI Matrix offers four income channels to maximise the financial return from a single main business seat.",
    types: [
      { title: "Main marketing income", text: "When specific seats in your business platforms close, you receive payouts according to the marketing plan." },
      { title: "Income duplication", text: "The system creates additional business seats (clones) with their own platforms — they also close and generate marketing income just like the main seat." },
      { title: "Referral bonus", text: "Additional cash rewards for the closing of platforms of the partners you invite." },
      { title: "Referral bonus duplication", text: "Your partners also generate additional business seats. The marketing plan pays a referral bonus for your partners' clones as well." },
    ],
  },
  platforms: {
    eyebrow: "6 business platforms",
    title: "Seven-seat binary matrix",
    intro:
      "The system is built on a seven-seat, non-splitting binary matrix. The top is you, the first line (2 seats) is your partners, and the second line (4 seats) is your source of income. Full closure of the second line automatically opens the next platform.",
    of: (i, total) => `Platform ${i} of ${total}`,
    costLabel: "Seat cost",
    incomeLabel: "Income",
    distribution: "Distribution",
    transitionLabel: "Transition",
    reinvestBadge: "Reinvest · 1 200 TON",
    reinvestText:
      "The final platform delivers a steady, cyclical income: closing the first seat automatically creates a new clone on the same platform.",
    you: "You",
  },
  seat: {
    wallet: (a) => `${a} to wallet`,
    accum: (a) => `${a} accumulation`,
    curator: (a) => `${a} to curator`,
    grow: (a) => `${a} for development`,
    clonesP1: (n) => `${n} clones of 15 TON to platform 1`,
    clonesP2: (n) => `${n} clones of 45 TON to platform 2`,
    reinvest: "REINVEST 1 200 TON — a new clone on the same platform",
  },
  platformStrings: [
    {
      title: "Platform 1 · The start of the journey",
      incomeSummary: "15 TON",
      incomeNote: [
        "Closing any one of the four bottom seats brings 15 TON straight to your wallet.",
        "Full closure of the remaining three seats on the second line brings 45 TON in total.",
      ],
      transitionText: "45 TON is automatically directed to open your second business platform.",
      transitionTo: "Platform 2",
    },
    {
      title: "Platform 2 · Expanding opportunities",
      incomeSummary: "20 TON + 4 clones",
      incomeNote: [
        "Closing the 1st and 3rd seats brings 10 TON each straight to your wallet.",
        "Closing the 2nd and 4th seats creates 2 clones of 15 TON that enter the first matrix.",
      ],
      transitionText:
        "Full closure of the second line accumulates 100 TON, which is automatically directed to activate the third business platform.",
      transitionTo: "Platform 3",
    },
    {
      title: "Platform 3 · Accelerating growth",
      incomeSummary: "50 TON + 6 clones",
      incomeNote: [
        "Closing the 1st and 3rd seats pays 25 TON to your wallet and 10 TON to your curator.",
        "Closing the 2nd and 4th seats creates 3 clones of 15 TON for the first matrix.",
      ],
      transitionText:
        "Once the second-line seats are fully closed, 240 TON is automatically accumulated to open the fourth business platform.",
      transitionTo: "Platform 4",
    },
    {
      title: "Platform 4 · Scaling income",
      incomeSummary: "200 TON + 12 clones",
      incomeNote: [
        "Closing the 1st and 3rd seats pays 100 TON to your wallet and 20 TON to your curator.",
        "Closing the 2nd and 4th seats generates 6 clones of 15 TON for the first matrix, and 20 TON is directed to system development.",
      ],
      transitionText:
        "Once the second-line seats are fully closed, 500 TON is automatically accumulated to open the fifth business platform.",
      transitionTo: "Platform 5",
    },
    {
      title: "Platform 5 · Breakthrough to major income",
      incomeSummary: "400 TON + 16 clones",
      incomeNote: [
        "Closing the 1st and 3rd seats pays 200 TON to your wallet and 40 TON to your curator.",
        "Closing the 2nd and 4th seats creates 8 clones of 15 TON for the first matrix, and 40 TON goes to system development.",
      ],
      transitionText:
        "Once the second-line seats are fully closed, 1 200 TON is automatically accumulated to open the final, sixth business platform.",
      transitionTo: "Platform 6",
    },
    {
      title: "Platform 6 · The final goal and Reinvest",
      incomeSummary: "2 760 TON + 12 clones",
      incomeNote: [
        "Closing the first seat triggers a REINVEST of 1 200 TON — a new login (clone) automatically takes a free seat on the same platform.",
        "For each of the three remaining seats: 920 TON to your wallet, 4 clones of 45 TON to platform 2, 50 TON to the curator and 50 TON for development.",
      ],
    },
  ],
  summary: {
    eyebrow: "Overall summary",
    title: "Income from a single business seat",
    intro:
      "Earning potential and structure growth from a single main business seat as you progress through all six platforms.",
    cols: { platform: "Platform", income: "Income", clones: "Clones", ref: "Referrals" },
    refShort: "Ref.",
    total: "Total",
    rows: [
      { platform: "Platform 1", clones: "—", ref: "—" },
      { platform: "Platform 2", clones: "4", ref: "—" },
      { platform: "Platform 3", clones: "6", ref: "20 TON" },
      { platform: "Platform 4", clones: "12", ref: "40 TON" },
      { platform: "Platform 5", clones: "16", ref: "80 TON" },
      { platform: "Platform 6", clones: "12 → 2 pl.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> in direct income, <b class="text-gold">50</b> new “clones” to strengthen your structure and <b class="text-gold">290 TON</b> in referral bonuses — that is your result from a single main business seat, not counting the permanent reinvest on the sixth platform and its clones.',
  },
  extras: {
    eyebrow: "Unique features",
    title: "MULTI Matrix marketing highlights",
    items: [
      { title: "Flexible expansion options", text: "You can buy additional business seats at your discretion on any platform." },
      { title: "“Next seat” function", text: "Automatically picks the optimal position for fast growth of your structure." },
      { title: "Reinvest on platform 6", text: "Steady cyclical income: closing the first seat automatically creates a new clone on the same platform." },
      { title: "Clone management", text: "Route clones to the partners who need them and speed up the closing of priority business platforms." },
      { title: "Automatic transitions", text: "Accumulations from each platform automatically open the next — no manual action required." },
    ],
  },
  cta: {
    eyebrow: "Join us",
    title: "Start with MULTI Matrix",
    subtitle:
      "Six platforms, automatic transitions, clones, reinvest and predictable growth — all in one business system on TON.",
    registerBtn: "Register in MULTI Matrix",
    backBtn: "All partner programs",
  },
};

/* ---------- German ---------- */

const de: MMDict = {
  docTitle: "MULTI Matrix — Partnerprogramm · Crypto Style",
  back: "Alle Partnerprogramme",
  nav: { intro: "Über das Programm", income: "4 Einkommensarten", platforms: "Plattformen", summary: "Übersicht", extras: "Verwaltung", cta: "Start" },
  hero: {
    eyebrow: "Partnerprogramm",
    title2: "Ein innovatives Geschäftssystem für Unternehmer",
    subtitle:
      "MULTI Matrix ist ein Geschäftssystem, das entwickelt wurde, um Ihr Business zu skalieren und Ihr Einkommen zu steigern. Ein einzigartiges Matrixmodell mit automatischer Duplizierung von Geschäftsplätzen und Strukturverwaltung.",
    stats: { platforms: "Plattformen", minEntry: "Min. Einstieg", directIncome: "Direktes Einkommen", newClones: "Neue Klone" },
    videoHint: "Video lädt nicht? Wählen Sie eine andere Quelle:",
  },
  income: {
    eyebrow: "Vier Einkommensarten",
    title: "Mehrkanaliges Gewinnsystem",
    intro:
      "MULTI Matrix bietet vier Einkommenskanäle — für maximale finanzielle Rendite aus einem einzigen Hauptgeschäftsplatz.",
    types: [
      { title: "Haupteinkommen aus dem Marketing", text: "Beim Schließen bestimmter Plätze in Ihren Geschäftsplattformen erhalten Sie Auszahlungen gemäß dem Marketingplan." },
      { title: "Einkommensduplizierung", text: "Das System erzeugt zusätzliche Geschäftsplätze (Klone) mit eigenen Plattformen — auch sie werden geschlossen und generieren Einkommen wie der Hauptplatz." },
      { title: "Empfehlungsbonus", text: "Zusätzliche Geldprämien für das Schließen der Plattformen Ihrer eingeladenen Partner." },
      { title: "Duplizierung des Empfehlungsbonus", text: "Auch Ihre Partner erzeugen zusätzliche Geschäftsplätze. Das Marketing zahlt einen Empfehlungsbonus auch für die Klone Ihrer Partner." },
    ],
  },
  platforms: {
    eyebrow: "6 Geschäftsplattformen",
    title: "Sieben-Platz-Binärmatrix",
    intro:
      "Grundlage des Systems ist eine sieben-Platz-Binärmatrix ohne Teilung. Die Spitze sind Sie, die erste Linie (2 Plätze) sind Ihre Partner, die zweite Linie (4 Plätze) ist Ihre Einkommensquelle. Das vollständige Schließen der zweiten Linie öffnet automatisch die nächste Plattform.",
    of: (i, total) => `Plattform ${i} von ${total}`,
    costLabel: "Platzkosten",
    incomeLabel: "Einkommen",
    distribution: "Verteilung",
    transitionLabel: "Übergang",
    reinvestBadge: "Reinvest · 1 200 TON",
    reinvestText:
      "Die letzte Plattform sorgt für ein dauerhaftes zyklisches Einkommen: Das Schließen des ersten Platzes erzeugt automatisch einen neuen Klon auf derselben Plattform.",
    you: "Sie",
  },
  seat: {
    wallet: (a) => `${a} aufs Wallet`,
    accum: (a) => `${a} Ansparung`,
    curator: (a) => `${a} an Kurator`,
    grow: (a) => `${a} für Entwicklung`,
    clonesP1: (n) => `${n} Klone à 15 TON auf Plattform 1`,
    clonesP2: (n) => `${n} Klone à 45 TON auf Plattform 2`,
    reinvest: "REINVEST 1 200 TON — ein neuer Klon auf derselben Plattform",
  },
  platformStrings: [
    { title: "Plattform 1 · Der Beginn der Reise", incomeSummary: "15 TON",
      incomeNote: [
        "Das Schließen eines der vier unteren Plätze bringt Ihnen 15 TON direkt aufs Wallet.",
        "Das vollständige Schließen der übrigen drei Plätze der zweiten Linie bringt insgesamt 45 TON.",
      ],
      transitionText: "45 TON werden automatisch für die Eröffnung Ihrer zweiten Geschäftsplattform verwendet.",
      transitionTo: "Plattform 2" },
    { title: "Plattform 2 · Erweiterte Möglichkeiten", incomeSummary: "20 TON + 4 Klone",
      incomeNote: [
        "Das Schließen des 1. und 3. Platzes bringt Ihnen jeweils 10 TON direkt aufs Wallet.",
        "Das Schließen des 2. und 4. Platzes erzeugt 2 Klone à 15 TON, die in die erste Matrix eintreten.",
      ],
      transitionText: "Das vollständige Schließen der zweiten Linie sammelt 100 TON an, die automatisch die dritte Geschäftsplattform aktivieren.",
      transitionTo: "Plattform 3" },
    { title: "Plattform 3 · Wachstumsbeschleunigung", incomeSummary: "50 TON + 6 Klone",
      incomeNote: [
        "Das Schließen des 1. und 3. Platzes bringt 25 TON aufs Wallet und 10 TON an Ihren Kurator.",
        "Das Schließen des 2. und 4. Platzes erzeugt 3 Klone à 15 TON für die erste Matrix.",
      ],
      transitionText: "Nach dem vollständigen Schließen der Plätze der zweiten Linie werden automatisch 240 TON angesammelt, um die vierte Geschäftsplattform zu eröffnen.",
      transitionTo: "Plattform 4" },
    { title: "Plattform 4 · Einkommen skalieren", incomeSummary: "200 TON + 12 Klone",
      incomeNote: [
        "Das Schließen des 1. und 3. Platzes bringt 100 TON aufs Wallet und 20 TON an Ihren Kurator.",
        "Das Schließen des 2. und 4. Platzes erzeugt 6 Klone à 15 TON für die erste Matrix, und 20 TON gehen in die Systementwicklung.",
      ],
      transitionText: "Nach dem vollständigen Schließen der Plätze der zweiten Linie werden automatisch 500 TON angesammelt, um die fünfte Geschäftsplattform zu eröffnen.",
      transitionTo: "Plattform 5" },
    { title: "Plattform 5 · Durchbruch zu großem Einkommen", incomeSummary: "400 TON + 16 Klone",
      incomeNote: [
        "Das Schließen des 1. und 3. Platzes bringt 200 TON aufs Wallet und 40 TON an Ihren Kurator.",
        "Das Schließen des 2. und 4. Platzes erzeugt 8 Klone à 15 TON für die erste Matrix, und 40 TON gehen in die Systementwicklung.",
      ],
      transitionText: "Nach dem vollständigen Schließen der Plätze der zweiten Linie werden automatisch 1 200 TON angesammelt, um die finale, sechste Geschäftsplattform zu eröffnen.",
      transitionTo: "Plattform 6" },
    { title: "Plattform 6 · Endziel und Reinvest", incomeSummary: "2 760 TON + 12 Klone",
      incomeNote: [
        "Das Schließen des ersten Platzes löst einen REINVEST von 1 200 TON aus — ein neuer Login (Klon) besetzt automatisch einen freien Platz auf derselben Plattform.",
        "Für jeden der drei verbleibenden Plätze: 920 TON aufs Wallet, 4 Klone à 45 TON auf Plattform 2, 50 TON an den Kurator und 50 TON für die Entwicklung.",
      ] },
  ],
  summary: {
    eyebrow: "Gesamtübersicht", title: "Einkommen aus einem Geschäftsplatz",
    intro: "Verdienstpotenzial und Strukturaufbau aus einem Hauptgeschäftsplatz beim Durchlaufen aller sechs Plattformen.",
    cols: { platform: "Plattform", income: "Einkommen", clones: "Klone", ref: "Empfehlungen" },
    refShort: "Empf.", total: "Gesamt",
    rows: [
      { platform: "Plattform 1", clones: "—", ref: "—" },
      { platform: "Plattform 2", clones: "4", ref: "—" },
      { platform: "Plattform 3", clones: "6", ref: "20 TON" },
      { platform: "Plattform 4", clones: "12", ref: "40 TON" },
      { platform: "Plattform 5", clones: "16", ref: "80 TON" },
      { platform: "Plattform 6", clones: "12 → 2 Pl.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> direktes Einkommen, <b class="text-gold">50</b> neue „Klone" zur Stärkung der Struktur und <b class="text-gold">290 TON</b> an Empfehlungsboni — das ist Ihr Ergebnis aus einem Hauptgeschäftsplatz, ohne den permanenten Reinvest auf der sechsten Plattform und deren Klone.',
  },
  extras: {
    eyebrow: "Einzigartige Features", title: "Marketing-Besonderheiten von MULTI Matrix",
    items: [
      { title: "Flexible Erweiterung", text: "Möglichkeit, auf jeder Plattform nach eigenem Ermessen zusätzliche Geschäftsplätze zu erwerben." },
      { title: "Funktion „Nächster Platz“", text: "Wählt automatisch die optimale Position für ein schnelles Wachstum Ihrer Struktur." },
      { title: "Reinvest auf Plattform 6", text: "Dauerhaftes zyklisches Einkommen: Beim Schließen des ersten Platzes wird automatisch ein neuer Klon auf derselben Plattform erzeugt." },
      { title: "Klonverwaltung", text: "Leiten Sie Klone zu den passenden Partnern und beschleunigen Sie das Schließen prioritärer Geschäftsplattformen." },
      { title: "Automatische Übergänge", text: "Ansparungen jeder Plattform öffnen automatisch die nächste — ohne manuelles Zutun." },
    ],
  },
  cta: {
    eyebrow: "Machen Sie mit", title: "Starten Sie mit MULTI Matrix",
    subtitle: "Sechs Plattformen, automatische Übergänge, Klone, Reinvest und planbares Wachstum — alles in einem Geschäftssystem auf TON.",
    registerBtn: "In MULTI Matrix registrieren", backBtn: "Alle Partnerprogramme",
  },
};

/* ---------- French ---------- */

const fr: MMDict = {
  docTitle: "MULTI Matrix — Programme partenaire · Crypto Style",
  back: "Tous les programmes partenaires",
  nav: { intro: "À propos", income: "4 revenus", platforms: "Plateformes", summary: "Récapitulatif", extras: "Gestion", cta: "Démarrer" },
  hero: {
    eyebrow: "Programme partenaire",
    title2: "Un système d'affaires innovant pour les entrepreneurs",
    subtitle:
      "MULTI Matrix est un système d'affaires conçu pour développer votre activité et augmenter vos revenus. Un modèle matriciel unique avec duplication automatique des places d'affaires et gestion de la structure.",
    stats: { platforms: "Plateformes", minEntry: "Entrée min.", directIncome: "Revenu direct", newClones: "Nouveaux clones" },
    videoHint: "La vidéo ne se charge pas ? Choisissez une autre source :",
  },
  income: {
    eyebrow: "Quatre types de revenus", title: "Un système de profit multicanal",
    intro: "MULTI Matrix propose quatre canaux de revenus — pour une rentabilité financière maximale à partir d'une seule place principale.",
    types: [
      { title: "Revenu principal du marketing", text: "Lors de la clôture de places précises dans vos plateformes, vous recevez des paiements selon le plan marketing." },
      { title: "Duplication du revenu", text: "Le système crée des places d'affaires supplémentaires (clones) avec leurs propres plateformes — elles se ferment aussi et génèrent des revenus marketing comme la place principale." },
      { title: "Bonus de parrainage", text: "Récompenses supplémentaires pour la clôture des plateformes de vos partenaires invités." },
      { title: "Duplication du bonus de parrainage", text: "Vos partenaires génèrent aussi des places supplémentaires. Le marketing prévoit un bonus de parrainage même pour les clones de vos partenaires." },
    ],
  },
  platforms: {
    eyebrow: "6 plateformes d'affaires", title: "Matrice binaire à sept places",
    intro: "Le système repose sur une matrice binaire à sept places, non divisible. Au sommet, vous ; première ligne (2 places), vos partenaires ; deuxième ligne (4 places), votre source de revenu. La clôture complète de la deuxième ligne ouvre automatiquement la plateforme suivante.",
    of: (i, total) => `Plateforme ${i} sur ${total}`,
    costLabel: "Coût d'une place", incomeLabel: "Revenu", distribution: "Répartition",
    transitionLabel: "Transition", reinvestBadge: "Réinvest · 1 200 TON",
    reinvestText: "La plateforme finale offre un revenu cyclique permanent : la clôture de la première place crée automatiquement un nouveau clone sur cette même plateforme.",
    you: "Vous",
  },
  seat: {
    wallet: (a) => `${a} vers le portefeuille`,
    accum: (a) => `${a} accumulation`,
    curator: (a) => `${a} au curateur`,
    grow: (a) => `${a} pour le développement`,
    clonesP1: (n) => `${n} clones de 15 TON vers la plateforme 1`,
    clonesP2: (n) => `${n} clones de 45 TON vers la plateforme 2`,
    reinvest: "RÉINVEST 1 200 TON — un nouveau clone sur cette même plateforme",
  },
  platformStrings: [
    { title: "Plateforme 1 · Le début du parcours", incomeSummary: "15 TON",
      incomeNote: [
        "La clôture de l'une des quatre places du bas vous apporte 15 TON directement sur le portefeuille.",
        "La clôture complète des trois places restantes de la deuxième ligne apporte 45 TON au total.",
      ],
      transitionText: "45 TON sont automatiquement affectés à l'ouverture de votre deuxième plateforme d'affaires.",
      transitionTo: "Plateforme 2" },
    { title: "Plateforme 2 · Élargir les possibilités", incomeSummary: "20 TON + 4 clones",
      incomeNote: [
        "La clôture de la 1re et de la 3e place vous apporte 10 TON chacune directement sur le portefeuille.",
        "La clôture de la 2e et de la 4e place crée 2 clones de 15 TON qui rejoignent la première matrice.",
      ],
      transitionText: "La clôture complète de la deuxième ligne accumule 100 TON, qui activent automatiquement la troisième plateforme d'affaires.",
      transitionTo: "Plateforme 3" },
    { title: "Plateforme 3 · Accélérer la croissance", incomeSummary: "50 TON + 6 clones",
      incomeNote: [
        "La clôture de la 1re et de la 3e place verse 25 TON au portefeuille et 10 TON à votre curateur.",
        "La clôture de la 2e et de la 4e place crée 3 clones de 15 TON pour la première matrice.",
      ],
      transitionText: "À la clôture complète des places de la deuxième ligne, 240 TON sont automatiquement accumulés pour ouvrir la quatrième plateforme d'affaires.",
      transitionTo: "Plateforme 4" },
    { title: "Plateforme 4 · Mise à l'échelle du revenu", incomeSummary: "200 TON + 12 clones",
      incomeNote: [
        "La clôture de la 1re et de la 3e place verse 100 TON au portefeuille et 20 TON à votre curateur.",
        "La clôture de la 2e et de la 4e place génère 6 clones de 15 TON pour la première matrice, et 20 TON vont au développement du système.",
      ],
      transitionText: "À la clôture complète des places de la deuxième ligne, 500 TON sont automatiquement accumulés pour ouvrir la cinquième plateforme d'affaires.",
      transitionTo: "Plateforme 5" },
    { title: "Plateforme 5 · Percée vers un grand revenu", incomeSummary: "400 TON + 16 clones",
      incomeNote: [
        "La clôture de la 1re et de la 3e place verse 200 TON au portefeuille et 40 TON à votre curateur.",
        "La clôture de la 2e et de la 4e place crée 8 clones de 15 TON pour la première matrice, et 40 TON vont au développement du système.",
      ],
      transitionText: "À la clôture complète des places de la deuxième ligne, 1 200 TON sont automatiquement accumulés pour ouvrir la sixième et dernière plateforme d'affaires.",
      transitionTo: "Plateforme 6" },
    { title: "Plateforme 6 · Objectif final et Réinvest", incomeSummary: "2 760 TON + 12 clones",
      incomeNote: [
        "La clôture de la première place déclenche un RÉINVEST de 1 200 TON — un nouveau login (clone) prend automatiquement une place libre sur cette même plateforme.",
        "Pour chacune des trois places restantes : 920 TON au portefeuille, 4 clones de 45 TON vers la plateforme 2, 50 TON au curateur et 50 TON pour le développement.",
      ] },
  ],
  summary: {
    eyebrow: "Récapitulatif global", title: "Revenus d'une seule place d'affaires",
    intro: "Potentiel de gains et de développement de la structure à partir d'une seule place principale, en franchissant les six plateformes.",
    cols: { platform: "Plateforme", income: "Revenu", clones: "Clones", ref: "Parrainage" },
    refShort: "Parr.", total: "Total",
    rows: [
      { platform: "Plateforme 1", clones: "—", ref: "—" },
      { platform: "Plateforme 2", clones: "4", ref: "—" },
      { platform: "Plateforme 3", clones: "6", ref: "20 TON" },
      { platform: "Plateforme 4", clones: "12", ref: "40 TON" },
      { platform: "Plateforme 5", clones: "16", ref: "80 TON" },
      { platform: "Plateforme 6", clones: "12 → 2 pl.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> de revenu direct, <b class="text-gold">50</b> nouveaux « clones » pour renforcer votre structure et <b class="text-gold">290 TON</b> de bonus de parrainage — voilà votre résultat à partir d\'une seule place principale, sans compter le réinvest permanent sur la sixième plateforme et ses clones.',
  },
  extras: {
    eyebrow: "Fonctionnalités uniques", title: "Points forts du marketing MULTI Matrix",
    items: [
      { title: "Options d'expansion flexibles", text: "Possibilité d'acquérir des places d'affaires supplémentaires à votre gré sur n'importe quelle plateforme." },
      { title: "Fonction « Place suivante »", text: "Sélectionne automatiquement la position optimale pour une croissance rapide de votre structure." },
      { title: "Réinvest sur la plateforme 6", text: "Revenu cyclique permanent : la clôture de la première place crée automatiquement un nouveau clone sur cette même plateforme." },
      { title: "Gestion des clones", text: "Dirigez les clones vers les partenaires souhaités et accélérez la clôture des plateformes prioritaires." },
      { title: "Transitions automatiques", text: "Les accumulations de chaque plateforme ouvrent automatiquement la suivante — sans intervention manuelle." },
    ],
  },
  cta: {
    eyebrow: "Rejoignez-nous", title: "Commencez avec MULTI Matrix",
    subtitle: "Six plateformes, transitions automatiques, clones, réinvest et croissance prévisible — le tout dans un système d'affaires sur TON.",
    registerBtn: "Inscription à MULTI Matrix", backBtn: "Tous les programmes partenaires",
  },
};

/* ---------- Italian ---------- */

const it: MMDict = {
  docTitle: "MULTI Matrix — Programma partner · Crypto Style",
  back: "Tutti i programmi partner",
  nav: { intro: "Sul programma", income: "4 redditi", platforms: "Piattaforme", summary: "Riepilogo", extras: "Gestione", cta: "Inizia" },
  hero: {
    eyebrow: "Programma partner",
    title2: "Un sistema di business innovativo per imprenditori",
    subtitle:
      "MULTI Matrix è un sistema di business creato per far crescere la tua attività e aumentare i tuoi guadagni. Un modello a matrice unico con duplicazione automatica dei posti di business e gestione della struttura.",
    stats: { platforms: "Piattaforme", minEntry: "Ingresso min.", directIncome: "Reddito diretto", newClones: "Nuovi cloni" },
    videoHint: "Il video non si carica? Scegli un'altra sorgente:",
  },
  income: {
    eyebrow: "Quattro tipi di reddito", title: "Un sistema di profitto multicanale",
    intro: "MULTI Matrix offre quattro canali di reddito — per la massima resa finanziaria da un unico posto di business principale.",
    types: [
      { title: "Reddito principale dal marketing", text: "Alla chiusura di determinati posti nelle tue piattaforme ricevi pagamenti secondo il piano marketing." },
      { title: "Duplicazione del reddito", text: "Il sistema crea posti di business aggiuntivi (cloni) con proprie piattaforme — anch'essi si chiudono e generano reddito come il posto principale." },
      { title: "Bonus di riferimento", text: "Ricompense in denaro aggiuntive per la chiusura delle piattaforme dei partner da te invitati." },
      { title: "Duplicazione del bonus di riferimento", text: "Anche i tuoi partner generano posti di business aggiuntivi. Il marketing prevede un bonus di riferimento anche per i cloni dei tuoi partner." },
    ],
  },
  platforms: {
    eyebrow: "6 piattaforme di business", title: "Matrice binaria a sette posti",
    intro: "Il sistema si basa su una matrice binaria a sette posti, non divisibile. In cima ci sei tu, la prima linea (2 posti) sono i partner, la seconda linea (4 posti) è la tua fonte di reddito. La chiusura completa della seconda linea apre automaticamente la piattaforma successiva.",
    of: (i, total) => `Piattaforma ${i} di ${total}`,
    costLabel: "Costo del posto", incomeLabel: "Reddito", distribution: "Distribuzione",
    transitionLabel: "Transizione", reinvestBadge: "Reinvest · 1 200 TON",
    reinvestText: "La piattaforma finale garantisce un reddito ciclico costante: la chiusura del primo posto crea automaticamente un nuovo clone sulla stessa piattaforma.",
    you: "Tu",
  },
  seat: {
    wallet: (a) => `${a} al wallet`,
    accum: (a) => `${a} accumulo`,
    curator: (a) => `${a} al curatore`,
    grow: (a) => `${a} per lo sviluppo`,
    clonesP1: (n) => `${n} cloni da 15 TON alla piattaforma 1`,
    clonesP2: (n) => `${n} cloni da 45 TON alla piattaforma 2`,
    reinvest: "REINVEST 1 200 TON — un nuovo clone sulla stessa piattaforma",
  },
  platformStrings: [
    { title: "Piattaforma 1 · L'inizio del percorso", incomeSummary: "15 TON",
      incomeNote: [
        "La chiusura di uno dei quattro posti inferiori porta 15 TON direttamente al wallet.",
        "La chiusura completa dei tre posti rimanenti della seconda linea porta in totale 45 TON.",
      ],
      transitionText: "45 TON vengono destinati automaticamente all'apertura della tua seconda piattaforma di business.",
      transitionTo: "Piattaforma 2" },
    { title: "Piattaforma 2 · Espansione delle opportunità", incomeSummary: "20 TON + 4 cloni",
      incomeNote: [
        "La chiusura del 1° e del 3° posto ti porta 10 TON ciascuno direttamente al wallet.",
        "La chiusura del 2° e del 4° posto crea 2 cloni da 15 TON che entrano nella prima matrice.",
      ],
      transitionText: "La chiusura completa della seconda linea accumula 100 TON che attivano automaticamente la terza piattaforma di business.",
      transitionTo: "Piattaforma 3" },
    { title: "Piattaforma 3 · Accelerazione della crescita", incomeSummary: "50 TON + 6 cloni",
      incomeNote: [
        "La chiusura del 1° e del 3° posto paga 25 TON al wallet e 10 TON al tuo curatore.",
        "La chiusura del 2° e del 4° posto crea 3 cloni da 15 TON per la prima matrice.",
      ],
      transitionText: "Con la chiusura completa dei posti della seconda linea, 240 TON vengono automaticamente accumulati per aprire la quarta piattaforma di business.",
      transitionTo: "Piattaforma 4" },
    { title: "Piattaforma 4 · Scalare il reddito", incomeSummary: "200 TON + 12 cloni",
      incomeNote: [
        "La chiusura del 1° e del 3° posto paga 100 TON al wallet e 20 TON al tuo curatore.",
        "La chiusura del 2° e del 4° posto genera 6 cloni da 15 TON per la prima matrice, e 20 TON vanno allo sviluppo del sistema.",
      ],
      transitionText: "Con la chiusura completa dei posti della seconda linea, 500 TON vengono automaticamente accumulati per aprire la quinta piattaforma di business.",
      transitionTo: "Piattaforma 5" },
    { title: "Piattaforma 5 · Salto verso un grande reddito", incomeSummary: "400 TON + 16 cloni",
      incomeNote: [
        "La chiusura del 1° e del 3° posto paga 200 TON al wallet e 40 TON al tuo curatore.",
        "La chiusura del 2° e del 4° posto crea 8 cloni da 15 TON per la prima matrice, e 40 TON vanno allo sviluppo del sistema.",
      ],
      transitionText: "Con la chiusura completa dei posti della seconda linea, 1 200 TON vengono automaticamente accumulati per aprire la sesta e ultima piattaforma di business.",
      transitionTo: "Piattaforma 6" },
    { title: "Piattaforma 6 · Obiettivo finale e Reinvest", incomeSummary: "2 760 TON + 12 cloni",
      incomeNote: [
        "La chiusura del primo posto avvia un REINVEST di 1 200 TON — un nuovo login (clone) occupa automaticamente un posto libero sulla stessa piattaforma.",
        "Per ciascuno dei tre posti rimanenti: 920 TON al wallet, 4 cloni da 45 TON alla piattaforma 2, 50 TON al curatore e 50 TON per lo sviluppo.",
      ] },
  ],
  summary: {
    eyebrow: "Riepilogo generale", title: "Redditi da un singolo posto di business",
    intro: "Potenziale di guadagno e crescita della struttura da un singolo posto principale attraverso tutte e sei le piattaforme.",
    cols: { platform: "Piattaforma", income: "Reddito", clones: "Cloni", ref: "Riferimenti" },
    refShort: "Rif.", total: "Totale",
    rows: [
      { platform: "Piattaforma 1", clones: "—", ref: "—" },
      { platform: "Piattaforma 2", clones: "4", ref: "—" },
      { platform: "Piattaforma 3", clones: "6", ref: "20 TON" },
      { platform: "Piattaforma 4", clones: "12", ref: "40 TON" },
      { platform: "Piattaforma 5", clones: "16", ref: "80 TON" },
      { platform: "Piattaforma 6", clones: "12 → 2 pt.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> di reddito diretto, <b class="text-gold">50</b> nuovi «cloni» per rafforzare la struttura e <b class="text-gold">290 TON</b> di bonus di riferimento — questo è il tuo risultato da un solo posto principale, senza contare il reinvest permanente sulla sesta piattaforma e i suoi cloni.',
  },
  extras: {
    eyebrow: "Caratteristiche uniche", title: "Punti di forza del marketing MULTI Matrix",
    items: [
      { title: "Espansione flessibile", text: "Possibilità di acquistare posti di business aggiuntivi a tua discrezione su qualsiasi piattaforma." },
      { title: "Funzione «Prossimo posto»", text: "Seleziona automaticamente la posizione ottimale per una rapida crescita della tua struttura." },
      { title: "Reinvest sulla piattaforma 6", text: "Reddito ciclico costante: la chiusura del primo posto crea automaticamente un nuovo clone sulla stessa piattaforma." },
      { title: "Gestione dei cloni", text: "Indirizza i cloni ai partner giusti e accelera la chiusura delle piattaforme prioritarie." },
      { title: "Transizioni automatiche", text: "Gli accumuli di ciascuna piattaforma aprono automaticamente la successiva — senza azioni manuali." },
    ],
  },
  cta: {
    eyebrow: "Unisciti a noi", title: "Inizia con MULTI Matrix",
    subtitle: "Sei piattaforme, transizioni automatiche, cloni, reinvest e crescita prevedibile — tutto in un unico sistema di business su TON.",
    registerBtn: "Registrati in MULTI Matrix", backBtn: "Tutti i programmi partner",
  },
};

/* ---------- Spanish ---------- */

const es: MMDict = {
  docTitle: "MULTI Matrix — Programa de socios · Crypto Style",
  back: "Todos los programas de socios",
  nav: { intro: "Sobre el programa", income: "4 ingresos", platforms: "Plataformas", summary: "Resumen", extras: "Gestión", cta: "Empezar" },
  hero: {
    eyebrow: "Programa de socios",
    title2: "Un sistema de negocio innovador para emprendedores",
    subtitle:
      "MULTI Matrix es un sistema de negocio diseñado para escalar tu actividad y aumentar tus ingresos. Un modelo matricial único con duplicación automática de plazas de negocio y gestión de la estructura.",
    stats: { platforms: "Plataformas", minEntry: "Entrada mín.", directIncome: "Ingreso directo", newClones: "Nuevos clones" },
    videoHint: "¿No se carga el vídeo? Elige otra fuente:",
  },
  income: {
    eyebrow: "Cuatro tipos de ingresos", title: "Un sistema de beneficio multicanal",
    intro: "MULTI Matrix ofrece cuatro canales de ingresos — para obtener la máxima rentabilidad financiera de una sola plaza de negocio principal.",
    types: [
      { title: "Ingreso principal por marketing", text: "Al cerrarse determinadas plazas en tus plataformas, recibes pagos según el plan de marketing." },
      { title: "Duplicación del ingreso", text: "El sistema crea plazas de negocio adicionales (clones) con sus propias plataformas — también se cierran y generan ingreso como la plaza principal." },
      { title: "Bono por referidos", text: "Recompensas adicionales en efectivo por el cierre de las plataformas de los socios que invites." },
      { title: "Duplicación del bono por referidos", text: "Tus socios también generan plazas de negocio adicionales. El marketing prevé bono por referidos también para los clones de tus socios." },
    ],
  },
  platforms: {
    eyebrow: "6 plataformas de negocio", title: "Matriz binaria de siete plazas",
    intro: "El sistema se basa en una matriz binaria de siete plazas, no divisible. En la cima estás tú; la primera línea (2 plazas), tus socios; la segunda línea (4 plazas), tu fuente de ingresos. El cierre completo de la segunda línea abre automáticamente la siguiente plataforma.",
    of: (i, total) => `Plataforma ${i} de ${total}`,
    costLabel: "Coste de la plaza", incomeLabel: "Ingreso", distribution: "Distribución",
    transitionLabel: "Transición", reinvestBadge: "Reinvest · 1 200 TON",
    reinvestText: "La plataforma final proporciona un ingreso cíclico permanente: el cierre de la primera plaza crea automáticamente un nuevo clon en la misma plataforma.",
    you: "Tú",
  },
  seat: {
    wallet: (a) => `${a} a la cartera`,
    accum: (a) => `${a} acumulación`,
    curator: (a) => `${a} al curador`,
    grow: (a) => `${a} para desarrollo`,
    clonesP1: (n) => `${n} clones de 15 TON a la plataforma 1`,
    clonesP2: (n) => `${n} clones de 45 TON a la plataforma 2`,
    reinvest: "REINVEST 1 200 TON — un nuevo clon en la misma plataforma",
  },
  platformStrings: [
    { title: "Plataforma 1 · El inicio del camino", incomeSummary: "15 TON",
      incomeNote: [
        "El cierre de una de las cuatro plazas inferiores te aporta 15 TON directamente a la cartera.",
        "El cierre completo de las tres plazas restantes de la segunda línea aporta 45 TON en total.",
      ],
      transitionText: "45 TON se destinan automáticamente a abrir tu segunda plataforma de negocio.",
      transitionTo: "Plataforma 2" },
    { title: "Plataforma 2 · Ampliación de posibilidades", incomeSummary: "20 TON + 4 clones",
      incomeNote: [
        "El cierre de la 1.ª y la 3.ª plaza te aporta 10 TON cada una directamente a la cartera.",
        "El cierre de la 2.ª y la 4.ª plaza crea 2 clones de 15 TON que entran en la primera matriz.",
      ],
      transitionText: "El cierre completo de la segunda línea acumula 100 TON que activan automáticamente la tercera plataforma de negocio.",
      transitionTo: "Plataforma 3" },
    { title: "Plataforma 3 · Aceleración del crecimiento", incomeSummary: "50 TON + 6 clones",
      incomeNote: [
        "El cierre de la 1.ª y la 3.ª plaza paga 25 TON a la cartera y 10 TON a tu curador.",
        "El cierre de la 2.ª y la 4.ª plaza crea 3 clones de 15 TON para la primera matriz.",
      ],
      transitionText: "Con el cierre completo de las plazas de la segunda línea, 240 TON se acumulan automáticamente para abrir la cuarta plataforma de negocio.",
      transitionTo: "Plataforma 4" },
    { title: "Plataforma 4 · Escalado del ingreso", incomeSummary: "200 TON + 12 clones",
      incomeNote: [
        "El cierre de la 1.ª y la 3.ª plaza paga 100 TON a la cartera y 20 TON a tu curador.",
        "El cierre de la 2.ª y la 4.ª plaza genera 6 clones de 15 TON para la primera matriz, y 20 TON van al desarrollo del sistema.",
      ],
      transitionText: "Con el cierre completo de las plazas de la segunda línea, 500 TON se acumulan automáticamente para abrir la quinta plataforma de negocio.",
      transitionTo: "Plataforma 5" },
    { title: "Plataforma 5 · Salto a un gran ingreso", incomeSummary: "400 TON + 16 clones",
      incomeNote: [
        "El cierre de la 1.ª y la 3.ª plaza paga 200 TON a la cartera y 40 TON a tu curador.",
        "El cierre de la 2.ª y la 4.ª plaza crea 8 clones de 15 TON para la primera matriz, y 40 TON van al desarrollo del sistema.",
      ],
      transitionText: "Con el cierre completo de las plazas de la segunda línea, 1 200 TON se acumulan automáticamente para abrir la sexta y última plataforma de negocio.",
      transitionTo: "Plataforma 6" },
    { title: "Plataforma 6 · Meta final y Reinvest", incomeSummary: "2 760 TON + 12 clones",
      incomeNote: [
        "El cierre de la primera plaza activa un REINVEST de 1 200 TON — un nuevo login (clon) ocupa automáticamente una plaza libre en la misma plataforma.",
        "Por cada una de las tres plazas restantes: 920 TON a la cartera, 4 clones de 45 TON a la plataforma 2, 50 TON al curador y 50 TON para desarrollo.",
      ] },
  ],
  summary: {
    eyebrow: "Resumen general", title: "Ingresos de una sola plaza de negocio",
    intro: "Potencial de ganancias y desarrollo de la estructura a partir de una sola plaza principal recorriendo las seis plataformas.",
    cols: { platform: "Plataforma", income: "Ingreso", clones: "Clones", ref: "Referidos" },
    refShort: "Ref.", total: "Total",
    rows: [
      { platform: "Plataforma 1", clones: "—", ref: "—" },
      { platform: "Plataforma 2", clones: "4", ref: "—" },
      { platform: "Plataforma 3", clones: "6", ref: "20 TON" },
      { platform: "Plataforma 4", clones: "12", ref: "40 TON" },
      { platform: "Plataforma 5", clones: "16", ref: "80 TON" },
      { platform: "Plataforma 6", clones: "12 → 2 pl.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> de ingreso directo, <b class="text-gold">50</b> nuevos «clones» para reforzar la estructura y <b class="text-gold">290 TON</b> en bonos por referidos — ese es tu resultado desde una sola plaza principal, sin contar el reinvest permanente en la sexta plataforma y sus clones.',
  },
  extras: {
    eyebrow: "Rasgos únicos", title: "Particularidades del marketing MULTI Matrix",
    items: [
      { title: "Ampliación flexible", text: "Posibilidad de adquirir plazas de negocio adicionales a tu criterio en cualquier plataforma." },
      { title: "Función «Siguiente plaza»", text: "Selecciona automáticamente la posición óptima para un crecimiento rápido de tu estructura." },
      { title: "Reinvest en la plataforma 6", text: "Ingreso cíclico permanente: el cierre de la primera plaza crea automáticamente un nuevo clon en la misma plataforma." },
      { title: "Gestión de clones", text: "Dirige los clones a los socios adecuados y acelera el cierre de las plataformas prioritarias." },
      { title: "Transiciones automáticas", text: "Las acumulaciones de cada plataforma abren automáticamente la siguiente — sin acciones manuales." },
    ],
  },
  cta: {
    eyebrow: "Únete", title: "Empieza con MULTI Matrix",
    subtitle: "Seis plataformas, transiciones automáticas, clones, reinvest y crecimiento predecible — todo en un solo sistema de negocio en TON.",
    registerBtn: "Registro en MULTI Matrix", backBtn: "Todos los programas de socios",
  },
};

/* ---------- Portuguese ---------- */

const pt: MMDict = {
  docTitle: "MULTI Matrix — Programa de parceiros · Crypto Style",
  back: "Todos os programas de parceiros",
  nav: { intro: "Sobre o programa", income: "4 rendimentos", platforms: "Plataformas", summary: "Resumo", extras: "Gestão", cta: "Começar" },
  hero: {
    eyebrow: "Programa de parceiros",
    title2: "Um sistema de negócios inovador para empreendedores",
    subtitle:
      "MULTI Matrix é um sistema de negócios criado para escalar a sua atividade e aumentar os rendimentos. Um modelo matricial único com duplicação automática de posições de negócio e gestão da estrutura.",
    stats: { platforms: "Plataformas", minEntry: "Entrada mín.", directIncome: "Rendimento direto", newClones: "Novos clones" },
    videoHint: "O vídeo não carrega? Escolha outra fonte:",
  },
  income: {
    eyebrow: "Quatro tipos de rendimento", title: "Um sistema de lucro multicanal",
    intro: "MULTI Matrix oferece quatro canais de rendimento — para o máximo retorno financeiro a partir de uma única posição principal.",
    types: [
      { title: "Rendimento principal do marketing", text: "Ao fechar posições específicas nas suas plataformas, recebe pagamentos conforme o plano de marketing." },
      { title: "Duplicação do rendimento", text: "O sistema cria posições de negócio adicionais (clones) com plataformas próprias — também fecham e geram rendimento como a posição principal." },
      { title: "Bónus por indicação", text: "Recompensas em dinheiro adicionais pelo fecho das plataformas dos parceiros que convidar." },
      { title: "Duplicação do bónus por indicação", text: "Os seus parceiros também geram posições de negócio adicionais. O marketing prevê bónus por indicação também para os clones dos seus parceiros." },
    ],
  },
  platforms: {
    eyebrow: "6 plataformas de negócio", title: "Matriz binária de sete posições",
    intro: "O sistema baseia-se numa matriz binária de sete posições, não divisível. No topo está você; a primeira linha (2 posições), os seus parceiros; a segunda linha (4 posições), a sua fonte de rendimento. O fecho completo da segunda linha abre automaticamente a plataforma seguinte.",
    of: (i, total) => `Plataforma ${i} de ${total}`,
    costLabel: "Custo da posição", incomeLabel: "Rendimento", distribution: "Distribuição",
    transitionLabel: "Transição", reinvestBadge: "Reinvest · 1 200 TON",
    reinvestText: "A plataforma final garante um rendimento cíclico permanente: o fecho da primeira posição cria automaticamente um novo clone na mesma plataforma.",
    you: "Você",
  },
  seat: {
    wallet: (a) => `${a} para a carteira`,
    accum: (a) => `${a} acumulação`,
    curator: (a) => `${a} para o curador`,
    grow: (a) => `${a} para desenvolvimento`,
    clonesP1: (n) => `${n} clones de 15 TON para a plataforma 1`,
    clonesP2: (n) => `${n} clones de 45 TON para a plataforma 2`,
    reinvest: "REINVEST 1 200 TON — um novo clone na mesma plataforma",
  },
  platformStrings: [
    { title: "Plataforma 1 · O início do percurso", incomeSummary: "15 TON",
      incomeNote: [
        "O fecho de uma das quatro posições inferiores traz 15 TON diretamente para a carteira.",
        "O fecho completo das três posições restantes da segunda linha traz 45 TON no total.",
      ],
      transitionText: "45 TON são canalizados automaticamente para abrir a sua segunda plataforma de negócio.",
      transitionTo: "Plataforma 2" },
    { title: "Plataforma 2 · Ampliação das possibilidades", incomeSummary: "20 TON + 4 clones",
      incomeNote: [
        "O fecho da 1.ª e da 3.ª posições traz 10 TON cada diretamente para a carteira.",
        "O fecho da 2.ª e da 4.ª posições cria 2 clones de 15 TON que entram na primeira matriz.",
      ],
      transitionText: "O fecho completo da segunda linha acumula 100 TON, que ativam automaticamente a terceira plataforma de negócio.",
      transitionTo: "Plataforma 3" },
    { title: "Plataforma 3 · Aceleração do crescimento", incomeSummary: "50 TON + 6 clones",
      incomeNote: [
        "O fecho da 1.ª e da 3.ª posições paga 25 TON à carteira e 10 TON ao seu curador.",
        "O fecho da 2.ª e da 4.ª posições cria 3 clones de 15 TON para a primeira matriz.",
      ],
      transitionText: "Com o fecho completo das posições da segunda linha, 240 TON acumulam-se automaticamente para abrir a quarta plataforma de negócio.",
      transitionTo: "Plataforma 4" },
    { title: "Plataforma 4 · Escalar o rendimento", incomeSummary: "200 TON + 12 clones",
      incomeNote: [
        "O fecho da 1.ª e da 3.ª posições paga 100 TON à carteira e 20 TON ao seu curador.",
        "O fecho da 2.ª e da 4.ª posições gera 6 clones de 15 TON para a primeira matriz, e 20 TON vão para o desenvolvimento do sistema.",
      ],
      transitionText: "Com o fecho completo das posições da segunda linha, 500 TON acumulam-se automaticamente para abrir a quinta plataforma de negócio.",
      transitionTo: "Plataforma 5" },
    { title: "Plataforma 5 · Salto para um grande rendimento", incomeSummary: "400 TON + 16 clones",
      incomeNote: [
        "O fecho da 1.ª e da 3.ª posições paga 200 TON à carteira e 40 TON ao seu curador.",
        "O fecho da 2.ª e da 4.ª posições cria 8 clones de 15 TON para a primeira matriz, e 40 TON vão para o desenvolvimento do sistema.",
      ],
      transitionText: "Com o fecho completo das posições da segunda linha, 1 200 TON acumulam-se automaticamente para abrir a sexta e final plataforma de negócio.",
      transitionTo: "Plataforma 6" },
    { title: "Plataforma 6 · Meta final e Reinvest", incomeSummary: "2 760 TON + 12 clones",
      incomeNote: [
        "O fecho da primeira posição desencadeia um REINVEST de 1 200 TON — um novo login (clone) ocupa automaticamente uma posição livre na mesma plataforma.",
        "Por cada uma das três posições restantes: 920 TON para a carteira, 4 clones de 45 TON para a plataforma 2, 50 TON para o curador e 50 TON para o desenvolvimento.",
      ] },
  ],
  summary: {
    eyebrow: "Resumo geral", title: "Rendimentos de uma única posição de negócio",
    intro: "Potencial de ganhos e desenvolvimento da estrutura a partir de uma única posição principal ao percorrer as seis plataformas.",
    cols: { platform: "Plataforma", income: "Rendimento", clones: "Clones", ref: "Indicações" },
    refShort: "Ind.", total: "Total",
    rows: [
      { platform: "Plataforma 1", clones: "—", ref: "—" },
      { platform: "Plataforma 2", clones: "4", ref: "—" },
      { platform: "Plataforma 3", clones: "6", ref: "20 TON" },
      { platform: "Plataforma 4", clones: "12", ref: "40 TON" },
      { platform: "Plataforma 5", clones: "16", ref: "80 TON" },
      { platform: "Plataforma 6", clones: "12 → 2 pl.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> de rendimento direto, <b class="text-gold">50</b> novos «clones» para reforçar a estrutura e <b class="text-gold">290 TON</b> em bónus por indicação — este é o seu resultado a partir de uma única posição principal, sem contar o reinvest permanente na sexta plataforma e os seus clones.',
  },
  extras: {
    eyebrow: "Características únicas", title: "Destaques do marketing MULTI Matrix",
    items: [
      { title: "Expansão flexível", text: "Possibilidade de adquirir posições de negócio adicionais ao seu critério em qualquer plataforma." },
      { title: "Função «Próxima posição»", text: "Escolhe automaticamente a posição ideal para o crescimento rápido da sua estrutura." },
      { title: "Reinvest na plataforma 6", text: "Rendimento cíclico permanente: o fecho da primeira posição cria automaticamente um novo clone na mesma plataforma." },
      { title: "Gestão de clones", text: "Encaminhe os clones para os parceiros certos e acelere o fecho das plataformas prioritárias." },
      { title: "Transições automáticas", text: "As acumulações de cada plataforma abrem automaticamente a seguinte — sem ações manuais." },
    ],
  },
  cta: {
    eyebrow: "Junte-se", title: "Comece com o MULTI Matrix",
    subtitle: "Seis plataformas, transições automáticas, clones, reinvest e crescimento previsível — tudo num sistema de negócio na TON.",
    registerBtn: "Registo no MULTI Matrix", backBtn: "Todos os programas de parceiros",
  },
};

/* ---------- Ukrainian ---------- */

const ukClonesP1 = (n: number) =>
  `${n} ${n < 5 ? "клона" : "клонів"} по 15 TON у 1-у площадку`;

const uk: MMDict = {
  docTitle: "MULTI Matrix — Партнерська програма · Crypto Style",
  back: "Усі партнерські програми",
  nav: { intro: "Про програму", income: "4 види доходу", platforms: "Площадки", summary: "Зведення", extras: "Керування", cta: "Старт" },
  hero: {
    eyebrow: "Партнерська програма",
    title2: "Інноваційна бізнес-система для підприємців",
    subtitle:
      "MULTI Matrix — бізнес-система, розроблена для масштабування вашої справи та збільшення доходу. Унікальна матрична модель з автоматичною дуплікацією бізнес-місць та керуванням структурою.",
    stats: { platforms: "Площадок", minEntry: "Мін. вхід", directIncome: "Прямий дохід", newClones: "Нових клонів" },
    videoHint: "Відео не відкривається? Оберіть інше джерело:",
    videoTitle: "Відеопрезентація MULTI Matrix",
  },
  income: {
    eyebrow: "Чотири види доходу", title: "Багатоканальна система прибутку",
    intro: "MULTI Matrix пропонує чотири канали доходу — для максимальної фінансової віддачі з одного основного бізнес-місця.",
    types: [
      { title: "Основний дохід за маркетингом", text: "При закритті певних місць у ваших бізнес-площадках ви отримуєте виплати згідно з маркетинг-планом." },
      { title: "Дуплікація доходу", text: "Система створює додаткові бізнес-місця (клони) зі своїми площадками — вони теж закриваються і приносять дохід за маркетингом так само, як основне місце." },
      { title: "Реферальний бонус", text: "Додаткові грошові винагороди за закриття площадок ваших запрошених партнерів." },
      { title: "Дуплікація реферального бонусу", text: "У ваших партнерів також створюються додаткові бізнес-місця. Маркетинг передбачає реферальний бонус і за клонів ваших партнерів." },
    ],
  },
  platforms: {
    eyebrow: "6 бізнес-площадок", title: "Семимісна бінарна матриця",
    intro: "В основі системи — семимісна бінарна неподільна матриця. Верхівка — ви, перша лінія (2 місця) — партнери, друга лінія (4 місця) — джерело доходу. Повне закриття другої лінії автоматично відкриває наступну площадку.",
    of: (i, total) => `Площадка ${i} з ${total}`,
    costLabel: "Вартість місця", incomeLabel: "Дохід", distribution: "Розподіл",
    transitionLabel: "Перехід", reinvestBadge: "Реінвест · 1 200 TON",
    reinvestText: "Фінальна площадка забезпечує постійний циклічний дохід: закриття першого місця автоматично створює нового клона в цій же площадці.",
    you: "Ви",
  },
  seat: {
    wallet: (a) => `${a} на гаманець`,
    accum: (a) => `${a} накопичення`,
    curator: (a) => `${a} куратору`,
    grow: (a) => `${a} на розвиток`,
    clonesP1: ukClonesP1,
    clonesP2: (n) => `${n} клона по 45 TON у 2-у площадку`,
    reinvest: "РЕІНВЕСТ 1 200 TON — новий клон у цій же площадці",
  },
  platformStrings: [
    { title: "Площадка 1 · Початок шляху", incomeSummary: "15 TON",
      incomeNote: [
        "Закриття одного з чотирьох нижніх місць приносить вам 15 TON прямо на гаманець.",
        "Повне закриття трьох місць, що залишилися, другої лінії сумарно приносить 45 TON.",
      ],
      transitionText: "45 TON автоматично спрямовуються на відкриття вашої другої бізнес-площадки.",
      transitionTo: "Площадка 2" },
    { title: "Площадка 2 · Розширення можливостей", incomeSummary: "20 TON + 4 клона",
      incomeNote: [
        "Закриття 1-го та 3-го місця приносить вам по 10 TON одразу на гаманець.",
        "Закриття 2-го та 4-го місця створює 2 клона по 15 TON, які стають у першу матрицю.",
      ],
      transitionText: "Повне закриття другої лінії акумулює 100 TON, які автоматично спрямовуються на активацію третьої бізнес-площадки.",
      transitionTo: "Площадка 3" },
    { title: "Площадка 3 · Прискорення зростання", incomeSummary: "50 TON + 6 клонів",
      incomeNote: [
        "Закриття 1-го та 3-го місця приносить 25 TON на гаманець та 10 TON вашому куратору.",
        "Закриття 2-го та 4-го місця створює 3 клона по 15 TON для першої матриці.",
      ],
      transitionText: "При повному закритті місць другої лінії 240 TON автоматично накопичуються для відкриття четвертої бізнес-площадки.",
      transitionTo: "Площадка 4" },
    { title: "Площадка 4 · Масштабування доходу", incomeSummary: "200 TON + 12 клонів",
      incomeNote: [
        "Закриття 1-го та 3-го місця приносить 100 TON на гаманець та 20 TON вашому куратору.",
        "Закриття 2-го та 4-го місця генерує 6 клонів по 15 TON для першої матриці, а 20 TON спрямовуються на розвиток системи.",
      ],
      transitionText: "При повному закритті місць другої лінії 500 TON автоматично накопичуються для відкриття п'ятої бізнес-площадки.",
      transitionTo: "Площадка 5" },
    { title: "Площадка 5 · Прорив до великого доходу", incomeSummary: "400 TON + 16 клонів",
      incomeNote: [
        "Закриття 1-го та 3-го місця приносить 200 TON на гаманець та 40 TON вашому куратору.",
        "Закриття 2-го та 4-го місця створює 8 клонів по 15 TON для першої матриці, а 40 TON іде на розвиток системи.",
      ],
      transitionText: "При повному закритті місць другої лінії 1 200 TON автоматично накопичуються для відкриття фінальної шостої бізнес-площадки.",
      transitionTo: "Площадка 6" },
    { title: "Площадка 6 · Фінальна мета та Реінвест", incomeSummary: "2 760 TON + 12 клонів",
      incomeNote: [
        "Закриття першого місця запускає РЕІНВЕСТ 1 200 TON — новий логін (клон) автоматично займає вільне місце в цій же площадці.",
        "За кожне з трьох місць, що залишилися: 920 TON на гаманець, 4 клона по 45 TON у 2-у площадку, 50 TON куратору та 50 TON на розвиток.",
      ] },
  ],
  summary: {
    eyebrow: "Загальне зведення", title: "Доходи з одного бізнес-місця",
    intro: "Потенціал заробітку та розвитку структури з одного основного бізнес-місця при проходженні всіх шести площадок.",
    cols: { platform: "Площадка", income: "Дохід", clones: "Клони", ref: "Реферальні" },
    refShort: "Реф.", total: "Разом",
    rows: [
      { platform: "Площадка 1", clones: "—", ref: "—" },
      { platform: "Площадка 2", clones: "4", ref: "—" },
      { platform: "Площадка 3", clones: "6", ref: "20 TON" },
      { platform: "Площадка 4", clones: "12", ref: "40 TON" },
      { platform: "Площадка 5", clones: "16", ref: "80 TON" },
      { platform: "Площадка 6", clones: "12 → 2 пл.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> прямого доходу, <b class="text-gold">50</b> нових «клонів» для посилення структури та <b class="text-gold">290 TON</b> реферальних бонусів — це ваш результат з одного основного бізнес-місця, не рахуючи постійного реінвесту на шостій площадці та клонів.',
  },
  extras: {
    eyebrow: "Унікальні «фішки»", title: "Особливості маркетингу MULTI Matrix",
    items: [
      { title: "Гнучкі можливості розширення", text: "Можливість придбання додаткових бізнес-місць на ваш розсуд на будь-якій площадці." },
      { title: "Функція «Наступне місце»", text: "Автоматично підбирає оптимальну позицію для швидкого зростання вашої структури." },
      { title: "Реінвест на 6-й площадці", text: "Постійний циклічний дохід: при закритті першого місця автоматично створюється новий клон у цій же площадці." },
      { title: "Керування клонами", text: "Спрямовуйте клонів до потрібних партнерів і прискорюйте закриття пріоритетних бізнес-площадок." },
      { title: "Автоматичні переходи", text: "Накопичення з кожної площадки автоматично відкривають наступну — без ручних дій." },
    ],
  },
  cta: {
    eyebrow: "Приєднуйтеся", title: "Почніть із MULTI Matrix",
    subtitle: "Шість площадок, автоматичні переходи, клони, реінвест та прогнозоване зростання — усе в одній бізнес-системі на TON.",
    registerBtn: "Реєстрація у MULTI Matrix", backBtn: "Усі партнерські програми",
  },
};

/* ---------- Kazakh ---------- */

const kk: MMDict = {
  docTitle: "MULTI Matrix — Серіктестік бағдарлама · Crypto Style",
  back: "Барлық серіктестік бағдарламалар",
  nav: { intro: "Бағдарлама туралы", income: "4 табыс түрі", platforms: "Алаңдар", summary: "Жиынтық", extras: "Басқару", cta: "Бастау" },
  hero: {
    eyebrow: "Серіктестік бағдарлама",
    title2: "Кәсіпкерлерге арналған инновациялық бизнес-жүйе",
    subtitle:
      "MULTI Matrix — ісіңізді масштабтауға және табысыңызды арттыруға арналған бизнес-жүйе. Бизнес-орындарды автоматты дубляциялау және құрылымды басқару мүмкіндігі бар бірегей матрицалық үлгі.",
    stats: { platforms: "Алаңдар", minEntry: "Мин. кіру", directIncome: "Тікелей табыс", newClones: "Жаңа клондар" },
    videoHint: "Бейне ашылмай ма? Басқа дереккөзді таңдаңыз:",
  },
  income: {
    eyebrow: "Табыстың төрт түрі", title: "Көпарналы пайда жүйесі",
    intro: "MULTI Matrix бір негізгі бизнес-орыннан ең жоғары қаржылық қайтарым алу үшін төрт табыс арнасын ұсынады.",
    types: [
      { title: "Маркетингтен негізгі табыс", text: "Бизнес-алаңдарыңыздағы белгілі бір орындар жабылғанда, маркетинг-жоспарға сәйкес төлемдер аласыз." },
      { title: "Табысты дубляциялау", text: "Жүйе өз алаңдары бар қосымша бизнес-орындарды (клондарды) жасайды — олар да жабылып, негізгі орын сияқты табыс әкеледі." },
      { title: "Рефералдық бонус", text: "Шақырған серіктестеріңіздің алаңдары жабылғаны үшін қосымша ақшалай сыйақы." },
      { title: "Рефералдық бонусты дубляциялау", text: "Сіздің серіктестеріңізде де қосымша бизнес-орындар пайда болады. Маркетинг серіктестеріңіздің клондары үшін де рефералдық бонус қарастырады." },
    ],
  },
  platforms: {
    eyebrow: "6 бизнес-алаң", title: "Жеті орынды бинарлы матрица",
    intro: "Жүйенің негізі — жеті орынды, бөлінбейтін бинарлы матрица. Шыңында сіз, бірінші желі (2 орын) — серіктестер, екінші желі (4 орын) — табыс көзі. Екінші желіні толық жабу келесі алаңды автоматты түрде ашады.",
    of: (i, total) => `${total}-нің ${i}-алаңы`,
    costLabel: "Орын құны", incomeLabel: "Табыс", distribution: "Бөлу",
    transitionLabel: "Өту", reinvestBadge: "Реинвест · 1 200 TON",
    reinvestText: "Соңғы алаң тұрақты циклдік табысты қамтамасыз етеді: бірінші орын жабылғанда сол алаңда автоматты түрде жаңа клон пайда болады.",
    you: "Сіз",
  },
  seat: {
    wallet: (a) => `${a} әмиянге`,
    accum: (a) => `${a} жинақ`,
    curator: (a) => `${a} кураторға`,
    grow: (a) => `${a} дамытуға`,
    clonesP1: (n) => `1-алаңға 15 TON-нан ${n} клон`,
    clonesP2: (n) => `2-алаңға 45 TON-нан ${n} клон`,
    reinvest: "РЕИНВЕСТ 1 200 TON — сол алаңдағы жаңа клон",
  },
  platformStrings: [
    { title: "1-алаң · Жолдың басы", incomeSummary: "15 TON",
      incomeNote: [
        "Төменгі төрт орынның бірін жабу сізге 15 TON тікелей әмиянге әкеледі.",
        "Екінші желідегі қалған үш орынды толық жабу барлығы 45 TON әкеледі.",
      ],
      transitionText: "45 TON автоматты түрде екінші бизнес-алаңыңызды ашуға жіберіледі.",
      transitionTo: "2-алаң" },
    { title: "2-алаң · Мүмкіндіктерді кеңейту", incomeSummary: "20 TON + 4 клон",
      incomeNote: [
        "1-ші және 3-ші орындарды жабу сізге әрқайсысы 10 TON-нан тікелей әмиянге әкеледі.",
        "2-ші және 4-ші орындарды жабу бірінші матрицаға енетін 15 TON-дық 2 клон жасайды.",
      ],
      transitionText: "Екінші желіні толық жабу 100 TON жинайды, олар автоматты түрде үшінші бизнес-алаңды белсендіруге жіберіледі.",
      transitionTo: "3-алаң" },
    { title: "3-алаң · Өсімді жеделдету", incomeSummary: "50 TON + 6 клон",
      incomeNote: [
        "1-ші және 3-ші орындарды жабу әмиянге 25 TON және кураторыңызға 10 TON төлейді.",
        "2-ші және 4-ші орындарды жабу бірінші матрицаға 15 TON-дық 3 клон жасайды.",
      ],
      transitionText: "Екінші желі орындары толық жабылғанда 240 TON автоматты түрде төртінші бизнес-алаңды ашу үшін жиналады.",
      transitionTo: "4-алаң" },
    { title: "4-алаң · Табысты масштабтау", incomeSummary: "200 TON + 12 клон",
      incomeNote: [
        "1-ші және 3-ші орындарды жабу әмиянге 100 TON және кураторыңызға 20 TON төлейді.",
        "2-ші және 4-ші орындарды жабу бірінші матрицаға 15 TON-дық 6 клон жасайды, ал 20 TON жүйені дамытуға жіберіледі.",
      ],
      transitionText: "Екінші желі орындары толық жабылғанда 500 TON автоматты түрде бесінші бизнес-алаңды ашу үшін жиналады.",
      transitionTo: "5-алаң" },
    { title: "5-алаң · Үлкен табысқа серпіліс", incomeSummary: "400 TON + 16 клон",
      incomeNote: [
        "1-ші және 3-ші орындарды жабу әмиянге 200 TON және кураторыңызға 40 TON төлейді.",
        "2-ші және 4-ші орындарды жабу бірінші матрицаға 15 TON-дық 8 клон жасайды, ал 40 TON жүйені дамытуға жұмсалады.",
      ],
      transitionText: "Екінші желі орындары толық жабылғанда 1 200 TON автоматты түрде соңғы алтыншы бизнес-алаңды ашу үшін жиналады.",
      transitionTo: "6-алаң" },
    { title: "6-алаң · Түпкі мақсат және Реинвест", incomeSummary: "2 760 TON + 12 клон",
      incomeNote: [
        "Бірінші орынды жабу 1 200 TON РЕИНВЕСТ іске қосады — жаңа логин (клон) сол алаңдағы бос орынды автоматты түрде алады.",
        "Қалған үш орынның әрқайсысы үшін: әмиянге 920 TON, 2-алаңға 45 TON-нан 4 клон, кураторға 50 TON және дамытуға 50 TON.",
      ] },
  ],
  summary: {
    eyebrow: "Жалпы жиынтық", title: "Бір бизнес-орыннан түсетін табыс",
    intro: "Барлық алты алаңнан өткенде бір негізгі бизнес-орыннан алынатын табыс пен құрылымды дамыту әлеуеті.",
    cols: { platform: "Алаң", income: "Табыс", clones: "Клондар", ref: "Рефералдық" },
    refShort: "Реф.", total: "Барлығы",
    rows: [
      { platform: "1-алаң", clones: "—", ref: "—" },
      { platform: "2-алаң", clones: "4", ref: "—" },
      { platform: "3-алаң", clones: "6", ref: "20 TON" },
      { platform: "4-алаң", clones: "12", ref: "40 TON" },
      { platform: "5-алаң", clones: "16", ref: "80 TON" },
      { platform: "6-алаң", clones: "12 → 2 ал.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> тікелей табыс, құрылымды нығайтуға арналған <b class="text-gold">50</b> жаңа «клон» және <b class="text-gold">290 TON</b> рефералдық бонус — бұл бір негізгі бизнес-орыннан алған нәтижеңіз, алтыншы алаңдағы тұрақты реинвест пен клондарды есептемегенде.',
  },
  extras: {
    eyebrow: "Бірегей ерекшеліктер", title: "MULTI Matrix маркетингінің ерекшеліктері",
    items: [
      { title: "Икемді кеңейту мүмкіндіктері", text: "Кез келген алаңда өз қалауыңыз бойынша қосымша бизнес-орындарды сатып алу мүмкіндігі." },
      { title: "«Келесі орын» функциясы", text: "Құрылымыңыздың жылдам өсуі үшін оңтайлы позицияны автоматты түрде таңдайды." },
      { title: "6-алаңдағы реинвест", text: "Тұрақты циклдік табыс: бірінші орын жабылғанда сол алаңда автоматты түрде жаңа клон пайда болады." },
      { title: "Клондарды басқару", text: "Клондарды қажетті серіктестерге бағыттап, басым бизнес-алаңдардың жабылуын жеделдетіңіз." },
      { title: "Автоматты өтулер", text: "Әр алаңдағы жинақтар келесісін автоматты түрде ашады — қолмен әрекет қажет емес." },
    ],
  },
  cta: {
    eyebrow: "Қосылыңыз", title: "MULTI Matrix-тен бастаңыз",
    subtitle: "Алты алаң, автоматты өтулер, клондар, реинвест және болжамды өсім — барлығы TON-дағы бір бизнес-жүйеде.",
    registerBtn: "MULTI Matrix-ке тіркелу", backBtn: "Барлық серіктестік бағдарламалар",
  },
};

/* ---------- Polish ---------- */

const pl: MMDict = {
  docTitle: "MULTI Matrix — Program partnerski · Crypto Style",
  back: "Wszystkie programy partnerskie",
  nav: { intro: "O programie", income: "4 rodzaje dochodu", platforms: "Platformy", summary: "Podsumowanie", extras: "Zarządzanie", cta: "Start" },
  hero: {
    eyebrow: "Program partnerski",
    title2: "Innowacyjny system biznesowy dla przedsiębiorców",
    subtitle:
      "MULTI Matrix to system biznesowy zaprojektowany do skalowania Twojej działalności i zwiększania dochodów. Unikalny model macierzowy z automatyczną duplikacją miejsc biznesowych i zarządzaniem strukturą.",
    stats: { platforms: "Platformy", minEntry: "Min. wejście", directIncome: "Bezpośredni dochód", newClones: "Nowe klony" },
    videoHint: "Wideo się nie ładuje? Wybierz inne źródło:",
    videoTitle: "Prezentacja MULTI Matrix",
  },
  income: {
    eyebrow: "Cztery rodzaje dochodu", title: "Wielokanałowy system zysku",
    intro: "MULTI Matrix oferuje cztery kanały dochodu — dla maksymalnej rentowności z jednego głównego miejsca biznesowego.",
    types: [
      { title: "Główny dochód z marketingu", text: "Przy zamknięciu określonych miejsc w Twoich platformach otrzymujesz wypłaty zgodnie z planem marketingowym." },
      { title: "Duplikacja dochodu", text: "System tworzy dodatkowe miejsca biznesowe (klony) z własnymi platformami — one także się zamykają i przynoszą dochód jak miejsce główne." },
      { title: "Bonus za polecenie", text: "Dodatkowe wypłaty za zamknięcie platform zaproszonych przez Ciebie partnerów." },
      { title: "Duplikacja bonusu za polecenie", text: "U Twoich partnerów również powstają dodatkowe miejsca biznesowe. Marketing przewiduje bonus za polecenie także za klony Twoich partnerów." },
    ],
  },
  platforms: {
    eyebrow: "6 platform biznesowych", title: "Siedmioosobowa matryca binarna",
    intro: "Podstawą systemu jest siedmioosobowa, niepodzielna matryca binarna. Na szczycie jesteś Ty, pierwsza linia (2 miejsca) to partnerzy, druga linia (4 miejsca) to źródło dochodu. Pełne zamknięcie drugiej linii automatycznie otwiera następną platformę.",
    of: (i, total) => `Platforma ${i} z ${total}`,
    costLabel: "Koszt miejsca", incomeLabel: "Dochód", distribution: "Dystrybucja",
    transitionLabel: "Przejście", reinvestBadge: "Reinvest · 1 200 TON",
    reinvestText: "Ostatnia platforma zapewnia stały cykliczny dochód: zamknięcie pierwszego miejsca automatycznie tworzy nowego klona na tej samej platformie.",
    you: "Ty",
  },
  seat: {
    wallet: (a) => `${a} na portfel`,
    accum: (a) => `${a} akumulacja`,
    curator: (a) => `${a} dla kuratora`,
    grow: (a) => `${a} na rozwój`,
    clonesP1: (n) => `${n} klonów po 15 TON na platformę 1`,
    clonesP2: (n) => `${n} klonów po 45 TON na platformę 2`,
    reinvest: "REINVEST 1 200 TON — nowy klon na tej samej platformie",
  },
  platformStrings: [
    { title: "Platforma 1 · Początek drogi", incomeSummary: "15 TON",
      incomeNote: [
        "Zamknięcie jednego z czterech dolnych miejsc przynosi Ci 15 TON prosto na portfel.",
        "Pełne zamknięcie pozostałych trzech miejsc drugiej linii przynosi łącznie 45 TON.",
      ],
      transitionText: "45 TON zostaje automatycznie skierowane na otwarcie Twojej drugiej platformy biznesowej.",
      transitionTo: "Platforma 2" },
    { title: "Platforma 2 · Rozszerzenie możliwości", incomeSummary: "20 TON + 4 klony",
      incomeNote: [
        "Zamknięcie 1. i 3. miejsca przynosi po 10 TON od razu na portfel.",
        "Zamknięcie 2. i 4. miejsca tworzy 2 klony po 15 TON, które wchodzą do pierwszej matrycy.",
      ],
      transitionText: "Pełne zamknięcie drugiej linii akumuluje 100 TON, które automatycznie aktywują trzecią platformę biznesową.",
      transitionTo: "Platforma 3" },
    { title: "Platforma 3 · Przyspieszenie wzrostu", incomeSummary: "50 TON + 6 klonów",
      incomeNote: [
        "Zamknięcie 1. i 3. miejsca daje 25 TON na portfel i 10 TON Twojemu kuratorowi.",
        "Zamknięcie 2. i 4. miejsca tworzy 3 klony po 15 TON dla pierwszej matrycy.",
      ],
      transitionText: "Przy pełnym zamknięciu miejsc drugiej linii 240 TON automatycznie kumuluje się na otwarcie czwartej platformy biznesowej.",
      transitionTo: "Platforma 4" },
    { title: "Platforma 4 · Skalowanie dochodu", incomeSummary: "200 TON + 12 klonów",
      incomeNote: [
        "Zamknięcie 1. i 3. miejsca daje 100 TON na portfel i 20 TON Twojemu kuratorowi.",
        "Zamknięcie 2. i 4. miejsca generuje 6 klonów po 15 TON dla pierwszej matrycy, a 20 TON trafia na rozwój systemu.",
      ],
      transitionText: "Przy pełnym zamknięciu miejsc drugiej linii 500 TON automatycznie kumuluje się na otwarcie piątej platformy biznesowej.",
      transitionTo: "Platforma 5" },
    { title: "Platforma 5 · Przełom w kierunku dużego dochodu", incomeSummary: "400 TON + 16 klonów",
      incomeNote: [
        "Zamknięcie 1. i 3. miejsca daje 200 TON na portfel i 40 TON Twojemu kuratorowi.",
        "Zamknięcie 2. i 4. miejsca tworzy 8 klonów po 15 TON dla pierwszej matrycy, a 40 TON idzie na rozwój systemu.",
      ],
      transitionText: "Przy pełnym zamknięciu miejsc drugiej linii 1 200 TON automatycznie kumuluje się na otwarcie ostatniej, szóstej platformy biznesowej.",
      transitionTo: "Platforma 6" },
    { title: "Platforma 6 · Cel finałowy i Reinvest", incomeSummary: "2 760 TON + 12 klonów",
      incomeNote: [
        "Zamknięcie pierwszego miejsca uruchamia REINVEST 1 200 TON — nowy login (klon) automatycznie zajmuje wolne miejsce na tej samej platformie.",
        "Za każde z trzech pozostałych miejsc: 920 TON na portfel, 4 klony po 45 TON na platformę 2, 50 TON dla kuratora i 50 TON na rozwój.",
      ] },
  ],
  summary: {
    eyebrow: "Ogólne podsumowanie", title: "Dochody z jednego miejsca biznesowego",
    intro: "Potencjał zarobku i rozwoju struktury z jednego głównego miejsca biznesowego po przejściu wszystkich sześciu platform.",
    cols: { platform: "Platforma", income: "Dochód", clones: "Klony", ref: "Polecenia" },
    refShort: "Pol.", total: "Razem",
    rows: [
      { platform: "Platforma 1", clones: "—", ref: "—" },
      { platform: "Platforma 2", clones: "4", ref: "—" },
      { platform: "Platforma 3", clones: "6", ref: "20 TON" },
      { platform: "Platforma 4", clones: "12", ref: "40 TON" },
      { platform: "Platforma 5", clones: "16", ref: "80 TON" },
      { platform: "Platforma 6", clones: "12 → 2 pl.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> bezpośredniego dochodu, <b class="text-gold">50</b> nowych „klonów" wzmacniających strukturę i <b class="text-gold">290 TON</b> bonusów za polecenia — to Twój wynik z jednego głównego miejsca biznesowego, nie licząc stałego reinvestu na szóstej platformie i jej klonów.',
  },
  extras: {
    eyebrow: "Unikalne funkcje", title: "Osobliwości marketingu MULTI Matrix",
    items: [
      { title: "Elastyczne możliwości rozbudowy", text: "Możliwość zakupu dodatkowych miejsc biznesowych według uznania na dowolnej platformie." },
      { title: "Funkcja „Następne miejsce”", text: "Automatycznie wybiera optymalną pozycję dla szybkiego wzrostu Twojej struktury." },
      { title: "Reinvest na 6. platformie", text: "Stały cykliczny dochód: zamknięcie pierwszego miejsca automatycznie tworzy nowego klona na tej samej platformie." },
      { title: "Zarządzanie klonami", text: "Kieruj klony do odpowiednich partnerów i przyspieszaj zamykanie priorytetowych platform biznesowych." },
      { title: "Automatyczne przejścia", text: "Akumulacje z każdej platformy automatycznie otwierają następną — bez ręcznych działań." },
    ],
  },
  cta: {
    eyebrow: "Dołącz", title: "Zacznij od MULTI Matrix",
    subtitle: "Sześć platform, automatyczne przejścia, klony, reinvest i przewidywalny wzrost — wszystko w jednym systemie biznesowym na TON.",
    registerBtn: "Rejestracja w MULTI Matrix", backBtn: "Wszystkie programy partnerskie",
  },
};

/* ---------- Hungarian ---------- */

const hu: MMDict = {
  docTitle: "MULTI Matrix — Partnerprogram · Crypto Style",
  back: "Összes partnerprogram",
  nav: { intro: "A programról", income: "4 jövedelemtípus", platforms: "Platformok", summary: "Összegzés", extras: "Kezelés", cta: "Kezdés" },
  hero: {
    eyebrow: "Partnerprogram",
    title2: "Innovatív üzleti rendszer vállalkozóknak",
    subtitle:
      "A MULTI Matrix üzleti rendszer, amelyet arra terveztek, hogy skálázza vállalkozását és növelje jövedelmét. Egyedi mátrix modell az üzleti helyek automatikus duplikálásával és struktúrakezeléssel.",
    stats: { platforms: "Platformok", minEntry: "Min. belépő", directIncome: "Közvetlen jövedelem", newClones: "Új klónok" },
    videoHint: "A videó nem töltődik? Válasszon másik forrást:",
    videoTitle: "MULTI Matrix videó bemutató",
  },
  income: {
    eyebrow: "Négy jövedelemtípus", title: "Többcsatornás profitrendszer",
    intro: "A MULTI Matrix négy jövedelemcsatornát kínál — egyetlen fő üzleti helyről a maximális pénzügyi hozam érdekében.",
    types: [
      { title: "Fő marketingjövedelem", text: "Amikor bizonyos helyek lezárulnak az üzleti platformjain, a marketingterv szerint kap kifizetéseket." },
      { title: "Jövedelem-duplikáció", text: "A rendszer további üzleti helyeket (klónokat) hoz létre saját platformokkal — ezek is lezárulnak, és a fő helyhez hasonlóan hoznak jövedelmet." },
      { title: "Ajánlási bónusz", text: "További pénzjutalmak az Ön által meghívott partnerek platformjainak lezárásáért." },
      { title: "Ajánlási bónusz duplikációja", text: "Partnereinél is további üzleti helyek jönnek létre. A marketing partnerei klónjai után is ajánlási bónuszt biztosít." },
    ],
  },
  platforms: {
    eyebrow: "6 üzleti platform", title: "Hétüléses bináris mátrix",
    intro: "A rendszer alapja egy hétüléses, nem osztható bináris mátrix. A csúcson Ön áll, az első vonal (2 hely) a partnerek, a második vonal (4 hely) a jövedelemforrás. A második vonal teljes lezárása automatikusan megnyitja a következő platformot.",
    of: (i, total) => `${i}. platform / ${total}`,
    costLabel: "Egy hely költsége", incomeLabel: "Jövedelem", distribution: "Elosztás",
    transitionLabel: "Átmenet", reinvestBadge: "Reinvest · 1 200 TON",
    reinvestText: "A záró platform folyamatos ciklikus jövedelmet biztosít: az első hely lezárása automatikusan új klónt hoz létre ugyanezen a platformon.",
    you: "Ön",
  },
  seat: {
    wallet: (a) => `${a} a pénztárcára`,
    accum: (a) => `${a} felhalmozás`,
    curator: (a) => `${a} a kurátornak`,
    grow: (a) => `${a} fejlesztésre`,
    clonesP1: (n) => `${n} klón, egyenként 15 TON, az 1. platformra`,
    clonesP2: (n) => `${n} klón, egyenként 45 TON, a 2. platformra`,
    reinvest: "REINVEST 1 200 TON — új klón ugyanezen a platformon",
  },
  platformStrings: [
    { title: "1. platform · Az út kezdete", incomeSummary: "15 TON",
      incomeNote: [
        "Az alsó négy hely bármelyikének lezárása 15 TON-t hoz közvetlenül a pénztárcájára.",
        "A második vonal fennmaradó három helyének teljes lezárása összesen 45 TON-t hoz.",
      ],
      transitionText: "45 TON automatikusan a második üzleti platformja megnyitására kerül.",
      transitionTo: "2. platform" },
    { title: "2. platform · A lehetőségek bővítése", incomeSummary: "20 TON + 4 klón",
      incomeNote: [
        "Az 1. és a 3. hely lezárása 10-10 TON-t hoz közvetlenül a pénztárcájára.",
        "A 2. és a 4. hely lezárása 2 klónt hoz létre 15 TON-ért, amelyek az első mátrixba lépnek.",
      ],
      transitionText: "A második vonal teljes lezárása 100 TON-t halmoz fel, amely automatikusan aktiválja a harmadik üzleti platformot.",
      transitionTo: "3. platform" },
    { title: "3. platform · A növekedés felgyorsítása", incomeSummary: "50 TON + 6 klón",
      incomeNote: [
        "Az 1. és a 3. hely lezárása 25 TON-t fizet a pénztárcájára és 10 TON-t a kurátorának.",
        "A 2. és a 4. hely lezárása 3 klónt hoz létre 15 TON-ért az első mátrix számára.",
      ],
      transitionText: "A második vonal helyeinek teljes lezárásakor 240 TON automatikusan összegyűlik a negyedik üzleti platform megnyitásához.",
      transitionTo: "4. platform" },
    { title: "4. platform · A jövedelem skálázása", incomeSummary: "200 TON + 12 klón",
      incomeNote: [
        "Az 1. és a 3. hely lezárása 100 TON-t fizet a pénztárcájára és 20 TON-t a kurátorának.",
        "A 2. és a 4. hely lezárása 6 klónt generál 15 TON-ért az első mátrix számára, 20 TON pedig a rendszer fejlesztésére kerül.",
      ],
      transitionText: "A második vonal helyeinek teljes lezárásakor 500 TON automatikusan összegyűlik az ötödik üzleti platform megnyitásához.",
      transitionTo: "5. platform" },
    { title: "5. platform · Áttörés a nagy jövedelem felé", incomeSummary: "400 TON + 16 klón",
      incomeNote: [
        "Az 1. és a 3. hely lezárása 200 TON-t fizet a pénztárcájára és 40 TON-t a kurátorának.",
        "A 2. és a 4. hely lezárása 8 klónt hoz létre 15 TON-ért az első mátrix számára, 40 TON pedig a rendszer fejlesztésére megy.",
      ],
      transitionText: "A második vonal helyeinek teljes lezárásakor 1 200 TON automatikusan összegyűlik a záró, hatodik üzleti platform megnyitásához.",
      transitionTo: "6. platform" },
    { title: "6. platform · Végcél és Reinvest", incomeSummary: "2 760 TON + 12 klón",
      incomeNote: [
        "Az első hely lezárása 1 200 TON REINVESTet indít el — egy új bejelentkezés (klón) automatikusan elfoglalja a szabad helyet ugyanezen a platformon.",
        "A három fennmaradó hely mindegyikéért: 920 TON a pénztárcára, 4 klón 45 TON-ért a 2. platformra, 50 TON a kurátornak és 50 TON a fejlesztésre.",
      ] },
  ],
  summary: {
    eyebrow: "Általános összegzés", title: "Bevétel egyetlen üzleti helyről",
    intro: "Kereseti és struktúrafejlesztési potenciál egyetlen fő üzleti helyről, mind a hat platform végigjárásával.",
    cols: { platform: "Platform", income: "Jövedelem", clones: "Klónok", ref: "Ajánlások" },
    refShort: "Aj.", total: "Összesen",
    rows: [
      { platform: "1. platform", clones: "—", ref: "—" },
      { platform: "2. platform", clones: "4", ref: "—" },
      { platform: "3. platform", clones: "6", ref: "20 TON" },
      { platform: "4. platform", clones: "12", ref: "40 TON" },
      { platform: "5. platform", clones: "16", ref: "80 TON" },
      { platform: "6. platform", clones: "12 → 2 pl.", ref: "150 TON" },
    ],
    incomeValues: ["15 TON", "20 TON", "50 TON", "200 TON", "400 TON", "2 760 TON"],
    finalNoteHtml:
      '<b class="text-gold">3 445 TON</b> közvetlen jövedelem, <b class="text-gold">50</b> új „klón" a struktúra megerősítésére és <b class="text-gold">290 TON</b> ajánlási bónusz — ez az Ön eredménye egyetlen fő üzleti helyről, a hatodik platform állandó reinvestjét és annak klónjait nem számítva.',
  },
  extras: {
    eyebrow: "Egyedi funkciók", title: "A MULTI Matrix marketing sajátosságai",
    items: [
      { title: "Rugalmas bővítési lehetőségek", text: "Lehetőség további üzleti helyek megvásárlására saját belátás szerint bármely platformon." },
      { title: "„Következő hely” funkció", text: "Automatikusan kiválasztja az optimális pozíciót a struktúra gyors növekedéséhez." },
      { title: "Reinvest a 6. platformon", text: "Állandó ciklikus jövedelem: az első hely lezárása automatikusan új klónt hoz létre ugyanezen a platformon." },
      { title: "Klónok kezelése", text: "Irányítsa a klónokat a megfelelő partnerekhez, és gyorsítsa fel a prioritásos üzleti platformok lezárását." },
      { title: "Automatikus átmenetek", text: "Az egyes platformok felhalmozásai automatikusan megnyitják a következőt — kézi beavatkozás nélkül." },
    ],
  },
  cta: {
    eyebrow: "Csatlakozzon", title: "Kezdje a MULTI Matrixszal",
    subtitle: "Hat platform, automatikus átmenetek, klónok, reinvest és kiszámítható növekedés — mindez egyetlen üzleti rendszerben a TON-on.",
    registerBtn: "Regisztráció a MULTI Matrixba", backBtn: "Összes partnerprogram",
  },
};

export const MULTI_MATRIX_DICTS: Record<LangCode, MMDict> = {
  ru, en, de, fr, it, es, pt, uk, kk, pl, hu,
};
