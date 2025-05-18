import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { TranslationProvider } from "@/context/translator-provider";

export const metadata: Metadata = {
  title: "AMARITS Consulting – IT & Event Solutions",
  description:
    "Empowering organizations through innovative IT services and expert event management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <TranslationProvider>
            <Header />
            {children}
            <Footer />
          </TranslationProvider>
      </body>
    </html>
  );
}
