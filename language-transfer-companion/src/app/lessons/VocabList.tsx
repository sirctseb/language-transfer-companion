"use client";

import { Switch, Card } from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import type { VocabEntry } from "./types";
import { Language } from "./types";
import { speak } from "../../speech";

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

  const content = entry[localLanguage];

  const readContent = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      evt.stopPropagation();
      speak(content, localLanguage);
    },
    [content, localLanguage]
  );

  return (
    <div
      className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 relative cursor-pointer"
      onClick={toggleLanguage}
      title={
        entry[
          localLanguage === Language.English ? Language.Greek : Language.English
        ]
      }
    >
      <div className="absolute top-2 right-2" onClick={readContent}>
        <SpeechIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
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

function SpeechIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
      <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
      <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
    </svg>
  );
}
