import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { taskL } = useContext(TaskContext);

  if (taskL.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No tasks to do!</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 ">
      {taskL.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
