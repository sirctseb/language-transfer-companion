"use client";

import { Card } from "@nextui-org/react";
import { SpeakableCard } from "./SpeakableCard";
import { Language } from "./types";
import { useCallback, useState } from "react";

type ExerciseListProps = {
  lesson: number;
  cumulative: boolean;
};

export function ExerciseList({ cumulative, lesson }: ExerciseListProps) {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateExercise = useCallback(async () => {
    setLoading(true);
    const result = await fetch(
      `/api/generateExercises?lesson=${lesson}&cumulative=${cumulative}`
    );
    const { message } = await result.json();
    console.log({ message });
    setExercises(message.split("\n").filter((result: string) => result !== ""));
    setLoading(false);
  }, [cumulative, lesson]);

  return (
    <div className="py-2 md:py-2">
      <Card className="max-w-2xl mx-auto">
        <div
          className="flex items-center justify-between bg-white p-4 shadow-sm dark:bg-gray-950 cursor-pointer"
          onClick={generateExercise}
        >
          <h2 className="text-lg font-medium">
            {cumulative ? "Cumulative" : "More"} Exercises{loading && "..."}
          </h2>
        </div>
        {exercises.length !== 0 && (
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {exercises.map((entry) => (
                <SpeakableCard
                  key={entry}
                  content={entry}
                  language={Language.English}
                />
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
