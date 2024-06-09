import { ExerciseList } from "./ExerciseList";
import { VocabList } from "./VocabList";
import { useData } from "./data/data";

type AutoPageProps = {
  lesson: number;
  children?: React.ReactNode;
};

export function AutoPage({ lesson, children }: AutoPageProps) {
  const { vocabulary, exercises } = useData(lesson);
  const { vocabulary: cumulativeVocab } = useData(2, lesson);
  return (
    <>
      <VocabList title="Lesson Vocab" list={vocabulary} />
      <VocabList title="Practice" list={exercises} />
      {children}
      <ExerciseList lesson={lesson} cumulative />
      <ExerciseList lesson={lesson} cumulative={false} />
      <VocabList title="Cumulative Vocab" list={cumulativeVocab} />
    </>
  );
}
