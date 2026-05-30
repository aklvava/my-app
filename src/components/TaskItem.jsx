function TaskItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      <span>{task.title}</span>
      <button 
        className="task-delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        🗑️
      </button>
    </li>
  );
}

export default TaskItem;
