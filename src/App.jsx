import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import { Sobre } from './components/Sobre.jsx';
import { Formacao } from './components/Formacao.jsx';
import { Habilidades } from './components/Habilidades.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Footer } from './components/Footer.jsx';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <Sobre darkMode={darkMode} />
      <Habilidades darkMode={darkMode} />
      <Formacao darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
