import { Column as ColumnType } from "../types/types";
import Tasks from "./Tasks";

export default function Column({ id, name, color, tasks }: ColumnType) {
  const colors: Record<string, string> = {
    sky: "bg-sky-400",
    violet: "bg-violet-500",
    emerald: "bg-emerald-300",
  };

  return (
    <div className="flex flex-col gap-4 grow">
      <div id={id} className="flex gap-2 items-center mb-2">
        <div className={`w-3.5 h-3.5 ${colors[color]} rounded-full`} />
        <h2 className="text-slate-400 text-base font-bold tracking-widest">
          {name} ({tasks.length})
        </h2>
      </div>

      <Tasks tasks={...tasks} />
    </div>
  );
}
