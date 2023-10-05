import Task from "./Task";
import { Task as TaskType } from "@/types/types";

interface Props {
  tasks?: TaskType[];
}

export default function Tasks({ tasks = [] }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            subtasks={task.subtasks}
          />
        ))}
    </div>
  );
}
