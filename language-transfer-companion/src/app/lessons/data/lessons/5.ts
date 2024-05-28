import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      { language: "english", word: "I want" },
      {
        language: "greek",
        word: "θέλω",
        latinized: "thélo",
      },
    ],
    [
      {
        language: "english",
        word: "she wants",
      },
      {
        language: "greek",
        word: "θέλει",
        latinized: "théli",
      },
    ],
    [
      {
        language: "english",
        word: "you want",
      },
      {
        language: "greek",
        word: "θέλεις",
        latinized: "thélis",
      },
    ],
  ],
  exercisePrompts: [
    {
      task: "english-to-greek",
      prompts: ["Don't you know where he's staying?"],
    },
  ],
};

const prompts = [
  {
    english: "Don't you know where he’s staying?",
    greek: "Δεν ξέρεις πού μένει; [dhen kséris pu méni?]",
  },
  {
    english: "Don’t you know where he’s waiting for me?",
    greek: "Δεν ξέρεις πού με περιμένει; [dhen kséris pu me periméni?]",
  },
  {
    english: "Doesn’t he know why you’re staying?",
    greek: "Δεν ξέρει γιατί μένεις; [dhen kséri yatí ménis?]",
  },
  {
    english: "I don’t know what you’re waiting for.",
    greek: "Δεν ξέρω τι περιμένεις [dhen kséro ti periménis]",
  },
  { english: "I want to know.", greek: "Θέλω να ξέρω [thélo na kséro]" },
  {
    english: "I don’t want to know.",
    greek: "Δεν θέλω να ξέρω [dhen thélo na kséro]",
  },
  {
    english: "You want to know.",
    greek: "Θέλεις να ξέρεις [thélis na kséris]",
  },
  {
    english: "Do you want to know?",
    greek: "Θέλεις να ξέρεις; [thélis na kséris?]",
  },
  {
    english: "Don’t you want to know?",
    greek: "Δεν θέλεις να ξέρεις; [dhen thélis na kséris?]",
  },
  {
    english: "Why don’t you want to know?",
    greek: "Γιατί δεν θέλεις να ξέρεις; [yatí dhen thélis na kséris?]",
  },
  {
    english: "What do you want to know?",
    greek: "Τι θέλεις να ξέρεις; [ti thélis na kséris?]",
  },
  {
    english: "He wants to know where I’m staying.",
    greek: "Θέλει να ξέρει πού μένω [théli na kséri pu méno]",
  },
  {
    english: "She wants to know why you’re not waiting for me.",
    greek:
      "Θέλει να ξέρει γιατί δεν με περιμένεις [théli na kséri yatí dhen me periménis]",
  },
  {
    english: "I don’t want to wait.",
    greek: "Δεν θέλω να περιμένω [dhen thélo na periméno]",
  },
  {
    english: "Don’t you want to wait for me?",
    greek: "Δεν θέλεις να με περιμένεις; [dhen thélis na me periménis?]",
  },
  {
    english: "Why don’t you want to wait for me?",
    greek:
      "Γιατί δεν θέλεις να με περιμένεις; [yatí dhen thélis na me periménis?]",
  },
];
