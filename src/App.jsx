import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Habilidades from './pages/Habilidades';
import Contato from './pages/Contato';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <section id="inicio">
            <Home />
          </section>
          <section id="sobre">
            <Sobre />
          </section>
          <section id="habilidades">
            <Habilidades />
          </section>
          <section id="contato">
            <Contato />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
