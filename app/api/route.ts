import path from "path";
import fsPromises from "fs/promises";
import { NextResponse } from "next/server";

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practice to add `server-only` preemptively.
import "server-only";

export async function getLocalBoardsData(req: Request, res: Response) {
  try {
    const filePath = path.join(process.cwd(), "data", "board.json");
    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    console.log("data", data);

    NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ boards: [], message: "Error getting boards data" });
  }
}
