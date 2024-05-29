"use client";

import { Switch, Card } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import type { VocabEntry } from "./types";
import { Language } from "./types";

type VocabListProps = {
  title: string;
  list: VocabEntry[];
};

type VocabCardProps = {
  entry: VocabEntry;
  language: Language;
};

function VocabCard({ entry, language }: VocabCardProps) {
  const [localLanguage, setLocalLanguage] = useState(language);

  useEffect(() => {
    setLocalLanguage(language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLocalLanguage(
      localLanguage === Language.English ? Language.Greek : Language.English
    );
  }, [localLanguage, setLocalLanguage]);

  return (
    <div
      className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 cursor-pointer"
      onClick={toggleLanguage}
      title={
        entry[
          localLanguage === Language.English ? Language.Greek : Language.English
        ]
      }
    >
      <h3 className="mb-2 text-sm font-medium">{entry[localLanguage]}</h3>
    </div>
  );
}

export function VocabList({ title, list }: VocabListProps) {
  const [language, setLanguage] = useState(Language.English);

  return (
    <div className="py-2 md:py-2">
      <Card className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between bg-white p-4 shadow-sm dark:bg-gray-950">
          <h2 className="text-lg font-medium">{title}</h2>
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
            {list.map((entry) => (
              <VocabCard
                key={entry[Language.English]}
                entry={entry}
                language={language}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
