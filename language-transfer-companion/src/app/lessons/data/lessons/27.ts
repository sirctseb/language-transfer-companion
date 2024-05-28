import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      { language: "english", word: "I drink" },
      { language: "greek", word: "πίνω", latinized: "píno" },
    ],
    [
      { language: "english", word: "I will drink" },
      { language: "greek", word: "πίω", latinized: "pió" },
    ],
    [
      { language: "english", word: "I take" },
      { language: "greek", word: "παίρνω", latinized: "pérno" },
    ],
    [
      { language: "english", word: "I will take" },
      { language: "greek", word: "πάρω", latinized: "páro" },
    ],
    [
      { language: "english", word: "phone" },
      { language: "greek", word: "τηλέφωνο", latinized: "tiléfono" },
    ],
  ],
};

const exampleSentences = [
  [
    {
      language: "english",
      word: "I want to drink.",
    },
    {
      language: "greek",
      word: "Θέλω να πιω.",
      latinized: "Thélo na pyó",
    },
  ],
  [
    {
      language: "english",
      word: "I don't want to drink.",
    },
    {
      language: "greek",
      word: "Δεν θέλω να πιω.",
      latinized: "Dhen thélo na pyó",
    },
  ],
  [
    {
      language: "english",
      word: "I don't want to be a drinker.",
    },
    {
      language: "greek",
      word: "Δεν θέλω να πίνω.",
      latinized: "Dhen thélo na píno",
    },
  ],
  [
    {
      language: "english",
      word: "I take the train.",
    },
    {
      language: "greek",
      word: "Παίρνω το τρένο.",
      latinized: "Pérno to tréno",
    },
  ],
  [
    {
      language: "english",
      word: "We’re taking the train.",
    },
    {
      language: "greek",
      word: "Παίρνουμε το τρένο.",
      latinized: "Pérnume to tréno",
    },
  ],
  [
    {
      language: "english",
      word: "Let’s take the train.",
    },
    {
      language: "greek",
      word: "Να πάρουμε το τρένο.",
      latinized: "Na párume to tréno",
    },
  ],
  [
    {
      language: "english",
      word: "Let him take the train.",
    },
    {
      language: "greek",
      word: "Να πάρει το τρένο.",
      latinized: "Na pári to tréno",
    },
  ],
  [
    {
      language: "english",
      word: "I will call you.",
    },
    {
      language: "greek",
      word: "Θα σε πάρω τηλέφωνο.",
      latinized: "Tha se páro tiléfono",
    },
  ],
  [
    {
      language: "english",
      word: "I don’t want you to call me.",
    },
    {
      language: "greek",
      word: "Δεν θέλω να με πάρεις τηλέφωνο.",
      latinized: "Dhen thélo na me páris tiléfono",
    },
  ],
];
