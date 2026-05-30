import { useState } from 'react';

function TaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        className="task-input"
        placeholder="Что посмотреть?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="task-add-btn">➕ Добавить</button>
    </form>
  );
}

export default TaskForm;