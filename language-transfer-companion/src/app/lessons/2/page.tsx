import VocabList, { VocabList2 } from "../VocabList";
import { useData } from "../data/data";

export default function Home() {
  const { exercises, vocabulary } = useData(2);
  return (
    <>
      <VocabList2 title="Lesson Vocab" list={vocabulary} />
      <VocabList2 title="Practice" list={exercises} />
    </>
  );
}
