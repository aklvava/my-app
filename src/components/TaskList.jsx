import { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const movieTasks = [
        { id: 1, title: "Посмотреть 'Побег из Шоушенка'", completed: true },
        { id: 2, title: "Пересмотреть 'Крёстного отца'", completed: false },
        { id: 3, title: "Досмотреть 'Начало' до конца", completed: true },
        { id: 4, title: "Найти время на 'Зелёную книгу'", completed: false },
        { id: 5, title: "Посмотреть '1+1' в оригинале", completed: false },
        { id: 6, title: "Пересмотреть 'Титаник' в 4K", completed: true },
      ];
      setTasks(movieTasks);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <p className="loading">⏳ Загрузка...</p>;
  }

  return (
    <div className="movie-grid">
      {tasks.map((task) => (
        <div key={task.id} className="movie-card">
          <div className="movie-emoji">
            {task.completed ? '✅' : '🎬'}
          </div>
          <h2>{task.title}</h2>
          <p className="genre">
            {task.completed ? 'Выполнено' : 'В планах'}
          </p>
          <button className="watch-btn">
            {task.completed ? 'Готово' : 'Запланировать'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;