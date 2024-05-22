import Link from "next/link";

export type HeaderProps = {
  text: string;
  lesson: number;
};

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export const Header = ({ text, lesson }: HeaderProps) => (
  <header className="bg-gray-100 py-6 dark:bg-gray-800 flex items-center justify-between">
    <div className="flex items-center">
      <Link className="mr-4" href={`/lessons/${lesson - 1}`}>
        <ChevronLeftIcon className="h-6 w-6" />
        <span className="sr-only">Back</span>
      </Link>
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-2xl font-bold">{text}</h1>
      </div>
    </div>
    <Link className="mr-4" href={`/lessons/${lesson + 1}`}>
      <ChevronRightIcon className="h-6 w-6" />
      <span className="sr-only">Forward</span>
    </Link>
  </header>
);
