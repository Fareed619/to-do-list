// css external file

import { useRef, useState } from "react";
import "./toDoStyle.css";
const ToDoComponent = () => {
  const [tasks, setTasks] = useState([
   
  ]);

  let inputRef = useRef(null);

  //  onclick => add task to array
  const handleAddTask = () => {
    let val = inputRef.current.value;
    if (val) {
      setTasks([...tasks, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  // Delete a task
  const handleDeletTask = (index) => {
    let filterTask = tasks.filter((task, i) => {
      if (index !== i) {
        return task;
      }
    });

    setTasks(filterTask);
  };

  // Edit a Task

  const handleEditTask = (index) => {
    inputRef.current.value = tasks[index];
    handleDeletTask(index);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "teal",
          padding: "10px 20px",
          borderRadius: "10px",
          boxShadow: "0 10px 10px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h1>To Do List</h1>
        <div style={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <input type="text" className="input-add" ref={inputRef} />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul style={{ lineHeight: "70px", fontSize: "23px" }}>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                {task}{" "}
                <button
                  onClick={() => {
                    handleDeletTask(index);
                  }}
                >
                  Delete
                </button>{" "}
                <button
                  onClick={() => {
                    handleEditTask(index);
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDoComponent;
