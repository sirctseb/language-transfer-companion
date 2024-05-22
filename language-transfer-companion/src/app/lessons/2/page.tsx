import VocabList from "../VocabList";
import { Header } from "../Header";
import { useData } from "../data/data";

export default function Home() {
  const { englishVocab, greekVocab } = useData(2);
  return (
    <>
      <Header text="Lesson 2" />
      <VocabList
        title="Lesson Vocab"
        englishWords={englishVocab}
        greekWords={greekVocab}
      />
    </>
  );
}
