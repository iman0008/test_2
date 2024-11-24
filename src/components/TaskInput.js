import React, { useState } from "react";

function TaskInput({ addTask, clearAllTasks }) {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        addTask(taskText);
        setTaskText("");
    };

    return (
        <div className="task-input-container">
            <input
                type="text"
                className="task-input"
                placeholder="Enter a task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button className="add-button" onClick={handleAddTask}>
                Add
            </button>
            <button className="clear-button" onClick={clearAllTasks}>
                Clear all
            </button>
        </div>
    );
}

export default TaskInput;
