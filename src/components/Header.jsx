import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>🎬 Фильмы с особенной атмосферой</h1>
      <p>Подборка интересных кино на вечер + список фильмов (задач)</p>
      <nav className="nav-menu">
        <Link to="/">🏠 Главная</Link>
        <Link to="/about">ℹ️ О приложении</Link>
      </nav>
    </header>
  );
}

export default Header;