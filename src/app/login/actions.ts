"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase";

export async function loginAction(formData: FormData) {
  const supabase = await createServerSupabaseClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("🔑 Tentativa de login:", { email, hasPassword: !!password });

  if (!email || !password) {
    console.log("❌ Campos obrigatórios ausentes");
    redirect("/login?error=missing-fields");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("📊 Resultado do login:", {
    success: !error,
    hasUser: !!data.user,
    hasSession: !!data.session,
    emailConfirmed: !!data.user?.email_confirmed_at,
    error: error?.message,
  });

  if (error) {
    console.log("❌ Erro de login:", error.message);
    if (error.message.includes("Email not confirmed")) {
      redirect("/login?error=email-not-confirmed");
    }
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  if (!data.user?.email_confirmed_at) {
    console.log("❌ Email não confirmado");
    redirect("/login?error=email-not-confirmed");
  }

  console.log("✅ Login bem-sucedido, redirecionando para dashboard...");
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
