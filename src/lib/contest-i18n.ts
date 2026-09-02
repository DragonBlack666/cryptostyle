import type { LangCode } from "@/lib/i18n";

export type ContestDict = {
  docTitle: string;
  metaDescription: string;
  back: string;
  nav: { intro: string; prizes: string; points: string; rules: string; confirm: string; leaderboard: string; dates: string };
  hero: {
    eyebrow: string;
    title2: string;
    period: string;
    intro: string;
    stats: { prizeFund: string; winners: string; period: string; days: string };
  };
  prizes: {
    eyebrow: string;
    title: string;
    intro: string;
    place: (n: number) => string;
    note: string;
  };
  points: {
    eyebrow: string;
    title: string;
    intro: string;
    pts: (n: number) => string;
    structure: { title: string; desc: string; note: string };
    subscribe: { title: string; desc: string; note: string; btn: string };
    promo: {
      title: string;
      desc: string;
      items: { title: string; pts: number; desc: string }[];
    };
  };
  rules: {
    eyebrow: string;
    title: string;
    allowed: string[];
    forbidden: string[];
    admin: string;
    footer: string;
  };
  confirm: {
    eyebrow: string;
    title: string;
    intro: string;
    channel: string;
    btn: string;
    items: { title: string; desc: string }[];
  };
  leaderboard: {
    eyebrow: string;
    title: string;
    cols: { place: string; participant: string; points: string };
    empty: string;
    note: string;
    updatedAt: string;
  };
  dates: {
    eyebrow: string;
    title: string;
    start: { label: string; date: string };
    finish: { label: string; date: string };
    winners: { label: string; date: string };
    cta: string;
    ctaSecondary: string;
  };
};

const ru: ContestDict = {
  docTitle: "TOP CRYPTO CASH — конкурс для участников Crypto Cash | Crypto Style",
  metaDescription:
    "Первый конкурс для участников Crypto Cash: 2–24 сентября 2026. Развивайте структуру, продвигайте Crypto Cash и набирайте баллы. Призовой фонд $700, выплаты на TON-кошелёк.",
  back: "Все программы",
  nav: { intro: "О конкурсе", prizes: "Призы", points: "Баллы", rules: "Правила", confirm: "Подтверждение", leaderboard: "Таблица лидеров", dates: "Даты" },
  hero: {
    eyebrow: "Конкурс",
    title2: "Первый конкурс для участников Crypto Cash",
    period: "2–24 сентября 2026",
    intro:
      "Участники развивают структуру, помогают партнёрам, рассказывают о Crypto Cash в социальных сетях и набирают баллы. В конце конкурса определяются 5 участников с наибольшим количеством баллов.",
    stats: { prizeFund: "Призовой фонд", winners: "Победителей", period: "Период", days: "дня конкурса" },
  },
  prizes: {
    eyebrow: "Призы",
    title: "Призовой фонд",
    intro: "Пять лучших участников по итогам конкурса получают денежные призы.",
    place: (n) => `${n} место`,
    note: "Призовые начисляются непосредственно на TON-кошелёк победителя.",
  },
  points: {
    eyebrow: "Как набрать баллы?",
    title: "Три способа набрать баллы",
    intro: "Баллы начисляются за реальные действия: активации партнёров, подписку на видеоканал и продвижение Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${pluralRu(n, "балл", "балла", "баллов")}`,
    structure: {
      title: "Развитие структуры",
      desc: "Баллы за активацию личных партнёров на любом уровне Crypto Cash.",
      note: "Учитываются только реальные активации новых личных партнёров. Простая регистрация баллов не даёт.",
    },
    subscribe: {
      title: "Подписка на видеоканал",
      desc: "Подпишитесь на официальный канал Crypto Style на YouTube или RUTUBE.",
      note: "Если участник подписался и на YouTube, и на RUTUBE, максимум за этот пункт — 3 балла.",
      btn: "Подписаться",
    },
    promo: {
      title: "Продвижение Crypto Cash",
      desc: "Рассказывайте о Crypto Cash в социальных сетях — каждая публикация приносит баллы.",
      items: [
        { title: "Собственный пост", pts: 5, desc: "Максимум 3 собственных поста в неделю. Пост должен содержать реальную информацию о Crypto Cash или быть связан с программой." },
        { title: "Собственное видео", pts: 7, desc: "За каждую отдельную публикацию видео начисляются баллы.\nМаксимум 3 видео в неделю." },
        { title: "Stories / короткая публикация", pts: 2, desc: "Максимум 3 собственных Stories в неделю." },
        { title: "Комплексное продвижение", pts: 10, desc: "Дополнительные баллы за выполнение трёх действий: собственный пост + Stories/короткая публикация + собственное видео. Не более 1 раза в неделю." },
      ],
    },
  },
  rules: {
    eyebrow: "Важные правила",
    title: "Условия участия",
    allowed: [
      "Учитываются только реальные активации.",
      "Один участник конкурса — один логин.",
      "Все публикации и действия должны быть реальными и доступными для проверки.",
      "Один и тот же материал нельзя использовать повторно для получения баллов.",
    ],
    forbidden: [
      "Публикации, созданные исключительно для искусственной накрутки баллов, не учитываются.",
      "Пустые аккаунты или аккаунты, созданные специально для конкурса, не учитываются.",
    ],
    admin: "Администрация оставляет за собой право не засчитывать действия, которые имеют явные признаки искусственной накрутки или нарушают правила конкурса.",
    footer: "Баллы начисляются после проверки и подтверждения.",
  },
  confirm: {
    eyebrow: "Как подтвердить баллы?",
    title: "Отправьте подтверждение в Telegram",
    intro: "Подтверждения отправляются в сообщения Telegram-канала Crypto Style Matrix News.",
    channel: "Crypto Style Matrix News",
    btn: "Открыть Telegram-канал",
    items: [
      { title: "Активация партнёра", desc: "Свой логин + логин партнёра + уровень активации." },
      { title: "Подписка на YouTube / RUTUBE", desc: "Свой логин + скриншот подписки." },
      { title: "Публикация", desc: "Свой логин + ссылка на публикацию или скриншот. Аккаунт должен быть открытым." },
    ],
  },
  leaderboard: {
    eyebrow: "Таблица лидеров",
    title: "TOP CRYPTO CASH — Таблица лидеров",
    cols: { place: "Место", participant: "Участник", points: "Баллы" },
    empty: "Первые результаты появятся после начала конкурса и проверки баллов.",
    note: "В течение конкурса рейтинг будет обновляться, чтобы участники могли видеть свою текущую позицию.",
    updatedAt: "Обновлено",
  },
  dates: {
    eyebrow: "Ключевые даты",
    title: "Расписание конкурса",
    start: { label: "Старт", date: "2 сентября" },
    finish: { label: "Финиш", date: "24 сентября" },
    winners: { label: "Победители", date: "25 сентября" },
    cta: "Открыть Crypto Cash",
    ctaSecondary: "Все программы",
  },
};

function pluralRu(n: number, one: string, few: string, many: string) {
  const a = Math.abs(n) % 100;
  const b = a % 10;
  if (a > 10 && a < 20) return many;
  if (b > 1 && b < 5) return few;
  if (b === 1) return one;
  return many;
}

