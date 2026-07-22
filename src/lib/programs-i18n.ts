import type { LangCode } from "@/lib/i18n";

export type ProgramItem = {
  name: string;
  features: string[];
  minEntry: string;
  maxPotential: string;
  href: string;
};

export type ProgramsDict = {
  documentTitle: string;
  intro: string;
  features: string;
  minEntry: string;
  maxPotential: string;
  openPresentation: string;
  programs: ProgramItem[];
};

const NEO_HREF = "/programs/neo";
const MULTI_HREF = "/programs/multi";

// Fixed brand tokens shared across languages
const NEO = "Neo Club";
const MULTI = "Multi Matrix";

export const PROGRAMS_DICTS: Record<LangCode, ProgramsDict> = {
  ru: {
    documentTitle: "Партнёрские программы — Crypto Style",
    intro: "Выберите программу и откройте её презентацию.",
    features: "Особенности",
    minEntry: "Минимальный вход",
    maxPotential: "Максимальный потенциал",
    openPresentation: "Открыть презентацию",
    programs: [
      {
        name: NEO,
        features: ["8 площадок", "Линейка", "Тетра", "Клоны", "Управление структурой"],
        minEntry: "от $155",
        maxPotential: "от $72 100",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 площадок", "Реинвест", "Клоны", "Управление структурой"],
        minEntry: "15 TON",
        maxPotential: "от 3500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  en: {
    documentTitle: "Partner Programs — Crypto Style",
    intro: "Choose a program and open its presentation.",
    features: "Features",
    minEntry: "Minimum entry",
    maxPotential: "Maximum potential",
    openPresentation: "Open presentation",
    programs: [
      {
        name: NEO,
        features: ["8 platforms", "Linear", "Tetra", "Clones", "Structure management"],
        minEntry: "from $155",
        maxPotential: "from $72,100",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 platforms", "Reinvest", "Clones", "Structure management"],
        minEntry: "15 TON",
        maxPotential: "from 3,500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  de: {
    documentTitle: "Partnerprogramme — Crypto Style",
    intro: "Wählen Sie ein Programm und öffnen Sie die Präsentation.",
    features: "Merkmale",
    minEntry: "Mindesteinstieg",
    maxPotential: "Maximales Potenzial",
    openPresentation: "Präsentation öffnen",
    programs: [
      {
        name: NEO,
        features: ["8 Plattformen", "Lineare Struktur", "Tetra", "Klone", "Strukturverwaltung"],
        minEntry: "ab 155 $",
        maxPotential: "ab 72 100 $",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 Plattformen", "Reinvest", "Klone", "Strukturverwaltung"],
        minEntry: "15 TON",
        maxPotential: "ab 3500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  fr: {
    documentTitle: "Programmes partenaires — Crypto Style",
    intro: "Choisissez un programme et ouvrez sa présentation.",
    features: "Caractéristiques",
    minEntry: "Entrée minimale",
    maxPotential: "Potentiel maximal",
    openPresentation: "Ouvrir la présentation",
    programs: [
      {
        name: NEO,
        features: ["8 plateformes", "Linéaire", "Tetra", "Clones", "Gestion de la structure"],
        minEntry: "à partir de 155 $",
        maxPotential: "à partir de 72 100 $",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 plateformes", "Réinvestissement", "Clones", "Gestion de la structure"],
        minEntry: "15 TON",
        maxPotential: "à partir de 3 500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  it: {
    documentTitle: "Programmi partner — Crypto Style",
    intro: "Scegli un programma e apri la sua presentazione.",
    features: "Caratteristiche",
    minEntry: "Ingresso minimo",
    maxPotential: "Potenziale massimo",
    openPresentation: "Apri la presentazione",
    programs: [
      {
        name: NEO,
        features: ["8 piattaforme", "Lineare", "Tetra", "Cloni", "Gestione della struttura"],
        minEntry: "da 155 $",
        maxPotential: "da 72.100 $",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 piattaforme", "Reinvestimento", "Cloni", "Gestione della struttura"],
        minEntry: "15 TON",
        maxPotential: "da 3.500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  es: {
    documentTitle: "Programas de socios — Crypto Style",
    intro: "Elige un programa y abre su presentación.",
    features: "Características",
    minEntry: "Entrada mínima",
    maxPotential: "Potencial máximo",
    openPresentation: "Abrir presentación",
    programs: [
      {
        name: NEO,
        features: ["8 plataformas", "Lineal", "Tetra", "Clones", "Gestión de la estructura"],
        minEntry: "desde 155 $",
        maxPotential: "desde 72 100 $",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 plataformas", "Reinversión", "Clones", "Gestión de la estructura"],
        minEntry: "15 TON",
        maxPotential: "desde 3500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  pt: {
    documentTitle: "Programas de parceiros — Crypto Style",
    intro: "Escolha um programa e abra a sua apresentação.",
    features: "Características",
    minEntry: "Entrada mínima",
    maxPotential: "Potencial máximo",
    openPresentation: "Abrir apresentação",
    programs: [
      {
        name: NEO,
        features: ["8 plataformas", "Linear", "Tetra", "Clones", "Gestão da estrutura"],
        minEntry: "a partir de 155 $",
        maxPotential: "a partir de 72 100 $",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 plataformas", "Reinvestimento", "Clones", "Gestão da estrutura"],
        minEntry: "15 TON",
        maxPotential: "a partir de 3500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  uk: {
    documentTitle: "Партнерські програми — Crypto Style",
    intro: "Оберіть програму та відкрийте її презентацію.",
    features: "Особливості",
    minEntry: "Мінімальний вхід",
    maxPotential: "Максимальний потенціал",
    openPresentation: "Відкрити презентацію",
    programs: [
      {
        name: NEO,
        features: ["8 майданчиків", "Лінійка", "Тетра", "Клони", "Керування структурою"],
        minEntry: "від $155",
        maxPotential: "від $72 100",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 майданчиків", "Реінвест", "Клони", "Керування структурою"],
        minEntry: "15 TON",
        maxPotential: "від 3500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  kk: {
    documentTitle: "Серіктестік бағдарламалар — Crypto Style",
    intro: "Бағдарламаны таңдап, презентациясын ашыңыз.",
    features: "Ерекшеліктері",
    minEntry: "Ең төменгі кіру",
    maxPotential: "Ең жоғары әлеует",
    openPresentation: "Презентацияны ашу",
    programs: [
      {
        name: NEO,
        features: ["8 алаң", "Сызықтық", "Тетра", "Клондар", "Құрылымды басқару"],
        minEntry: "$155-тен",
        maxPotential: "$72 100-ден",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 алаң", "Реинвест", "Клондар", "Құрылымды басқару"],
        minEntry: "15 TON",
        maxPotential: "3500 TON-нан",
        href: MULTI_HREF,
      },
    ],
  },
  pl: {
    documentTitle: "Programy partnerskie — Crypto Style",
    intro: "Wybierz program i otwórz jego prezentację.",
    features: "Cechy",
    minEntry: "Minimalne wejście",
    maxPotential: "Maksymalny potencjał",
    openPresentation: "Otwórz prezentację",
    programs: [
      {
        name: NEO,
        features: ["8 platform", "Liniowa", "Tetra", "Klony", "Zarządzanie strukturą"],
        minEntry: "od 155 $",
        maxPotential: "od 72 100 $",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 platform", "Reinwestycja", "Klony", "Zarządzanie strukturą"],
        minEntry: "15 TON",
        maxPotential: "od 3500 TON",
        href: MULTI_HREF,
      },
    ],
  },
  hu: {
    documentTitle: "Partnerprogramok — Crypto Style",
    intro: "Válassz programot és nyisd meg a bemutatót.",
    features: "Jellemzők",
    minEntry: "Minimális belépő",
    maxPotential: "Maximális potenciál",
    openPresentation: "Bemutató megnyitása",
    programs: [
      {
        name: NEO,
        features: ["8 platform", "Lineáris", "Tetra", "Klónok", "Struktúrakezelés"],
        minEntry: "155 $-tól",
        maxPotential: "72 100 $-tól",
        href: NEO_HREF,
      },
      {
        name: MULTI,
        features: ["6 platform", "Újrabefektetés", "Klónok", "Struktúrakezelés"],
        minEntry: "15 TON",
        maxPotential: "3500 TON-tól",
        href: MULTI_HREF,
      },
    ],
  },
};
