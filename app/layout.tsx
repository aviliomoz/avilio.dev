import "../styles/globals.css";
import { Roboto_Slab } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto_Slab({
  weight: ["400", "500", "700", "800"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={roboto.className}>
      <head />
      <body className="max-w-5xl px-8 sm:px-28 mx-auto text-gray-800 dark:bg-gray-900">
        <Header />
        <main className="min-h-[50svh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
