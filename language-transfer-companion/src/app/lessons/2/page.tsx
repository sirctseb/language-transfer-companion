import { VocabList } from "../VocabList";
import { useData } from "../data/data";

export default function Home() {
  const { exercises, vocabulary } = useData(2);
  return (
    <>
      <VocabList title="Lesson Vocab" list={vocabulary} />
      <VocabList title="Practice" list={exercises} />
    </>
  );
}
