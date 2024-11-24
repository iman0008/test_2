import React, { useState } from "react";

function TaskItem({ task, deleteTask, updateTask, toggleEdit }) {
    const [editedText, setEditedText] = useState(task.text);

    const handleSave = () => {
        updateTask(task.id, editedText);
    };

    const handleCancel = () => {
        toggleEdit(task.id);
        setEditedText(task.text);
    };

    return (
        <div className="task-item">
            {task.isEditing ? (
                <>
                    <input
                        type="text"
                        className="task-edit-input"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button className="save-button" onClick={handleSave}>
                        Save
                    </button>
                    <button className="cancel-button" onClick={handleCancel}>
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <span className="task-text">{task.text}</span>
                    <button className="edit-button" onClick={() => toggleEdit(task.id)}>
                        ✏️
                    </button>
                    <button className="delete-button" onClick={() => deleteTask(task.id)}>
                        🗑️
                    </button>
                </>
            )}
        </div>
    );
}

export default TaskItem;

