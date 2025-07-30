"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase";

export async function logoutAction() {
  const supabase = await createServerSupabaseClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
}
