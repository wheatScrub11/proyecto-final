import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section fade-in">
      <h1 className="contact-title">Contáctame</h1>
      <p className="contact-subtitle">
        ¿Quieres proponer una idea de desarrollo de software conmigo? Contáctame!
      </p>

      <div className="contact-container fade-in">
        <div className="wrapper1">
          <div className="contact-info">
            <h2>Información de contacto</h2>
            <p>No dudes en usar el formulario o comunicarte directamente.</p>

            <div className="contact-detail">
              <FaPhoneAlt />
              <span>+57 3104963235</span>
            </div>

            <div className="contact-detail">
              <FaEnvelope />
              <span>nicbez@soy.sena.edu.co</span>
            </div>

            <div className="contact-detail">
              <FaMapMarkerAlt />
              <span>Santander, Colombia</span>
            </div>

            <div className="social-section">
              <h2>Redes Sociales</h2>

              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form fade-in">
            <div className="form-row">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellido" required />
            </div>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="text" placeholder="Teléfono (opcional)" />
            <textarea
              placeholder="Escribe tu mensaje..."
              rows="5"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
