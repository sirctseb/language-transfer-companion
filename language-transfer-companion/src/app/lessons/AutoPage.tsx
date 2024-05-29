import { VocabList } from "./VocabList";
import { useData } from "./data/data";

type AutoPageProps = {
  lesson: number;
};

export function AutoPage({ lesson }: AutoPageProps) {
  const { vocabulary, exercises } = useData(lesson);
  const { vocabulary: cumulativeVocab } = useData(2, lesson);
  return (
    <>
      <VocabList title="Lesson Vocab" list={vocabulary} />
      <VocabList title="Practice" list={exercises} />
      <VocabList title="Cumulative Vocab" list={cumulativeVocab} />
    </>
  );
}
