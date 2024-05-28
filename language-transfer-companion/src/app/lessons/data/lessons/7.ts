import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      {
        language: "english",
        word: "mobile phone",
      },
      {
        language: "greek",
        word: "κινητό",
        latinized: "kinitó",
      },
    ],
    [
      {
        language: "english",
        word: "the",
      },
      {
        language: "greek",
        word: "το",
        latinized: "to",
      },
    ],
  ],
};

const practiceSentences = [
  {
    english: "I want the mobile phone.",
    greek: "Θέλω το κινητό [thélo to kinitó]",
  },
  {
    english: "Don't you want the mobile?",
    greek: "Δεν θέλεις το κινητό; [dhen thélis to kinitó?]",
  },
  { english: "I want it.", greek: "Το θέλω [to thélo]" },
  { english: "I don't want it.", greek: "Δεν το θέλω [dhen to thélo]" },
  { english: "I'm doing it. / I'm making it.", greek: "Το κάνω [to káno]" },
  {
    english: "I want to do it. / I want to make it.",
    greek: "Θέλω να το κάνω [thélo na to káno]",
  },
  {
    english: "I want you to do it. / I want you to make it.",
    greek: "Θέλω να το κάνεις [thélo na to kánis]",
  },
  {
    english: "I don't want you to do it here.",
    greek: "Δεν θέλω να το κάνεις εδώ [dhen thélo na to kánis edhó]",
  },
];
