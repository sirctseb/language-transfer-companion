"use client";

import { useParams } from "next/navigation";
import { AutoPage } from "../AutoPage";

export default function Home() {
  const { lesson } = useParams();
  if (typeof lesson !== "string") throw new Error("Invalid lesson");
  return <AutoPage lesson={parseInt(lesson)} />;
}
