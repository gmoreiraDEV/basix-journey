import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./db.types";

const supabaseUrl = process.env.NEXT_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_SUPABASE_ANON_KEY!;

console.log("########", supabaseUrl);
console.log("########", supabaseKey);
const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
const supabaseServer = createBrowserClient<Database>(supabaseUrl, supabaseKey);

export { supabaseClient, supabaseServer };
