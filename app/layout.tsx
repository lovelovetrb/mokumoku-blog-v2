import type { Metadata } from "next";
// TODO: font 変更
import { Inter } from "next/font/google";
import "./destyle.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// TODO: title, description 変更
export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-blue-100`}>{children}</body>
    </html>
  );
}
