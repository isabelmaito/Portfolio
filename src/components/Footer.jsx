import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Feito com <Heart className="heart-icon" size={16} /> por Portfolio
        </p>
        <p className="footer-year">&copy; {currentYear} Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