const en: ContestDict = {
  docTitle: "TOP CRYPTO CASH — contest for Crypto Cash participants | Crypto Style",
  metaDescription:
    "The first contest for Crypto Cash participants: 2–24 September 2026. Grow your structure, promote Crypto Cash and earn points. $700 prize pool paid to your TON wallet.",
  back: "All programs",
  nav: { intro: "About", prizes: "Prizes", points: "Points", rules: "Rules", confirm: "Confirmation", leaderboard: "Leaderboard", dates: "Dates" },
  hero: {
    eyebrow: "Contest",
    title2: "The first contest for Crypto Cash participants",
    period: "2–24 September 2026",
    intro:
      "Participants grow their structure, help their partners, talk about Crypto Cash on social media and earn points. At the end of the contest, the 5 participants with the most points win.",
    stats: { prizeFund: "Prize pool", winners: "Winners", period: "Period", days: "contest days" },
  },
  prizes: {
    eyebrow: "Prizes",
    title: "Prize pool",
    intro: "The top five participants receive cash prizes at the end of the contest.",
    place: (n) => `${n}${n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"} place`,
    note: "Prizes are paid directly to the winner's TON wallet.",
  },
  points: {
    eyebrow: "How to earn points?",
    title: "Three ways to earn points",
    intro: "Points are awarded for real actions: partner activations, subscribing to the video channel and promoting Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${n === 1 ? "point" : "points"}`,
    structure: {
      title: "Structure growth",
      desc: "Points for activating personal partners at any Crypto Cash level.",
      note: "Only real activations of new personal partners count. A simple registration does not earn points.",
    },
    subscribe: {
      title: "Video channel subscription",
      desc: "Subscribe to the official Crypto Style channel on YouTube or RUTUBE.",
      note: "If a participant subscribes to both YouTube and RUTUBE, the maximum for this item is 3 points.",
      btn: "Subscribe",
    },
    promo: {
      title: "Promoting Crypto Cash",
      desc: "Talk about Crypto Cash on social media — every publication earns points.",
      items: [
        { title: "Own post", pts: 5, desc: "Maximum 3 own posts per week. The post must contain real information about Crypto Cash or be related to the program." },
        { title: "Own video", pts: 7, desc: "Points are awarded for each separate video publication.\nMaximum 3 videos per week." },
        { title: "Stories / short publication", pts: 2, desc: "Maximum 3 own Stories per week." },
        { title: "Complex promotion", pts: 10, desc: "Extra points for completing three actions: own post + Stories/short publication + own video. No more than once a week." },
      ],
    },
  },
  rules: {
    eyebrow: "Important rules",
    title: "Terms of participation",
    allowed: [
      "Only real activations count.",
      "One contest participant — one login.",
      "All publications and actions must be real and verifiable.",
      "The same material cannot be reused to earn points.",
    ],
    forbidden: [
      "Publications created solely to artificially inflate points do not count.",
      "Empty accounts or accounts created specifically for the contest do not count.",
    ],
    admin: "The administration reserves the right not to count actions that show clear signs of artificial inflation or violate the contest rules.",
    footer: "Points are awarded after verification and confirmation.",
  },
  confirm: {
    eyebrow: "How to confirm points?",
    title: "Send your confirmation via Telegram",
    intro: "Confirmations are sent as messages to the Crypto Style Matrix News Telegram channel.",
    channel: "Crypto Style Matrix News",
    btn: "Open Telegram channel",
    items: [
      { title: "Partner activation", desc: "Your login + partner's login + activation level." },
      { title: "YouTube / RUTUBE subscription", desc: "Your login + subscription screenshot." },
      { title: "Publication", desc: "Your login + link to the publication or a screenshot. The account must be public." },
    ],
  },
  leaderboard: {
    eyebrow: "Leaderboard",
    title: "TOP CRYPTO CASH — Leaderboard",
    cols: { place: "Place", participant: "Participant", points: "Points" },
    empty: "The first results will appear after the contest starts and points are verified.",
    note: "The ranking will be updated throughout the contest so participants can see their current position.",
    updatedAt: "Updated",
  },
  dates: {
    eyebrow: "Key dates",
    title: "Contest schedule",
    start: { label: "Start", date: "2 September" },
    finish: { label: "Finish", date: "24 September" },
    winners: { label: "Winners", date: "25 September" },
    cta: "Open Crypto Cash",
    ctaSecondary: "All programs",
  },
};

const de: ContestDict = {
  docTitle: "TOP CRYPTO CASH — Wettbewerb für Crypto-Cash-Teilnehmer | Crypto Style",
  metaDescription:
    "Der erste Wettbewerb für Crypto-Cash-Teilnehmer: 2.–24. September 2026. Struktur ausbauen, Crypto Cash bewerben und Punkte sammeln. Preispool 700 $ direkt auf die TON-Wallet.",
  back: "Alle Programme",
  nav: { intro: "Überblick", prizes: "Preise", points: "Punkte", rules: "Regeln", confirm: "Bestätigung", leaderboard: "Rangliste", dates: "Termine" },
  hero: {
    eyebrow: "Wettbewerb",
    title2: "Der erste Wettbewerb für Crypto-Cash-Teilnehmer",
    period: "2.–24. September 2026",
    intro:
      "Die Teilnehmer bauen ihre Struktur aus, unterstützen Partner, berichten in sozialen Netzwerken über Crypto Cash und sammeln Punkte. Am Ende werden die 5 Teilnehmer mit den meisten Punkten ermittelt.",
    stats: { prizeFund: "Preispool", winners: "Gewinner", period: "Zeitraum", days: "Wettbewerbstage" },
  },
  prizes: {
    eyebrow: "Preise",
    title: "Preispool",
    intro: "Die fünf besten Teilnehmer erhalten am Ende des Wettbewerbs Geldpreise.",
    place: (n) => `${n}. Platz`,
    note: "Die Preise werden direkt auf die TON-Wallet des Gewinners ausgezahlt.",
  },
  points: {
    eyebrow: "Wie sammelt man Punkte?",
    title: "Drei Wege, Punkte zu sammeln",
    intro: "Punkte gibt es für echte Aktionen: Partneraktivierungen, das Abonnieren des Videokanals und die Bewerbung von Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${n === 1 ? "Punkt" : "Punkte"}`,
    structure: {
      title: "Strukturaufbau",
      desc: "Punkte für die Aktivierung persönlicher Partner auf jeder Crypto-Cash-Stufe.",
      note: "Es zählen nur echte Aktivierungen neuer persönlicher Partner. Eine einfache Registrierung bringt keine Punkte.",
    },
    subscribe: {
      title: "Videokanal abonnieren",
      desc: "Abonnieren Sie den offiziellen Crypto-Style-Kanal auf YouTube oder RUTUBE.",
      note: "Wer sowohl YouTube als auch RUTUBE abonniert, erhält für diesen Punkt maximal 3 Punkte.",
      btn: "Abonnieren",
    },
    promo: {
      title: "Crypto Cash bewerben",
      desc: "Berichten Sie in sozialen Netzwerken über Crypto Cash — jede Veröffentlichung bringt Punkte.",
      items: [
        { title: "Eigener Beitrag", pts: 5, desc: "Maximal 3 eigene Beiträge pro Woche. Der Beitrag muss echte Informationen über Crypto Cash enthalten oder mit dem Programm zusammenhängen." },
        { title: "Eigenes Video", pts: 7, desc: "Für jede einzelne Videoveröffentlichung werden Punkte vergeben.\nMaximal 3 Videos pro Woche." },
        { title: "Stories / Kurzbeitrag", pts: 2, desc: "Maximal 3 eigene Stories pro Woche." },
        { title: "Komplexe Promotion", pts: 10, desc: "Zusatzpunkte für drei Aktionen: eigener Beitrag + Stories/Kurzbeitrag + eigenes Video. Höchstens 1-mal pro Woche." },
      ],
    },
  },
  rules: {
    eyebrow: "Wichtige Regeln",
    title: "Teilnahmebedingungen",
    allowed: [
      "Es zählen nur echte Aktivierungen.",
      "Ein Teilnehmer — ein Login.",
      "Alle Veröffentlichungen und Aktionen müssen echt und überprüfbar sein.",
      "Dasselbe Material darf nicht erneut für Punkte verwendet werden.",
    ],
    forbidden: [
      "Veröffentlichungen, die ausschließlich zur künstlichen Punktesteigerung erstellt wurden, zählen nicht.",
      "Leere Konten oder speziell für den Wettbewerb erstellte Konten zählen nicht.",
    ],
    admin: "Die Administration behält sich das Recht vor, Aktionen nicht zu werten, die eindeutige Anzeichen künstlicher Manipulation aufweisen oder gegen die Wettbewerbsregeln verstoßen.",
    footer: "Punkte werden nach Prüfung und Bestätigung gutgeschrieben.",
  },
  confirm: {
    eyebrow: "Wie bestätigt man Punkte?",
    title: "Bestätigung per Telegram senden",
    intro: "Bestätigungen werden als Nachricht an den Telegram-Kanal Crypto Style Matrix News gesendet.",
    channel: "Crypto Style Matrix News",
    btn: "Telegram-Kanal öffnen",
    items: [
      { title: "Partneraktivierung", desc: "Eigener Login + Login des Partners + Aktivierungsstufe." },
      { title: "YouTube- / RUTUBE-Abo", desc: "Eigener Login + Screenshot des Abonnements." },
      { title: "Veröffentlichung", desc: "Eigener Login + Link zur Veröffentlichung oder Screenshot. Das Konto muss öffentlich sein." },
    ],
  },
  leaderboard: {
    eyebrow: "Rangliste",
    title: "TOP CRYPTO CASH — Rangliste",
    cols: { place: "Platz", participant: "Teilnehmer", points: "Punkte" },
    empty: "Die ersten Ergebnisse erscheinen nach dem Start des Wettbewerbs und der Prüfung der Punkte.",
    note: "Die Rangliste wird während des Wettbewerbs aktualisiert, damit die Teilnehmer ihre aktuelle Position sehen können.",
    updatedAt: "Aktualisiert",
  },
  dates: {
    eyebrow: "Wichtige Termine",
    title: "Zeitplan des Wettbewerbs",
    start: { label: "Start", date: "2. September" },
    finish: { label: "Ende", date: "24. September" },
    winners: { label: "Gewinner", date: "25. September" },
    cta: "Crypto Cash öffnen",
    ctaSecondary: "Alle Programme",
  },
};

