import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      { language: "english", word: "something" },
      { language: "greek", word: "κάτι", latinized: "káti" },
    ],
    [
      { language: "english", word: "again" },
      { language: "greek", word: "πάλι", latinized: "páli" },
    ],
    [
      { language: "english", word: "book" },
      { language: "greek", word: "βιβλίο", latinized: "vivlío" },
    ],
    [
      { language: "english", word: "thing" },
      { language: "greek", word: "πράγμα", latinized: "prághma" },
    ],
    [
      { language: "english", word: "for" },
      { language: "greek", word: "για", latinized: "ya" },
    ],
    [
      { language: "english", word: "for example" },
      { language: "greek", word: "για παράδειγμα", latinized: "ya parádighma" },
    ],
  ],
};

const exampleSentences = [
  [
    { language: "english", word: "Shall we wait here?" },
    {
      language: "greek",
      word: "Να περιμένουμε εδώ;",
      latinized: "Na periménume edhó?",
    },
  ],
  [
    { language: "english", word: "Let’s wait here." },
    {
      language: "greek",
      word: "Να περιμένουμε εδώ.",
      latinized: "Na periménume edhó.",
    },
  ],
  [
    { language: "english", word: "Shall we wait for you here?" },
    {
      language: "greek",
      word: "Να σε περιμένουμε εδώ;",
      latinized: "Na se periménume edhó?",
    },
  ],
  [
    { language: "english", word: "Do you want us to wait for you here?" },
    {
      language: "greek",
      word: "Θέλεις να σε περιμένουμε εδώ;",
      latinized: "Thélis na se periménume edhó?",
    },
  ],
  [
    { language: "english", word: "I am in the house." },
    {
      language: "greek",
      word: "Είμαι στο σπίτι.",
      latinized: "Íme sto spíti.",
    },
  ],
  [
    { language: "english", word: "Are you at home?" },
    {
      language: "greek",
      word: "Είσαι στο σπίτι;",
      latinized: "Íse sto spíti?",
    },
  ],
  [
    { language: "english", word: "Aren’t you at home?" },
    {
      language: "greek",
      word: "Δεν είσαι στο σπίτι;",
      latinized: "Dhen íse sto spíti?",
    },
  ],
  [
    { language: "english", word: "Why aren’t you at home?" },
    {
      language: "greek",
      word: "Γιατί δεν είσαι στο σπίτι;",
      latinized: "Yatí dhen íse sto spíti?",
    },
  ],
  [
    { language: "english", word: "Shall we do it?" },
    { language: "greek", word: "Να το κάνουμε;", latinized: "Na to kánume?" },
  ],
  [
    { language: "english", word: "Let’s do it." },
    { language: "greek", word: "Να το κάνουμε.", latinized: "Na to kánume." },
  ],
  [
    { language: "english", word: "Shall we do it later?" },
    {
      language: "greek",
      word: "Να το κάνουμε μετά;",
      latinized: "Na to kánume metá?",
    },
  ],
  [
    { language: "english", word: "Let’s do it later." },
    {
      language: "greek",
      word: "Να το κάνουμε μετά.",
      latinized: "Na to kánume metá.",
    },
  ],
  [
    { language: "english", word: "What shall we do later?" },
    {
      language: "greek",
      word: "Τι να κάνουμε μετά;",
      latinized: "Ti na kánume metá?",
    },
  ],
  [
    { language: "english", word: "Good day." },
    { language: "greek", word: "Καλημέρα.", latinized: "Kaliméra." },
  ],
  [
    { language: "english", word: "What shall we do today?" },
    {
      language: "greek",
      word: "Τι να κάνουμε σήμερα;",
      latinized: "Ti na kánume símera?",
    },
  ],
  [
    { language: "english", word: "Let’s do it today." },
    {
      language: "greek",
      word: "Να το κάνουμε σήμερα.",
      latinized: "Na to kánume símera.",
    },
  ],
  [
    { language: "english", word: "Where should I wait for you today?" },
    {
      language: "greek",
      word: "Πού να σε περιμένω σήμερα;",
      latinized: "Pu na se periméno símera?",
    },
  ],
  [
    { language: "english", word: "The Alexander is waiting for me there." },
    {
      language: "greek",
      word: "Ο Αλέξανδρος με περιμένει εκεί.",
      latinized: "O Aléksandhros me periméni ekí.",
    },
  ],
  [
    { language: "english", word: "Let him wait." },
    { language: "greek", word: "Να περιμένει.", latinized: "Na periméni." },
  ],
  [
    { language: "english", word: "Let him wait for me." },
    {
      language: "greek",
      word: "Να με περιμένει.",
      latinized: "Na me periméni.",
    },
  ],
  [
    { language: "english", word: "Let him wait for me there." },
    {
      language: "greek",
      word: "Να με περιμένει εκεί.",
      latinized: "Na me periméni ekí.",
    },
  ],
  [
    {
      language: "english",
      word: "Maria is not at home. She’s waiting for you here.",
    },
    {
      language: "greek",
      word: "Η Μαρία δεν είναι στο σπίτι. Σε περιμένει εδώ.",
      latinized: "I María dhen íne sto spíti. Se periméni edhó.",
    },
  ],
  [
    { language: "english", word: "Where is Maria?" },
    {
      language: "greek",
      word: "Πού είναι η Μαρία;",
      latinized: "Pu íne i María?",
    },
  ],
];
