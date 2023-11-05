import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function APIComponent() {
  console.log(cookies);
  const supabase = createServerComponentClient({ cookies });

  const getData = async () => {
    let { data: boards, error } = await supabase.from("boards").select("*");
    console.log(boards);

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    if (boards) {
      return boards;
    }
  };

  return <pre>{JSON.stringify(await getData(), null, 2)}</pre>;
}
