import type { LangCode } from "@/lib/i18n";

/* Neo Club i18n dictionary. Russian is the source of truth; keep amounts & mechanics identical. */

export type NeoClubDict = {
  meta: { docTitle: string };
  nav: {
    about: string; neoLine: string; neoStart: string; neoVip: string;
    summary: string; features: string; extras: string; cta: string; backAll: string;
  };
  hero: {
    eyebrow: string; titleTop: string; titleBottom: string; subtitle: string;
    statPlatforms: string; statMinEntry: string; statDirect: string; statClones: string;
    videoTitle: string; videoFallback: string;
  };
  neoLine: {
    eyebrow: string; title: string;
    subtitleBefore: string; subtitleAfter: string;
    you: string;
    incomeEyebrow: string; incomeItems: [string, string, string];
    noteEyebrow: string; noteText: string;
    walletLine: string;   // "150$ на кошелёк"
    transitionLine: string; // "150$ — переход в Neo Start"
  };
  seat: {
    wallet: (amt: string) => string;
    piggy: (amt: string) => string;
    curator: (amt: string) => string;
    grow: (amt: string) => string;
    clonesToStart1: (n: number) => string;
  };
  neoStart: { eyebrow: string; title: string; subtitle: string };
  neoVip: { eyebrow: string; title: string; subtitle: string };
  platform: {
    label: (i: number, total: number) => string;
    titleNs: (i: number) => string;
    titleNv: (i: number) => string;
    costLabel: string; incomeLabel: string;
    distributionEyebrow: string;
    transitionEyebrow: (amt: string) => string;
  };
  incomeNotes: {
    ns1: string[]; ns2: string[]; ns3: string[]; ns4: string[];
    nv1: string[]; nv2: string[]; nv3: string[];
  };
  transitions: {
    ns1: string; ns2: string; ns3: string; ns4: string;
    nv1: string; nv2: string;
  };
  summary: {
    eyebrow: string; title: string; subtitle: string;
    cols: { platform: string; income: string; clones: string; ref: string; refShort: string };
    totalLabel: string;
    rows: { platform: string; clones: string; ref: string }[];
    incomeValues: string[];
    finalNoteHtml: string;
  };
  features: {
    eyebrow: string; title: string; subtitle: string;
    items: { title: string; text: string }[];
  };
  extras: {
    eyebrow: string; title: string;
    items: { title: string; text: string }[];
  };
  cta: {
    eyebrow: string; title: string; subtitle: string;
    register: string; backAll: string;
  };
};

/* Helper: platform title suffix by language uses a word for "Platform" + index. */
const pw = (word: string) => (i: number) => `${word} ${i + 1}`;
const pl = (word: string, ofWord: string) =>
  (i: number, total: number) => `${word} ${i + 1} ${ofWord} ${total}`;

