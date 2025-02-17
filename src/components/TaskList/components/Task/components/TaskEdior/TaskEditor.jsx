import { useState } from "react";
import "./TaskEditor.css";

const TaskEditor = ({ initialText, onSave, onCancel }) => {
  const [editText, setEditText] = useState(initialText);

  const handleSave = () => {
    if (editText.trim() === "") return;
    onSave(editText);
  };

  return (
    <div className="task-editor">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        autoFocus
      />
      <button onClick={handleSave}>保存</button>
      <button onClick={onCancel}>取消</button>
    </div>
  );
};

export default TaskEditor;