const fr: ContestDict = {
  docTitle: "TOP CRYPTO CASH — concours pour les participants Crypto Cash | Crypto Style",
  metaDescription:
    "Le premier concours pour les participants Crypto Cash : du 2 au 24 septembre 2026. Développez votre structure, faites connaître Crypto Cash et gagnez des points. Cagnotte de 700 $ versée sur votre wallet TON.",
  back: "Tous les programmes",
  nav: { intro: "Présentation", prizes: "Prix", points: "Points", rules: "Règles", confirm: "Confirmation", leaderboard: "Classement", dates: "Dates" },
  hero: {
    eyebrow: "Concours",
    title2: "Le premier concours pour les participants Crypto Cash",
    period: "2–24 septembre 2026",
    intro:
      "Les participants développent leur structure, aident leurs partenaires, parlent de Crypto Cash sur les réseaux sociaux et accumulent des points. À la fin, les 5 participants ayant le plus de points sont désignés.",
    stats: { prizeFund: "Cagnotte", winners: "Gagnants", period: "Période", days: "jours de concours" },
  },
  prizes: {
    eyebrow: "Prix",
    title: "Cagnotte",
    intro: "Les cinq meilleurs participants reçoivent des prix en argent à l'issue du concours.",
    place: (n) => `${n}${n === 1 ? "re" : "e"} place`,
    note: "Les prix sont versés directement sur le wallet TON du gagnant.",
  },
  points: {
    eyebrow: "Comment gagner des points ?",
    title: "Trois façons de gagner des points",
    intro: "Les points sont attribués pour des actions réelles : activations de partenaires, abonnement à la chaîne vidéo et promotion de Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} point${n === 1 ? "" : "s"}`,
    structure: {
      title: "Développement de la structure",
      desc: "Des points pour l'activation de partenaires personnels à n'importe quel niveau Crypto Cash.",
      note: "Seules les activations réelles de nouveaux partenaires personnels sont prises en compte. Une simple inscription ne rapporte pas de points.",
    },
    subscribe: {
      title: "Abonnement à la chaîne vidéo",
      desc: "Abonnez-vous à la chaîne officielle Crypto Style sur YouTube ou RUTUBE.",
      note: "Si un participant s'abonne à la fois à YouTube et à RUTUBE, le maximum pour cet élément est de 3 points.",
      btn: "S'abonner",
    },
    promo: {
      title: "Promotion de Crypto Cash",
      desc: "Parlez de Crypto Cash sur les réseaux sociaux — chaque publication rapporte des points.",
      items: [
        { title: "Publication personnelle", pts: 5, desc: "Maximum 3 publications personnelles par semaine. La publication doit contenir des informations réelles sur Crypto Cash ou être liée au programme." },
        { title: "Vidéo personnelle", pts: 7, desc: "Des points sont attribués pour chaque publication vidéo distincte.\nMaximum 3 vidéos par semaine." },
        { title: "Stories / publication courte", pts: 2, desc: "Maximum 3 Stories personnelles par semaine." },
        { title: "Promotion complète", pts: 10, desc: "Points supplémentaires pour trois actions : publication personnelle + Stories/publication courte + vidéo personnelle. Pas plus d'une fois par semaine." },
      ],
    },
  },
  rules: {
    eyebrow: "Règles importantes",
    title: "Conditions de participation",
    allowed: [
      "Seules les activations réelles sont prises en compte.",
      "Un participant — un identifiant.",
      "Toutes les publications et actions doivent être réelles et vérifiables.",
      "Le même contenu ne peut pas être réutilisé pour obtenir des points.",
    ],
    forbidden: [
      "Les publications créées uniquement pour gonfler artificiellement les points ne sont pas prises en compte.",
      "Les comptes vides ou créés spécialement pour le concours ne sont pas pris en compte.",
    ],
    admin: "L'administration se réserve le droit de ne pas comptabiliser les actions présentant des signes évidents de manipulation artificielle ou enfreignant les règles du concours.",
    footer: "Les points sont attribués après vérification et confirmation.",
  },
  confirm: {
    eyebrow: "Comment confirmer ses points ?",
    title: "Envoyez votre confirmation via Telegram",
    intro: "Les confirmations sont envoyées en message à la chaîne Telegram Crypto Style Matrix News.",
    channel: "Crypto Style Matrix News",
    btn: "Ouvrir la chaîne Telegram",
    items: [
      { title: "Activation d'un partenaire", desc: "Votre identifiant + identifiant du partenaire + niveau d'activation." },
      { title: "Abonnement YouTube / RUTUBE", desc: "Votre identifiant + capture d'écran de l'abonnement." },
      { title: "Publication", desc: "Votre identifiant + lien vers la publication ou capture d'écran. Le compte doit être public." },
    ],
  },
  leaderboard: {
    eyebrow: "Classement",
    title: "TOP CRYPTO CASH — Classement",
    cols: { place: "Place", participant: "Participant", points: "Points" },
    empty: "Les premiers résultats apparaîtront après le début du concours et la vérification des points.",
    note: "Le classement sera mis à jour tout au long du concours afin que les participants puissent voir leur position actuelle.",
    updatedAt: "Mis à jour",
  },
  dates: {
    eyebrow: "Dates clés",
    title: "Calendrier du concours",
    start: { label: "Début", date: "2 septembre" },
    finish: { label: "Fin", date: "24 septembre" },
    winners: { label: "Gagnants", date: "25 septembre" },
    cta: "Ouvrir Crypto Cash",
    ctaSecondary: "Tous les programmes",
  },
};

