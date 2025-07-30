import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

const playFair = Playfair({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basix Journey",
  description: "Basix Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playFair.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
