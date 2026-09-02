import type { Dict } from "../dict";

export const en: Dict = {
  brand: { cash: "Cash" },

  lang: { current: "Current language", change: "Change language" },

  nav: {
    home: "Home",
    architecture: "Architecture",
    tiers: "Levels",
    ranks: "Ranks",
    development: "Roadmap",
    how: "Get Started",
    faq: "FAQ",
    menu: "Menu",
    backToPrograms: "All programs",
  },

  footer: {
    about: "An additional program of the Crypto Style ecosystem built on a TON smart contract.",
    sections: "Sections",
    basedOn: "Built on",
    basedOnText: "TON blockchain smart contract. No centralized custody of funds.",
    copyright: "Crypto Style ecosystem.",
  },

  common: {
    retry: "Try again",
    toHome: "Back to home",
    notFoundTitle: "Page not found",
    notFoundDesc: "The page may have been moved or it never existed.",
    errorTitle: "The page failed to load",
    errorDesc: "Try refreshing or returning to the home page.",
  },

  home: {
    eyebrow: "Crypto Style ecosystem · TON",
    titleLine1Pre: "Architecture for a ",
    titleAccent: "continuous",
    titleLine2: "financial flow",
    subtitle:
      "Crypto Cash is a program running on a TON smart contract. Rewards are distributed automatically between participants — with no manual control, no centralized custody of funds, and no administration involved in payouts.",
    ctaPrimary: "Get started",
    ctaSecondary: "How it works",

    whyEyebrow: "WHY CRYPTO CASH EXISTS",
    whyTitle: "Most systems lose efficiency over time.",
    whyP1:
      "Participant activity shifts, the structure grows unevenly, and the financial flow gradually fades.",
    whyP2Pre: "Crypto Cash was designed as an architecture capable of sustaining a continuous financial flow through ",
    whyP2Accent: "built-in algorithms",
    whyP2Post: " rather than manual management.",

    mechEyebrow: "Core mechanics",
    mechTitle: "Six elements of a single system",
    mechSubtitle:
      "Each mechanism serves its own purpose. Together they form a unified architecture.",
    mechMore: "Learn more",

    mech: {
      activation:  { t: "Activation",           d: "Starts a new cycle of the system." },
      notLive:     { t: "Beyond a simple queue",        d: "A dedicated distribution algorithm." },
      hundred:     { t: "100% distribution",    d: "Funds are distributed automatically, with no centralized custody." },
      compression: { t: "Compression",          d: "Keeps the structure efficient and launches new cycles." },
      clones:      { t: "System clones",        d: "Sustain a continuous financial flow for participants." },
      ranks:       { t: "Ranks",                d: "Reward active development of the ecosystem." },
    },

    teaserBadge: "Four levels of participation",
    teaserDesc: "From $10 to $500 per activation. Financial potential — up to\u00a0$80,000 per cycle.",
    teaserBtn: "View levels",
  },

  arch: {
    eyebrow: "Architecture",
    titlePre: "How ",
    subtitle:
      "Crypto Cash is not a set of separate features. It is a single system in which every mechanism complements the others and works toward one goal: sustaining a continuous financial flow.",

    s1: {
      eyebrow: "01 · Activation",
      title: "How the system starts",
      p1: "Every cycle in Crypto Cash begins with a level activation. At the moment of activation, the smart contract automatically launches the distribution algorithm. All actions are executed directly on the TON blockchain and require no involvement from any administration.",
      cardTitle: "What happens during activation?",
      items: [
        "a system cycle is launched;",
        "funds are distributed by the smart contract algorithm;",
        "payouts go directly to participants' wallets;",
        "the basis for subsequent distributions is formed.",
      ],
      highlight:
        "One activation is not one payout. The financial flow is automatically distributed among several participants via a dedicated algorithm — not by simple queue order.",
    },
    s2: {
      eyebrow: "02 · Beyond a simple queue",
      title: "A dedicated distribution algorithm",
      p1: "The structure is based on a classic binary principle: each position has two directions for growth. However, distribution does not work like an ordinary live queue.",
      p2: "Instead, a dedicated distribution algorithm is used. Its purpose is to make the financial flow wider and more balanced for both active and passive participants.",
      p3: "At every activation, the smart contract determines several recipients at once. At the START level, one activation produces payouts for 6 participants; at higher levels — for 10 at once.",
      cardALabel: "Classic queue",
      cardAText: "one activation → one recipient",
      cardBText: "one activation → algorithm → 6 or 10 payouts",
    },
    s3: {
      eyebrow: "03 · 100% distribution",
      title: "No centralized custody",
      p1: "After a level is activated, the smart contract automatically distributes the incoming funds. No payment is retained inside the system. All payouts are executed on the TON blockchain and go straight to wallets.",
      items: [
        { t: "Structural rewards",     d: "payouts to system participants" },
        { t: "Referral reward",         d: "credited to the inviting partner" },
        { t: "System clones",           d: "sustain the financial flow for participants" },
        { t: "Crypto Style pool",       d: "fund for developing the Crypto Style token" },
      ],
    },
    s4: {
      eyebrow: "04 · Compression",
      title: "Keeping the system efficient",
      p1: "Compression is one of the key elements of the Crypto Cash architecture. Its purpose is to keep the system efficient by refreshing the structure and creating conditions for launching new financial cycles.",
      howTitle: "How compression works",
      howP: "Compression is performed automatically at fixed times (on the 1st and 15th of the month).",
      duringLabel: "During compression:",
      items: [
        "inactive positions are removed;",
        "system clones that have fulfilled their role are removed;",
        "the structure is refreshed and rebalanced;",
        "new financial cycles are launched.",
      ],
      whatTitle: "What does it give participants?",
      whatP1: "Active participants keep receiving the financial flow in an up-to-date system, while the architecture remains efficient without any manual intervention.",
      whatP2: "This allows Crypto Cash to keep running continuously for as long as the project exists.",
    },
    s5: {
      eyebrow: "05 · System clones",
      title: "A continuous financial flow",
      p1: "System clones are one of the mechanisms that ensure the system runs continuously. They are not separate participants, they have no owners, and they are not intended to receive rewards. Their sole role is to take part in the algorithm and sustain the financial flow for all participants.",
      p2: "System clones are created only for the amount of the structural reward ($6, $30, $100 and $300 respectively) and distribute those funds among partners.",
      
    },
    cta: {
      titlePre: "Ready to choose your ",
      titleAccent: "level",
      titlePost: "?",
      text: "START, CORE, PRIME or NEXUS — each level unlocks its own financial potential.",
      btn: "Go to levels",
    },
  },

  tiers: {
    eyebrow: "Participation levels",
    titlePre: "Four levels · ",
    titleAccent: "one architecture",
    subtitle:
      "Each level is an independent financial cycle. Activate one, several or all of them — the choice depends on your strategy.",
    popular: "Popular",
    perActivation: "/ activation",
    periodLabel: "Cycle",
    distLabel: "Distribution",
    potentialLabel: "Potential",
    potentialPrefix: "Up to",
    footNote:
      "All distributions happen automatically at the moment of activation, directly on the TON blockchain. There is no centralized custody of funds.",

    items: {
      start: {
        tagline: "Entry-level participation — getting to know the Crypto Cash architecture",
        period: "Once every 2 weeks (compression on the 1st and 15th)",
        distribution: [
          "$6 — $1\u00A0 each to the six partners above you",
          "$1 — referral reward",
          "$2 — creation of system clones",
          "$1 — Crypto Style token development fund",
        ],
        potentialPeriod: "per cycle\n(2 weeks)",
      },
      core: {
        tagline: "Extended level for greater distribution depth",
        period: "Once a month (compression on the 1st)",
        distribution: [
          "$30 — $3 each to the ten partners above you",
          "$10 — referral reward",
          "$5 — support for system clones",
          "$5 — Crypto Style token development fund",
        ],
        potentialPeriod: "per cycle\n\u00A0(1 month)",
      },
      prime: {
        tagline: "Professional level for a large-scale financial flow",
        period: "Once every 3 months (compression on the 1st every 3 months)",
        distribution: [
          "$100 — $10 each to the ten partners above you",
          "$50 — referral reward",
          "$25 — creation of system clones",
          "$25 — Crypto Style token development fund",
        ],
        potentialPeriod: "per cycle\n(3 months)",
      },
      nexus: {
        tagline: "Top level of participation with maximum cycle potential",
        period: "Once every 4 months (compression on the 1st)",
        distribution: [
          "$300 — $30 each to the ten partners above you",
          "$100 — referral reward",
          "$50 — support for system clones",
          "$50 — Crypto Style token development fund",
        ],
        potentialPeriod: "per cycle\n(4 months)",
      },
    },

    cta: {
      titlePre: "Want to grow faster? Explore the ",
      titleAccent: "ranks",
      text: "The higher your active rank, the more financial opportunities the Crypto Cash system opens up.",
      btn: "Go to ranks",
    },
  },

  ranks: {
    eyebrow: "Active development first",
    titlePre: "Rank ",
    titleAccent: "system",
    subtitle:
      "Rank reflects a participant's contribution to the structure and their activity — not their registration date.",

    p1: "The advantage does not go to those who joined earlier — it goes to those who help develop the system.",
    p2: "The higher a participant's rank, the higher their position in the Crypto Cash architecture. This increases the likelihood of completing a full financial cycle in line with the system's algorithms.",
    p3: "The benefits of the rank system are not limited to holders of high ranks. Since participants are distributed automatically by the algorithm, the activity of some creates a financial flow for everyone.",
    p4: "Growing activity in Crypto Cash increases the dynamics of the entire architecture, not just of individual participants.",

    rangLabel: "Rank",

    partners: {
      "0_4": "0–4 partners",
      "5_49": "5–49 partners",
      "50_99": "50–99 partners",
      "100_249": "100–249 partners",
      "250_499": "250–499 partners",
      "500_999": "500–999 partners",
      "1000": "1000+ partners",
    },

    items: {
      bronze:   { name: "Bronze",   desc: "The first level of participation, where structure growth begins." },
      silver:   { name: "Silver",   desc: "The first step into active network development." },
      gold:     { name: "Gold",     desc: "A stable structure and growing influence." },
      platinum: { name: "Platinum", desc: "An experienced leader within the ecosystem." },
      sapphire: { name: "Sapphire", desc: "A large structure with high activity." },
      emerald:  { name: "Emerald",  desc: "A recognized network architect." },
      diamond:  { name: "Diamond",  desc: "The highest rank in Crypto Cash." },
    },

    cta: {
      titlePre: "See what lies ",
      titleAccent: "ahead",
      text: "Ranks are only the beginning. The further development of the Crypto Style ecosystem opens up new opportunities for participants.",
      btn: "Go to the Roadmap",
    },
  },

  dev: {
    eyebrow: "Crypto Style ecosystem",
    titlePre: "Step-by-step development of ",
    subtitle:
      "Crypto Cash is not a standalone program but a part of the Crypto Style ecosystem. Each subsequent stage expands participants' opportunities and complements the already working architecture.",

    stageLabel: "Stage",

    stages: {
      s1: {
        title: "Stage 1. Launching the architecture",
        items: [
          "Participation levels",
          "Automatic distribution of funds",
          "Compression",
          "Rank system",
          "System clones",
        ],
        summary:
          "This stage lays the foundation of the entire Crypto Cash architecture and ensures a continuous financial flow.",
      },
      s2: {
        title: "Stage 2. Launching our own token",
        items: [
          "Rewards for rank progression",
          "Incentives for participant activity",
          "Rewards for completing tasks",
          "Use within the Crypto Style ecosystem",
          "The ability to purchase the token",
        ],
        summary:
          "The token is created as an element of the internal economy, backed in real terms by the Crypto Style ecosystem.",
      },
      s3: {
        title: "Stage 3. Ecosystem development",
        items: [
          "Trading infrastructure",
          "Tools for working with the token",
          "New ecosystem services",
          "Further development of Crypto Style",
        ],
        summary:
          "Building a complete infrastructure for working with the token and expanding the capabilities of the entire ecosystem.",
      },
    },

    goalLabel: "Our goal",
    goalTitle: "Crypto Cash is the first step",
    goalP1:
      "We are building not a standalone program but an ecosystem in which each stage reinforces the previous one.",
    goalItems: [
      "First, the distribution architecture is launched.",
      "Then — our own token with real use cases.",
      "After that — a full infrastructure for using it.",
    ],
    goalP2Pre: "Step by step, this shapes the unified ecosystem of ",
    goalP2Accent: "Crypto Style",
    goalP2Post: ".",

    cta: {
      title: "Ready to get started?",
      text: "Head to the step-by-step guide and connect your TON wallet in just a few minutes.",
      btn: "Go to Get Started",
    },
  },

  how: {
    eyebrow: "Getting started",
    titlePre: "Joining is ",
    titleAccent: "very simple",
    subtitle:
      "After your first activation, you immediately become part of the financial cycles of the chosen level.",

    stepLabel: "Step",

    steps: {
      s1: { title: "Connect a TON wallet", desc: "Connect any compatible wallet on the TON network." },
      s2: { title: "Create your NFT profile", desc: "Register your Crypto Style participant profile." },
      s3: { title: "Choose your curator",     desc: "Specify the partner who invited you to the system." },
      s4: { title: "Activate a level",        desc: "Choose START, CORE, PRIME or NEXUS and confirm the activation." },
    },

    ctaTitlePre: "Ready to ",
    ctaTitleAccent: "begin",
    ctaTitlePost: "?",
    ctaText:
      "There are no mandatory payments or automatic charges. Each subsequent activation is made only at your own decision.",
    connectBtn: "Connect TON wallet",
    faqLink: "Still have questions? See the FAQ →",
  },

  faq: {
    eyebrow: "FAQ",
    titlePre: "Frequently asked ",
    titleAccent: "questions",

    items: [
      {
        q: "Do I need to invite partners in order to take part in Crypto Cash?",
        a: "No.\n\nYou can take part in the system either actively or passively. Inviting partners is not a mandatory condition of participation.",
      },
      {
        q: "Do I need to constantly invite new partners to maintain a high rank?",
        a: "No.\n\nMaintaining a rank depends not on constantly attracting new participants, but on having the required number of active partners.\n\nIf your partners keep activating their levels on time, your rank is preserved without the need to constantly look for new people.",
      },
      {
        q: "When do I need to pay for a re-activation?",
        a: "A re-activation can be made at any time before the next compression starts.\n\nWhat matters is activating the level before the new cycle begins so you can keep participating without a break.",
      },
      {
        q: "Will funds be charged automatically?",
        a: "No.\n\nCrypto Cash has no automatic charges.\n\nEach new activation is made by the participant themselves and only at their own decision.",
      },
      {
        q: "Can I stop participating at any time?",
        a: "Yes.\n\nIf you decide to take a break or leave, there are no automatic payments or obligations to the system.\n\nYou decide on every subsequent activation yourself.",
      },
      {
        q: "Can I take part in several levels at once?",
        a: "Yes.\n\nEach level is an independent financial cycle.\n\nYou can activate one, several or all levels — the choice depends solely on your participation strategy.",
      },
      {
        q: "Who runs the system after launch?",
        a: "After launch, the core processes are executed by the smart contract.\n\nDistribution of funds, payouts and algorithm operation all happen automatically in line with the system's logic.",
      },
      {
        q: "Can I join later, once the project is already running?",
        a: "Yes.\n\nCrypto Cash does not give an advantage only to the first participants.\n\nThanks to the rank system and the distribution algorithm, new participants can also take strong positions in the system with active participation.",
      },
      {
        q: "What happens if I miss an activation?",
        a: "If activation is not completed before the next cycle begins, participation in that cycle ends.\n\nTo rejoin the system, simply make a new activation of the chosen level.",
      },
      {
        q: "Can I start with the lowest level and move up later?",
        a: "Of course.\n\nCrypto Cash lets you start with any level of participation.\n\nAs you get to know the system and your goals grow, you can add new levels, gradually expanding your presence in the Crypto Cash architecture.",
      },
      {
        q: "If I bought START but my personal invitee bought CORE, will I get referral rewards?",
        a: "Yes. In the system, referral rewards are tied to \"who invited whom\", regardless of the level chosen by the partner.",
      },
    ],
  },

  meta: {
    root: {
      title: "Crypto Cash — architecture for a continuous financial flow on TON",
      desc: "An additional program of the Crypto Style ecosystem on a TON smart contract. Automatic distribution of rewards with no centralized custody of funds.",
      ogTitle: "Crypto Cash — architecture on TON",
      ogDesc: "TON smart contract: 100% automatic distribution, compression, ranks, system clones.",
    },
    home: {
      title: "Crypto Cash — architecture for a continuous financial flow on TON",
      desc: "TON smart contract: 100% automatic distribution of rewards between participants. No manual control, no centralized custody.",
      ogTitle: "Crypto Cash — on a TON smart contract",
      ogDesc: "A unified architecture: activation, compression, system clones, ranks.",
    },
    arch: {
      title: "Crypto Cash architecture — how the system works",
      desc: "Activation, beyond a simple queue, 100% distribution, compression and system clones — Crypto Cash mechanisms on a TON smart contract.",
      ogTitle: "Crypto Cash architecture",
      ogDesc: "A unified system of six interconnected mechanisms.",
    },
    tiers: {
      title: "Crypto Cash levels — START, CORE, PRIME, NEXUS",
      desc: "Four levels of participation in Crypto Cash: START $10, CORE $50, PRIME $200, NEXUS $500. Financial potential up to $80,000.",
      ogTitle: "Crypto Cash levels",
      ogDesc: "START · CORE · PRIME · NEXUS — participation levels on a TON smart contract.",
    },
    ranks: {
      title: "Crypto Cash ranks — active development first",
      desc: "The Crypto Cash rank system rewards participants for developing the ecosystem. Rank reflects contribution and activity, not registration date.",
      ogTitle: "Crypto Cash rank system",
      ogDesc: "Active development first: ranks reward contribution to the ecosystem, not time of registration.",
    },
    dev: {
      title: "Step-by-step development of Crypto Cash",
      desc: "Crypto Cash — the first step of the Crypto Style ecosystem: architecture, our own token and infrastructure development.",
      ogTitle: "Step-by-step development of Crypto Cash",
      ogDesc: "Three stages: launching the architecture, launching the token and developing the Crypto Style ecosystem.",
    },
    how: {
      title: "How to start with Crypto Cash — 4 steps",
      desc: "Connect a TON wallet, choose a level, confirm activation via the smart contract — and join the Crypto Cash financial cycles.",
      ogTitle: "How to start with Crypto Cash",
      ogDesc: "4 simple steps to join the architecture.",
    },
    faq: {
      title: "FAQ — frequently asked questions about Crypto Cash",
      desc: "Answers to common questions: inviting partners, pauses, taking part in several levels, automatic payments.",
      ogTitle: "Crypto Cash FAQ",
      ogDesc: "Answers to common questions about how the system works.",
    },
  },
};