const it: ContestDict = {
  docTitle: "TOP CRYPTO CASH — concorso per i partecipanti Crypto Cash | Crypto Style",
  metaDescription:
    "Il primo concorso per i partecipanti Crypto Cash: 2–24 settembre 2026. Sviluppa la struttura, promuovi Crypto Cash e accumula punti. Montepremi di 700 $ pagato sul wallet TON.",
  back: "Tutti i programmi",
  nav: { intro: "Panoramica", prizes: "Premi", points: "Punti", rules: "Regole", confirm: "Conferma", leaderboard: "Classifica", dates: "Date" },
  hero: {
    eyebrow: "Concorso",
    title2: "Il primo concorso per i partecipanti Crypto Cash",
    period: "2–24 settembre 2026",
    intro:
      "I partecipanti sviluppano la struttura, aiutano i partner, parlano di Crypto Cash sui social e accumulano punti. Alla fine vengono individuati i 5 partecipanti con il maggior numero di punti.",
    stats: { prizeFund: "Montepremi", winners: "Vincitori", period: "Periodo", days: "giorni di concorso" },
  },
  prizes: {
    eyebrow: "Premi",
    title: "Montepremi",
    intro: "I cinque migliori partecipanti ricevono premi in denaro al termine del concorso.",
    place: (n) => `${n}º posto`,
    note: "I premi vengono accreditati direttamente sul wallet TON del vincitore.",
  },
  points: {
    eyebrow: "Come guadagnare punti?",
    title: "Tre modi per guadagnare punti",
    intro: "I punti vengono assegnati per azioni reali: attivazioni di partner, iscrizione al canale video e promozione di Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${n === 1 ? "punto" : "punti"}`,
    structure: {
      title: "Sviluppo della struttura",
      desc: "Punti per l'attivazione di partner personali a qualsiasi livello Crypto Cash.",
      note: "Contano solo le attivazioni reali di nuovi partner personali. La semplice registrazione non dà punti.",
    },
    subscribe: {
      title: "Iscrizione al canale video",
      desc: "Iscriviti al canale ufficiale Crypto Style su YouTube o RUTUBE.",
      note: "Se un partecipante si iscrive sia a YouTube che a RUTUBE, il massimo per questa voce è di 3 punti.",
      btn: "Iscriviti",
    },
    promo: {
      title: "Promozione di Crypto Cash",
      desc: "Parla di Crypto Cash sui social — ogni pubblicazione porta punti.",
      items: [
        { title: "Post personale", pts: 5, desc: "Massimo 3 post personali a settimana. Il post deve contenere informazioni reali su Crypto Cash o essere collegato al programma." },
        { title: "Video personale", pts: 7, desc: "I punti vengono assegnati per ogni singola pubblicazione video.\nMassimo 3 video a settimana." },
        { title: "Stories / pubblicazione breve", pts: 2, desc: "Massimo 3 Stories personali a settimana." },
        { title: "Promozione completa", pts: 10, desc: "Punti extra per tre azioni: post personale + Stories/pubblicazione breve + video personale. Non più di 1 volta a settimana." },
      ],
    },
  },
  rules: {
    eyebrow: "Regole importanti",
    title: "Condizioni di partecipazione",
    allowed: [
      "Contano solo le attivazioni reali.",
      "Un partecipante — un login.",
      "Tutte le pubblicazioni e le azioni devono essere reali e verificabili.",
      "Lo stesso materiale non può essere riutilizzato per ottenere punti.",
    ],
    forbidden: [
      "Le pubblicazioni create esclusivamente per gonfiare artificialmente i punti non vengono conteggiate.",
      "Gli account vuoti o creati appositamente per il concorso non vengono conteggiati.",
    ],
    admin: "L'amministrazione si riserva il diritto di non conteggiare azioni con evidenti segni di manipolazione artificiale o che violano le regole del concorso.",
    footer: "I punti vengono accreditati dopo verifica e conferma.",
  },
  confirm: {
    eyebrow: "Come confermare i punti?",
    title: "Invia la conferma su Telegram",
    intro: "Le conferme vengono inviate come messaggi al canale Telegram Crypto Style Matrix News.",
    channel: "Crypto Style Matrix News",
    btn: "Apri il canale Telegram",
    items: [
      { title: "Attivazione di un partner", desc: "Il tuo login + login del partner + livello di attivazione." },
      { title: "Iscrizione YouTube / RUTUBE", desc: "Il tuo login + screenshot dell'iscrizione." },
      { title: "Pubblicazione", desc: "Il tuo login + link alla pubblicazione o screenshot. L'account deve essere pubblico." },
    ],
  },
  leaderboard: {
    eyebrow: "Classifica",
    title: "TOP CRYPTO CASH — Classifica",
    cols: { place: "Posto", participant: "Partecipante", points: "Punti" },
    empty: "I primi risultati appariranno dopo l'inizio del concorso e la verifica dei punti.",
    note: "La classifica verrà aggiornata durante il concorso, così i partecipanti potranno vedere la loro posizione attuale.",
    updatedAt: "Aggiornato",
  },
  dates: {
    eyebrow: "Date chiave",
    title: "Calendario del concorso",
    start: { label: "Inizio", date: "2 settembre" },
    finish: { label: "Fine", date: "24 settembre" },
    winners: { label: "Vincitori", date: "25 settembre" },
    cta: "Apri Crypto Cash",
    ctaSecondary: "Tutti i programmi",
  },
};

const es: ContestDict = {
  docTitle: "TOP CRYPTO CASH — concurso para participantes de Crypto Cash | Crypto Style",
  metaDescription:
    "El primer concurso para participantes de Crypto Cash: del 2 al 24 de septiembre de 2026. Desarrolla tu estructura, promociona Crypto Cash y suma puntos. Bolsa de premios de 700 $ pagada a tu wallet TON.",
  back: "Todos los programas",
  nav: { intro: "Resumen", prizes: "Premios", points: "Puntos", rules: "Reglas", confirm: "Confirmación", leaderboard: "Clasificación", dates: "Fechas" },
  hero: {
    eyebrow: "Concurso",
    title2: "El primer concurso para participantes de Crypto Cash",
    period: "2–24 de septiembre de 2026",
    intro:
      "Los participantes desarrollan su estructura, ayudan a sus socios, hablan de Crypto Cash en redes sociales y suman puntos. Al final se determinan los 5 participantes con más puntos.",
    stats: { prizeFund: "Bolsa de premios", winners: "Ganadores", period: "Periodo", days: "días de concurso" },
  },
  prizes: {
    eyebrow: "Premios",
    title: "Bolsa de premios",
    intro: "Los cinco mejores participantes reciben premios en efectivo al finalizar el concurso.",
    place: (n) => `${n}º lugar`,
    note: "Los premios se abonan directamente en la wallet TON del ganador.",
  },
  points: {
    eyebrow: "¿Cómo sumar puntos?",
    title: "Tres formas de sumar puntos",
    intro: "Los puntos se otorgan por acciones reales: activaciones de socios, suscripción al canal de vídeo y promoción de Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${n === 1 ? "punto" : "puntos"}`,
    structure: {
      title: "Desarrollo de la estructura",
      desc: "Puntos por activar socios personales en cualquier nivel de Crypto Cash.",
      note: "Solo cuentan las activaciones reales de nuevos socios personales. El simple registro no otorga puntos.",
    },
    subscribe: {
      title: "Suscripción al canal de vídeo",
      desc: "Suscríbete al canal oficial de Crypto Style en YouTube o RUTUBE.",
      note: "Si un participante se suscribe tanto a YouTube como a RUTUBE, el máximo por este punto es de 3 puntos.",
      btn: "Suscribirse",
    },
    promo: {
      title: "Promoción de Crypto Cash",
      desc: "Habla de Crypto Cash en redes sociales: cada publicación suma puntos.",
      items: [
        { title: "Publicación propia", pts: 5, desc: "Máximo 3 publicaciones propias por semana. La publicación debe contener información real sobre Crypto Cash o estar relacionada con el programa." },
        { title: "Vídeo propio", pts: 7, desc: "Se otorgan puntos por cada publicación de vídeo independiente.\nMáximo 3 vídeos por semana." },
        { title: "Stories / publicación corta", pts: 2, desc: "Máximo 3 Stories propias por semana." },
        { title: "Promoción integral", pts: 10, desc: "Puntos adicionales por realizar tres acciones: publicación propia + Stories/publicación corta + vídeo propio. No más de 1 vez por semana." },
      ],
    },
  },
  rules: {
    eyebrow: "Reglas importantes",
    title: "Condiciones de participación",
    allowed: [
      "Solo cuentan las activaciones reales.",
      "Un participante — un login.",
      "Todas las publicaciones y acciones deben ser reales y verificables.",
      "El mismo material no puede reutilizarse para obtener puntos.",
    ],
    forbidden: [
      "Las publicaciones creadas únicamente para inflar puntos artificialmente no se contabilizan.",
      "Las cuentas vacías o creadas específicamente para el concurso no se contabilizan.",
    ],
    admin: "La administración se reserva el derecho de no contabilizar acciones con signos evidentes de manipulación artificial o que infrinjan las reglas del concurso.",
    footer: "Los puntos se acreditan tras la verificación y confirmación.",
  },
  confirm: {
    eyebrow: "¿Cómo confirmar los puntos?",
    title: "Envía tu confirmación por Telegram",
    intro: "Las confirmaciones se envían como mensajes al canal de Telegram Crypto Style Matrix News.",
    channel: "Crypto Style Matrix News",
    btn: "Abrir canal de Telegram",
    items: [
      { title: "Activación de un socio", desc: "Tu login + login del socio + nivel de activación." },
      { title: "Suscripción a YouTube / RUTUBE", desc: "Tu login + captura de pantalla de la suscripción." },
      { title: "Publicación", desc: "Tu login + enlace a la publicación o captura de pantalla. La cuenta debe ser pública." },
    ],
  },
  leaderboard: {
    eyebrow: "Clasificación",
    title: "TOP CRYPTO CASH — Clasificación",
    cols: { place: "Puesto", participant: "Participante", points: "Puntos" },
    empty: "Los primeros resultados aparecerán tras el inicio del concurso y la verificación de los puntos.",
    note: "La clasificación se actualizará durante el concurso para que los participantes puedan ver su posición actual.",
    updatedAt: "Actualizado",
  },
  dates: {
    eyebrow: "Fechas clave",
    title: "Calendario del concurso",
    start: { label: "Inicio", date: "2 de septiembre" },
    finish: { label: "Final", date: "24 de septiembre" },
    winners: { label: "Ganadores", date: "25 de septiembre" },
    cta: "Abrir Crypto Cash",
    ctaSecondary: "Todos los programas",
  },
};

