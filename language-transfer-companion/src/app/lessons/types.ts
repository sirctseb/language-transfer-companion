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
export type Data = {
  vocabulary: [EnglishVocab, GreekVocab][];
  exercisePrompts: ExercisePrompt[];
};
