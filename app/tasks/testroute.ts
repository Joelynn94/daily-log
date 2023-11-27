import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextApiRequest, NextApiResponse } from "next";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

const supabase = createServerActionClient({ cookies });
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { data, error } = await supabase
      .from("tasks")
      .insert(req.body)
      .select();
    if (error) return res.status(500).json({ error: error.message });

    revalidatePath("/");
    return res.status(200).json({
      message: "Task created successfully.",
      data,
    });
  }

  if (req.method === "GET") {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) return res.status(500).json({ error: error.message });

    revalidatePath("/");
    return res.status(200).json({
      message: "Task fetched successfully.",
      data,
    });
  }

  if (req.method === "PUT") {
    const { data, error } = await supabase
      .from("tasks")
      .update(req.body)
      .eq("id", req.body.id)
      .select();
    if (error) return res.status(500).json({ error: error.message });

    revalidatePath("/");
    return res.status(200).json({
      message: "Task updated successfully.",
      data,
    });
  }

  if (req.method === "DELETE") {
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", req.body.id);
    if (error) return res.status(500).json({ error: error.message });

    revalidatePath("/");
    return res.status(200).json({
      message: "Task deleted successfully.",
      data,
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}
