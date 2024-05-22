import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      {
        language: "english",
        word: "where",
      },
      {
        language: "greek",
        word: "που",
        latinized: "pou",
      },
    ],
    [
      {
        language: "english",
        word: "insist",
      },
      {
        language: "greek",
        word: "επιμένω",
        latinized: "epiméno",
      },
    ],
    [
      {
        language: "english",
        word: "why",
      },
      {
        language: "greek",
        word: "γιατί",
        latinized: "giatí",
      },
    ],
    [
      {
        language: "english",
        word: "what",
      },
      {
        language: "greek",
        word: "τι",
        latinized: "ti",
      },
    ],
  ],
  exercisePrompts: [
    {
      task: "english-to-greek",
      prompts: [
        "where does he stay?",
        "where does she live?",
        "where is he waiting?",
        "where is she waiting for me?",
        "I insist",
        "why is he staying?",
        "why is she insisting?",
        "why is he waiting for me?",
        "why isn't she waiting for me?",
        "what is he waiting for?",
      ],
    },
    {
      task: "greek-to-english",
      prompts: [
        "που μένει;",
        // "που μένει;",
        "που περιμένει;",
        "που με περιμένει;",
        "επιμένω",
        "γιατί μένει;",
        "γιατί επιμένει;",
        "γιατί με περιμένει;",
        "γιατί δεν με περιμένει;",
        "τι περιμένει;",
      ],
    },
  ],
};

export default data;
