import VocabList from "../VocabList";
import { useData } from "../data/data";

export default function Home() {
  const { englishVocab, greekVocab, exercisePrompts } = useData(2);
  return (
    <>
      <VocabList
        title="Lesson Vocab"
        englishWords={englishVocab}
        greekWords={greekVocab}
      />
      <VocabList
        title="Practice"
        englishWords={exercisePrompts[0].prompts}
        greekWords={exercisePrompts[1].prompts}
      />
    </>
  );
}
