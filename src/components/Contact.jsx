import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <div className="section__header">
          <span className="section__label">// CONNECT</span>
          <h2 className="section__title">Get In Touch</h2>
        </div>

        <div className="contact__content">
          <div className="contact__cards">
            <a href="https://t.me/HAKARIIIIII" target="_blank" rel="noopener noreferrer" className="contact__card glass-card">
              <div className="contact__icon-wrapper">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </div>
              <h3 className="contact__card-title">Telegram</h3>
              <p className="contact__card-data">@HAKARIIIIII</p>
            </a>

            <a href="https://x.com/eyyu_new" target="_blank" rel="noopener noreferrer" className="contact__card glass-card">
              <div className="contact__icon-wrapper">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 className="contact__card-title">Twitter / X</h3>
              <p className="contact__card-data">@eyyu_new</p>
            </a>

            <a href="https://www.linkedin.com/in/eyyu-regassa-2b45a6421/" target="_blank" rel="noopener noreferrer" className="contact__card glass-card">
              <div className="contact__icon-wrapper">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <h3 className="contact__card-title">LinkedIn</h3>
              <p className="contact__card-data">Eyyu Regassa</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
