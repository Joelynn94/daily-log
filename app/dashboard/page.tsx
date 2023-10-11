import { useBoardData } from "@/hooks/useBoardData";
import ColumnsList from "@/components/ColumnsList";
import { Board } from "@/types/types";

export default async function Dashboard() {
  const { boards } = useBoardData();
  const boardId = "board-uuid-1";

  const findBoard = (boardId: string) => {
    return boards.filter((board) => board.id === boardId);
  };

  const board: Board = findBoard(boardId)[0];

  return (
    <div className="p-4 md:ml-64 h-auto pt-20">
      {board && <ColumnsList {...board} />}
    </div>
  );
}