const pt: ContestDict = {
  docTitle: "TOP CRYPTO CASH — concurso para participantes do Crypto Cash | Crypto Style",
  metaDescription:
    "O primeiro concurso para participantes do Crypto Cash: 2–24 de setembro de 2026. Desenvolva a sua estrutura, promova o Crypto Cash e acumule pontos. Prémios de 700 $ pagos na wallet TON.",
  back: "Todos os programas",
  nav: { intro: "Visão geral", prizes: "Prémios", points: "Pontos", rules: "Regras", confirm: "Confirmação", leaderboard: "Classificação", dates: "Datas" },
  hero: {
    eyebrow: "Concurso",
    title2: "O primeiro concurso para participantes do Crypto Cash",
    period: "2–24 de setembro de 2026",
    intro:
      "Os participantes desenvolvem a estrutura, ajudam os parceiros, falam sobre o Crypto Cash nas redes sociais e acumulam pontos. No final são determinados os 5 participantes com mais pontos.",
    stats: { prizeFund: "Fundo de prémios", winners: "Vencedores", period: "Período", days: "dias de concurso" },
  },
  prizes: {
    eyebrow: "Prémios",
    title: "Fundo de prémios",
    intro: "Os cinco melhores participantes recebem prémios em dinheiro no final do concurso.",
    place: (n) => `${n}º lugar`,
    note: "Os prémios são creditados diretamente na wallet TON do vencedor.",
  },
  points: {
    eyebrow: "Como acumular pontos?",
    title: "Três formas de acumular pontos",
    intro: "Os pontos são atribuídos por ações reais: ativações de parceiros, subscrição do canal de vídeo e promoção do Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${n === 1 ? "ponto" : "pontos"}`,
    structure: {
      title: "Desenvolvimento da estrutura",
      desc: "Pontos pela ativação de parceiros pessoais em qualquer nível do Crypto Cash.",
      note: "Apenas contam ativações reais de novos parceiros pessoais. O simples registo não dá pontos.",
    },
    subscribe: {
      title: "Subscrição do canal de vídeo",
      desc: "Subscreva o canal oficial da Crypto Style no YouTube ou RUTUBE.",
      note: "Se o participante subscrever tanto o YouTube como o RUTUBE, o máximo por este item é de 3 pontos.",
      btn: "Subscrever",
    },
    promo: {
      title: "Promoção do Crypto Cash",
      desc: "Fale sobre o Crypto Cash nas redes sociais — cada publicação dá pontos.",
      items: [
        { title: "Publicação própria", pts: 5, desc: "Máximo de 3 publicações próprias por semana. A publicação deve conter informação real sobre o Crypto Cash ou estar relacionada com o programa." },
        { title: "Vídeo próprio", pts: 7, desc: "Os pontos são atribuídos por cada publicação de vídeo individual.\nMáximo de 3 vídeos por semana." },
        { title: "Stories / publicação curta", pts: 2, desc: "Máximo de 3 Stories próprias por semana." },
        { title: "Promoção completa", pts: 10, desc: "Pontos adicionais por realizar três ações: publicação própria + Stories/publicação curta + vídeo próprio. No máximo 1 vez por semana." },
      ],
    },
  },
  rules: {
    eyebrow: "Regras importantes",
    title: "Condições de participação",
    allowed: [
      "Apenas contam ativações reais.",
      "Um participante — um login.",
      "Todas as publicações e ações devem ser reais e verificáveis.",
      "O mesmo material não pode ser reutilizado para obter pontos.",
    ],
    forbidden: [
      "Publicações criadas exclusivamente para inflacionar pontos artificialmente não são contabilizadas.",
      "Contas vazias ou criadas especificamente para o concurso não são contabilizadas.",
    ],
    admin: "A administração reserva-se o direito de não contabilizar ações com sinais evidentes de manipulação artificial ou que violem as regras do concurso.",
    footer: "Os pontos são creditados após verificação e confirmação.",
  },
  confirm: {
    eyebrow: "Como confirmar os pontos?",
    title: "Envie a confirmação pelo Telegram",
    intro: "As confirmações são enviadas por mensagem para o canal de Telegram Crypto Style Matrix News.",
    channel: "Crypto Style Matrix News",
    btn: "Abrir canal do Telegram",
    items: [
      { title: "Ativação de parceiro", desc: "O seu login + login do parceiro + nível de ativação." },
      { title: "Subscrição YouTube / RUTUBE", desc: "O seu login + captura de ecrã da subscrição." },
      { title: "Publicação", desc: "O seu login + link para a publicação ou captura de ecrã. A conta deve ser pública." },
    ],
  },
  leaderboard: {
    eyebrow: "Classificação",
    title: "TOP CRYPTO CASH — Classificação",
    cols: { place: "Lugar", participant: "Participante", points: "Pontos" },
    empty: "Os primeiros resultados aparecerão após o início do concurso e a verificação dos pontos.",
    note: "A classificação será atualizada ao longo do concurso para que os participantes possam ver a sua posição atual.",
    updatedAt: "Atualizado",
  },
  dates: {
    eyebrow: "Datas-chave",
    title: "Calendário do concurso",
    start: { label: "Início", date: "2 de setembro" },
    finish: { label: "Fim", date: "24 de setembro" },
    winners: { label: "Vencedores", date: "25 de setembro" },
    cta: "Abrir Crypto Cash",
    ctaSecondary: "Todos os programas",
  },
};

