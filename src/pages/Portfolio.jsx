import React from 'react';
import './Portfolio.css'; // We'll create this CSS file next

import icon1 from '/public/assets/img/icon1.png';
import myphoto from '/public/assets/img/my_photo.png';
import desarrollo from '/public/assets/img/desarrollo.jpg';
import img1 from '/public/assets/img/trabajo1.png'
import img2 from '/public/assets/img/trabajo2.png'
import img3 from '/public/assets/img/trabajo3.png'
import img4 from '/public/assets/img/trabajo4.png'
import img5 from '/public/assets/img/trabajo5.png'
import img6 from '/public/assets/img/trabajo6.png'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header id="HEADER" className='fade-in'>
        <div className="header-main">
          <div className="portafolio-pa">Portafolio</div>
          <img id="main-icon" src={icon1} alt="Main Icon" />
        </div>
      </header>
      
      <nav>
        <div className="nav-main fade-in" >
          <ul>
            <li><a href="#HEADER">Inicio</a></li>
            <li><a href="#ME">Sobre mi</a></li>
            <li><a href="#TRABAJOS">Proyectos</a></li>
            <li><a href="#SKILLS">Habilidades</a></li>
            <li><a href="#ESTUDIOS">Estudios</a></li>
          </ul>
        </div>
      </nav>

      <section id="ABOUT-ME" className='fade-in'>
        <div className="about-me-main">
          <div className="text-container">
            <p className="me-text">Hola, soy Nicolás Báez Chávez, estudiante ADSO</p>
            <button className="btn-conocer-mas"><a href="#TRABAJOS">Conocer más</a></button>
          </div>
          <div className="my-photo-container">
            <img className="my-photo" src={myphoto} alt="My Photo" />
          </div>
        </div>
      </section>

      <section id="ME" className='fade-in'>
        <div className="me-main">
          <div className="jjimg">
            <img src={desarrollo} alt="Desarrollo" />
          </div>
          <div className="me-text-container">
            <h1>Sobre mí</h1>
            <p className="mee-text">
              Estudiante cursando el cuarto trimestre de etapa lectiva en la tecnología de Análisis y Desarrollo de Software en el Centro Industrial del Diseño y la Manufactura (CIDM SENA Floridablanca). Soy una persona proactiva y planificadora con atención al detalle ante las situaciones que se presentan a diario. Aprendí que trabajar en equipo no significa que cada uno cumpla con su parte asignada sin más, es procurar una comunicación y prácticas asertivas para lograr un objetivo común. Estar siempre dispuesto a aprender y ser corregido significa aceptar que no somos conocedores absolutos de nada y es el primer paso para dejar atrás la ignorancia.
            </p>
          </div>
        </div>
      </section>

      <section id="TRABAJOS" className='fade-in'>
        <div className="trabajos-main">
          <h1>Proyectos</h1>
          <div className="proyectos-container">
            {[
              { img: img1, desc: "XcelFusion - App de manejo de archivos Excel." },
              { img: img2, desc: "Tienda deportiva - App POS para el manejo de una tienda." },
              { img: img3, desc: "Bingo - Proyecto para el desarrollo de actividades Bingo." },
              { img: img4, desc: "WebSena - Página Web con respecto al programa ADSO." },
              { img: img5, desc: "Crónicas de ADSO - Videojuego plataformero con temática ADSO." },
              { img: img6, desc: "CRUD - Aplicación de manejo de usuarios." }
            ].map((proyecto, index) => (
              <div className="xtrabajo" key={index}>
                <img src={proyecto.img} alt={`Proyecto ${index + 1}`} />
                <div>{proyecto.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="ESTUDIOS" className='fade-in'>
        <div className="estudios-main">
          <h1>Mi Trayectoria Académica</h1>
          <div className="timeline">
            {[
              {
                year: "2020 - 2022",
                institution: "Colegio Técnico Vicente Azuero",
                title: "Bachiller técnico en Mantenimiento de Equipos de Cómputo",
                description: "Cuarto trimestre en etapa lectiva. Adquisición de competencias en desarrollo web, bases de datos y metodologías ágiles.",
                icon: "🏫"
              },
              {
                year: "2023 - Actualidad",
                institution: "SENA - CIDM Floridablanca",
                title: "Tecnólogo en Análisis y Desarrollo de Software",
                description: "Cuarto trimestre en etapa lectiva. Adquisición de competencias en desarrollo web, bases de datos y metodologías ágiles.",
                icon: "🎓"
              },
              {
                year: "2019",
                institution: "Platzi",
                title: "Curso de Programación Básica",
                description: "Fundamentos de programación con JavaScript y lógica computacional.",
                icon: "💻"
              },
            ].map((item, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-icon">{item.icon}</div>
                  <h3>{item.institution}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="SKILLS" className='fade-in'>
        <div className="skills-main">
          <h1>Habilidades</h1>
          {[
            { name: "HTML", percent: "90%", barClass: "bar1" },
            { name: "CSS", percent: "80%", barClass: "bar2" },
            { name: "JavaScript", percent: "75%", barClass: "bar3" },
            { name: "SQL", percent: "85%", barClass: "bar4" },
            { name: "Python", percent: "50%", barClass: "bar5" }
          ].map((skill, index) => (
            <React.Fragment key={index}>
              <div className="sk">
                <p className="skill-name">{skill.name}</p>
                <p className="skill-percent">{skill.percent}</p>
              </div>
              <div className="bar">
                <div className={skill.barClass}></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      <footer>
        <div className="main-footer fade-in">
          <p>
            Nicolás Báez Chávez, todos los derechos reservados.
          </p>
          <p>3104020326 - clle 44 #5-27</p>
          <p>Floridablanca 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;