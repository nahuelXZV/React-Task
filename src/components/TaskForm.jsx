import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    text: "",
  });

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask({
      title: "",
      text: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <form className="bg-slate-900 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3 text-center">
          Create a new task
        </h1>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={task.text}
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTask({ ...task, text: e.target.value })}
        >
          {" "}
        </textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
