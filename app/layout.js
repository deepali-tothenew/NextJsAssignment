import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ink & Insight",
  description: "Next Js Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <header className="font-mono flex place-items-center text-2xl flex-col items-center justify-between p-24">
              <Image
                src="/quill.webp"
                alt="Ink & Insight"
                width={60}
                height={60}
                priority
              />
              Ink & Insight
            </header>
            <Navigation />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
