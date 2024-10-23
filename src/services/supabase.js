import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gzixgqrsjmnvsuvscxfy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6aXhncXJzam1udnN1dnNjeGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NjcyMjEsImV4cCI6MjA0NDE0MzIyMX0.Zs3h9_lCrK14ulphnJmzWgLvuvwiXKeubaxo6s4H2RI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
