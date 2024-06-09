export const generatePrompt = (
  english: string[],
  current: string[],
  cumulative: boolean
): string => {
  return `
  I'm learning Greek. I know the translations of the following words and phrases:

  ${english.join("\n")}

  Present 20 sentences made from these words so I can practice translating them into Greek. Respond only with the sentences, without numbering. Half of the sentences should be at least 10 words
  ${!cumulative ? "bias toward using the following words and phrases" : ""}
  ${!cumulative ? current.join("\n") : ""}
  `;
};
