export type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => (
  <header className="bg-gray-100 py-6 dark:bg-gray-800">
    <div className="container mx-auto px-4 md:px-6">
      <h1 className="text-2xl font-bold">Lesson 2</h1>
    </div>
  </header>
);
