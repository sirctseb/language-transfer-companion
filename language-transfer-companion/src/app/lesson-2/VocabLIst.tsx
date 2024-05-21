"use client";

import { Switch, Card } from "@nextui-org/react";
import { useState } from "react";

enum Language {
  English = "english",
  Greek = "greek",
}

type VocabListProps = {
  englishWords: string[];
  greekWords: string[];
};

export default function VocabList({
  englishWords,
  greekWords,
}: VocabListProps) {
  const [language, setLanguage] = useState(Language.English);

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between bg-white p-4 shadow-sm dark:bg-gray-950">
        <h2 className="text-lg font-medium">Terms</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">English</span>
          <Switch
            id="language-toggle"
            value={language}
            onValueChange={(useGreek) => {
              setLanguage(useGreek ? Language.Greek : Language.English);
            }}
          />
          <span className="text-sm font-medium">Greek</span>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {(language === Language.English ? englishWords : greekWords).map(
            (word) => (
              <div
                key={word}
                className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h3 className="mb-2 text-sm font-medium">{word}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </Card>
  );
}
