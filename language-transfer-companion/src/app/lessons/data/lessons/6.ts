import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      {
        language: "english",
        word: "you",
      },
      {
        language: "greek",
        word: "σε",
        latinized: "se",
      },
    ],
    [
      {
        language: "english",
        word: "here",
      },
      {
        language: "greek",
        word: "εδώ",
        latinized: "edó",
      },
    ],
  ],
};

const practiceSentences = [
  { english: "I want you to know.", greek: "Θέλω να ξέρεις [thélo na kséris]" },
  {
    english: "Do you want me to wait?",
    greek: "Θέλεις να περιμένω; [thélis na periméno?]",
  },
  {
    english: "Are you waiting for me?",
    greek: "Με περιμένεις; [me periménis?]",
  },
  { english: "I'm waiting for you.", greek: "Σε περιμένω [se periméno]" },
  {
    english: "Do you want me to wait for you?",
    greek: "Θέλεις να σε περιμένω; [thélis na se periméno?]",
  },
  {
    english: "Where do you want me to wait for you?",
    greek: "Πού θέλεις να σε περιμένω; [pu thélis na se periméno?]",
  },
  {
    english: "I don't want him to know where I'm staying.",
    greek: "Δεν θέλω να ξέρει πού μένω [dhen thélo na kséri pu méno]",
  },
  {
    english: "What are you doing here?",
    greek: "Τι κάνεις εδώ; [ti kánis edhó?]",
  },
  { english: "I'm staying here.", greek: "Μένω εδώ [méno edhó]" },
  {
    english: "I don't want to wait for you here.",
    greek: "Δεν θέλω να σε περιμένω εδώ [dhen thélo na se periméno edhó]",
  },
  {
    english: "I want you to wait for me here.",
    greek: "Θέλω να με περιμένεις εδώ [thélo na me periménis edhó]",
  },
];
