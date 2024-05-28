import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      { language: "english", word: "I will write" },
      { language: "greek", word: "Θα γράψω", latinized: "Tha ghrápso" },
    ],
    [
      { language: "english", word: "I will be writing" },
      { language: "greek", word: "Θα γράφω", latinized: "Tha ghráfo" },
    ],
    [
      { language: "english", word: "Photography" },
      { language: "greek", word: "Φωτογραφία", latinized: "Fotografía" },
    ],
    [
      { language: "english", word: "I write" },
      { language: "greek", word: "Γράφω", latinized: "Ghráfo" },
    ],
    [
      { language: "english", word: "I sign" },
      { language: "greek", word: "Υπογράφω", latinized: "Ipoghráfo" },
    ],
    [
      { language: "english", word: "I will sign" },
      { language: "greek", word: "Θα υπογράψω", latinized: "Tha ipoghrápso" },
    ],
    [
      { language: "english", word: "I will be signing" },
      { language: "greek", word: "Θα υπογράφω", latinized: "Tha ipoghráfo" },
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
    { language: "english", word: "We will do it tomorrow" },
    {
      language: "greek",
      word: "Θα το κάνουμε αύριο",
      latinized: "Tha to kánume ávrio",
    },
  ],
  [
    { language: "english", word: "We won’t be doing it tomorrow" },
    {
      language: "greek",
      word: "Δεν θα το κάνουμε αύριο",
      latinized: "Dhen tha to kánume ávrio",
    },
  ],
  [
    { language: "english", word: "I will be writing" },
    { language: "greek", word: "Θα γράφω", latinized: "Tha ghráfo" },
  ],
  [
    { language: "english", word: "I will write it" },
    { language: "greek", word: "Θα το γράψω", latinized: "Tha to ghrápso" },
  ],
  [
    { language: "english", word: "He will write it" },
    { language: "greek", word: "Θα το γράψει", latinized: "Tha to ghrápsi" },
  ],
  [
    { language: "english", word: "He will be writing" },
    { language: "greek", word: "Θα γράφει", latinized: "Tha ghráfi" },
  ],
  [
    { language: "english", word: "I want to write" },
    { language: "greek", word: "Θέλω να γράφω", latinized: "Thélo na ghráfo" },
  ],
  [
    { language: "english", word: "I want to write tomorrow" },
    {
      language: "greek",
      word: "Θέλω να γράψω αύριο",
      latinized: "Thélo na ghrápso ávrio",
    },
  ],
  [
    { language: "english", word: "I want to write it" },
    {
      language: "greek",
      word: "Θέλω να το γράψω",
      latinized: "Thélo na to ghrápso",
    },
  ],
  [
    { language: "english", word: "I will sign it" },
    {
      language: "greek",
      word: "Θα το υπογράψω",
      latinized: "Tha to ipoghrápso",
    },
  ],
  [
    { language: "english", word: "I will be signing" },
    { language: "greek", word: "Θα υπογράφω", latinized: "Tha ipoghráfo" },
  ],
];
