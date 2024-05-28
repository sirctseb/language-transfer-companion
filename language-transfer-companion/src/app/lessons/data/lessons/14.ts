import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      { language: "english", word: "this (feminine)" },
      { language: "greek", word: "αυτή", latinized: "aftí" },
    ],
    [
      { language: "english", word: "apology" },
      { language: "greek", word: "απολογία", latinized: "apoloyía" },
    ],
    [
      { language: "english", word: "the (feminine)" },
      { language: "greek", word: "η", latinized: "i" },
    ],
    [
      { language: "english", word: "city" },
      { language: "greek", word: "πόλη", latinized: "póli" },
    ],
    [
      { language: "english", word: "world" },
      { language: "greek", word: "κόσμος", latinized: "kósmos" },
    ],
    [
      { language: "english", word: "big (masculine)" },
      { language: "greek", word: "μεγάλος", latinized: "meghálos" },
    ],
    [
      { language: "english", word: "big (neuter)" },
      { language: "greek", word: "μεγάλο", latinized: "meghálo" },
    ],
    [
      { language: "english", word: "big (feminine)" },
      { language: "greek", word: "μεγάλη", latinized: "megháli" },
    ],
  ],
};

const exampleSentences = [
  [
    { language: "english", word: "This problem" },
    {
      language: "greek",
      word: "Αυτό το πρόβλημα",
      latinized: "Aftó to próvlima",
    },
  ],
  [
    { language: "english", word: "The man" },
    { language: "greek", word: "Ο άντρας", latinized: "O ándras" },
  ],
  [
    { language: "english", word: "This man" },
    { language: "greek", word: "Αυτός ο άντρας", latinized: "Aftós o ándras" },
  ],
  [
    { language: "english", word: "She knows me" },
    { language: "greek", word: "Αυτή με ξέρει", latinized: "Aftí me kséri" },
  ],
  [
    { language: "english", word: "She can" },
    { language: "greek", word: "Αυτή μπορεί", latinized: "Aftí borí" },
  ],
  [
    { language: "english", word: "She can do it" },
    {
      language: "greek",
      word: "Αυτή μπορεί να το κάνει",
      latinized: "Aftí borí na to káni",
    },
  ],
  [
    { language: "english", word: "She is trying to do it" },
    {
      language: "greek",
      word: "Αυτή προσπαθεί να το κάνει",
      latinized: "Aftí prospathí na to káni",
    },
  ],
  [
    { language: "english", word: "She is here" },
    { language: "greek", word: "Αυτή είναι εδώ", latinized: "Aftí íne edhó" },
  ],
  [
    { language: "english", word: "She is also here" },
    {
      language: "greek",
      word: "Και αυτή είναι εδώ",
      latinized: "Ke aftí íne edhó",
    },
  ],
  [
    { language: "english", word: "She is also from here" },
    {
      language: "greek",
      word: "Και αυτή είναι από εδώ",
      latinized: "Ke aftí íne apó edhó",
    },
  ],
  [
    { language: "english", word: "I want him to wait" },
    {
      language: "greek",
      word: "Θέλω να περιμένει αυτός",
      latinized: "Thélo na periméni aftós",
    },
  ],
  [
    { language: "english", word: "I want her to do it" },
    {
      language: "greek",
      word: "Θέλω να το κάνει αυτή",
      latinized: "Thélo na to káni aftí",
    },
  ],
  [
    { language: "english", word: "The apology" },
    { language: "greek", word: "Η απολογία", latinized: "I apoloyía" },
  ],
  [
    { language: "english", word: "This apology" },
    {
      language: "greek",
      word: "Αυτή η απολογία",
      latinized: "Aftí i apoloyía",
    },
  ],
  [
    { language: "english", word: "The city" },
    { language: "greek", word: "Η πόλη", latinized: "I póli" },
  ],
  [
    { language: "english", word: "This city" },
    { language: "greek", word: "Αυτή η πόλη", latinized: "Aftí i póli" },
  ],
  [
    { language: "english", word: "The world" },
    { language: "greek", word: "Ο κόσμος", latinized: "O kósmos" },
  ],
  [
    { language: "english", word: "This world" },
    { language: "greek", word: "Αυτός ο κόσμος", latinized: "Aftós o kósmos" },
  ],
  [
    { language: "english", word: "The world is big" },
    {
      language: "greek",
      word: "Ο κόσμος είναι μεγάλος",
      latinized: "O kósmos íne meghálos",
    },
  ],
  [
    { language: "english", word: "The car is big" },
    {
      language: "greek",
      word: "Το αυτοκίνητο είναι μεγάλο",
      latinized: "To aftokínito íne meghálo",
    },
  ],
  [
    { language: "english", word: "The city is big" },
    {
      language: "greek",
      word: "Η πόλη είναι μεγάλη",
      latinized: "I póli íne megháli",
    },
  ],
  [
    { language: "english", word: "This city is big" },
    {
      language: "greek",
      word: "Αυτή η πόλη είναι μεγάλη",
      latinized: "Aftí i póli íne megháli",
    },
  ],
];
