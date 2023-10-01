import Column from "./Column";
import ColumnsGrid from "./ColumnsGrid";

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

type Board = {
  name: string;
  columns: Column[];
};

type ColumnsProps = {
  columns: Column[];
};

export default function ColumnsList({ columns }: ColumnsProps) {
  return (
    <ColumnsGrid>
      {columns.map((column) => (
        <Column key={column.name} column={column} />
      ))}
    </ColumnsGrid>
  );
}
