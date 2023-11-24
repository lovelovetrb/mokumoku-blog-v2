import Link from "next/link";

export const Header = () => {
  return (
    <Link href="/">
      <header className="bg-blue-400 py-8 px-4">
        <h1 className="text-xl font-bold text-white">MOKUMOKUCUP実行委員会</h1>
      </header>
    </Link>
  );
};
