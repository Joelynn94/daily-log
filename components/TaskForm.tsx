import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";

import type { Database } from "@/types/database";
type Task = Database["public"]["Tables"]["tasks"]["Row"];

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TaskForm() {
  const createTask = async (formData: FormData) => {
    "use server";
    const title = formData.get("title");
    const status = formData.get("status");
    console.log(title, status);

    if (title && status) {
      const supabase = createServerActionClient({ cookies });
      const { data, error } = await supabase
        .from("tasks")
        .insert({ title, status })
        .select();

      if (error) {
        console.error("Error inserting task:", error);
        return;
      }

      console.log("Inserted task:", data);
      revalidatePath("/tasks");
    }
  };

  return (
    <form action={createTask}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="status">Status</label>
      <select id="status" name="status" required>
        <option value="new">New</option>
        <option value="closed">Closed</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
