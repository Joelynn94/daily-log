import Task from "./Task";

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

type TasksProps = {
  tasks: Task[];
};

export default function Tasks({ tasks }: TasksProps) {
  return (
    <div className="flex flex-col gap-6">
      {tasks.map((task) => (
        <Task key={task.title} task={task} />
      ))}
    </div>
  );
}
