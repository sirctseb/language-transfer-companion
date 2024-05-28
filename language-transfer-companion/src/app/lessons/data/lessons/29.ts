import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      {
        language: "english",
        word: "if",
      },
      {
        language: "greek",
        word: "αν",
        latinized: "an",
      },
    ],
    [
      {
        language: "english",
        word: "tonight",
      },
      {
        language: "greek",
        word: "απόψε",
        latinized: "apópse",
      },
    ],
    [
      {
        language: "english",
        word: "I cook",
      },
      {
        language: "greek",
        word: "μαγειρεύω",
        latinized: "mayirévo",
      },
    ],
    [
      {
        language: "english",
        word: "I will cook",
      },
      {
        language: "greek",
        word: "μαγειρέψω",
        latinized: "mayirépso",
      },
    ],
    [
      {
        language: "english",
        word: "I travel",
      },
      {
        language: "greek",
        word: "ταξιδεύω",
        latinized: "taksidhévo",
      },
    ],
    [
      {
        language: "english",
        word: "I will travel",
      },
      {
        language: "greek",
        word: "ταξιδέψω",
        latinized: "taksidhépso",
      },
    ],
    [
      {
        language: "english",
        word: "often",
      },
      {
        language: "greek",
        word: "συχνά",
        latinized: "sikhná",
      },
    ],
    [
      {
        language: "english",
        word: "more",
      },
      {
        language: "greek",
        word: "πιο",
        latinized: "pyó",
      },
    ],
  ],
};

const exampleSentences = [
  [
    {
      language: "english",
      word: "We can do it if you’re coming back tonight.",
    },
    {
      language: "greek",
      word: "Μπορούμε να το κάνουμε αν επιστρέψεις απόψε.",
      latinized: "Borúme na to kánume an epistrépsis apópse.",
    },
  ],
  [
    {
      language: "english",
      word: "I don’t know if she cooks.",
    },
    {
      language: "greek",
      word: "Δεν ξέρω αν μαγειρεύει.",
      latinized: "Dhen kséro an mayirévi.",
    },
  ],
  [
    {
      language: "english",
      word: "I don’t know if she cooks.",
    },
    {
      language: "greek",
      word: "Δεν ξέρω αν αυτή μαγειρεύει.",
      latinized: "Dhen kséro an aftí mayirévi.",
    },
  ],
  [
    {
      language: "english",
      word: "I want to travel.",
    },
    {
      language: "greek",
      word: "Θέλω να ταξιδέψω.",
      latinized: "Thélo na taksidhépso.",
    },
  ],
  [
    {
      language: "english",
      word: "I want to travel often.",
    },
    {
      language: "greek",
      word: "Θέλω να ταξιδεύω συχνά.",
      latinized: "Thélo na taksidhévo sikhná.",
    },
  ],
  [
    {
      language: "english",
      word: "I want to cook more often.",
    },
    {
      language: "greek",
      word: "Θέλω να μαγειρεύω πιο συχνά.",
      latinized: "Thélo na mayirévo pyó sikhná.",
    },
  ],
  [
    {
      language: "english",
      word: "Generally, I can’t come back at 5 o’clock, but today I can come back.",
    },
    {
      language: "greek",
      word: "Γενικά δεν μπορώ να επιστρέφω η ώρα πέντε, αλλά σήμερα μπορώ να επιστρέψω.",
      latinized:
        "Yeniká dhen boró na epistréfo i óra pénde, alá símera boró na epistrépso.",
    },
  ],
  [
    {
      language: "english",
      word: "Maybe he’s still coming back.",
    },
    {
      language: "greek",
      word: "Μπορεί να επιστρέφει ακόμα.",
      latinized: "Borí na epistréfi akóma.",
    },
  ],
  [
    {
      language: "english",
      word: "Maybe he will still return.",
    },
    {
      language: "greek",
      word: "Μπορεί να επιστρέψει ακόμα.",
      latinized: "Borí na epistrépso akóma.",
    },
  ],
];
