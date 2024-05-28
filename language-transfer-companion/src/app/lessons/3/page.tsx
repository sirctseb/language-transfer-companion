import { VocabList2 } from "../VocabList";
import { useData } from "../data/data";

export default function Home() {
  const { vocabulary } = useData(3);
  const { vocabulary: cumulativeVocab, exercises: cumulativeExercises } =
    useData(2, 3);
  return (
    <>
      <VocabList2 title="Lesson Vocab" list={vocabulary} />
      <VocabList2 title="Cumulative Vocab" list={cumulativeVocab} />
      <VocabList2 title="Practice" list={cumulativeExercises} />
    </>
  );
}
