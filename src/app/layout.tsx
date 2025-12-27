import type { Metadata } from "next";
import { Geist, Geist_Mono, Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Loader from "@/components/shared/Loader";
import { LoaderProvider } from "@/contexts/LoaderContext";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sawsan",
  description: "Women's healthcare foundation providing dignified, ethical care through safe spaces, trained volunteers, and licensed physicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.webp" />
        <link rel="apple-touch-icon" href="/logo.webp" />
      </head>
      <body
        className={`${karla.variable} antialiased`}
      >
        <LoaderProvider>
          <Loader />
          <Header />
          {children}
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