const uk: ContestDict = {
  docTitle: "TOP CRYPTO CASH — конкурс для учасників Crypto Cash | Crypto Style",
  metaDescription:
    "Перший конкурс для учасників Crypto Cash: 2–24 вересня 2026. Розвивайте структуру, просувайте Crypto Cash і набирайте бали. Призовий фонд $700, виплати на TON-гаманець.",
  back: "Усі програми",
  nav: { intro: "Про конкурс", prizes: "Призи", points: "Бали", rules: "Правила", confirm: "Підтвердження", leaderboard: "Таблиця лідерів", dates: "Дати" },
  hero: {
    eyebrow: "Конкурс",
    title2: "Перший конкурс для учасників Crypto Cash",
    period: "2–24 вересня 2026",
    intro:
      "Учасники розвивають структуру, допомагають партнерам, розповідають про Crypto Cash у соціальних мережах і набирають бали. Наприкінці конкурсу визначаються 5 учасників з найбільшою кількістю балів.",
    stats: { prizeFund: "Призовий фонд", winners: "Переможців", period: "Період", days: "дні конкурсу" },
  },
  prizes: {
    eyebrow: "Призи",
    title: "Призовий фонд",
    intro: "П'ятеро найкращих учасників за підсумками конкурсу отримують грошові призи.",
    place: (n) => `${n} місце`,
    note: "Призові нараховуються безпосередньо на TON-гаманець переможця.",
  },
  points: {
    eyebrow: "Як набрати бали?",
    title: "Три способи набрати бали",
    intro: "Бали нараховуються за реальні дії: активації партнерів, підписку на відеоканал і просування Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${pluralRu(n, "бал", "бали", "балів")}`,
    structure: {
      title: "Розвиток структури",
      desc: "Бали за активацію особистих партнерів на будь-якому рівні Crypto Cash.",
      note: "Враховуються лише реальні активації нових особистих партнерів. Проста реєстрація балів не дає.",
    },
    subscribe: {
      title: "Підписка на відеоканал",
      desc: "Підпишіться на офіційний канал Crypto Style на YouTube або RUTUBE.",
      note: "Якщо учасник підписався і на YouTube, і на RUTUBE, максимум за цей пункт — 3 бали.",
      btn: "Підписатися",
    },
    promo: {
      title: "Просування Crypto Cash",
      desc: "Розповідайте про Crypto Cash у соціальних мережах — кожна публікація приносить бали.",
      items: [
        { title: "Власний пост", pts: 5, desc: "Максимум 3 власні пости на тиждень. Пост має містити реальну інформацію про Crypto Cash або бути пов'язаним із програмою." },
        { title: "Власне відео", pts: 7, desc: "За кожну окрему публікацію відео нараховуються бали.\nМаксимум 3 відео на тиждень." },
        { title: "Stories / коротка публікація", pts: 2, desc: "Максимум 3 власні Stories на тиждень." },
        { title: "Комплексне просування", pts: 10, desc: "Додаткові бали за виконання трьох дій: власний пост + Stories/коротка публікація + власне відео. Не більше 1 разу на тиждень." },
      ],
    },
  },
  rules: {
    eyebrow: "Важливі правила",
    title: "Умови участі",
    allowed: [
      "Враховуються лише реальні активації.",
      "Один учасник конкурсу — один логін.",
      "Усі публікації та дії мають бути реальними й доступними для перевірки.",
      "Той самий матеріал не можна використовувати повторно для отримання балів.",
    ],
    forbidden: [
      "Публікації, створені виключно для штучного накручування балів, не враховуються.",
      "Порожні акаунти або акаунти, створені спеціально для конкурсу, не враховуються.",
    ],
    admin: "Адміністрація залишає за собою право не зараховувати дії, які мають явні ознаки штучного накручування або порушують правила конкурсу.",
    footer: "Бали нараховуються після перевірки та підтвердження.",
  },
  confirm: {
    eyebrow: "Як підтвердити бали?",
    title: "Надішліть підтвердження в Telegram",
    intro: "Підтвердження надсилаються в повідомлення Telegram-каналу Crypto Style Matrix News.",
    channel: "Crypto Style Matrix News",
    btn: "Відкрити Telegram-канал",
    items: [
      { title: "Активація партнера", desc: "Свій логін + логін партнера + рівень активації." },
      { title: "Підписка на YouTube / RUTUBE", desc: "Свій логін + скриншот підписки." },
      { title: "Публікація", desc: "Свій логін + посилання на публікацію або скриншот. Акаунт має бути відкритим." },
    ],
  },
  leaderboard: {
    eyebrow: "Таблиця лідерів",
    title: "TOP CRYPTO CASH — Таблиця лідерів",
    cols: { place: "Місце", participant: "Учасник", points: "Бали" },
    empty: "Перші результати з'являться після початку конкурсу та перевірки балів.",
    note: "Протягом конкурсу рейтинг оновлюватиметься, щоб учасники могли бачити свою поточну позицію.",
    updatedAt: "Оновлено",
  },
  dates: {
    eyebrow: "Ключові дати",
    title: "Розклад конкурсу",
    start: { label: "Старт", date: "2 вересня" },
    finish: { label: "Фініш", date: "24 вересня" },
    winners: { label: "Переможці", date: "25 вересня" },
    cta: "Відкрити Crypto Cash",
    ctaSecondary: "Усі програми",
  },
};

