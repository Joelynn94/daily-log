import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";

import type { Database } from "@/types/database";

type Task = Database["public"]["Tables"]["tasks"]["Row"];

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Badge } from "@/components/ui/badge";

export const dynamic = "force-dynamic";

export default async function Tasks() {
  const supabaseServer = createServerComponentClient({ cookies });
  const { data: tasks, error } = await supabaseServer.from("tasks").select("*");

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
    <>
      <form action={createTask}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />

        <Label htmlFor="status">Status</Label>
        <select id="status" name="status" required>
          <option value="new">New</option>
          <option value="closed">Closed</option>
        </select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
