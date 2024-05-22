import VocabList from "../VocabList";
import { useData } from "../data/data";

export default function Home() {
  const { englishVocab, greekVocab, exercisePrompts } = useData(3);
  const {
    englishVocab: cumulativeEnglishVoab,
    greekVocab: cumulativeGreekVocab,
  } = useData(2, 3);
  return (
    <>
      <VocabList
        title="Lesson Vocab"
        englishWords={englishVocab}
        greekWords={greekVocab}
      />
      <VocabList
        title="Cumulative Vocab"
        englishWords={cumulativeEnglishVoab}
        greekWords={cumulativeGreekVocab}
      />
      <VocabList
        title="Practice"
        englishWords={exercisePrompts[0].prompts}
        greekWords={exercisePrompts[1].prompts}
      />
    </>
  );
}
