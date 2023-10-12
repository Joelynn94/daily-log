import { Board } from "@/types/types";
import { useBoardData } from "@/hooks/useBoardData";
import ColumnsList from "@/components/ColumnsList";
import MainWrapper from "@/components/MainWrapper";

export default async function Dashboard() {
  const { boards } = useBoardData();
  const boardId = "board-uuid-1";

  const findBoard = (boardId: string) => {
    return boards.filter((board) => board.id === boardId);
  };

  const board: Board = findBoard(boardId)[0];

  return <MainWrapper>{board && <ColumnsList {...board} />}</MainWrapper>;
}
