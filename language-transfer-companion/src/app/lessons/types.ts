type EnglishVocab = {
  language: "english";
  word: string;
};

type GreekVocab = {
  language: "greek";
  word: string;
  latinized: string;
};

type VocabPair = [EnglishVocab, GreekVocab];

type EnglishToGreekExercisePrompt = {
  task: "english-to-greek";
  prompts: string[];
};

type GreekToEnglishExercisePrompt = {
  task: "greek-to-english";
  prompts: string[];
};

export type Data = {
  vocabulary: VocabPair[];
  exercises: VocabPair[];
};
export type VocabEntry = {
  [Language.English]: string;
  [Language.Greek]: string;
  greekLatinized: string;
};
export enum Language {
  English = "english",
  Greek = "greek",
}
