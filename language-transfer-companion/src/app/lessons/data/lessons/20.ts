import { Data } from "../../types";

const data: Data = {
  vocabulary: [
    [
      { language: "english", word: "turning" },
      { language: "greek", word: "στροφή", latinized: "strofí" },
    ],
    [
      { language: "english", word: "to return" },
      { language: "greek", word: "επιστρέφω", latinized: "epistréfo" },
    ],
    [
      { language: "english", word: "friend (male)" },
      { language: "greek", word: "φίλος", latinized: "fílos" },
    ],
    [
      { language: "english", word: "friend (female)" },
      { language: "greek", word: "φίλη", latinized: "fíli" },
    ],
    [
      { language: "english", word: "tomorrow" },
      { language: "greek", word: "αύριο", latinized: "ávrio" },
    ],
  ],
};

const exampleSentences = [
  [
    { language: "english", word: "It is this turning." },
    {
      language: "greek",
      word: "Είναι αυτή η στροφή.",
      latinized: "Íne aftí i strofí",
    },
  ],
  [
    { language: "english", word: "We are returning." },
    { language: "greek", word: "Επιστρέφουμε.", latinized: "Epistréfume" },
  ],
  [
    { language: "english", word: "My friend is waiting for me." },
    {
      language: "greek",
      word: "Ο φίλος μου με περιμένει.",
      latinized: "O fílos mu me periméni",
    },
  ],
  [
    { language: "english", word: "My friend is bringing it." },
    {
      language: "greek",
      word: "Ο φίλος μου το φέρνει.",
      latinized: "O fílos mu to férni",
    },
  ],
  [
    { language: "english", word: "My female friend is waiting for me." },
    {
      language: "greek",
      word: "Η φίλη μου με περιμένει.",
      latinized: "I fíli mu me periméni",
    },
  ],
  [
    { language: "english", word: "My friend is returning tomorrow." },
    {
      language: "greek",
      word: "Η φίλη μου επιστρέφει αύριο.",
      latinized: "I fíli mu epistréfi ávrio",
    },
  ],
  [
    { language: "english", word: "My friend is not returning tomorrow." },
    {
      language: "greek",
      word: "Ο φίλος μου δεν επιστρέφει αύριο.",
      latinized: "O fílos mu dhen epistréfi ávrio",
    },
  ],
  [
    { language: "english", word: "Where is your friend?" },
    {
      language: "greek",
      word: "Πού είναι ο φίλος σου;",
      latinized: "Pu íne o fílos su?",
    },
  ],
  [
    { language: "english", word: "Is your female friend bringing it?" },
    {
      language: "greek",
      word: "Η φίλη σου το φέρνει;",
      latinized: "I fíli su to férni?",
    },
  ],
  [
    { language: "english", word: "Isn't your friend bringing it?" },
    {
      language: "greek",
      word: "Δεν το φέρνει η φίλη σου;",
      latinized: "Dhen to férni i fíli su?",
    },
  ],
];
