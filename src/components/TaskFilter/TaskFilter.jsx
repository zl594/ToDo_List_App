import "./TaskFilter.css";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="task-filter">
      <button className="filter-button">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">全部</option>
          <option value="active">未完成</option>
          <option value="completed">已完成</option>
        </select>
      </button>
    </div>
  );
};

export default TaskFilter;
