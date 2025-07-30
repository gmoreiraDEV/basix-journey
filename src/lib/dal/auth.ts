"use server";
import { supabaseServer } from "../supabase";

export const getUserSession = async () => {
  const {
    data: { session },
    error,
  } = await supabaseServer.auth.getSession();

  if (error || !session?.user) return null;

  return session.user;
};