const kk: ContestDict = {
  docTitle: "TOP CRYPTO CASH — Crypto Cash қатысушыларына арналған байқау | Crypto Style",
  metaDescription:
    "Crypto Cash қатысушыларына арналған алғашқы байқау: 2026 жылғы 2–24 қыркүйек. Құрылымды дамытыңыз, Crypto Cash-ті жарнамалаңыз және ұпай жинаңыз. $700 жүлде қоры TON-әмиянға төленеді.",
  back: "Барлық бағдарламалар",
  nav: { intro: "Байқау туралы", prizes: "Жүлделер", points: "Ұпайлар", rules: "Ережелер", confirm: "Растау", leaderboard: "Көшбасшылар кестесі", dates: "Күндер" },
  hero: {
    eyebrow: "Байқау",
    title2: "Crypto Cash қатысушыларына арналған алғашқы байқау",
    period: "2026 жылғы 2–24 қыркүйек",
    intro:
      "Қатысушылар құрылымды дамытады, серіктестерге көмектеседі, әлеуметтік желілерде Crypto Cash туралы айтады және ұпай жинайды. Байқау соңында ең көп ұпай жинаған 5 қатысушы анықталады.",
    stats: { prizeFund: "Жүлде қоры", winners: "Жеңімпаз", period: "Кезең", days: "байқау күні" },
  },
  prizes: {
    eyebrow: "Жүлделер",
    title: "Жүлде қоры",
    intro: "Байқау қорытындысы бойынша үздік бес қатысушы ақшалай жүлде алады.",
    place: (n) => `${n}-орын`,
    note: "Жүлделер тікелей жеңімпаздың TON-әмиянына аударылады.",
  },
  points: {
    eyebrow: "Ұпайды қалай жинауға болады?",
    title: "Ұпай жинаудың үш тәсілі",
    intro: "Ұпайлар нақты әрекеттер үшін беріледі: серіктестерді белсендіру, бейнеарнаға жазылу және Crypto Cash-ті жарнамалау.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ұпай`,
    structure: {
      title: "Құрылымды дамыту",
      desc: "Crypto Cash-тің кез келген деңгейінде жеке серіктестерді белсендіргені үшін ұпайлар.",
      note: "Тек жаңа жеке серіктестердің нақты белсендірулері есепке алынады. Жай тіркелу ұпай бермейді.",
    },
    subscribe: {
      title: "Бейнеарнаға жазылу",
      desc: "YouTube немесе RUTUBE-тегі ресми Crypto Style арнасына жазылыңыз.",
      note: "Қатысушы YouTube-ке де, RUTUBE-ке де жазылса, бұл тармақ бойынша ең көбі — 3 ұпай.",
      btn: "Жазылу",
    },
    promo: {
      title: "Crypto Cash-ті жарнамалау",
      desc: "Әлеуметтік желілерде Crypto Cash туралы айтыңыз — әр жарияланым ұпай әкеледі.",
      items: [
        { title: "Өз посты", pts: 5, desc: "Аптасына ең көбі 3 өз посты. Постта Crypto Cash туралы нақты ақпарат болуы немесе бағдарламамен байланысты болуы керек." },
        { title: "Өз бейнесі", pts: 7, desc: "Әрбір жеке бейне жарияланымы үшін ұпай беріледі.\nАптасына ең көбі 3 бейне." },
        { title: "Stories / қысқа жарияланым", pts: 2, desc: "Аптасына ең көбі 3 өз Stories." },
        { title: "Кешенді жарнамалау", pts: 10, desc: "Үш әрекетті орындағаны үшін қосымша ұпай: өз посты + Stories/қысқа жарияланым + өз бейнесі. Аптасына 1 реттен артық емес." },
      ],
    },
  },
  rules: {
    eyebrow: "Маңызды ережелер",
    title: "Қатысу шарттары",
    allowed: [
      "Тек нақты белсендірулер есепке алынады.",
      "Бір қатысушы — бір логин.",
      "Барлық жарияланымдар мен әрекеттер нақты және тексеруге қолжетімді болуы керек.",
      "Бір материалды ұпай алу үшін қайта пайдалануға болмайды.",
    ],
    forbidden: [
      "Тек ұпайды жасанды түрде көбейту үшін жасалған жарияланымдар есепке алынбайды.",
      "Бос аккаунттар немесе арнайы байқау үшін жасалған аккаунттар есепке алынбайды.",
    ],
    admin: "Әкімшілік жасанды көбейтудің айқын белгілері бар немесе байқау ережелерін бұзатын әрекеттерді есепке алмау құқығын өзіне қалдырады.",
    footer: "Ұпайлар тексеру мен растаудан кейін есептеледі.",
  },
  confirm: {
    eyebrow: "Ұпайды қалай растауға болады?",
    title: "Растауды Telegram арқылы жіберіңіз",
    intro: "Растаулар Crypto Style Matrix News Telegram-арнасының хабарламаларына жіберіледі.",
    channel: "Crypto Style Matrix News",
    btn: "Telegram-арнаны ашу",
    items: [
      { title: "Серіктесті белсендіру", desc: "Өз логиніңіз + серіктестің логині + белсендіру деңгейі." },
      { title: "YouTube / RUTUBE жазылымы", desc: "Өз логиніңіз + жазылымның скриншоты." },
      { title: "Жарияланым", desc: "Өз логиніңіз + жарияланымға сілтеме немесе скриншот. Аккаунт ашық болуы керек." },
    ],
  },
  leaderboard: {
    eyebrow: "Көшбасшылар кестесі",
    title: "TOP CRYPTO CASH — Көшбасшылар кестесі",
    cols: { place: "Орын", participant: "Қатысушы", points: "Ұпай" },
    empty: "Алғашқы нәтижелер байқау басталып, ұпайлар тексерілгеннен кейін пайда болады.",
    note: "Байқау барысында рейтинг жаңартылып отырады, сондықтан қатысушылар өз ағымдағы орнын көре алады.",
    updatedAt: "Жаңартылды",
  },
  dates: {
    eyebrow: "Негізгі күндер",
    title: "Байқау кестесі",
    start: { label: "Басталуы", date: "2 қыркүйек" },
    finish: { label: "Аяқталуы", date: "24 қыркүйек" },
    winners: { label: "Жеңімпаздар", date: "25 қыркүйек" },
    cta: "Crypto Cash-ті ашу",
    ctaSecondary: "Барлық бағдарламалар",
  },
};

const pl: ContestDict = {
  docTitle: "TOP CRYPTO CASH — konkurs dla uczestników Crypto Cash | Crypto Style",
  metaDescription:
    "Pierwszy konkurs dla uczestników Crypto Cash: 2–24 września 2026. Rozwijaj strukturę, promuj Crypto Cash i zdobywaj punkty. Pula nagród 700 $ wypłacana na portfel TON.",
  back: "Wszystkie programy",
  nav: { intro: "O konkursie", prizes: "Nagrody", points: "Punkty", rules: "Zasady", confirm: "Potwierdzenie", leaderboard: "Ranking", dates: "Daty" },
  hero: {
    eyebrow: "Konkurs",
    title2: "Pierwszy konkurs dla uczestników Crypto Cash",
    period: "2–24 września 2026",
    intro:
      "Uczestnicy rozwijają strukturę, pomagają partnerom, opowiadają o Crypto Cash w mediach społecznościowych i zdobywają punkty. Na koniec wyłanianych jest 5 uczestników z największą liczbą punktów.",
    stats: { prizeFund: "Pula nagród", winners: "Zwycięzców", period: "Okres", days: "dni konkursu" },
  },
  prizes: {
    eyebrow: "Nagrody",
    title: "Pula nagród",
    intro: "Pięciu najlepszych uczestników otrzymuje nagrody pieniężne po zakończeniu konkursu.",
    place: (n) => `${n}. miejsce`,
    note: "Nagrody są wypłacane bezpośrednio na portfel TON zwycięzcy.",
  },
  points: {
    eyebrow: "Jak zdobywać punkty?",
    title: "Trzy sposoby na zdobycie punktów",
    intro: "Punkty przyznawane są za realne działania: aktywacje partnerów, subskrypcję kanału wideo i promocję Crypto Cash.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} ${pluralPl(n)}`,
    structure: {
      title: "Rozwój struktury",
      desc: "Punkty za aktywację osobistych partnerów na dowolnym poziomie Crypto Cash.",
      note: "Liczą się tylko realne aktywacje nowych osobistych partnerów. Sama rejestracja nie daje punktów.",
    },
    subscribe: {
      title: "Subskrypcja kanału wideo",
      desc: "Zasubskrybuj oficjalny kanał Crypto Style na YouTube lub RUTUBE.",
      note: "Jeśli uczestnik zasubskrybuje zarówno YouTube, jak i RUTUBE, maksimum za ten punkt to 3 punkty.",
      btn: "Subskrybuj",
    },
    promo: {
      title: "Promocja Crypto Cash",
      desc: "Opowiadaj o Crypto Cash w mediach społecznościowych — każda publikacja daje punkty.",
      items: [
        { title: "Własny post", pts: 5, desc: "Maksymalnie 3 własne posty tygodniowo. Post musi zawierać prawdziwe informacje o Crypto Cash lub być związany z programem." },
        { title: "Własne wideo", pts: 7, desc: "Punkty przyznawane są za każdą osobną publikację wideo.\nMaksymalnie 3 filmy tygodniowo." },
        { title: "Stories / krótka publikacja", pts: 2, desc: "Maksymalnie 3 własne Stories tygodniowo." },
        { title: "Promocja kompleksowa", pts: 10, desc: "Dodatkowe punkty za wykonanie trzech działań: własny post + Stories/krótka publikacja + własne wideo. Nie częściej niż 1 raz w tygodniu." },
      ],
    },
  },
  rules: {
    eyebrow: "Ważne zasady",
    title: "Warunki uczestnictwa",
    allowed: [
      "Liczą się tylko realne aktywacje.",
      "Jeden uczestnik konkursu — jeden login.",
      "Wszystkie publikacje i działania muszą być prawdziwe i możliwe do zweryfikowania.",
      "Tego samego materiału nie można użyć ponownie w celu zdobycia punktów.",
    ],
    forbidden: [
      "Publikacje stworzone wyłącznie w celu sztucznego nabijania punktów nie są uwzględniane.",
      "Puste konta lub konta utworzone specjalnie na potrzeby konkursu nie są uwzględniane.",
    ],
    admin: "Administracja zastrzega sobie prawo do niezaliczania działań, które noszą wyraźne znamiona sztucznego nabijania punktów lub naruszają zasady konkursu.",
    footer: "Punkty są naliczane po weryfikacji i potwierdzeniu.",
  },
  confirm: {
    eyebrow: "Jak potwierdzić punkty?",
    title: "Wyślij potwierdzenie przez Telegram",
    intro: "Potwierdzenia wysyłane są w wiadomościach do kanału Telegram Crypto Style Matrix News.",
    channel: "Crypto Style Matrix News",
    btn: "Otwórz kanał Telegram",
    items: [
      { title: "Aktywacja partnera", desc: "Twój login + login partnera + poziom aktywacji." },
      { title: "Subskrypcja YouTube / RUTUBE", desc: "Twój login + zrzut ekranu subskrypcji." },
      { title: "Publikacja", desc: "Twój login + link do publikacji lub zrzut ekranu. Konto musi być publiczne." },
    ],
  },
  leaderboard: {
    eyebrow: "Ranking",
    title: "TOP CRYPTO CASH — Ranking",
    cols: { place: "Miejsce", participant: "Uczestnik", points: "Punkty" },
    empty: "Pierwsze wyniki pojawią się po rozpoczęciu konkursu i weryfikacji punktów.",
    note: "W trakcie konkursu ranking będzie aktualizowany, aby uczestnicy mogli śledzić swoją aktualną pozycję.",
    updatedAt: "Zaktualizowano",
  },
  dates: {
    eyebrow: "Kluczowe daty",
    title: "Harmonogram konkursu",
    start: { label: "Start", date: "2 września" },
    finish: { label: "Koniec", date: "24 września" },
    winners: { label: "Zwycięzcy", date: "25 września" },
    cta: "Otwórz Crypto Cash",
    ctaSecondary: "Wszystkie programy",
  },
};

