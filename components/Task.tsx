"use client";
import { useState } from "react";
import { Task as TaskType } from "@/types/types";
import TaskEditModal from "@/components/TaskEditModal";

export default function Task({
  id,
  title,
  description,
  status,
  subtasks,
}: TaskType) {
  const completedSubtasks = subtasks.filter((subtask) => subtask.isCompleted);
  const [isEditing, setIsEditing] = useState(false);

  const openEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    console.log("saving task edit updates");
  };

  return (
    <>
      <div
        className="w-96 flex flex-col justify-start items-start gap-2 bg-white dark:bg-gray-800 hover:text-indigo-600 hover:dark:text-indigo-600 rounded-lg shadow-lg p-5 cursor-pointer"
        onClick={openEditModal}
      >
        <h4 className="text-gray-950 dark:text-gray-50 text-base font-bold">
          {title}
        </h4>
        <div className="text-slate-400 text-xs">
          {completedSubtasks.length} of {subtasks.length} substasks
        </div>
      </div>
      {isEditing && (
        <TaskEditModal
          task={{ id, title, description, status, subtasks }}
          onClose={closeEditModal}
          onSave={handleSave}
        />
      )}
    </>
  );
}
