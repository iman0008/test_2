import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", isEditing: false },
    { id: 2, text: "Task 2", isEditing: false },
    { id: 3, text: "Task 3", isEditing: false },
    { id: 4, text: "Task 4", isEditing: false },
    { id: 5, text: "Task 5", isEditing: false },
    { id: 6, text: "Task 6", isEditing: false },
  ]);

  const addTask = (newTaskText) => {
    if (newTaskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
        isEditing: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const updateTask = (id, newText) => {
    setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, text: newText, isEditing: false } : task
        )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleEdit = (id) => {
    setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, isEditing: !task.isEditing } : task
        )
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
      <div className="app-container">
        <h1 className="app-title">TO DO</h1>
        <TaskInput addTask={addTask} clearAllTasks={clearAllTasks} />
        <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
            toggleEdit={toggleEdit}
        />
      </div>
  );
}

export default App;
