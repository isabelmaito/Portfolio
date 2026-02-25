import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulação de envio
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'contato@email.com',
      link: 'mailto:contato@email.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      content: 'São Paulo, Brasil',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/isabelmaito', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/isabelmaito/', label: 'Linkedin' },
  ];

  return (
    <div className="contato">
      <div className="contato-container">
        <div className="section-header">
          <h1 className="section-title">
            Entre em <span className="gradient-text">Contato</span>
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Tem um projeto em mente? Vamos trabalhar juntos!
          </p>
        </div>

        <div className="contato-grid">
          <div className="contato-info">
            <h2 className="info-title">Vamos conversar</h2>
            <p className="info-description">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou 
              oportunidades de fazer parte da sua equipe.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3 className="contact-title">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-content">
                        {info.content}
                      </a>
                    ) : (
                      <p className="contact-content">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h3 className="social-title">Redes Sociais</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contato-form-wrapper">
            <form onSubmit={handleSubmit} className="contato-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Sobre o que você quer falar?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Sua mensagem..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`form-submit ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Enviando...'
                ) : status === 'success' ? (
                  'Enviado com sucesso!'
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
