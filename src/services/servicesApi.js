import { supabase } from "../supabase/client";

export const getServices = async () => {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("active", true);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};