import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function APIComponent() {
  const supabase = createServerComponentClient({ cookies });

  const getData = async () => {
    let { data: tasks, error } = await supabase.from("tasks").select("*");
    console.log(tasks);

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    if (tasks) {
      return tasks;
    }
  };

  return <pre>{JSON.stringify(await getData(), null, 2)}</pre>;
}
