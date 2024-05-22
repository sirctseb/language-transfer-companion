"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // we'll probably completely generalize the lesson pages, or at least
  // extract enough that we can make the lesson number a dynamic segment
  // and will replace this with just referencing it from the search params
  const pathSegments = usePathname().split("/");
  const lessonNumber = parseInt(pathSegments[pathSegments.length - 1]);

  return (
    <>
      <Header text={`Lesson ${lessonNumber}`} lesson={lessonNumber} />
      {children}
    </>
  );
}
