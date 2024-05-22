import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      {
        language: "english",
        word: "you stay",
      },
      {
        language: "greek",
        word: "μένεις",
        latinized: "ménis",
      },
    ],
    [
      {
        language: "english",
        word: "I do",
      },
      {
        language: "greek",
        word: "κάνω",
        latinized: "káno",
      },
    ],
    [
      {
        language: "english",
        word: "I make",
      },
      {
        language: "greek",
        word: "κάνω",
        latinized: "káno",
      },
    ],
    [
      {
        language: "english",
        word: "you make",
      },
      {
        language: "greek",
        word: "κάνεις",
        latinized: "kánis",
      },
    ],
    [
      {
        language: "english",
        word: "she does",
      },
      {
        language: "greek",
        word: "κάνει",
        latinized: "káni",
      },
    ],
    [
      {
        language: "english",
        word: "now",
      },
      {
        language: "greek",
        word: "τώρα",
        latinized: "tóra",
      },
    ],
    [
      {
        language: "english",
        word: "I",
      },
      {
        language: "greek",
        word: "εγώ",
        latinized: "egó",
      },
    ],
    [
      {
        language: "english",
        word: "I know",
      },
      {
        language: "greek",
        word: "ξέρω",
        latinized: "kséro",
      },
    ],
    [
      {
        language: "english",
        word: "She knows",
      },
      {
        language: "greek",
        word: "ξέρει",
        latinized: "kséri",
      },
    ],
  ],
  exercisePrompts: [
    {
      task: "english-to-greek",
      prompts: [
        "where do you stay?",
        "where are you waiting for me?",
        "why don't you wait for me?",
        "why are you insisting?",
        "what are you waiting for?",
        "what are you doing?",
        "how are you?",
        "what are you doing now?",
        // "*I* do",
        "I don't know",
        "Why don't you know?",
        "You don't know me",
      ],
    },
    {
      task: "greek-to-english",
      prompts: [
        "που μένεις;",
        "που με περιμένεις;",
        "γιατί δεν με περιμένεις;",
        "γιατί επιμένεις;",
        "τι περιμένεις;",
        "τι κάνεις;",
        // "τι κάνεις;",
        "τι κάνεις τώρα;",
        "εγώ κάνω",
        "δεν ξέρω",
        "γιατί δεν ξέρεις;",
        "δεν με ξέρεις",
      ],
    },
  ],
};

export default data;
