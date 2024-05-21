type EnglishVocab = {
  language: "english";
  word: string;
};
type GreekVocab = {
  language: "greek";
  word: string;
  latinized: string;
};

type ExercisePrompt = {
  task: "english-to-greek" | "greek-to-english";
  prompts: string[];
};

type Data = {
  vocabulary: [EnglishVocab, GreekVocab][];
  exercisePrompts: ExercisePrompt[];
};

export const data: Data = {
  vocabulary: [
    [
      {
        language: "english",
        word: "stay",
      },
      {
        language: "greek",
        word: "μένω",
        latinized: "meno",
      },
    ],
    [
      {
        language: "english",
        word: "wait",
      },
      {
        language: "greek",
        word: "περιμένω",
        latinized: "perimeno",
      },
    ],
    [
      {
        language: "english",
        word: "not",
      },
      {
        language: "greek",
        word: "δεν",
        latinized: "den",
      },
    ],
    [
      {
        language: "english",
        word: "stays",
      },
      {
        language: "greek",
        word: "μένει",
        latinized: "menei",
      },
    ],
    [
      {
        language: "english",
        word: "me",
      },
      {
        language: "greek",
        word: "με",
        latinized: "me",
      },
    ],
  ],
  exercisePrompts: [
    {
      task: "english-to-greek",
      prompts: [
        "I stay",
        "I wait",
        "I am waiting",
        "She waits",
        "She waits",
        "She is waiting",
        "I am not waiting",
        "She is not waiting",
        "She is waiting for me",
        "Is she waiting for me?",
        "Is she waiting?",
      ],
    },
    {
      task: "greek-to-english",
      prompts: [
        "μένω",
        "περιμένω",
        "μένει",
        "περιμένει",
        "δεν περιμένω",
        "με περιμένει",
        "με περιμένει;",
        "Περιμένει;",
      ],
    },
  ],
};
