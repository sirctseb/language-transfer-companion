import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      { language: "english", word: "well" },
      { language: "greek", word: "καλά", latinized: "kalá" },
    ],
    [
      { language: "english", word: "two" },
      { language: "greek", word: "δύο", latinized: "dhío" },
    ],
  ],
};

const exampleSentences: [
  {
    language: "english";
    word: string;
  },
  {
    language: "greek";
    word: string;
    latinized: string;
  }
][] = [
  [
    { language: "english", word: "I want to write well" },
    {
      language: "greek",
      word: "Θέλω να γράφω καλά",
      latinized: "Thélo na ghráfo kalá",
    },
  ],
  [
    { language: "english", word: "I want to write it well" },
    {
      language: "greek",
      word: "Θέλω να το γράψω καλά",
      latinized: "Thélo na to ghrápsο kalá",
    },
  ],
  [
    { language: "english", word: "I want you to write it well" },
    {
      language: "greek",
      word: "Θέλω να το γράψεις καλά",
      latinized: "Thélo na to ghrápsis kalá",
    },
  ],
  [
    { language: "english", word: "I want to write a book" },
    {
      language: "greek",
      word: "Θέλω να γράψω ένα βιβλίο",
      latinized: "Thélo na ghrápsο éna vivlío",
    },
  ],
  [
    { language: "english", word: "I want to write books" },
    {
      language: "greek",
      word: "Θέλω να γράφω βιβλία",
      latinized: "Thélo na ghráfo vivlía",
    },
  ],
  [
    { language: "english", word: "I want to write two books" },
    {
      language: "greek",
      word: "Θέλω να γράψω δύο βιβλία",
      latinized: "Thélo na ghrápsο dhío vivlía",
    },
  ],
];
