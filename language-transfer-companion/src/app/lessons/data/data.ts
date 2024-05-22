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
  return useMemo(() => {
    const result: DataResult = {
      vocabulary: [],
      exercisePrompts: [],
      englishVocab: [],
      greekVocab: [],
    };

    for (const lesson in data) {
      const lessonIndex = parseInt(lesson);
      if (lessonIndex >= minLesson && lessonIndex <= maxLesson) {
        result.vocabulary.push(...data[lesson].vocabulary);
        result.exercisePrompts.push(...data[lesson].exercisePrompts);
        result.englishVocab.push(
          ...data[lesson].vocabulary.map((item) => item[0].word)
        );
        result.greekVocab.push(
          ...data[lesson].vocabulary.map((item) => item[1].word)
        );
      }
    }

    return result;
  }, [minLesson, maxLesson]);
};
