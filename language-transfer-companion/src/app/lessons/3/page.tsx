import { ExerciseList } from "../ExerciseList";
import { VocabList } from "../VocabList";
import { useData } from "../data/data";

export default function Home() {
  const { vocabulary } = useData(3);
  const { vocabulary: cumulativeVocab, exercises: cumulativeExercises } =
    useData(2, 3);
  return (
    <>
      <ExerciseList lesson={3} />
      <VocabList title="Lesson Vocab" list={vocabulary} />
      <VocabList title="Cumulative Vocab" list={cumulativeVocab} />
      <VocabList title="Practice" list={cumulativeExercises} />
    </>
  );
}
