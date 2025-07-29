import type { Metadata } from "next";

import { playFair, cascadiaCode, raleway } from "@/lib/fonts";
import "../globals.css";

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
      <body className={`${playFair.variable} ${cascadiaCode.variable} ${raleway.variable} antialiased`}>{children}</body>
    </html>
  );
}
