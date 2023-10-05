import { Task as TaskType } from "@/types/types";

export default function Task({
  id,
  title,
  description,
  status,
  subtasks,
}: TaskType) {
  const completedSubtasks = subtasks.filter((subtask) => subtask.isCompleted);

  return (
    <div className="w-96 flex flex-col justify-start items-start gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5">
      <div className="text-gray-950 dark:text-gray-50 text-base font-bold">
        {title}
      </div>
      <div className="text-slate-400 text-xs">
        {completedSubtasks.length} of {subtasks.length} substasks
      </div>
    </div>
  );
}
