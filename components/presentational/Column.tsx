type Subtask = {
  title: string;
  isCompleted: boolean;
};

type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

type Column = {
  id: string;
  name: string;
  color: string;
  tasks: Task[];
};

type ColumnProps = {
  column: Column;
};

export default function Column({ column }: ColumnProps) {
  const colors: Record<string, string> = {
    sky: "bg-sky-400",
    violet: "bg-violet-500",
    emerald: "bg-emerald-300",
  };

  return (
    <div className="flex flex-col gap-6 grow">
      <div className="flex gap-2 items-center mb-2">
        <div className={`w-3.5 h-3.5 ${colors[column.color]} rounded-full`} />
        <h2 className="text-slate-400 text-base font-bold tracking-widest">
          {column.name} ({column.tasks.length})
        </h2>
      </div>
    </div>
  );
}
