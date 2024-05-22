import VocabList from "../VocabList";
import { useData } from "../data/data";

export default function Home() {
  const { englishVocab, greekVocab } = useData(2);
  return (
    <>
      <VocabList
        title="Lesson Vocab"
        englishWords={englishVocab}
        greekWords={greekVocab}
      />
    </>
  );
}
