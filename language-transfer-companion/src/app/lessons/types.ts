type EnglishVocab = {
  language: "english";
  word: string;
};

type GreekVocab = {
  language: "greek";
  word: string;
  latinized: string;
};

type EnglishToGreekExercisePrompt = {
  task: "english-to-greek";
  prompts: string[];
};

type GreekToEnglishExercisePrompt = {
  task: "greek-to-english";
  prompts: string[];
};

export type Data = {
  vocabulary: [EnglishVocab, GreekVocab][];
  exercisePrompts: [EnglishToGreekExercisePrompt, GreekToEnglishExercisePrompt];
};
