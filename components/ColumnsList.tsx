import Column from "./Column";
import ColumnsGrid from "./ColumnsGrid";
import { Column as ColumnType } from "../types/types";
import { Board } from "../types/types";

export default function ColumnsList(board: Board) {
  return (
    <ColumnsGrid>
      {board.columns &&
        board.columns.map((column: ColumnType) => (
          <Column
            key={column.id}
            id={column.id}
            name={column.name}
            color={column.color}
            tasks={column.tasks}
          />
        ))}
    </ColumnsGrid>
  );
}
