import { useState } from "react";
import TaskEditor from "./components/TaskEdior";
import "./Task.css";

const Task = ({ id, text, completed, onComplete, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`task-container ${completed ? "completed" : ""}`}>
      {isEditing ? (
        <TaskEditor
          initialText={text}
          onSave={(newText) => {
            onEdit(id, newText);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <span className="task-text">{text}</span>
          <button onClick={() => setIsEditing(true)}>编辑</button>
          <button onClick={() => onComplete(id)}>{completed ? "取消完成" : "完成"}</button>
          <button onClick={() => onDelete(id)}>删除</button>
        </>
      )}
    </div>
  );
};

export default Task;
