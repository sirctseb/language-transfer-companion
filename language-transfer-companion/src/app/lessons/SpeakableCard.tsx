"use client";
import { useCallback } from "react";
import { Language } from "./types";
import { speak } from "../../speech";

export function SpeechIcon(props: React.SVGProps<SVGSVGElement>) {
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

type SpeakableCardProps = {
  content: string;
  language: Language;
};
export function SpeakableCard({ content, language }: SpeakableCardProps) {
  const readContent = useCallback(
    (evt: React.MouseEvent<HTMLDivElement>) => {
      evt.stopPropagation();
      speak(content, language);
    },
    [content, language]
  );

  return (
    <div
      className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 relative cursor-pointer"
      title={content}
    >
      <div className="absolute top-2 right-2" onClick={readContent}>
        <SpeechIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>
      <h3 className="mb-2 text-sm font-medium">{content}</h3>
    </div>
  );
}
