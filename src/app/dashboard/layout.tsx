import { redirect } from 'next/navigation'
import { getUserSession } from '@/lib/dal/auth'

import type { Metadata } from "next";

import { playFair, cascadiaCode, raleway } from "@/lib/fonts";
import PageWrapper from '@/components/dashboard/page-wrapper';
import { logoutAction } from './actions';

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
      <body className={`${playFair.variable} ${cascadiaCode.variable} ${raleway.variable} antialiased`}>
        <PageWrapper user={user} logoutAction={logoutAction}>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
