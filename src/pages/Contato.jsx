import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contato.css';

const Contato = () => {
  const { t } = useLanguage();
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
      title: t('contact.contactInfo.email'),
      content: 'contato@email.com',
      link: 'mailto:contato@email.com'
    },
    {
      icon: <MapPin size={24} />,
      title: t('contact.contactInfo.location'),
      content: t('contact.contactInfo.locationValue'),
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
            {t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contato-grid">
          <div className="contato-info">
            <h2 className="info-title">{t('contact.formTitle')}</h2>
            <p className="info-description">
              {t('contact.formDescription')}
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
              <h3 className="social-title">{t('contact.socialTitle')}</h3>
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
                <label htmlFor="name" className="form-label">{t('contact.formLabels.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t('contact.formPlaceholders.name')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('contact.formLabels.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t('contact.formPlaceholders.email')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">{t('contact.formLabels.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t('contact.formPlaceholders.subject')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('contact.formLabels.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder={t('contact.formPlaceholders.message')}
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
                  t('contact.messages.sending')
                ) : status === 'success' ? (
                  t('contact.messages.success')
                ) : (
                  <>
                    {t('contact.submitButton')}
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
