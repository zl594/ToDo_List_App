import Task from "./components/Task";
import "./TaskList.css";

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onComplete={onComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TaskList;
