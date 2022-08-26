import { createContext, useEffect } from "react";
import { useState } from "react";
import { tasks } from "../components/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [taskL, setTaskList] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTaskList(tasks);
    setIndex(tasks.length);
  }, []);

  function createTask(task) {
    setTaskList([
      ...taskL,
      {
        id: index,
        title: task.title,
        text: task.text,
      },
    ]);
    setIndex(index + 1);
  }

  function eliminarTask(id) {
    console.log(id);
    setTaskList(taskL.filter((task) => task.id !== id));
  }

  return (
    <>
      <TaskContext.Provider
        value={{
          taskL,
          createTask,
          eliminarTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