function pluralPl(n: number) {
  const a = Math.abs(n);
  if (a === 1) return "punkt";
  const b = a % 10;
  const c = a % 100;
  if (b >= 2 && b <= 4 && !(c >= 12 && c <= 14)) return "punkty";
  return "punktów";
}

const hu: ContestDict = {
  docTitle: "TOP CRYPTO CASH — verseny a Crypto Cash résztvevőinek | Crypto Style",
  metaDescription:
    "Az első verseny a Crypto Cash résztvevőinek: 2026. szeptember 2–24. Építsd a struktúrádat, népszerűsítsd a Crypto Casht és gyűjts pontokat. 700 $ nyereményalap, kifizetés TON-tárcára.",
  back: "Összes program",
  nav: { intro: "A versenyről", prizes: "Díjak", points: "Pontok", rules: "Szabályok", confirm: "Igazolás", leaderboard: "Ranglista", dates: "Dátumok" },
  hero: {
    eyebrow: "Verseny",
    title2: "Az első verseny a Crypto Cash résztvevőinek",
    period: "2026. szeptember 2–24.",
    intro:
      "A résztvevők építik a struktúrájukat, segítik partnereiket, beszélnek a Crypto Cashről a közösségi médiában és pontokat gyűjtenek. A verseny végén az 5 legtöbb pontot szerző résztvevő nyer.",
    stats: { prizeFund: "Nyereményalap", winners: "Nyertes", period: "Időszak", days: "versenynap" },
  },
  prizes: {
    eyebrow: "Díjak",
    title: "Nyereményalap",
    intro: "A verseny végén az öt legjobb résztvevő pénzdíjat kap.",
    place: (n) => `${n}. hely`,
    note: "A nyeremények közvetlenül a nyertes TON-tárcájára kerülnek jóváírásra.",
  },
  points: {
    eyebrow: "Hogyan lehet pontot szerezni?",
    title: "Három módja a pontszerzésnek",
    intro: "Pontokat valódi tevékenységekért adunk: partneraktiválás, feliratkozás a videócsatornára és a Crypto Cash népszerűsítése.",
    pts: (n) => `${n > 0 ? "+" : ""}${n} pont`,
    structure: {
      title: "Struktúraépítés",
      desc: "Pontok személyes partnerek aktiválásáért a Crypto Cash bármely szintjén.",
      note: "Csak az új személyes partnerek valódi aktiválása számít. Az egyszerű regisztráció nem ér pontot.",
    },
    subscribe: {
      title: "Feliratkozás a videócsatornára",
      desc: "Iratkozz fel a hivatalos Crypto Style csatornára YouTube-on vagy RUTUBE-on.",
      note: "Ha a résztvevő YouTube-ra és RUTUBE-ra is feliratkozik, ezért a tételért legfeljebb 3 pont jár.",
      btn: "Feliratkozás",
    },
    promo: {
      title: "A Crypto Cash népszerűsítése",
      desc: "Beszélj a Crypto Cashről a közösségi médiában — minden megjelenés pontot ér.",
      items: [
        { title: "Saját poszt", pts: 5, desc: "Hetente legfeljebb 3 saját poszt. A posztnak valós információt kell tartalmaznia a Crypto Cashről, vagy kapcsolódnia kell a programhoz." },
        { title: "Saját videó", pts: 7, desc: "Minden külön videómegjelenésért pont jár.\nHetente legfeljebb 3 videó." },
        { title: "Stories / rövid megjelenés", pts: 2, desc: "Hetente legfeljebb 3 saját Stories." },
        { title: "Komplex népszerűsítés", pts: 10, desc: "Extra pontok három tevékenység teljesítéséért: saját poszt + Stories/rövid megjelenés + saját videó. Hetente legfeljebb 1 alkalommal." },
      ],
    },
  },
  rules: {
    eyebrow: "Fontos szabályok",
    title: "Részvételi feltételek",
    allowed: [
      "Csak a valódi aktiválások számítanak.",
      "Egy versenyző — egy bejelentkezési név.",
      "Minden megjelenésnek és tevékenységnek valódinak és ellenőrizhetőnek kell lennie.",
      "Ugyanaz az anyag nem használható fel újra pontszerzésre.",
    ],
    forbidden: [
      "A kizárólag a pontok mesterséges növelésére készült megjelenések nem számítanak.",
      "Az üres vagy kifejezetten a versenyre létrehozott fiókok nem számítanak.",
    ],
    admin: "Az adminisztráció fenntartja a jogot, hogy ne számolja el azokat a tevékenységeket, amelyek egyértelműen mesterséges pontnövelésre utalnak vagy sértik a verseny szabályait.",
    footer: "A pontokat ellenőrzés és megerősítés után írjuk jóvá.",
  },
  confirm: {
    eyebrow: "Hogyan igazolhatók a pontok?",
    title: "Küldd el az igazolást Telegramon",
    intro: "Az igazolásokat üzenetben kell elküldeni a Crypto Style Matrix News Telegram-csatornának.",
    channel: "Crypto Style Matrix News",
    btn: "Telegram-csatorna megnyitása",
    items: [
      { title: "Partner aktiválása", desc: "Saját bejelentkezési név + a partner bejelentkezési neve + aktiválási szint." },
      { title: "YouTube / RUTUBE feliratkozás", desc: "Saját bejelentkezési név + képernyőkép a feliratkozásról." },
      { title: "Megjelenés", desc: "Saját bejelentkezési név + link a megjelenésre vagy képernyőkép. A fióknak nyilvánosnak kell lennie." },
    ],
  },
  leaderboard: {
    eyebrow: "Ranglista",
    title: "TOP CRYPTO CASH — Ranglista",
    cols: { place: "Hely", participant: "Résztvevő", points: "Pont" },
    empty: "Az első eredmények a verseny kezdete és a pontok ellenőrzése után jelennek meg.",
    note: "A ranglista a verseny során folyamatosan frissül, hogy a résztvevők láthassák aktuális helyezésüket.",
    updatedAt: "Frissítve",
  },
  dates: {
    eyebrow: "Fontos dátumok",
    title: "A verseny menetrendje",
    start: { label: "Rajt", date: "szeptember 2." },
    finish: { label: "Zárás", date: "szeptember 24." },
    winners: { label: "Nyertesek", date: "szeptember 25." },
    cta: "Crypto Cash megnyitása",
    ctaSecondary: "Összes program",
  },
};

export const CONTEST_DICTS: Record<LangCode, ContestDict> = { ru, en, de, fr, it, es, pt, uk, kk, pl, hu };