/* ---------- RU (source of truth) ---------- */
const ru: NeoClubDict = {
  meta: { docTitle: "Neo Club — Партнёрская программа · Crypto Style" },
  nav: {
    about: "О программе", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Сводка", features: "Особенности", extras: "Управление", cta: "Старт",
    backAll: "Все партнёрские программы",
  },
  hero: {
    eyebrow: "Партнёрская программа",
    titleTop: "Neo Club", titleBottom: "Бизнес-система для предпринимателей",
    subtitle:
      "Neo Club — система, разработанная для масштабирования вашего дела и увеличения дохода. Рассмотрим ключевые особенности, преимущества и механизмы работы этой модели.",
    statPlatforms: "Площадок", statMinEntry: "Мин. вход",
    statDirect: "Прямой доход", statClones: "Новых клонов",
    videoTitle: "Видео презентация Neo Club",
    videoFallback: "Видео не открывается? Выберите другой источник:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — линейный маркетинг",
    subtitleBefore:
      "Начало маркетинга Neo Club — это Neo Line: одна площадка с линейным маркетингом, без ограничений в первой линии. Стоимость бизнес-места составляет ",
    subtitleAfter: ".",
    you: "Вы",
    incomeEyebrow: "Доход · от 150$",
    incomeItems: [
      "За первое закрытое место вы получаете 150$ на кошелёк.",
      "Закрыв второе место, вы автоматически попадаете во вторую часть программы — Neo Start за 150$.",
      "За каждые последующие закрытые места вы получаете по 150$ на кошелёк.",
    ],
    noteEyebrow: "Примечание",
    noteText:
      "Если у вас уже есть место в первой площадке Neo Start, закрыв второе место, вы получаете деньги на кошелёк.",
    walletLine: "150$ на кошелёк",
    transitionLine: "150$ — переход в Neo Start",
  },
  seat: {
    wallet: (a) => `${a} на кошелёк`,
    piggy: (a) => `${a} накопление`,
    curator: (a) => `${a} куратору`,
    grow: (a) => `${a} на развитие`,
    clonesToStart1: (n) => {
      const word = n === 1 ? "клон" : n < 5 ? "клона" : "клонов";
      return `${n} ${word} в Neo Start · Площадка 1`;
    },
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 бизнес-площадки",
    subtitle:
      "Вторая часть программы Neo Club. Каждая площадка имеет собственную стоимость, доход, накопление и клонов. Полное закрытие второй линии автоматически открывает следующую площадку.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 бизнес-площадки",
    subtitle:
      "Финальные площадки маркетинга с максимальным доходом. Переход между ними полностью автоматизирован.",
  },
  platform: {
    label: pl("Площадка", "из"),
    titleNs: (i) => `Neo Start · Площадка ${i + 1}`,
    titleNv: (i) => `Neo VIP · Площадка ${i + 1}`,
    costLabel: "Стоимость места", incomeLabel: "Доход",
    distributionEyebrow: "Распределение",
    transitionEyebrow: (a) => `Переход · ${a}`,
  },
  incomeNotes: {
    ns1: ["За каждое закрытое место вы получаете 50$ на кошелёк."],
    ns2: ["За каждое закрытое место вы получаете 150$ на кошелёк."],
    ns3: [
      "Закрытие 1-го и 3-го места приносит 350$ на кошелёк и 1 клона в первую площадку Neo Start.",
      "Закрытие 2-го и 4-го места приносит 400$ на кошелёк и 100$ вашему куратору.",
    ],
    ns4: [
      "Закрытие 1-го и 3-го места приносит 750$ на кошелёк, 1 клона в первую площадку Neo Start и 100$ идёт на развитие системы.",
      "Закрытие 2-го и 4-го места приносит 650$ на кошелёк и 100$ вашему куратору.",
    ],
    nv1: [
      "Закрытие 1-го и 3-го места приносит 1500$ на кошелёк, 2 клона в первую площадку Neo Start и 200$ идёт на развитие системы.",
      "Закрытие 2-го и 4-го места приносит 1500$ на кошелёк, 2 клона в первую площадку Neo Start и 200$ вашему куратору.",
    ],
    nv2: [
      "За каждое закрытое место вы получаете 4000$ на кошелёк, 3 клона в первую площадку Neo Start; 300$ идёт на развитие системы и 300$ вашему куратору.",
    ],
    nv3: ["Это последняя площадка маркетинга. За каждое закрытое место вы получаете 15 000$ на кошелёк."],
  },
  transitions: {
    ns1: "Полное закрытие мест второй линии суммарно приносит 400$, которые автоматически направляются на открытие вашей второй бизнес-площадки.",
    ns2: "Полное закрытие мест второй линии суммарно приносит 1000$, которые автоматически направляются на открытие вашей третьей бизнес-площадки.",
    ns3: "Полное закрытие мест второй линии суммарно приносит 2000$, которые автоматически направляются на открытие вашей четвёртой бизнес-площадки.",
    ns4: "Полное закрытие мест второй линии суммарно приносит 4200$, которые автоматически направляются на открытие бизнес-площадки Neo VIP.",
    nv1: "Полное закрытие мест второй линии суммарно приносит 8 800$, которые автоматически направляются на открытие второй бизнес-площадки Neo VIP.",
    nv2: "Полное закрытие мест второй линии суммарно приносит 15 000$, которые автоматически направляются на открытие третьей бизнес-площадки Neo VIP.",
  },
  summary: {
    eyebrow: "Общая сводка", title: "Доходы с одного бизнес-места",
    subtitle: "Потенциал заработка и развития структуры с одного основного бизнес-места при прохождении всех площадок.",
    cols: { platform: "Площадка", income: "Доход", clones: "Клоны", ref: "Реферальные", refShort: "Реф." },
    totalLabel: "Итого",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200$" },
      { platform: "Neo Start · 4", clones: "4", ref: "200$" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400$" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200$" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200$", "600$", "1 500$", "2 800$", "6 000$", "16 000$", "45 000$"],
    finalNoteHtml:
      '<b class="text-gold">72 100$</b> прямого дохода, <b class="text-gold">26</b> новых «клонов» для усиления структуры и <b class="text-gold">2 000$</b> реферального вознаграждения — это ваш результат с одного основного бизнес-места, не считая клонов.',
  },
  features: {
    eyebrow: "Ключевые преимущества", title: "Особенности маркетинга Neo Club",
    subtitle: "Neo Club предлагает уникальный подход к ведению бизнеса. Ключевые особенности, которые отличают нашу систему.",
    items: [
      { title: "Матричная модель", text: "Основа системы, обеспечивающая чёткую структуру и прогнозируемый рост." },
      { title: "Автоматическая дубликация", text: "«Клоны» расширяют вашу структуру и генерируют дополнительный доход без новых вложений." },
      { title: "Управление структурой", text: "Инструменты для эффективного контроля и оптимизации вашей команды и площадок." },
      { title: "Линейка + Тетра", text: "Сочетание линейного и классического матричного маркетинга в одной системе." },
    ],
  },
  extras: {
    eyebrow: "Управление и гибкость", title: "Управление структурой и дополнительные возможности",
    items: [
      { title: "Управление структурой", text: "Встроенная функция позволяет стратегически направлять потоки партнёров и клонов для закрытия наиболее приоритетных позиций на площадках." },
      { title: "Дополнительные бизнес-места", text: "Возможность приобретать дополнительные бизнес-места на любой площадке по вашему усмотрению." },
      { title: "Старт с любой площадки", text: "Вы можете начать работу с любой площадки маркетинга, которая соответствует вашим целям." },
      { title: "Функция «Следующее место»", text: "Автоматизирует выбор оптимальной позиции для быстрого роста структуры." },
      { title: "Взнос на развитие", text: "Единоразовый взнос 5$ на развитие системы при активации." },
    ],
  },
  cta: {
    eyebrow: "Присоединяйтесь", title: "Начните с Neo Club",
    subtitle: "Восемь площадок, автоматические переходы, клоны и прогнозируемый рост — всё в одной бизнес-системе.",
    register: "Регистрация в Neo Club", backAll: "Все партнёрские программы",
  },
};

/* ---------- EN ---------- */
const en: NeoClubDict = {
  meta: { docTitle: "Neo Club — Partner Program · Crypto Style" },
  nav: { about: "About", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Summary", features: "Features", extras: "Management", cta: "Start",
    backAll: "All partner programs" },
  hero: {
    eyebrow: "Partner program",
    titleTop: "Neo Club", titleBottom: "A business system for entrepreneurs",
    subtitle:
      "Neo Club is a system designed to scale your business and grow your income. Let's look at the key features, benefits, and mechanics of this model.",
    statPlatforms: "Platforms", statMinEntry: "Min. entry",
    statDirect: "Direct income", statClones: "New clones",
    videoTitle: "Neo Club video presentation",
    videoFallback: "Video won't open? Choose another source:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — linear marketing",
    subtitleBefore:
      "The Neo Club marketing starts with Neo Line: one platform with linear marketing and no limits on the first line. The business seat costs ",
    subtitleAfter: ".",
    you: "You",
    incomeEyebrow: "Income · from $150",
    incomeItems: [
      "For the first closed seat you receive $150 to your wallet.",
      "When you close the second seat, you are automatically moved to the second part of the program — Neo Start for $150.",
      "For every subsequent closed seat you receive $150 to your wallet.",
    ],
    noteEyebrow: "Note",
    noteText:
      "If you already have a seat on the first Neo Start platform, closing the second seat pays you in cash to your wallet.",
    walletLine: "$150 to wallet",
    transitionLine: "$150 — transition to Neo Start",
  },
  seat: {
    wallet: (a) => `${a} to wallet`,
    piggy: (a) => `${a} accumulation`,
    curator: (a) => `${a} to curator`,
    grow: (a) => `${a} to development`,
    clonesToStart1: (n) => `${n} ${n === 1 ? "clone" : "clones"} to Neo Start · Platform 1`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 business platforms",
    subtitle:
      "The second part of the Neo Club program. Each platform has its own cost, income, accumulation and clones. Fully closing the second line automatically opens the next platform.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 business platforms",
    subtitle: "The final marketing platforms with maximum income. Transitions between them are fully automated.",
  },
  platform: {
    label: pl("Platform", "of"),
    titleNs: (i) => `Neo Start · Platform ${i + 1}`,
    titleNv: (i) => `Neo VIP · Platform ${i + 1}`,
    costLabel: "Seat cost", incomeLabel: "Income",
    distributionEyebrow: "Distribution",
    transitionEyebrow: (a) => `Transition · ${a}`,
  },
  incomeNotes: {
    ns1: ["For every closed seat you receive $50 to your wallet."],
    ns2: ["For every closed seat you receive $150 to your wallet."],
    ns3: [
      "Closing the 1st and 3rd seats brings $350 to your wallet and 1 clone to the first Neo Start platform.",
      "Closing the 2nd and 4th seats brings $400 to your wallet and $100 to your curator.",
    ],
    ns4: [
      "Closing the 1st and 3rd seats brings $750 to your wallet, 1 clone to the first Neo Start platform and $100 goes to system development.",
      "Closing the 2nd and 4th seats brings $650 to your wallet and $100 to your curator.",
    ],
    nv1: [
      "Closing the 1st and 3rd seats brings $1500 to your wallet, 2 clones to the first Neo Start platform and $200 goes to system development.",
      "Closing the 2nd and 4th seats brings $1500 to your wallet, 2 clones to the first Neo Start platform and $200 to your curator.",
    ],
    nv2: [
      "For every closed seat you receive $4000 to your wallet, 3 clones to the first Neo Start platform; $300 goes to system development and $300 to your curator.",
    ],
    nv3: ["This is the final marketing platform. For every closed seat you receive $15,000 to your wallet."],
  },
  transitions: {
    ns1: "Fully closing the second-line seats brings a total of $400, which is automatically directed to open your second business platform.",
    ns2: "Fully closing the second-line seats brings a total of $1000, which is automatically directed to open your third business platform.",
    ns3: "Fully closing the second-line seats brings a total of $2000, which is automatically directed to open your fourth business platform.",
    ns4: "Fully closing the second-line seats brings a total of $4200, which is automatically directed to open the Neo VIP business platform.",
    nv1: "Fully closing the second-line seats brings a total of $8,800, which is automatically directed to open the second Neo VIP business platform.",
    nv2: "Fully closing the second-line seats brings a total of $15,000, which is automatically directed to open the third Neo VIP business platform.",
  },
  summary: {
    eyebrow: "Overall summary", title: "Income from a single business seat",
    subtitle: "The earning and structure-growth potential from a single main business seat as you pass through all platforms.",
    cols: { platform: "Platform", income: "Income", clones: "Clones", ref: "Referrals", refShort: "Ref." },
    totalLabel: "Total",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "$200" },
      { platform: "Neo Start · 4", clones: "4", ref: "$200" },
      { platform: "Neo VIP · 1", clones: "8", ref: "$400" },
      { platform: "Neo VIP · 2", clones: "12", ref: "$1,200" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["$200", "$600", "$1,500", "$2,800", "$6,000", "$16,000", "$45,000"],
    finalNoteHtml:
      '<b class="text-gold">$72,100</b> in direct income, <b class="text-gold">26</b> new "clones" to strengthen your structure and <b class="text-gold">$2,000</b> in referral rewards — this is your result from a single main business seat, not counting clones.',
  },
  features: {
    eyebrow: "Key advantages", title: "Neo Club marketing features",
    subtitle: "Neo Club offers a unique approach to running a business. Here are the key features that set our system apart.",
    items: [
      { title: "Matrix model", text: "The foundation of the system, ensuring a clear structure and predictable growth." },
      { title: "Automatic duplication", text: "\"Clones\" expand your structure and generate extra income without new investments." },
      { title: "Structure management", text: "Tools for effectively controlling and optimizing your team and platforms." },
      { title: "Linear + Tetra", text: "A combination of linear and classic matrix marketing in one system." },
    ],
  },
  extras: {
    eyebrow: "Management & flexibility", title: "Structure management and additional features",
    items: [
      { title: "Structure management", text: "A built-in function lets you strategically direct partner and clone flows to close the highest-priority positions across platforms." },
      { title: "Extra business seats", text: "The ability to buy additional business seats on any platform at your discretion." },
      { title: "Start from any platform", text: "You can begin from any marketing platform that fits your goals." },
      { title: "\"Next seat\" function", text: "Automates the selection of the optimal position for rapid structure growth." },
      { title: "Development fee", text: "A one-time $5 contribution toward system development upon activation." },
    ],
  },
  cta: {
    eyebrow: "Join us", title: "Start with Neo Club",
    subtitle: "Eight platforms, automatic transitions, clones and predictable growth — all in a single business system.",
    register: "Register in Neo Club", backAll: "All partner programs",
  },
};

/* ---------- DE ---------- */
const de: NeoClubDict = {
  meta: { docTitle: "Neo Club — Partnerprogramm · Crypto Style" },
  nav: { about: "Über das Programm", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Übersicht", features: "Merkmale", extras: "Verwaltung", cta: "Start",
    backAll: "Alle Partnerprogramme" },
  hero: {
    eyebrow: "Partnerprogramm",
    titleTop: "Neo Club", titleBottom: "Ein Geschäftssystem für Unternehmer",
    subtitle:
      "Neo Club ist ein System, das dazu entwickelt wurde, Ihr Geschäft zu skalieren und Ihr Einkommen zu steigern. Sehen wir uns die wichtigsten Merkmale, Vorteile und Mechanismen dieses Modells an.",
    statPlatforms: "Plattformen", statMinEntry: "Mindesteinstieg",
    statDirect: "Direktes Einkommen", statClones: "Neue Klone",
    videoTitle: "Neo Club Videopräsentation",
    videoFallback: "Video wird nicht geöffnet? Wählen Sie eine andere Quelle:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — lineares Marketing",
    subtitleBefore:
      "Das Marketing von Neo Club beginnt mit Neo Line: eine Plattform mit linearem Marketing, ohne Begrenzung in der ersten Linie. Der Preis eines Geschäftsplatzes beträgt ",
    subtitleAfter: ".",
    you: "Sie",
    incomeEyebrow: "Einkommen · ab 150$",
    incomeItems: [
      "Für den ersten geschlossenen Platz erhalten Sie 150$ auf Ihre Wallet.",
      "Mit dem Schließen des zweiten Platzes wechseln Sie automatisch in den zweiten Programmteil — Neo Start für 150$.",
      "Für jeden weiteren geschlossenen Platz erhalten Sie jeweils 150$ auf Ihre Wallet.",
    ],
    noteEyebrow: "Hinweis",
    noteText:
      "Wenn Sie bereits einen Platz auf der ersten Neo-Start-Plattform besitzen, wird der zweite geschlossene Platz direkt auf Ihre Wallet ausgezahlt.",
    walletLine: "150$ auf Wallet",
    transitionLine: "150$ — Übergang zu Neo Start",
  },
  seat: {
    wallet: (a) => `${a} auf Wallet`,
    piggy: (a) => `${a} Ansparung`,
    curator: (a) => `${a} an Kurator`,
    grow: (a) => `${a} für Entwicklung`,
    clonesToStart1: (n) => `${n} ${n === 1 ? "Klon" : "Klone"} auf Neo Start · Plattform 1`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 Geschäftsplattformen",
    subtitle:
      "Der zweite Teil des Neo-Club-Programms. Jede Plattform hat eigene Kosten, Einkommen, Ansparung und Klone. Wenn die zweite Linie vollständig geschlossen ist, öffnet sich automatisch die nächste Plattform.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 Geschäftsplattformen",
    subtitle: "Die letzten Marketingplattformen mit maximalem Einkommen. Die Übergänge zwischen ihnen sind vollständig automatisiert.",
  },
  platform: {
    label: pl("Plattform", "von"),
    titleNs: (i) => `Neo Start · Plattform ${i + 1}`,
    titleNv: (i) => `Neo VIP · Plattform ${i + 1}`,
    costLabel: "Platzkosten", incomeLabel: "Einkommen",
    distributionEyebrow: "Verteilung",
    transitionEyebrow: (a) => `Übergang · ${a}`,
  },
  incomeNotes: {
    ns1: ["Für jeden geschlossenen Platz erhalten Sie 50$ auf Ihre Wallet."],
    ns2: ["Für jeden geschlossenen Platz erhalten Sie 150$ auf Ihre Wallet."],
    ns3: [
      "Das Schließen des 1. und 3. Platzes bringt 350$ auf die Wallet und 1 Klon auf die erste Neo-Start-Plattform.",
      "Das Schließen des 2. und 4. Platzes bringt 400$ auf die Wallet und 100$ an Ihren Kurator.",
    ],
    ns4: [
      "Das Schließen des 1. und 3. Platzes bringt 750$ auf die Wallet, 1 Klon auf die erste Neo-Start-Plattform und 100$ fließen in die Systementwicklung.",
      "Das Schließen des 2. und 4. Platzes bringt 650$ auf die Wallet und 100$ an Ihren Kurator.",
    ],
    nv1: [
      "Das Schließen des 1. und 3. Platzes bringt 1500$ auf die Wallet, 2 Klone auf die erste Neo-Start-Plattform und 200$ fließen in die Systementwicklung.",
      "Das Schließen des 2. und 4. Platzes bringt 1500$ auf die Wallet, 2 Klone auf die erste Neo-Start-Plattform und 200$ an Ihren Kurator.",
    ],
    nv2: [
      "Für jeden geschlossenen Platz erhalten Sie 4000$ auf die Wallet, 3 Klone auf die erste Neo-Start-Plattform; 300$ fließen in die Systementwicklung und 300$ an Ihren Kurator.",
    ],
    nv3: ["Dies ist die letzte Marketingplattform. Für jeden geschlossenen Platz erhalten Sie 15 000$ auf Ihre Wallet."],
  },
  transitions: {
    ns1: "Das vollständige Schließen der Plätze der zweiten Linie bringt insgesamt 400$, die automatisch für die Eröffnung Ihrer zweiten Geschäftsplattform verwendet werden.",
    ns2: "Das vollständige Schließen der Plätze der zweiten Linie bringt insgesamt 1000$, die automatisch für die Eröffnung Ihrer dritten Geschäftsplattform verwendet werden.",
    ns3: "Das vollständige Schließen der Plätze der zweiten Linie bringt insgesamt 2000$, die automatisch für die Eröffnung Ihrer vierten Geschäftsplattform verwendet werden.",
    ns4: "Das vollständige Schließen der Plätze der zweiten Linie bringt insgesamt 4200$, die automatisch für die Eröffnung der Neo-VIP-Geschäftsplattform verwendet werden.",
    nv1: "Das vollständige Schließen der Plätze der zweiten Linie bringt insgesamt 8 800$, die automatisch für die Eröffnung der zweiten Neo-VIP-Geschäftsplattform verwendet werden.",
    nv2: "Das vollständige Schließen der Plätze der zweiten Linie bringt insgesamt 15 000$, die automatisch für die Eröffnung der dritten Neo-VIP-Geschäftsplattform verwendet werden.",
  },
  summary: {
    eyebrow: "Gesamtübersicht", title: "Einkommen aus einem Geschäftsplatz",
    subtitle: "Das Verdienst- und Wachstumspotenzial eines einzelnen Hauptgeschäftsplatzes beim Durchlaufen aller Plattformen.",
    cols: { platform: "Plattform", income: "Einkommen", clones: "Klone", ref: "Referral", refShort: "Ref." },
    totalLabel: "Gesamt",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200$" },
      { platform: "Neo Start · 4", clones: "4", ref: "200$" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400$" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200$" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200$", "600$", "1 500$", "2 800$", "6 000$", "16 000$", "45 000$"],
    finalNoteHtml:
      '<b class="text-gold">72 100$</b> direktes Einkommen, <b class="text-gold">26</b> neue „Klone” zur Stärkung Ihrer Struktur und <b class="text-gold">2 000$</b> Referral-Belohnung — das ist Ihr Ergebnis aus einem Hauptgeschäftsplatz, ohne die Klone zu zählen.',
  },
  features: {
    eyebrow: "Wichtige Vorteile", title: "Merkmale des Neo-Club-Marketings",
    subtitle: "Neo Club bietet einen einzigartigen Ansatz zur Führung eines Geschäfts. Die wichtigsten Merkmale, die unser System auszeichnen.",
    items: [
      { title: "Matrixmodell", text: "Die Grundlage des Systems, die eine klare Struktur und vorhersehbares Wachstum sicherstellt." },
      { title: "Automatische Duplizierung", text: "„Klone” erweitern Ihre Struktur und generieren zusätzliches Einkommen ohne neue Investitionen." },
      { title: "Strukturverwaltung", text: "Werkzeuge zur effektiven Kontrolle und Optimierung Ihres Teams und Ihrer Plattformen." },
      { title: "Linear + Tetra", text: "Eine Kombination aus linearem und klassischem Matrix-Marketing in einem System." },
    ],
  },
  extras: {
    eyebrow: "Verwaltung und Flexibilität", title: "Strukturverwaltung und zusätzliche Funktionen",
    items: [
      { title: "Strukturverwaltung", text: "Eine integrierte Funktion erlaubt es, Partner- und Klonströme strategisch zu lenken, um die wichtigsten Positionen auf den Plattformen zu schließen." },
      { title: "Zusätzliche Geschäftsplätze", text: "Die Möglichkeit, zusätzliche Geschäftsplätze auf jeder Plattform nach eigenem Ermessen zu erwerben." },
      { title: "Start von jeder Plattform", text: "Sie können mit jeder Marketingplattform beginnen, die zu Ihren Zielen passt." },
      { title: "Funktion „Nächster Platz”", text: "Automatisiert die Wahl der optimalen Position für schnelles Strukturwachstum." },
      { title: "Entwicklungsbeitrag", text: "Einmaliger Beitrag von 5$ für die Systementwicklung bei der Aktivierung." },
    ],
  },
  cta: {
    eyebrow: "Machen Sie mit", title: "Beginnen Sie mit Neo Club",
    subtitle: "Acht Plattformen, automatische Übergänge, Klone und vorhersehbares Wachstum — alles in einem Geschäftssystem.",
    register: "Registrierung bei Neo Club", backAll: "Alle Partnerprogramme",
  },
};

/* ---------- FR ---------- */
const fr: NeoClubDict = {
  meta: { docTitle: "Neo Club — Programme partenaire · Crypto Style" },
  nav: { about: "À propos", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Résumé", features: "Caractéristiques", extras: "Gestion", cta: "Démarrer",
    backAll: "Tous les programmes partenaires" },
  hero: {
    eyebrow: "Programme partenaire",
    titleTop: "Neo Club", titleBottom: "Un système d'affaires pour entrepreneurs",
    subtitle:
      "Neo Club est un système conçu pour développer votre activité et augmenter vos revenus. Examinons les principales caractéristiques, avantages et mécanismes de ce modèle.",
    statPlatforms: "Plateformes", statMinEntry: "Entrée min.",
    statDirect: "Revenu direct", statClones: "Nouveaux clones",
    videoTitle: "Présentation vidéo Neo Club",
    videoFallback: "La vidéo ne s'ouvre pas ? Choisissez une autre source :",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — marketing linéaire",
    subtitleBefore:
      "Le marketing Neo Club commence par Neo Line : une plateforme avec un marketing linéaire, sans limite sur la première ligne. Le coût d'une place professionnelle est de ",
    subtitleAfter: ".",
    you: "Vous",
    incomeEyebrow: "Revenu · à partir de 150 $",
    incomeItems: [
      "Pour la première place fermée, vous recevez 150 $ sur votre portefeuille.",
      "En fermant la deuxième place, vous passez automatiquement à la deuxième partie du programme — Neo Start pour 150 $.",
      "Pour chaque place suivante fermée, vous recevez 150 $ sur votre portefeuille.",
    ],
    noteEyebrow: "Remarque",
    noteText:
      "Si vous avez déjà une place sur la première plateforme Neo Start, la fermeture de la deuxième place est versée directement sur votre portefeuille.",
    walletLine: "150 $ sur le portefeuille",
    transitionLine: "150 $ — transition vers Neo Start",
  },
  seat: {
    wallet: (a) => `${a} sur le portefeuille`,
    piggy: (a) => `${a} d'épargne`,
    curator: (a) => `${a} au curateur`,
    grow: (a) => `${a} au développement`,
    clonesToStart1: (n) => `${n} ${n === 1 ? "clone" : "clones"} vers Neo Start · Plateforme 1`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 plateformes d'affaires",
    subtitle:
      "La deuxième partie du programme Neo Club. Chaque plateforme a son propre coût, revenu, épargne et clones. La fermeture complète de la deuxième ligne ouvre automatiquement la plateforme suivante.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 plateformes d'affaires",
    subtitle: "Les plateformes marketing finales offrant un revenu maximal. Les transitions entre elles sont entièrement automatisées.",
  },
  platform: {
    label: pl("Plateforme", "sur"),
    titleNs: (i) => `Neo Start · Plateforme ${i + 1}`,
    titleNv: (i) => `Neo VIP · Plateforme ${i + 1}`,
    costLabel: "Coût de la place", incomeLabel: "Revenu",
    distributionEyebrow: "Répartition",
    transitionEyebrow: (a) => `Transition · ${a}`,
  },
  incomeNotes: {
    ns1: ["Pour chaque place fermée, vous recevez 50 $ sur votre portefeuille."],
    ns2: ["Pour chaque place fermée, vous recevez 150 $ sur votre portefeuille."],
    ns3: [
      "La fermeture de la 1ʳᵉ et de la 3ᵉ place rapporte 350 $ sur le portefeuille et 1 clone sur la première plateforme Neo Start.",
      "La fermeture de la 2ᵉ et de la 4ᵉ place rapporte 400 $ sur le portefeuille et 100 $ à votre curateur.",
    ],
    ns4: [
      "La fermeture de la 1ʳᵉ et de la 3ᵉ place rapporte 750 $ sur le portefeuille, 1 clone sur la première plateforme Neo Start et 100 $ vont au développement du système.",
      "La fermeture de la 2ᵉ et de la 4ᵉ place rapporte 650 $ sur le portefeuille et 100 $ à votre curateur.",
    ],
    nv1: [
      "La fermeture de la 1ʳᵉ et de la 3ᵉ place rapporte 1500 $ sur le portefeuille, 2 clones sur la première plateforme Neo Start et 200 $ vont au développement du système.",
      "La fermeture de la 2ᵉ et de la 4ᵉ place rapporte 1500 $ sur le portefeuille, 2 clones sur la première plateforme Neo Start et 200 $ à votre curateur.",
    ],
    nv2: [
      "Pour chaque place fermée, vous recevez 4000 $ sur le portefeuille, 3 clones sur la première plateforme Neo Start ; 300 $ vont au développement du système et 300 $ à votre curateur.",
    ],
    nv3: ["C'est la dernière plateforme marketing. Pour chaque place fermée, vous recevez 15 000 $ sur votre portefeuille."],
  },
  transitions: {
    ns1: "La fermeture complète des places de la deuxième ligne rapporte au total 400 $, qui sont automatiquement affectés à l'ouverture de votre deuxième plateforme d'affaires.",
    ns2: "La fermeture complète des places de la deuxième ligne rapporte au total 1000 $, qui sont automatiquement affectés à l'ouverture de votre troisième plateforme d'affaires.",
    ns3: "La fermeture complète des places de la deuxième ligne rapporte au total 2000 $, qui sont automatiquement affectés à l'ouverture de votre quatrième plateforme d'affaires.",
    ns4: "La fermeture complète des places de la deuxième ligne rapporte au total 4200 $, qui sont automatiquement affectés à l'ouverture de la plateforme d'affaires Neo VIP.",
    nv1: "La fermeture complète des places de la deuxième ligne rapporte au total 8 800 $, qui sont automatiquement affectés à l'ouverture de la deuxième plateforme d'affaires Neo VIP.",
    nv2: "La fermeture complète des places de la deuxième ligne rapporte au total 15 000 $, qui sont automatiquement affectés à l'ouverture de la troisième plateforme d'affaires Neo VIP.",
  },
  summary: {
    eyebrow: "Récapitulatif général", title: "Revenus d'une seule place d'affaires",
    subtitle: "Le potentiel de revenu et de développement de la structure à partir d'une seule place d'affaires principale en passant par toutes les plateformes.",
    cols: { platform: "Plateforme", income: "Revenu", clones: "Clones", ref: "Parrainage", refShort: "Parr." },
    totalLabel: "Total",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200 $" },
      { platform: "Neo Start · 4", clones: "4", ref: "200 $" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400 $" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200 $" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200 $", "600 $", "1 500 $", "2 800 $", "6 000 $", "16 000 $", "45 000 $"],
    finalNoteHtml:
      '<b class="text-gold">72 100 $</b> de revenu direct, <b class="text-gold">26</b> nouveaux « clones » pour renforcer votre structure et <b class="text-gold">2 000 $</b> de récompense de parrainage — voilà votre résultat à partir d\'une seule place d\'affaires principale, sans compter les clones.',
  },
  features: {
    eyebrow: "Avantages clés", title: "Caractéristiques du marketing Neo Club",
    subtitle: "Neo Club propose une approche unique de la gestion d'entreprise. Voici les caractéristiques clés qui distinguent notre système.",
    items: [
      { title: "Modèle matriciel", text: "La base du système, assurant une structure claire et une croissance prévisible." },
      { title: "Duplication automatique", text: "Les « clones » élargissent votre structure et génèrent des revenus supplémentaires sans nouveaux investissements." },
      { title: "Gestion de la structure", text: "Des outils pour contrôler et optimiser efficacement votre équipe et vos plateformes." },
      { title: "Linéaire + Tétra", text: "Une combinaison de marketing linéaire et matriciel classique dans un seul système." },
    ],
  },
  extras: {
    eyebrow: "Gestion et flexibilité", title: "Gestion de la structure et fonctions supplémentaires",
    items: [
      { title: "Gestion de la structure", text: "Une fonction intégrée permet de diriger stratégiquement les flux de partenaires et de clones pour fermer les positions prioritaires sur les plateformes." },
      { title: "Places d'affaires supplémentaires", text: "La possibilité d'acheter des places d'affaires supplémentaires sur n'importe quelle plateforme à votre discrétion." },
      { title: "Départ depuis n'importe quelle plateforme", text: "Vous pouvez commencer par la plateforme marketing qui correspond à vos objectifs." },
      { title: "Fonction « Place suivante »", text: "Automatise le choix de la position optimale pour une croissance rapide de la structure." },
      { title: "Contribution au développement", text: "Contribution unique de 5 $ au développement du système lors de l'activation." },
    ],
  },
  cta: {
    eyebrow: "Rejoignez-nous", title: "Commencez avec Neo Club",
    subtitle: "Huit plateformes, des transitions automatiques, des clones et une croissance prévisible — le tout dans un seul système d'affaires.",
    register: "Inscription à Neo Club", backAll: "Tous les programmes partenaires",
  },
};

/* ---------- IT ---------- */
const it: NeoClubDict = {
  meta: { docTitle: "Neo Club — Programma partner · Crypto Style" },
  nav: { about: "Informazioni", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Riepilogo", features: "Caratteristiche", extras: "Gestione", cta: "Inizia",
    backAll: "Tutti i programmi partner" },
  hero: {
    eyebrow: "Programma partner",
    titleTop: "Neo Club", titleBottom: "Un sistema di business per imprenditori",
    subtitle:
      "Neo Club è un sistema progettato per scalare la tua attività e aumentare i tuoi guadagni. Vediamo le caratteristiche principali, i vantaggi e i meccanismi di questo modello.",
    statPlatforms: "Piattaforme", statMinEntry: "Ingresso min.",
    statDirect: "Reddito diretto", statClones: "Nuovi cloni",
    videoTitle: "Presentazione video Neo Club",
    videoFallback: "Il video non si apre? Scegli un'altra fonte:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — marketing lineare",
    subtitleBefore:
      "Il marketing di Neo Club inizia con Neo Line: una piattaforma con marketing lineare, senza limiti sulla prima linea. Il costo di un posto d'affari è di ",
    subtitleAfter: ".",
    you: "Tu",
    incomeEyebrow: "Reddito · da 150 $",
    incomeItems: [
      "Per il primo posto chiuso ricevi 150 $ sul portafoglio.",
      "Chiudendo il secondo posto, passi automaticamente alla seconda parte del programma — Neo Start per 150 $.",
      "Per ogni posto chiuso successivo ricevi 150 $ sul portafoglio.",
    ],
    noteEyebrow: "Nota",
    noteText:
      "Se hai già un posto sulla prima piattaforma Neo Start, chiudendo il secondo posto ricevi il denaro direttamente sul portafoglio.",
    walletLine: "150 $ sul portafoglio",
    transitionLine: "150 $ — passaggio a Neo Start",
  },
  seat: {
    wallet: (a) => `${a} sul portafoglio`,
    piggy: (a) => `${a} accumulo`,
    curator: (a) => `${a} al curatore`,
    grow: (a) => `${a} allo sviluppo`,
    clonesToStart1: (n) => `${n} ${n === 1 ? "clone" : "cloni"} in Neo Start · Piattaforma 1`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 piattaforme d'affari",
    subtitle:
      "La seconda parte del programma Neo Club. Ogni piattaforma ha un proprio costo, reddito, accumulo e cloni. La chiusura completa della seconda linea apre automaticamente la piattaforma successiva.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 piattaforme d'affari",
    subtitle: "Le piattaforme finali di marketing con il massimo reddito. I passaggi tra di esse sono completamente automatizzati.",
  },
  platform: {
    label: pl("Piattaforma", "di"),
    titleNs: (i) => `Neo Start · Piattaforma ${i + 1}`,
    titleNv: (i) => `Neo VIP · Piattaforma ${i + 1}`,
    costLabel: "Costo del posto", incomeLabel: "Reddito",
    distributionEyebrow: "Distribuzione",
    transitionEyebrow: (a) => `Passaggio · ${a}`,
  },
  incomeNotes: {
    ns1: ["Per ogni posto chiuso ricevi 50 $ sul portafoglio."],
    ns2: ["Per ogni posto chiuso ricevi 150 $ sul portafoglio."],
    ns3: [
      "La chiusura del 1° e del 3° posto porta 350 $ sul portafoglio e 1 clone sulla prima piattaforma Neo Start.",
      "La chiusura del 2° e del 4° posto porta 400 $ sul portafoglio e 100 $ al tuo curatore.",
    ],
    ns4: [
      "La chiusura del 1° e del 3° posto porta 750 $ sul portafoglio, 1 clone sulla prima piattaforma Neo Start e 100 $ vanno allo sviluppo del sistema.",
      "La chiusura del 2° e del 4° posto porta 650 $ sul portafoglio e 100 $ al tuo curatore.",
    ],
    nv1: [
      "La chiusura del 1° e del 3° posto porta 1500 $ sul portafoglio, 2 cloni sulla prima piattaforma Neo Start e 200 $ vanno allo sviluppo del sistema.",
      "La chiusura del 2° e del 4° posto porta 1500 $ sul portafoglio, 2 cloni sulla prima piattaforma Neo Start e 200 $ al tuo curatore.",
    ],
    nv2: [
      "Per ogni posto chiuso ricevi 4000 $ sul portafoglio, 3 cloni sulla prima piattaforma Neo Start; 300 $ vanno allo sviluppo del sistema e 300 $ al tuo curatore.",
    ],
    nv3: ["Questa è l'ultima piattaforma di marketing. Per ogni posto chiuso ricevi 15 000 $ sul portafoglio."],
  },
  transitions: {
    ns1: "La chiusura completa dei posti della seconda linea porta un totale di 400 $, che vengono automaticamente destinati all'apertura della tua seconda piattaforma d'affari.",
    ns2: "La chiusura completa dei posti della seconda linea porta un totale di 1000 $, che vengono automaticamente destinati all'apertura della tua terza piattaforma d'affari.",
    ns3: "La chiusura completa dei posti della seconda linea porta un totale di 2000 $, che vengono automaticamente destinati all'apertura della tua quarta piattaforma d'affari.",
    ns4: "La chiusura completa dei posti della seconda linea porta un totale di 4200 $, che vengono automaticamente destinati all'apertura della piattaforma d'affari Neo VIP.",
    nv1: "La chiusura completa dei posti della seconda linea porta un totale di 8 800 $, che vengono automaticamente destinati all'apertura della seconda piattaforma d'affari Neo VIP.",
    nv2: "La chiusura completa dei posti della seconda linea porta un totale di 15 000 $, che vengono automaticamente destinati all'apertura della terza piattaforma d'affari Neo VIP.",
  },
  summary: {
    eyebrow: "Riepilogo generale", title: "Reddito da un singolo posto d'affari",
    subtitle: "Il potenziale di guadagno e di crescita della struttura da un solo posto d'affari principale passando per tutte le piattaforme.",
    cols: { platform: "Piattaforma", income: "Reddito", clones: "Cloni", ref: "Referral", refShort: "Ref." },
    totalLabel: "Totale",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200 $" },
      { platform: "Neo Start · 4", clones: "4", ref: "200 $" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400 $" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200 $" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200 $", "600 $", "1 500 $", "2 800 $", "6 000 $", "16 000 $", "45 000 $"],
    finalNoteHtml:
      '<b class="text-gold">72 100 $</b> di reddito diretto, <b class="text-gold">26</b> nuovi «cloni» per rafforzare la struttura e <b class="text-gold">2 000 $</b> di ricompensa referral — questo è il tuo risultato da un solo posto d\'affari principale, senza contare i cloni.',
  },
  features: {
    eyebrow: "Vantaggi chiave", title: "Caratteristiche del marketing Neo Club",
    subtitle: "Neo Club offre un approccio unico alla gestione degli affari. Ecco le caratteristiche chiave che distinguono il nostro sistema.",
    items: [
      { title: "Modello a matrice", text: "La base del sistema, che garantisce una struttura chiara e una crescita prevedibile." },
      { title: "Duplicazione automatica", text: "I «cloni» ampliano la tua struttura e generano reddito aggiuntivo senza nuovi investimenti." },
      { title: "Gestione della struttura", text: "Strumenti per controllare e ottimizzare in modo efficace il tuo team e le tue piattaforme." },
      { title: "Lineare + Tetra", text: "Una combinazione di marketing lineare e matriciale classico in un unico sistema." },
    ],
  },
  extras: {
    eyebrow: "Gestione e flessibilità", title: "Gestione della struttura e funzioni aggiuntive",
    items: [
      { title: "Gestione della struttura", text: "Una funzione integrata consente di indirizzare strategicamente i flussi di partner e cloni per chiudere le posizioni più prioritarie sulle piattaforme." },
      { title: "Posti d'affari aggiuntivi", text: "La possibilità di acquistare posti d'affari aggiuntivi su qualsiasi piattaforma a tua discrezione." },
      { title: "Partenza da qualsiasi piattaforma", text: "Puoi iniziare da qualsiasi piattaforma di marketing che si adatta ai tuoi obiettivi." },
      { title: "Funzione «Posto successivo»", text: "Automatizza la scelta della posizione ottimale per una rapida crescita della struttura." },
      { title: "Contributo allo sviluppo", text: "Contributo una tantum di 5 $ per lo sviluppo del sistema all'attivazione." },
    ],
  },
  cta: {
    eyebrow: "Unisciti a noi", title: "Inizia con Neo Club",
    subtitle: "Otto piattaforme, transizioni automatiche, cloni e crescita prevedibile — il tutto in un unico sistema di business.",
    register: "Registrazione a Neo Club", backAll: "Tutti i programmi partner",
  },
};

/* ---------- ES ---------- */
const es: NeoClubDict = {
  meta: { docTitle: "Neo Club — Programa de socios · Crypto Style" },
  nav: { about: "Acerca de", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Resumen", features: "Características", extras: "Gestión", cta: "Comenzar",
    backAll: "Todos los programas de socios" },
  hero: {
    eyebrow: "Programa de socios",
    titleTop: "Neo Club", titleBottom: "Un sistema de negocio para emprendedores",
    subtitle:
      "Neo Club es un sistema diseñado para escalar tu negocio y aumentar tus ingresos. Veamos las principales características, ventajas y mecanismos de este modelo.",
    statPlatforms: "Plataformas", statMinEntry: "Entrada mín.",
    statDirect: "Ingreso directo", statClones: "Nuevos clones",
    videoTitle: "Presentación en video de Neo Club",
    videoFallback: "¿El video no se abre? Elige otra fuente:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — marketing lineal",
    subtitleBefore:
      "El marketing de Neo Club comienza con Neo Line: una plataforma con marketing lineal, sin límites en la primera línea. El coste de una plaza de negocio es de ",
    subtitleAfter: ".",
    you: "Tú",
    incomeEyebrow: "Ingreso · desde 150 $",
    incomeItems: [
      "Por la primera plaza cerrada recibes 150 $ en tu monedero.",
      "Al cerrar la segunda plaza, pasas automáticamente a la segunda parte del programa — Neo Start por 150 $.",
      "Por cada plaza cerrada posterior recibes 150 $ en tu monedero.",
    ],
    noteEyebrow: "Nota",
    noteText:
      "Si ya tienes una plaza en la primera plataforma Neo Start, al cerrar la segunda plaza el dinero se ingresa directamente en tu monedero.",
    walletLine: "150 $ al monedero",
    transitionLine: "150 $ — transición a Neo Start",
  },
  seat: {
    wallet: (a) => `${a} al monedero`,
    piggy: (a) => `${a} de acumulación`,
    curator: (a) => `${a} al curador`,
    grow: (a) => `${a} al desarrollo`,
    clonesToStart1: (n) => `${n} ${n === 1 ? "clon" : "clones"} a Neo Start · Plataforma 1`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 plataformas de negocio",
    subtitle:
      "La segunda parte del programa Neo Club. Cada plataforma tiene su propio coste, ingreso, acumulación y clones. El cierre completo de la segunda línea abre automáticamente la siguiente plataforma.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 plataformas de negocio",
    subtitle: "Las plataformas finales de marketing con el máximo ingreso. Las transiciones entre ellas están totalmente automatizadas.",
  },
  platform: {
    label: pl("Plataforma", "de"),
    titleNs: (i) => `Neo Start · Plataforma ${i + 1}`,
    titleNv: (i) => `Neo VIP · Plataforma ${i + 1}`,
    costLabel: "Coste de la plaza", incomeLabel: "Ingreso",
    distributionEyebrow: "Distribución",
    transitionEyebrow: (a) => `Transición · ${a}`,
  },
  incomeNotes: {
    ns1: ["Por cada plaza cerrada recibes 50 $ en tu monedero."],
    ns2: ["Por cada plaza cerrada recibes 150 $ en tu monedero."],
    ns3: [
      "El cierre de la 1.ª y 3.ª plaza aporta 350 $ al monedero y 1 clon en la primera plataforma Neo Start.",
      "El cierre de la 2.ª y 4.ª plaza aporta 400 $ al monedero y 100 $ a tu curador.",
    ],
    ns4: [
      "El cierre de la 1.ª y 3.ª plaza aporta 750 $ al monedero, 1 clon en la primera plataforma Neo Start y 100 $ van al desarrollo del sistema.",
      "El cierre de la 2.ª y 4.ª plaza aporta 650 $ al monedero y 100 $ a tu curador.",
    ],
    nv1: [
      "El cierre de la 1.ª y 3.ª plaza aporta 1500 $ al monedero, 2 clones en la primera plataforma Neo Start y 200 $ van al desarrollo del sistema.",
      "El cierre de la 2.ª y 4.ª plaza aporta 1500 $ al monedero, 2 clones en la primera plataforma Neo Start y 200 $ a tu curador.",
    ],
    nv2: [
      "Por cada plaza cerrada recibes 4000 $ al monedero, 3 clones en la primera plataforma Neo Start; 300 $ van al desarrollo del sistema y 300 $ a tu curador.",
    ],
    nv3: ["Esta es la última plataforma de marketing. Por cada plaza cerrada recibes 15 000 $ en tu monedero."],
  },
  transitions: {
    ns1: "El cierre completo de las plazas de la segunda línea aporta un total de 400 $, que se destinan automáticamente a abrir tu segunda plataforma de negocio.",
    ns2: "El cierre completo de las plazas de la segunda línea aporta un total de 1000 $, que se destinan automáticamente a abrir tu tercera plataforma de negocio.",
    ns3: "El cierre completo de las plazas de la segunda línea aporta un total de 2000 $, que se destinan automáticamente a abrir tu cuarta plataforma de negocio.",
    ns4: "El cierre completo de las plazas de la segunda línea aporta un total de 4200 $, que se destinan automáticamente a abrir la plataforma de negocio Neo VIP.",
    nv1: "El cierre completo de las plazas de la segunda línea aporta un total de 8 800 $, que se destinan automáticamente a abrir la segunda plataforma de negocio Neo VIP.",
    nv2: "El cierre completo de las plazas de la segunda línea aporta un total de 15 000 $, que se destinan automáticamente a abrir la tercera plataforma de negocio Neo VIP.",
  },
  summary: {
    eyebrow: "Resumen general", title: "Ingresos con una sola plaza de negocio",
    subtitle: "El potencial de ganancias y desarrollo de la estructura desde una sola plaza principal al pasar por todas las plataformas.",
    cols: { platform: "Plataforma", income: "Ingreso", clones: "Clones", ref: "Referidos", refShort: "Ref." },
    totalLabel: "Total",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200 $" },
      { platform: "Neo Start · 4", clones: "4", ref: "200 $" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400 $" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200 $" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200 $", "600 $", "1 500 $", "2 800 $", "6 000 $", "16 000 $", "45 000 $"],
    finalNoteHtml:
      '<b class="text-gold">72 100 $</b> de ingreso directo, <b class="text-gold">26</b> nuevos «clones» para reforzar tu estructura y <b class="text-gold">2 000 $</b> de recompensa por referidos — este es tu resultado desde una sola plaza principal, sin contar los clones.',
  },
  features: {
    eyebrow: "Ventajas clave", title: "Características del marketing de Neo Club",
    subtitle: "Neo Club ofrece un enfoque único para gestionar un negocio. Aquí están las características clave que distinguen a nuestro sistema.",
    items: [
      { title: "Modelo matricial", text: "La base del sistema, que asegura una estructura clara y un crecimiento predecible." },
      { title: "Duplicación automática", text: "Los «clones» amplían tu estructura y generan ingresos adicionales sin nuevas inversiones." },
      { title: "Gestión de la estructura", text: "Herramientas para controlar y optimizar de forma eficaz tu equipo y tus plataformas." },
      { title: "Lineal + Tetra", text: "Una combinación de marketing lineal y matricial clásico en un solo sistema." },
    ],
  },
  extras: {
    eyebrow: "Gestión y flexibilidad", title: "Gestión de la estructura y funciones adicionales",
    items: [
      { title: "Gestión de la estructura", text: "Una función integrada permite dirigir estratégicamente los flujos de socios y clones para cerrar las posiciones prioritarias en las plataformas." },
      { title: "Plazas de negocio adicionales", text: "La posibilidad de comprar plazas de negocio adicionales en cualquier plataforma a tu criterio." },
      { title: "Inicio desde cualquier plataforma", text: "Puedes comenzar por la plataforma de marketing que se ajuste a tus objetivos." },
      { title: "Función «Siguiente plaza»", text: "Automatiza la elección de la posición óptima para un crecimiento rápido de la estructura." },
      { title: "Aporte al desarrollo", text: "Aporte único de 5 $ al desarrollo del sistema al activarse." },
    ],
  },
  cta: {
    eyebrow: "Únete", title: "Comienza con Neo Club",
    subtitle: "Ocho plataformas, transiciones automáticas, clones y crecimiento predecible — todo en un solo sistema de negocio.",
    register: "Registro en Neo Club", backAll: "Todos los programas de socios",
  },
};

/* ---------- PT ---------- */
const pt: NeoClubDict = {
  meta: { docTitle: "Neo Club — Programa de parceiros · Crypto Style" },
  nav: { about: "Sobre", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Resumo", features: "Características", extras: "Gestão", cta: "Começar",
    backAll: "Todos os programas de parceiros" },
  hero: {
    eyebrow: "Programa de parceiros",
    titleTop: "Neo Club", titleBottom: "Um sistema de negócio para empreendedores",
    subtitle:
      "Neo Club é um sistema concebido para escalar o seu negócio e aumentar os seus rendimentos. Vamos ver as principais características, vantagens e mecanismos deste modelo.",
    statPlatforms: "Plataformas", statMinEntry: "Entrada mín.",
    statDirect: "Rendimento direto", statClones: "Novos clones",
    videoTitle: "Apresentação em vídeo do Neo Club",
    videoFallback: "O vídeo não abre? Escolha outra fonte:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — marketing linear",
    subtitleBefore:
      "O marketing do Neo Club começa com o Neo Line: uma plataforma com marketing linear, sem limites na primeira linha. O custo de um lugar de negócio é de ",
    subtitleAfter: ".",
    you: "Você",
    incomeEyebrow: "Rendimento · a partir de 150 $",
    incomeItems: [
      "Pelo primeiro lugar fechado recebe 150 $ na sua carteira.",
      "Ao fechar o segundo lugar, passa automaticamente para a segunda parte do programa — Neo Start por 150 $.",
      "Por cada lugar fechado seguinte recebe 150 $ na sua carteira.",
    ],
    noteEyebrow: "Nota",
    noteText:
      "Se já tiver um lugar na primeira plataforma Neo Start, ao fechar o segundo lugar o dinheiro é creditado diretamente na sua carteira.",
    walletLine: "150 $ para a carteira",
    transitionLine: "150 $ — transição para o Neo Start",
  },
  seat: {
    wallet: (a) => `${a} para a carteira`,
    piggy: (a) => `${a} de acumulação`,
    curator: (a) => `${a} ao curador`,
    grow: (a) => `${a} para o desenvolvimento`,
    clonesToStart1: (n) => `${n} ${n === 1 ? "clone" : "clones"} para Neo Start · Plataforma 1`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 plataformas de negócio",
    subtitle:
      "A segunda parte do programa Neo Club. Cada plataforma tem o seu próprio custo, rendimento, acumulação e clones. O fecho completo da segunda linha abre automaticamente a plataforma seguinte.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 plataformas de negócio",
    subtitle: "As plataformas finais de marketing com rendimento máximo. As transições entre elas são totalmente automatizadas.",
  },
  platform: {
    label: pl("Plataforma", "de"),
    titleNs: (i) => `Neo Start · Plataforma ${i + 1}`,
    titleNv: (i) => `Neo VIP · Plataforma ${i + 1}`,
    costLabel: "Custo do lugar", incomeLabel: "Rendimento",
    distributionEyebrow: "Distribuição",
    transitionEyebrow: (a) => `Transição · ${a}`,
  },
  incomeNotes: {
    ns1: ["Por cada lugar fechado recebe 50 $ na sua carteira."],
    ns2: ["Por cada lugar fechado recebe 150 $ na sua carteira."],
    ns3: [
      "O fecho do 1.º e do 3.º lugar traz 350 $ para a carteira e 1 clone para a primeira plataforma Neo Start.",
      "O fecho do 2.º e do 4.º lugar traz 400 $ para a carteira e 100 $ ao seu curador.",
    ],
    ns4: [
      "O fecho do 1.º e do 3.º lugar traz 750 $ para a carteira, 1 clone para a primeira plataforma Neo Start e 100 $ vão para o desenvolvimento do sistema.",
      "O fecho do 2.º e do 4.º lugar traz 650 $ para a carteira e 100 $ ao seu curador.",
    ],
    nv1: [
      "O fecho do 1.º e do 3.º lugar traz 1500 $ para a carteira, 2 clones para a primeira plataforma Neo Start e 200 $ vão para o desenvolvimento do sistema.",
      "O fecho do 2.º e do 4.º lugar traz 1500 $ para a carteira, 2 clones para a primeira plataforma Neo Start e 200 $ ao seu curador.",
    ],
    nv2: [
      "Por cada lugar fechado recebe 4000 $ para a carteira, 3 clones para a primeira plataforma Neo Start; 300 $ vão para o desenvolvimento do sistema e 300 $ ao seu curador.",
    ],
    nv3: ["Esta é a última plataforma de marketing. Por cada lugar fechado recebe 15 000 $ na sua carteira."],
  },
  transitions: {
    ns1: "O fecho completo dos lugares da segunda linha traz um total de 400 $, que são automaticamente destinados à abertura da sua segunda plataforma de negócio.",
    ns2: "O fecho completo dos lugares da segunda linha traz um total de 1000 $, que são automaticamente destinados à abertura da sua terceira plataforma de negócio.",
    ns3: "O fecho completo dos lugares da segunda linha traz um total de 2000 $, que são automaticamente destinados à abertura da sua quarta plataforma de negócio.",
    ns4: "O fecho completo dos lugares da segunda linha traz um total de 4200 $, que são automaticamente destinados à abertura da plataforma de negócio Neo VIP.",
    nv1: "O fecho completo dos lugares da segunda linha traz um total de 8 800 $, que são automaticamente destinados à abertura da segunda plataforma de negócio Neo VIP.",
    nv2: "O fecho completo dos lugares da segunda linha traz um total de 15 000 $, que são automaticamente destinados à abertura da terceira plataforma de negócio Neo VIP.",
  },
  summary: {
    eyebrow: "Resumo geral", title: "Rendimentos de um único lugar de negócio",
    subtitle: "O potencial de rendimentos e de desenvolvimento da estrutura a partir de um único lugar principal ao passar por todas as plataformas.",
    cols: { platform: "Plataforma", income: "Rendimento", clones: "Clones", ref: "Referências", refShort: "Ref." },
    totalLabel: "Total",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200 $" },
      { platform: "Neo Start · 4", clones: "4", ref: "200 $" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400 $" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200 $" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200 $", "600 $", "1 500 $", "2 800 $", "6 000 $", "16 000 $", "45 000 $"],
    finalNoteHtml:
      '<b class="text-gold">72 100 $</b> de rendimento direto, <b class="text-gold">26</b> novos «clones» para reforçar a estrutura e <b class="text-gold">2 000 $</b> de recompensa por referências — este é o seu resultado a partir de um único lugar principal, sem contar os clones.',
  },
  features: {
    eyebrow: "Vantagens-chave", title: "Características do marketing Neo Club",
    subtitle: "Neo Club oferece uma abordagem única à gestão de negócios. Estas são as características-chave que distinguem o nosso sistema.",
    items: [
      { title: "Modelo matricial", text: "A base do sistema, que garante uma estrutura clara e um crescimento previsível." },
      { title: "Duplicação automática", text: "Os «clones» ampliam a sua estrutura e geram rendimento adicional sem novos investimentos." },
      { title: "Gestão da estrutura", text: "Ferramentas para controlar e otimizar de forma eficaz a sua equipa e as suas plataformas." },
      { title: "Linear + Tetra", text: "Uma combinação de marketing linear e matricial clássico num único sistema." },
    ],
  },
  extras: {
    eyebrow: "Gestão e flexibilidade", title: "Gestão da estrutura e funções adicionais",
    items: [
      { title: "Gestão da estrutura", text: "Uma função integrada permite direcionar estrategicamente os fluxos de parceiros e clones para fechar as posições mais prioritárias nas plataformas." },
      { title: "Lugares de negócio adicionais", text: "A possibilidade de adquirir lugares de negócio adicionais em qualquer plataforma ao seu critério." },
      { title: "Início a partir de qualquer plataforma", text: "Pode começar por qualquer plataforma de marketing que corresponda aos seus objetivos." },
      { title: "Função «Próximo lugar»", text: "Automatiza a escolha da posição ideal para o crescimento rápido da estrutura." },
      { title: "Contribuição para o desenvolvimento", text: "Contribuição única de 5 $ para o desenvolvimento do sistema na ativação." },
    ],
  },
  cta: {
    eyebrow: "Junte-se a nós", title: "Comece com o Neo Club",
    subtitle: "Oito plataformas, transições automáticas, clones e crescimento previsível — tudo num único sistema de negócio.",
    register: "Registo no Neo Club", backAll: "Todos os programas de parceiros",
  },
};

/* ---------- UK ---------- */
const uk: NeoClubDict = {
  meta: { docTitle: "Neo Club — Партнерська програма · Crypto Style" },
  nav: { about: "Про програму", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Зведення", features: "Особливості", extras: "Керування", cta: "Старт",
    backAll: "Усі партнерські програми" },
  hero: {
    eyebrow: "Партнерська програма",
    titleTop: "Neo Club", titleBottom: "Бізнес-система для підприємців",
    subtitle:
      "Neo Club — це система, розроблена для масштабування вашої справи та збільшення доходу. Розглянемо ключові особливості, переваги та механізми роботи цієї моделі.",
    statPlatforms: "Майданчиків", statMinEntry: "Мін. вхід",
    statDirect: "Прямий дохід", statClones: "Нових клонів",
    videoTitle: "Відеопрезентація Neo Club",
    videoFallback: "Відео не відкривається? Оберіть інше джерело:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — лінійний маркетинг",
    subtitleBefore:
      "Маркетинг Neo Club починається з Neo Line: один майданчик із лінійним маркетингом, без обмежень у першій лінії. Вартість бізнес-місця становить ",
    subtitleAfter: ".",
    you: "Ви",
    incomeEyebrow: "Дохід · від 150$",
    incomeItems: [
      "За перше закрите місце ви отримуєте 150$ на гаманець.",
      "Закривши друге місце, ви автоматично переходите до другої частини програми — Neo Start за 150$.",
      "За кожні наступні закриті місця ви отримуєте по 150$ на гаманець.",
    ],
    noteEyebrow: "Примітка",
    noteText:
      "Якщо у вас вже є місце на першому майданчику Neo Start, при закритті другого місця ви отримуєте гроші на гаманець.",
    walletLine: "150$ на гаманець",
    transitionLine: "150$ — перехід у Neo Start",
  },
  seat: {
    wallet: (a) => `${a} на гаманець`,
    piggy: (a) => `${a} накопичення`,
    curator: (a) => `${a} куратору`,
    grow: (a) => `${a} на розвиток`,
    clonesToStart1: (n) => {
      const w = n === 1 ? "клон" : n < 5 ? "клони" : "клонів";
      return `${n} ${w} у Neo Start · Майданчик 1`;
    },
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 бізнес-майданчики",
    subtitle:
      "Друга частина програми Neo Club. Кожен майданчик має власну вартість, дохід, накопичення та клонів. Повне закриття другої лінії автоматично відкриває наступний майданчик.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 бізнес-майданчики",
    subtitle: "Фінальні майданчики маркетингу з максимальним доходом. Переходи між ними повністю автоматизовані.",
  },
  platform: {
    label: pl("Майданчик", "з"),
    titleNs: (i) => `Neo Start · Майданчик ${i + 1}`,
    titleNv: (i) => `Neo VIP · Майданчик ${i + 1}`,
    costLabel: "Вартість місця", incomeLabel: "Дохід",
    distributionEyebrow: "Розподіл",
    transitionEyebrow: (a) => `Перехід · ${a}`,
  },
  incomeNotes: {
    ns1: ["За кожне закрите місце ви отримуєте 50$ на гаманець."],
    ns2: ["За кожне закрите місце ви отримуєте 150$ на гаманець."],
    ns3: [
      "Закриття 1-го та 3-го місця приносить 350$ на гаманець та 1 клона на перший майданчик Neo Start.",
      "Закриття 2-го та 4-го місця приносить 400$ на гаманець та 100$ вашому куратору.",
    ],
    ns4: [
      "Закриття 1-го та 3-го місця приносить 750$ на гаманець, 1 клона на перший майданчик Neo Start та 100$ йде на розвиток системи.",
      "Закриття 2-го та 4-го місця приносить 650$ на гаманець та 100$ вашому куратору.",
    ],
    nv1: [
      "Закриття 1-го та 3-го місця приносить 1500$ на гаманець, 2 клони на перший майданчик Neo Start та 200$ йде на розвиток системи.",
      "Закриття 2-го та 4-го місця приносить 1500$ на гаманець, 2 клони на перший майданчик Neo Start та 200$ вашому куратору.",
    ],
    nv2: [
      "За кожне закрите місце ви отримуєте 4000$ на гаманець, 3 клони на перший майданчик Neo Start; 300$ йде на розвиток системи та 300$ вашому куратору.",
    ],
    nv3: ["Це останній майданчик маркетингу. За кожне закрите місце ви отримуєте 15 000$ на гаманець."],
  },
  transitions: {
    ns1: "Повне закриття місць другої лінії загалом приносить 400$, які автоматично спрямовуються на відкриття вашого другого бізнес-майданчика.",
    ns2: "Повне закриття місць другої лінії загалом приносить 1000$, які автоматично спрямовуються на відкриття вашого третього бізнес-майданчика.",
    ns3: "Повне закриття місць другої лінії загалом приносить 2000$, які автоматично спрямовуються на відкриття вашого четвертого бізнес-майданчика.",
    ns4: "Повне закриття місць другої лінії загалом приносить 4200$, які автоматично спрямовуються на відкриття бізнес-майданчика Neo VIP.",
    nv1: "Повне закриття місць другої лінії загалом приносить 8 800$, які автоматично спрямовуються на відкриття другого бізнес-майданчика Neo VIP.",
    nv2: "Повне закриття місць другої лінії загалом приносить 15 000$, які автоматично спрямовуються на відкриття третього бізнес-майданчика Neo VIP.",
  },
  summary: {
    eyebrow: "Загальне зведення", title: "Доходи з одного бізнес-місця",
    subtitle: "Потенціал заробітку та розвитку структури з одного основного бізнес-місця при проходженні всіх майданчиків.",
    cols: { platform: "Майданчик", income: "Дохід", clones: "Клони", ref: "Реферальні", refShort: "Реф." },
    totalLabel: "Разом",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200$" },
      { platform: "Neo Start · 4", clones: "4", ref: "200$" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400$" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200$" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200$", "600$", "1 500$", "2 800$", "6 000$", "16 000$", "45 000$"],
    finalNoteHtml:
      '<b class="text-gold">72 100$</b> прямого доходу, <b class="text-gold">26</b> нових «клонів» для посилення структури та <b class="text-gold">2 000$</b> реферальної винагороди — це ваш результат з одного основного бізнес-місця, не рахуючи клонів.',
  },
  features: {
    eyebrow: "Ключові переваги", title: "Особливості маркетингу Neo Club",
    subtitle: "Neo Club пропонує унікальний підхід до ведення бізнесу. Ключові особливості, які відрізняють нашу систему.",
    items: [
      { title: "Матрична модель", text: "Основа системи, що забезпечує чітку структуру та прогнозоване зростання." },
      { title: "Автоматична дуплікація", text: "«Клони» розширюють вашу структуру та генерують додатковий дохід без нових вкладень." },
      { title: "Керування структурою", text: "Інструменти для ефективного контролю та оптимізації вашої команди й майданчиків." },
      { title: "Лінійка + Тетра", text: "Поєднання лінійного та класичного матричного маркетингу в одній системі." },
    ],
  },
  extras: {
    eyebrow: "Керування та гнучкість", title: "Керування структурою та додаткові можливості",
    items: [
      { title: "Керування структурою", text: "Вбудована функція дозволяє стратегічно спрямовувати потоки партнерів та клонів для закриття найбільш пріоритетних позицій на майданчиках." },
      { title: "Додаткові бізнес-місця", text: "Можливість придбати додаткові бізнес-місця на будь-якому майданчику на власний розсуд." },
      { title: "Старт з будь-якого майданчика", text: "Ви можете почати роботу з будь-якого маркетингового майданчика, що відповідає вашим цілям." },
      { title: "Функція «Наступне місце»", text: "Автоматизує вибір оптимальної позиції для швидкого зростання структури." },
      { title: "Внесок на розвиток", text: "Одноразовий внесок 5$ на розвиток системи при активації." },
    ],
  },
  cta: {
    eyebrow: "Приєднуйтесь", title: "Почніть з Neo Club",
    subtitle: "Вісім майданчиків, автоматичні переходи, клони й прогнозоване зростання — усе в одній бізнес-системі.",
    register: "Реєстрація в Neo Club", backAll: "Усі партнерські програми",
  },
};

/* ---------- KK ---------- */
const kk: NeoClubDict = {
  meta: { docTitle: "Neo Club — Серіктестік бағдарлама · Crypto Style" },
  nav: { about: "Бағдарлама туралы", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Жиынтық", features: "Ерекшеліктер", extras: "Басқару", cta: "Бастау",
    backAll: "Барлық серіктестік бағдарламалар" },
  hero: {
    eyebrow: "Серіктестік бағдарлама",
    titleTop: "Neo Club", titleBottom: "Кәсіпкерлерге арналған бизнес-жүйе",
    subtitle:
      "Neo Club — ісіңізді ауқымдап, табысыңызды арттыруға арналған жүйе. Осы модельдің негізгі ерекшеліктерін, артықшылықтарын және жұмыс механизмдерін қарастырайық.",
    statPlatforms: "Алаңдар", statMinEntry: "Ең төменгі кіру",
    statDirect: "Тікелей табыс", statClones: "Жаңа клондар",
    videoTitle: "Neo Club бейне таныстырылымы",
    videoFallback: "Бейне ашылмай тұр ма? Басқа дереккөзді таңдаңыз:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — сызықтық маркетинг",
    subtitleBefore:
      "Neo Club маркетингі Neo Line-нен басталады: бірінші сызықта шектеусіз, сызықтық маркетингі бар бір алаң. Бизнес-орынның құны ",
    subtitleAfter: ".",
    you: "Сіз",
    incomeEyebrow: "Табыс · 150$-дан",
    incomeItems: [
      "Бірінші жабылған орын үшін сіз 150$-ды әмиянға аласыз.",
      "Екінші орынды жапқанда, сіз бағдарламаның екінші бөліміне — Neo Start-қа 150$-ға автоматты түрде өтесіз.",
      "Кейінгі әрбір жабылған орын үшін сіз әмиянға 150$-дан аласыз.",
    ],
    noteEyebrow: "Ескертпе",
    noteText:
      "Егер сізде Neo Start-тың бірінші алаңында орын болса, екінші орынды жапқанда ақшаны тікелей әмиянға аласыз.",
    walletLine: "150$ әмиянға",
    transitionLine: "150$ — Neo Start-қа өту",
  },
  seat: {
    wallet: (a) => `${a} әмиянға`,
    piggy: (a) => `${a} жинақ`,
    curator: (a) => `${a} кураторға`,
    grow: (a) => `${a} дамытуға`,
    clonesToStart1: (n) => `${n} клон Neo Start · Алаң 1-ге`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 бизнес-алаң",
    subtitle:
      "Neo Club бағдарламасының екінші бөлімі. Әр алаңның өз құны, табысы, жинағы және клондары бар. Екінші сызық толық жабылғанда келесі алаң автоматты түрде ашылады.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 бизнес-алаң",
    subtitle: "Максималды табысы бар маркетингтің қорытынды алаңдары. Олардың арасындағы өтулер толығымен автоматтандырылған.",
  },
  platform: {
    label: pl("Алаң", "-нен"),
    titleNs: (i) => `Neo Start · Алаң ${i + 1}`,
    titleNv: (i) => `Neo VIP · Алаң ${i + 1}`,
    costLabel: "Орын құны", incomeLabel: "Табыс",
    distributionEyebrow: "Бөлу",
    transitionEyebrow: (a) => `Өту · ${a}`,
  },
  incomeNotes: {
    ns1: ["Әрбір жабылған орын үшін сіз әмиянға 50$ аласыз."],
    ns2: ["Әрбір жабылған орын үшін сіз әмиянға 150$ аласыз."],
    ns3: [
      "1-ші және 3-ші орындарды жабу әмиянға 350$ және Neo Start бірінші алаңына 1 клон әкеледі.",
      "2-ші және 4-ші орындарды жабу әмиянға 400$ және кураторыңызға 100$ әкеледі.",
    ],
    ns4: [
      "1-ші және 3-ші орындарды жабу әмиянға 750$, Neo Start бірінші алаңына 1 клон әкеледі, ал 100$ жүйені дамытуға бағытталады.",
      "2-ші және 4-ші орындарды жабу әмиянға 650$ және кураторыңызға 100$ әкеледі.",
    ],
    nv1: [
      "1-ші және 3-ші орындарды жабу әмиянға 1500$, Neo Start бірінші алаңына 2 клон әкеледі, ал 200$ жүйені дамытуға бағытталады.",
      "2-ші және 4-ші орындарды жабу әмиянға 1500$, Neo Start бірінші алаңына 2 клон және кураторыңызға 200$ әкеледі.",
    ],
    nv2: [
      "Әрбір жабылған орын үшін сіз әмиянға 4000$, Neo Start бірінші алаңына 3 клон аласыз; 300$ жүйені дамытуға және 300$ кураторыңызға бағытталады.",
    ],
    nv3: ["Бұл — маркетингтің соңғы алаңы. Әрбір жабылған орын үшін сіз әмиянға 15 000$ аласыз."],
  },
  transitions: {
    ns1: "Екінші сызық орындарын толық жабу жалпы 400$ әкеледі, ол автоматты түрде екінші бизнес-алаңыңызды ашуға бағытталады.",
    ns2: "Екінші сызық орындарын толық жабу жалпы 1000$ әкеледі, ол автоматты түрде үшінші бизнес-алаңыңызды ашуға бағытталады.",
    ns3: "Екінші сызық орындарын толық жабу жалпы 2000$ әкеледі, ол автоматты түрде төртінші бизнес-алаңыңызды ашуға бағытталады.",
    ns4: "Екінші сызық орындарын толық жабу жалпы 4200$ әкеледі, ол автоматты түрде Neo VIP бизнес-алаңын ашуға бағытталады.",
    nv1: "Екінші сызық орындарын толық жабу жалпы 8 800$ әкеледі, ол автоматты түрде Neo VIP-тің екінші бизнес-алаңын ашуға бағытталады.",
    nv2: "Екінші сызық орындарын толық жабу жалпы 15 000$ әкеледі, ол автоматты түрде Neo VIP-тің үшінші бизнес-алаңын ашуға бағытталады.",
  },
  summary: {
    eyebrow: "Жалпы жиынтық", title: "Бір бизнес-орыннан түсетін табыс",
    subtitle: "Барлық алаңдардан өткен кезде бір негізгі бизнес-орыннан алынатын табыс пен құрылымды дамыту әлеуеті.",
    cols: { platform: "Алаң", income: "Табыс", clones: "Клондар", ref: "Реферал", refShort: "Реф." },
    totalLabel: "Барлығы",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200$" },
      { platform: "Neo Start · 4", clones: "4", ref: "200$" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400$" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200$" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200$", "600$", "1 500$", "2 800$", "6 000$", "16 000$", "45 000$"],
    finalNoteHtml:
      '<b class="text-gold">72 100$</b> тікелей табыс, құрылымды күшейтуге <b class="text-gold">26</b> жаңа «клон» және <b class="text-gold">2 000$</b> реферал сыйақысы — бұл клондарды есептемегендегі бір негізгі бизнес-орыннан алатын нәтижеңіз.',
  },
  features: {
    eyebrow: "Негізгі артықшылықтар", title: "Neo Club маркетингінің ерекшеліктері",
    subtitle: "Neo Club бизнесті жүргізудің бірегей тәсілін ұсынады. Біздің жүйемізді ерекшелейтін негізгі ерекшеліктер.",
    items: [
      { title: "Матрицалық модель", text: "Айқын құрылымды және болжамды өсімді қамтамасыз ететін жүйенің негізі." },
      { title: "Автоматты дубликация", text: "«Клондар» құрылымыңызды кеңейтіп, жаңа салымдарсыз қосымша табыс жасайды." },
      { title: "Құрылымды басқару", text: "Командаңыз бен алаңдарыңызды тиімді бақылау және оңтайландыру құралдары." },
      { title: "Сызықтық + Тетра", text: "Бір жүйедегі сызықтық және классикалық матрицалық маркетингтің үйлесімі." },
    ],
  },
  extras: {
    eyebrow: "Басқару және икемділік", title: "Құрылымды басқару және қосымша мүмкіндіктер",
    items: [
      { title: "Құрылымды басқару", text: "Кіріктірілген функция серіктестер мен клондардың ағынын алаңдардағы ең басым позицияларды жабу үшін стратегиялық түрде бағыттауға мүмкіндік береді." },
      { title: "Қосымша бизнес-орындар", text: "Кез келген алаңда өз қалауыңызша қосымша бизнес-орындар сатып алу мүмкіндігі." },
      { title: "Кез келген алаңнан бастау", text: "Мақсаттарыңызға сәйкес келетін кез келген маркетингтік алаңнан бастай аласыз." },
      { title: "«Келесі орын» функциясы", text: "Құрылымның жылдам өсуі үшін оңтайлы позицияны таңдауды автоматтандырады." },
      { title: "Дамытуға жарна", text: "Белсендіру кезінде жүйені дамытуға 5$ біржолғы жарна." },
    ],
  },
  cta: {
    eyebrow: "Қосылыңыз", title: "Neo Club-пен бастаңыз",
    subtitle: "Сегіз алаң, автоматты өтулер, клондар және болжамды өсім — бәрі бір бизнес-жүйеде.",
    register: "Neo Club-қа тіркелу", backAll: "Барлық серіктестік бағдарламалар",
  },
};

/* ---------- PL ---------- */
const pl_dict: NeoClubDict = {
  meta: { docTitle: "Neo Club — Program partnerski · Crypto Style" },
  nav: { about: "O programie", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Podsumowanie", features: "Funkcje", extras: "Zarządzanie", cta: "Start",
    backAll: "Wszystkie programy partnerskie" },
  hero: {
    eyebrow: "Program partnerski",
    titleTop: "Neo Club", titleBottom: "System biznesowy dla przedsiębiorców",
    subtitle:
      "Neo Club to system zaprojektowany, aby skalować Twój biznes i zwiększać dochody. Przyjrzyjmy się kluczowym cechom, zaletom i mechanizmom tego modelu.",
    statPlatforms: "Platformy", statMinEntry: "Min. wejście",
    statDirect: "Dochód bezpośredni", statClones: "Nowe klony",
    videoTitle: "Prezentacja wideo Neo Club",
    videoFallback: "Wideo się nie otwiera? Wybierz inne źródło:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — marketing liniowy",
    subtitleBefore:
      "Marketing Neo Club zaczyna się od Neo Line: jedna platforma z marketingiem liniowym, bez ograniczeń w pierwszej linii. Koszt miejsca biznesowego wynosi ",
    subtitleAfter: ".",
    you: "Ty",
    incomeEyebrow: "Dochód · od 150 $",
    incomeItems: [
      "Za pierwsze zamknięte miejsce otrzymujesz 150 $ na portfel.",
      "Zamykając drugie miejsce, automatycznie przechodzisz do drugiej części programu — Neo Start za 150 $.",
      "Za każde kolejne zamknięte miejsce otrzymujesz po 150 $ na portfel.",
    ],
    noteEyebrow: "Uwaga",
    noteText:
      "Jeśli masz już miejsce na pierwszej platformie Neo Start, zamknięcie drugiego miejsca jest wypłacane bezpośrednio na portfel.",
    walletLine: "150 $ na portfel",
    transitionLine: "150 $ — przejście do Neo Start",
  },
  seat: {
    wallet: (a) => `${a} na portfel`,
    piggy: (a) => `${a} oszczędności`,
    curator: (a) => `${a} dla kuratora`,
    grow: (a) => `${a} na rozwój`,
    clonesToStart1: (n) => {
      const w = n === 1 ? "klon" : n < 5 ? "klony" : "klonów";
      return `${n} ${w} na Neo Start · Platforma 1`;
    },
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 platformy biznesowe",
    subtitle:
      "Druga część programu Neo Club. Każda platforma ma własny koszt, dochód, oszczędności i klony. Pełne zamknięcie drugiej linii automatycznie otwiera kolejną platformę.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 platformy biznesowe",
    subtitle: "Ostatnie platformy marketingowe z maksymalnym dochodem. Przejścia między nimi są w pełni zautomatyzowane.",
  },
  platform: {
    label: pl("Platforma", "z"),
    titleNs: (i) => `Neo Start · Platforma ${i + 1}`,
    titleNv: (i) => `Neo VIP · Platforma ${i + 1}`,
    costLabel: "Koszt miejsca", incomeLabel: "Dochód",
    distributionEyebrow: "Podział",
    transitionEyebrow: (a) => `Przejście · ${a}`,
  },
  incomeNotes: {
    ns1: ["Za każde zamknięte miejsce otrzymujesz 50 $ na portfel."],
    ns2: ["Za każde zamknięte miejsce otrzymujesz 150 $ na portfel."],
    ns3: [
      "Zamknięcie 1. i 3. miejsca daje 350 $ na portfel i 1 klon na pierwszą platformę Neo Start.",
      "Zamknięcie 2. i 4. miejsca daje 400 $ na portfel i 100 $ dla Twojego kuratora.",
    ],
    ns4: [
      "Zamknięcie 1. i 3. miejsca daje 750 $ na portfel, 1 klon na pierwszą platformę Neo Start, a 100 $ idzie na rozwój systemu.",
      "Zamknięcie 2. i 4. miejsca daje 650 $ na portfel i 100 $ dla Twojego kuratora.",
    ],
    nv1: [
      "Zamknięcie 1. i 3. miejsca daje 1500 $ na portfel, 2 klony na pierwszą platformę Neo Start, a 200 $ idzie na rozwój systemu.",
      "Zamknięcie 2. i 4. miejsca daje 1500 $ na portfel, 2 klony na pierwszą platformę Neo Start i 200 $ dla Twojego kuratora.",
    ],
    nv2: [
      "Za każde zamknięte miejsce otrzymujesz 4000 $ na portfel, 3 klony na pierwszą platformę Neo Start; 300 $ idzie na rozwój systemu i 300 $ dla Twojego kuratora.",
    ],
    nv3: ["To ostatnia platforma marketingowa. Za każde zamknięte miejsce otrzymujesz 15 000 $ na portfel."],
  },
  transitions: {
    ns1: "Pełne zamknięcie miejsc drugiej linii daje łącznie 400 $, które są automatycznie przeznaczane na otwarcie Twojej drugiej platformy biznesowej.",
    ns2: "Pełne zamknięcie miejsc drugiej linii daje łącznie 1000 $, które są automatycznie przeznaczane na otwarcie Twojej trzeciej platformy biznesowej.",
    ns3: "Pełne zamknięcie miejsc drugiej linii daje łącznie 2000 $, które są automatycznie przeznaczane na otwarcie Twojej czwartej platformy biznesowej.",
    ns4: "Pełne zamknięcie miejsc drugiej linii daje łącznie 4200 $, które są automatycznie przeznaczane na otwarcie platformy biznesowej Neo VIP.",
    nv1: "Pełne zamknięcie miejsc drugiej linii daje łącznie 8 800 $, które są automatycznie przeznaczane na otwarcie drugiej platformy biznesowej Neo VIP.",
    nv2: "Pełne zamknięcie miejsc drugiej linii daje łącznie 15 000 $, które są automatycznie przeznaczane na otwarcie trzeciej platformy biznesowej Neo VIP.",
  },
  summary: {
    eyebrow: "Podsumowanie ogólne", title: "Dochody z jednego miejsca biznesowego",
    subtitle: "Potencjał zarobku i rozwoju struktury z jednego głównego miejsca biznesowego przy przejściu przez wszystkie platformy.",
    cols: { platform: "Platforma", income: "Dochód", clones: "Klony", ref: "Polecenia", refShort: "Pol." },
    totalLabel: "Razem",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200 $" },
      { platform: "Neo Start · 4", clones: "4", ref: "200 $" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400 $" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200 $" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200 $", "600 $", "1 500 $", "2 800 $", "6 000 $", "16 000 $", "45 000 $"],
    finalNoteHtml:
      '<b class="text-gold">72 100 $</b> dochodu bezpośredniego, <b class="text-gold">26</b> nowych „klonów” wzmacniających strukturę i <b class="text-gold">2 000 $</b> wynagrodzenia z poleceń — to Twój wynik z jednego głównego miejsca biznesowego, nie licząc klonów.',
  },
  features: {
    eyebrow: "Kluczowe zalety", title: "Cechy marketingu Neo Club",
    subtitle: "Neo Club oferuje unikalne podejście do prowadzenia biznesu. Kluczowe cechy, które wyróżniają nasz system.",
    items: [
      { title: "Model matrycowy", text: "Podstawa systemu zapewniająca przejrzystą strukturę i przewidywalny wzrost." },
      { title: "Automatyczne duplikowanie", text: "„Klony” rozszerzają Twoją strukturę i generują dodatkowy dochód bez nowych inwestycji." },
      { title: "Zarządzanie strukturą", text: "Narzędzia do skutecznej kontroli i optymalizacji Twojego zespołu i platform." },
      { title: "Liniowy + Tetra", text: "Połączenie marketingu liniowego i klasycznego matrycowego w jednym systemie." },
    ],
  },
  extras: {
    eyebrow: "Zarządzanie i elastyczność", title: "Zarządzanie strukturą i dodatkowe funkcje",
    items: [
      { title: "Zarządzanie strukturą", text: "Wbudowana funkcja pozwala strategicznie kierować przepływem partnerów i klonów, aby zamykać najbardziej priorytetowe pozycje na platformach." },
      { title: "Dodatkowe miejsca biznesowe", text: "Możliwość zakupu dodatkowych miejsc biznesowych na dowolnej platformie według własnego uznania." },
      { title: "Start z dowolnej platformy", text: "Możesz zacząć od dowolnej platformy marketingowej, która odpowiada Twoim celom." },
      { title: "Funkcja „Następne miejsce”", text: "Automatyzuje wybór optymalnej pozycji dla szybkiego wzrostu struktury." },
      { title: "Wkład na rozwój", text: "Jednorazowy wkład 5 $ na rozwój systemu przy aktywacji." },
    ],
  },
  cta: {
    eyebrow: "Dołącz", title: "Zacznij od Neo Club",
    subtitle: "Osiem platform, automatyczne przejścia, klony i przewidywalny wzrost — wszystko w jednym systemie biznesowym.",
    register: "Rejestracja w Neo Club", backAll: "Wszystkie programy partnerskie",
  },
};

/* ---------- HU ---------- */
const hu: NeoClubDict = {
  meta: { docTitle: "Neo Club — Partnerprogram · Crypto Style" },
  nav: { about: "A programról", neoLine: "Neo Line", neoStart: "Neo Start", neoVip: "Neo VIP",
    summary: "Összegzés", features: "Jellemzők", extras: "Kezelés", cta: "Indítás",
    backAll: "Összes partnerprogram" },
  hero: {
    eyebrow: "Partnerprogram",
    titleTop: "Neo Club", titleBottom: "Üzleti rendszer vállalkozóknak",
    subtitle:
      "A Neo Club egy olyan rendszer, amelyet vállalkozása skálázására és jövedelmének növelésére terveztek. Tekintsük át a modell főbb jellemzőit, előnyeit és működési mechanizmusait.",
    statPlatforms: "Platformok", statMinEntry: "Min. belépő",
    statDirect: "Közvetlen jövedelem", statClones: "Új klónok",
    videoTitle: "Neo Club videó bemutató",
    videoFallback: "Nem nyílik meg a videó? Válasszon másik forrást:",
  },
  neoLine: {
    eyebrow: "NEO LINE", title: "Neo Line — lineáris marketing",
    subtitleBefore:
      "A Neo Club marketingje a Neo Line-nal kezdődik: egy platform lineáris marketinggel, az első vonalon korlátozás nélkül. Az üzleti hely költsége ",
    subtitleAfter: ".",
    you: "Ön",
    incomeEyebrow: "Jövedelem · 150 $-tól",
    incomeItems: [
      "Az első lezárt helyért 150 $-t kap a pénztárcájára.",
      "A második hely lezárásával automatikusan átkerül a program második részébe — Neo Start 150 $-ért.",
      "Minden további lezárt helyért 150 $-t kap a pénztárcájára.",
    ],
    noteEyebrow: "Megjegyzés",
    noteText:
      "Ha már van helye az első Neo Start platformon, a második hely lezárása közvetlenül a pénztárcájára kerül.",
    walletLine: "150 $ a pénztárcára",
    transitionLine: "150 $ — átmenet a Neo Startba",
  },
  seat: {
    wallet: (a) => `${a} a pénztárcára`,
    piggy: (a) => `${a} felhalmozás`,
    curator: (a) => `${a} a kurátornak`,
    grow: (a) => `${a} a fejlesztésre`,
    clonesToStart1: (n) => `${n} klón a Neo Start · Platform 1-re`,
  },
  neoStart: {
    eyebrow: "NEO START", title: "Neo Start — 4 üzleti platform",
    subtitle:
      "A Neo Club program második része. Minden platformnak saját költsége, jövedelme, felhalmozása és klónjai vannak. A második vonal teljes lezárása automatikusan megnyitja a következő platformot.",
  },
  neoVip: {
    eyebrow: "NEO VIP", title: "Neo VIP — 3 üzleti platform",
    subtitle: "A marketing végső platformjai maximális jövedelemmel. Az átmenetek közöttük teljesen automatizáltak.",
  },
  platform: {
    label: pl("Platform", "/"),
    titleNs: (i) => `Neo Start · Platform ${i + 1}`,
    titleNv: (i) => `Neo VIP · Platform ${i + 1}`,
    costLabel: "Hely költsége", incomeLabel: "Jövedelem",
    distributionEyebrow: "Elosztás",
    transitionEyebrow: (a) => `Átmenet · ${a}`,
  },
  incomeNotes: {
    ns1: ["Minden lezárt helyért 50 $-t kap a pénztárcájára."],
    ns2: ["Minden lezárt helyért 150 $-t kap a pénztárcájára."],
    ns3: [
      "Az 1. és 3. hely lezárása 350 $-t hoz a pénztárcára és 1 klónt az első Neo Start platformra.",
      "A 2. és 4. hely lezárása 400 $-t hoz a pénztárcára és 100 $-t a kurátornak.",
    ],
    ns4: [
      "Az 1. és 3. hely lezárása 750 $-t hoz a pénztárcára, 1 klónt az első Neo Start platformra, és 100 $ a rendszer fejlesztésére kerül.",
      "A 2. és 4. hely lezárása 650 $-t hoz a pénztárcára és 100 $-t a kurátornak.",
    ],
    nv1: [
      "Az 1. és 3. hely lezárása 1500 $-t hoz a pénztárcára, 2 klónt az első Neo Start platformra, és 200 $ a rendszer fejlesztésére kerül.",
      "A 2. és 4. hely lezárása 1500 $-t hoz a pénztárcára, 2 klónt az első Neo Start platformra és 200 $-t a kurátornak.",
    ],
    nv2: [
      "Minden lezárt helyért 4000 $-t kap a pénztárcára, 3 klónt az első Neo Start platformra; 300 $ a rendszer fejlesztésére és 300 $ a kurátornak kerül.",
    ],
    nv3: ["Ez az utolsó marketingplatform. Minden lezárt helyért 15 000 $-t kap a pénztárcájára."],
  },
  transitions: {
    ns1: "A második vonal helyeinek teljes lezárása összesen 400 $-t hoz, amelyet automatikusan a második üzleti platform megnyitására fordítanak.",
    ns2: "A második vonal helyeinek teljes lezárása összesen 1000 $-t hoz, amelyet automatikusan a harmadik üzleti platform megnyitására fordítanak.",
    ns3: "A második vonal helyeinek teljes lezárása összesen 2000 $-t hoz, amelyet automatikusan a negyedik üzleti platform megnyitására fordítanak.",
    ns4: "A második vonal helyeinek teljes lezárása összesen 4200 $-t hoz, amelyet automatikusan a Neo VIP üzleti platform megnyitására fordítanak.",
    nv1: "A második vonal helyeinek teljes lezárása összesen 8 800 $-t hoz, amelyet automatikusan a második Neo VIP üzleti platform megnyitására fordítanak.",
    nv2: "A második vonal helyeinek teljes lezárása összesen 15 000 $-t hoz, amelyet automatikusan a harmadik Neo VIP üzleti platform megnyitására fordítanak.",
  },
  summary: {
    eyebrow: "Általános összegzés", title: "Jövedelem egyetlen üzleti helyről",
    subtitle: "Egyetlen fő üzleti helyről elérhető kereseti és struktúrafejlesztési potenciál, miközben végighalad az összes platformon.",
    cols: { platform: "Platform", income: "Jövedelem", clones: "Klónok", ref: "Ajánlás", refShort: "Aj." },
    totalLabel: "Összesen",
    rows: [
      { platform: "Neo Start · 1", clones: "—", ref: "—" },
      { platform: "Neo Start · 2", clones: "—", ref: "—" },
      { platform: "Neo Start · 3", clones: "2", ref: "200 $" },
      { platform: "Neo Start · 4", clones: "4", ref: "200 $" },
      { platform: "Neo VIP · 1", clones: "8", ref: "400 $" },
      { platform: "Neo VIP · 2", clones: "12", ref: "1 200 $" },
      { platform: "Neo VIP · 3", clones: "—", ref: "—" },
    ],
    incomeValues: ["200 $", "600 $", "1 500 $", "2 800 $", "6 000 $", "16 000 $", "45 000 $"],
    finalNoteHtml:
      '<b class="text-gold">72 100 $</b> közvetlen jövedelem, <b class="text-gold">26</b> új „klón” a struktúra megerősítésére és <b class="text-gold">2 000 $</b> ajánlási jutalom — ez az Ön eredménye egyetlen fő üzleti helyről, a klónokat nem számítva.',
  },
  features: {
    eyebrow: "Kulcsfontosságú előnyök", title: "A Neo Club marketing jellemzői",
    subtitle: "A Neo Club egyedi megközelítést kínál az üzletvezetéshez. Íme a rendszerünket megkülönböztető kulcsfontosságú jellemzők.",
    items: [
      { title: "Mátrix modell", text: "A rendszer alapja, amely világos struktúrát és kiszámítható növekedést biztosít." },
      { title: "Automatikus duplikáció", text: "A „klónok” bővítik a struktúrát, és további jövedelmet generálnak új befektetések nélkül." },
      { title: "Struktúra kezelése", text: "Eszközök a csapat és a platformok hatékony vezérléséhez és optimalizálásához." },
      { title: "Lineáris + Tetra", text: "Lineáris és klasszikus mátrix marketing kombinációja egyetlen rendszerben." },
    ],
  },
  extras: {
    eyebrow: "Kezelés és rugalmasság", title: "Struktúra kezelése és további funkciók",
    items: [
      { title: "Struktúra kezelése", text: "A beépített funkció lehetővé teszi a partnerek és klónok áramlásának stratégiai irányítását a legfontosabb pozíciók lezárása érdekében." },
      { title: "További üzleti helyek", text: "Lehetőség további üzleti helyek megvásárlására bármely platformon saját belátás szerint." },
      { title: "Indulás bármely platformról", text: "Bármely marketingplatformról elindulhat, amely megfelel a céljainak." },
      { title: "„Következő hely” funkció", text: "Automatizálja az optimális pozíció kiválasztását a struktúra gyors növekedéséhez." },
      { title: "Fejlesztési hozzájárulás", text: "Egyszeri 5 $ hozzájárulás a rendszer fejlesztéséhez az aktiváláskor." },
    ],
  },
  cta: {
    eyebrow: "Csatlakozzon", title: "Kezdje a Neo Clubbal",
    subtitle: "Nyolc platform, automatikus átmenetek, klónok és kiszámítható növekedés — mindez egyetlen üzleti rendszerben.",
    register: "Regisztráció a Neo Clubba", backAll: "Összes partnerprogram",
  },
};

export const NEO_CLUB_DICTS: Record<LangCode, NeoClubDict> = {
  ru, en, de, fr, it, es, pt, uk, kk, pl: pl_dict, hu,
};
