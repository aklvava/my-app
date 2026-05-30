import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useState } from 'react';

function TasksPage() {
  const [localTasks, setLocalTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      title: text,
      completed: false,
    };
    setLocalTasks([...localTasks, newTask]);
  };

  const deleteTask = (id) => {
    setLocalTasks(localTasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2 className="tasks-title">📋 Мой список фильмов</h2>
      <TaskForm addTask={addTask} />
      
      {localTasks.length === 0 ? (
        <p className="empty-tasks">✨ Фильмов пока нет! Добавьте первый!</p>
      ) : (
        <div className="movie-grid">
          {localTasks.map(task => (
            <div key={task.id} className="movie-card">
              <div className="movie-emoji">📝</div>
              <h2>{task.title}</h2>
              <button onClick={() => deleteTask(task.id)} className="watch-btn">🗑️ Удалить</button>
            </div>
          ))}
        </div>
      )}

      <h2 className="tasks-title">🎬Кинозадачи</h2>
      <TaskList />
    </div>
  );
}

export default TasksPage;