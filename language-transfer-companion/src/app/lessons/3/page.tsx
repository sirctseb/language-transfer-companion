import { data } from "./greek-003-companion";
import VocabList from "../VocabList";
import { Header } from "../Header";

const english = data.vocabulary.map((item) => item[0].word);
const greek = data.vocabulary.map((item) => item[1].word);

export default function Home() {
  return (
    <>
      <Header text="Lesson 3" />
      <VocabList englishWords={english} greekWords={greek} />
    </>
  );
}
