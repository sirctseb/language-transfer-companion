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
