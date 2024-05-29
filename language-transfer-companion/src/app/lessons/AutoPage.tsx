import { VocabList } from "./VocabList";
import { useData } from "./data/data";

type AutoPageProps = {
  lesson: number;
};

export function AutoPage({ lesson }: AutoPageProps) {
  const { vocabulary } = useData(lesson);
  const { vocabulary: cumulativeVocab, exercises: cumulativeExercises } =
    useData(2, lesson);
  return (
    <>
      <VocabList title="Lesson Vocab" list={vocabulary} />
      <VocabList title="Cumulative Vocab" list={cumulativeVocab} />
      <VocabList title="Practice" list={cumulativeExercises} />
    </>
  );
}
