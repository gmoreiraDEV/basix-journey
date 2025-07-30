import { supabase } from "../supabase";
import type { Tables, TablesInsert } from "../db.types";
import { getUserSession } from "./auth";

type Form = Tables<"forms">;
type NewForm = TablesInsert<"forms">;

export async function getFormsByUser(userId: string): Promise<Form[]> {
  const { data, error } = await supabase
    .from("forms")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function createForm(
  form: Omit<NewForm, "user_id">
): Promise<Form> {
  const user = await getUserSession();
  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("forms")
    .insert({ ...form, user_id: user.id })
    .select()
    .single();

  if (error) throw error;
  return data;
}

