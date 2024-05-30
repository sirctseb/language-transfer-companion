import { Language } from "./app/lessons/types";

const languageMap: Record<Language, string> = {
  [Language.English]: "en-US",
  [Language.Greek]: "el-GR",
};

export const speak = (text: string, language: Language) => {
  if (typeof window !== "undefined") {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageMap[language];
    if (!window.speechSynthesis.speaking) {
      window.speechSynthesis.speak(utterance);
    }
  }
};
