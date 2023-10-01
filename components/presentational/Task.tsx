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

export default function Task({ task }: { task: Task }) {
  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  );

  return (
    <div className="w-72 flex flex-col justify-start items-start gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5">
      <div className="text-gray-950 dark:text-gray-50 text-base font-bold">
        {task.title}
      </div>
      <div className="text-slate-400 text-xs">
        {completedSubtasks.length} of {task.subtasks.length} substasks
      </div>
    </div>
  );
}
