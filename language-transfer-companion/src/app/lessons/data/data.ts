import { useMemo } from "react";
import { Data } from "../types";
import { data } from "./lessons";

type DataResult = Data & {
  englishVocab: string[];
  greekVocab: string[];
};

export const useData = (
  minLesson: number,
  maxLesson: number = minLesson
): DataResult => {
  return useMemo((): DataResult => {
    const vocabulary = [];
    const englishVocab = [];
    const greekVocab = [];

    for (const lesson in data) {
      const lessonIndex = parseInt(lesson);
      if (lessonIndex >= minLesson && lessonIndex <= maxLesson) {
        vocabulary.push(...data[lesson].vocabulary);
        englishVocab.push(
          ...data[lesson].vocabulary.map((item) => item[0].word)
        );
        greekVocab.push(...data[lesson].vocabulary.map((item) => item[1].word));
      }
    }

    return {
      vocabulary,
      englishVocab,
      greekVocab,
      exercisePrompts: data[maxLesson].exercisePrompts,
    };
  }, [minLesson, maxLesson]);
};
