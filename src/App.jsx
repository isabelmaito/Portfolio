import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import { Sobre } from './components/Sobre.jsx';
import { Habilidades } from './components/Habilidades.jsx';
import { Experience } from './components/Experience.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Sobre darkMode={darkMode} />
      <Habilidades darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
