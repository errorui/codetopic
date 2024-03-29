import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UsestoreProvider } from "./Context/Usestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "code to pic",
  description: "convert your code snippets into picture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UsestoreProvider>{children}</UsestoreProvider>
      </body>
    </html>
  );
}
