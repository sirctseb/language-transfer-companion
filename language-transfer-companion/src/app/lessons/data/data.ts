import { useMemo } from "react";
import { data } from "./lessons";
import { VocabEntry } from "../types";

type DataResult = {
  vocabulary: VocabEntry[];
  exercises: VocabEntry[];
};

export const useData = (
  minLesson: number,
  maxLesson: number = minLesson
): DataResult => {
  return useMemo((): DataResult => {
    const vocabulary = [];
    const exercises = [];

    for (const lesson in data) {
      const lessonIndex = parseInt(lesson);
      if (lessonIndex >= minLesson && lessonIndex <= maxLesson) {
        vocabulary.push(
          ...data[lesson].vocabulary.map(([english, greek]) => ({
            english: english.word,
            greek: greek.word,
            greekLatinized: greek.latinized,
          }))
        );
        exercises.push(
          ...data[lesson].exercises.map(([english, greek]) => ({
            english: english.word,
            greek: greek.word,
            greekLatinized: greek.latinized,
          }))
        );
      }
    }
    return {
      vocabulary,
      exercises,
    };
  }, [minLesson, maxLesson]);
};
