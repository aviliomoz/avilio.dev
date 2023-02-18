import "../styles/globals.css";
import { Rubik } from "@next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={rubik.className}>
      <head />
      <body className="max-w-5xl px-28 mx-auto text-gray-800">
        <Header />
        <main className="min-h-[50svh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
