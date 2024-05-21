import { data } from "./greek-002-companion";
import VocabList from "./VocabLIst";

const english = data.vocabulary.map((item) => item[0].word);
const greek = data.vocabulary.map((item) => item[1].word);

export default function Home() {
  return (
    <>
      <header className="bg-gray-100 py-6 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-2xl font-bold">Lesson 2</h1>
        </div>
      </header>
      <VocabList englishWords={english} greekWords={greek} />
    </>
  );
}
