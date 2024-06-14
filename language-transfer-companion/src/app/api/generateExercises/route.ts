import type { NextRequest } from "next/server";
import OpenAI from "openai";
import { deriveData } from "../../lessons/data/data";
import { generatePrompt } from "./generatePrompt";

export async function GET(request: NextRequest): Promise<Response> {
  const apiKey = process.env.CHATGPT_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not found" }, { status: 500 });
  }

  const api = new OpenAI({
    apiKey,
  });
  const searchParams = request.nextUrl.searchParams;
  const lessonString = searchParams.get("lesson");
  const cumulative = searchParams.get("cumulative") === "true";
  const lesson = lessonString ? parseInt(lessonString) : null;

  if (typeof lesson !== "number") {
    return Response.json({ error: "Lesson not found" }, { status: 400 });
  }

  const { exercises, vocabulary } = deriveData(2, lesson);
  const { exercises: currentExercises, vocabulary: currentVocabulary } =
    deriveData(lesson, lesson);

  const prompt = generatePrompt(
    [
      ...vocabulary.map((entry) => entry["english"]),
      ...exercises.map((entry) => entry["english"]),
    ],
    [
      ...currentVocabulary.map((entry) => entry["english"]),
      ...currentExercises.map((entry) => entry["english"]),
    ],
    cumulative
  );

  const response = await api.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-4o",
  });

  try {
    console.log({ response });
  } catch (e) {
    console.log(e);
  }

  return Response.json({
    message: response.choices[0].message.content,
  });
}
