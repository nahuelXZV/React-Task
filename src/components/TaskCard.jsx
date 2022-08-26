import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ task }) {
  const { eliminarTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md ">
      <h2 className="text-xl font-bold capitalize ">{task.title}</h2>
      <p className="text-gray-500 text-sm">{task.text}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 "
        onClick={() => eliminarTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
