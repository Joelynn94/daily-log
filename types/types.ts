type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type Task = {
  id: string;
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

type Board = {
  id: string;
  name: string;
  columns: Column[];
};

export type { Subtask, Task, Column, Board };
