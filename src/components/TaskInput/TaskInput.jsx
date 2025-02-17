import { useState } from "react";
import "./TaskInput.css"

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="输入任务" />
      <button onClick={handleAddTask}>添加任务</button>
    </div>
  );
};

export default TaskInput;
