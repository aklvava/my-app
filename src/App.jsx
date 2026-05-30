import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  const movies = [
    { title: "Интерстеллар", genre: "Научная фантастика", year: 2014, rating: "⭐️ 9.0", emoji: "🚀" },
    { title: "Ла Ла Лэнд", genre: "Романтика / Драма", year: 2016, rating: "⭐️ 8.0", emoji: "🎷" },
    { title: "Унесенные призраками", genre: "Фентези / Аниме", year: 2001, rating: "⭐️ 8.6", emoji: "🌸" },
  ];

  return (
    <div className="app-container">
      <Header />
      
      <MovieList movies={movies} />
      
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;