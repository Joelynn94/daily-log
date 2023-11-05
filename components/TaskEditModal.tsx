import React, { useState } from "react";
import { Task } from "@/types/types";

interface TaskEditModalProps {
  task: Task;
  onSave: (task: Task) => void;
  onClose: () => void;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({
  task,
  onSave,
  onClose,
}) => {
  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  );

  const handleSave = () => {
    onSave(task);
  };

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {task.title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-300">
              {task.description}
            </p>
            <div>
              <p className="text-base leading-relaxed text-white mb-3">
                Subtasks ({completedSubtasks.length} of {task.subtasks.length})
              </p>

              {task.subtasks.map((subtask) => (
                <div className="flex items-center pl-4 border border-gray-200 dark:border-gray-700 bg-gray-800 rounded mb-2">
                  <input
                    checked
                    id="bordered-checkbox-2"
                    type="checkbox"
                    value=""
                    name="bordered-checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-checkbox-2"
                    className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {subtask.title}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <label
                htmlFor="task-status"
                className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
              >
                Current Status
              </label>
              <select
                id="task-status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-0"
                defaultValue={task.status}
              >
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
