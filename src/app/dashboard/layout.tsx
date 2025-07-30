import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { getUserSession } from '@/lib/auth-actions'
import { logoutAction } from './actions'

import type { Metadata } from "next";

import { playFair, cascadiaCode, raleway } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Basix Journey",
  description: "Basix Journey",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUserSession()

  if (!user) {
    redirect('/login')
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${playFair.variable} ${cascadiaCode.variable} ${raleway.variable} antialiased`}>{children}</body>
    </html>
  );
}
