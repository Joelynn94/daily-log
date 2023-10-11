import { useBoardData } from "@/hooks/useBoardData";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import HideSidebar from "./HideSidebar";
import BoardLink from "./BoardLink";

export default function Sidebar() {
  const { boards } = useBoardData();

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-6 px-3 h-full bg-white dark:bg-gray-800">
        <ul className="space-y-2">
          <li className="flex items-center p-2 text-base tracking-widest font-bold text-slate-400 uppercase">
            All Boards ({boards.length})
          </li>
          {boards &&
            boards.map((board) => <BoardLink board={board} key={board.id} />)}
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-medium text-indigo-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ml-3 whitespace-nowrap text-indigo-500">
                + Create New Board
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex absolute bottom-0 left-0 justify-center py-6 px-2 space-x-4 w-full bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <ul className="space-y-2 w-full">
            <li>
              <ModeToggle />
            </li>
            <li>
              <HideSidebar />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
