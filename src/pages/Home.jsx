import React from "react";
import "./Home.css";
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaBookOpen, FaGraduationCap, FaLaptopCode, FaLightbulb, FaRocket, FaDollarSign, FaUsers, FaCheckCircle, FaDiscord, FaFacebook, FaReddit, FaSlack, FaTelegram, FaStackOverflow } from "react-icons/fa";

const Home = () => {
  return (
    <main className="home-container">
      {/* 1. ¿Qué es Análisis y Desarrollo de Software? */}
      <section className="section intro-section fade-in">
        <h2>¿Qué es el Análisis y Desarrollo de Software?</h2>
        <div className="intro-content">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Análisis y Desarrollo de Software"
            className="intro-image"
          />
          <p>
            El análisis y desarrollo de software es una disciplina que combina la comprensión profunda de los requerimientos de negocio con habilidades técnicas para diseñar, construir y mantener aplicaciones y sistemas informáticos.
            Este campo impulsa la innovación tecnológica y la transformación digital en todas las industrias.
          </p>
        </div>
      </section>

      {/* 2. ¿Qué competencias se desarrollan? */}
      <section className="section competencies-section fade-in">
        <h2>¿Qué competencias se desarrollan?</h2>
        <div className="competencies-grid">
          {[
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
              title: "Programación",
              desc: "Capacidad para escribir código eficiente y mantenible en diversos lenguajes."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
              title: "Trabajo en equipo",
              desc: "Colaborar en proyectos multidisciplinarios con comunicación efectiva."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/2875/2875439.png",
              title: "Análisis de problemas",
              desc: "Identificar, entender y solucionar problemas complejos mediante lógica."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/126/126486.png",
              title: "Gestión de proyectos",
              desc: "Planificación y organización para entregar soluciones a tiempo."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
              title: "Bases de datos",
              desc: "Diseño e implementación de estructuras de almacenamiento eficientes."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
              title: "Testing",
              desc: "Creación de pruebas para garantizar la calidad del software."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
              title: "Seguridad informática",
              desc: "Protección de sistemas contra vulnerabilidades y ataques."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
              title: "UI/UX Design",
              desc: "Creación de interfaces intuitivas y experiencias de usuario fluidas."
            },
            { 
              icon: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
              title: "DevOps",
              desc: "Automatización de procesos de desarrollo y despliegue continuo."
            }
          ].map((competency, index) => (
            <div className="competency-card" key={index}>
              <img src={competency.icon} alt={competency.title} />
              <h3>{competency.title}</h3>
              <p>{competency.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Noticias relacionadas */}
      <section className="section news-section fade-in">
        <h2>Noticias relacionadas</h2>
        <div className="news-container">
          <article className="news-card">
            <h3>La inteligencia artificial revoluciona el desarrollo de software</h3>
            <p>
              Nuevas herramientas con IA están ayudando a automatizar tareas repetitivas y mejorar la productividad de los desarrolladores.
            </p>
            <a href="https://example.com/noticia1" target="_blank" rel="noreferrer">Leer más</a>
          </article>
          <article className="news-card">
            <h3>El auge de las metodologías ágiles en empresas tecnológicas</h3>
            <p>
              Cada vez más equipos adoptan Scrum y Kanban para acelerar el desarrollo y mejorar la calidad.
            </p>
            <a href="https://example.com/noticia2" target="_blank" rel="noreferrer">Leer más</a>
          </article>
          <article className="news-card">
            <h3>Herramientas open source que todo desarrollador debería conocer</h3>
            <p>
              Exploramos las herramientas gratuitas que están cambiando el panorama del desarrollo.
            </p>
            <a href="https://example.com/noticia3" target="_blank" rel="noreferrer">Leer más</a>
          </article>
        </div>
      </section>

      {/* 4. Educadores recomendados - Versión Mejorada */}
      <section className="section educators-section fade-in">
        <h2>Educadores recomendados</h2>
        <div className="educators-list">
          {[
            {
              name: "Academind",
              image: "https://yt3.googleusercontent.com/zzU1l80r9uNVNT7dq53jXRur13jtKt4l0yg2ziMEmfaLEKw5RUOCnr4DbQgcFxkIZ2n0bKR9NQ=s900-c-k-c0x00ffffff-no-rj",
              description: "Canal especializado en desarrollo web y móvil con tutoriales detallados sobre frameworks modernos.",
              youtube: "https://www.youtube.com/c/Academind",
              twitter: "https://twitter.com/academind_real",
              github: "https://github.com/academind"
            },
            {
              name: "Traversy Media",
              image: "https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s900-c-k-c0x00ffffff-no-rj",
              description: "Brad Traversy enseña desarrollo web full-stack con proyectos prácticos y explicaciones claras.",
              youtube: "https://www.youtube.com/c/TraversyMedia",
              twitter: "https://twitter.com/traversymedia",
              github: "https://github.com/bradtraversy"
            },
            {
              name: "The Net Ninja",
              image: "https://yt3.googleusercontent.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s900-c-k-c0x00ffffff-no-rj",
              description: "Tutoriales completos sobre JavaScript, frameworks frontend y desarrollo full-stack.",
              youtube: "https://www.youtube.com/c/TheNetNinja",
              twitter: "https://twitter.com/thenetninjauk",
              github: "https://github.com/iamshaunjp"
            }
          ].map((educator, index) => (
            <div className="educator-card" key={index}>
              <div className="educator-image">
                <img src={educator.image} alt={educator.name} />
                <a href={educator.youtube} target="_blank" rel="noreferrer" className="youtube-icon">
                  <FaYoutube />
                </a>
              </div>
              <div className="educator-info">
                <h3>{educator.name}</h3>
                <p>{educator.description}</p>
                <div className="educator-social">
                  <a href={educator.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a href={educator.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={educator.linkedin || "#"} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Fuentes de aprendizaje gratuitas */}
      <section className="section resources-section fade-in">
        <h2>Fuentes de aprendizaje gratuitas</h2>
        <div className="resources-cards">
          <a href="https://www.freecodecamp.org" target="_blank" rel="noreferrer" className="resource-card">
            <FaBookOpen className="resource-icon" />
            <h3>freeCodeCamp</h3>
            <p>Aprende programación web y más con cursos prácticos.</p>
          </a>
          <a href="https://www.codecademy.com" target="_blank" rel="noreferrer" className="resource-card">
            <FaLaptopCode className="resource-icon" />
            <h3>Codecademy</h3>
            <p>Interactúa con ejercicios en línea para dominar varios lenguajes.</p>
          </a>
          <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank" rel="noreferrer" className="resource-card">
            <FaGraduationCap className="resource-icon" />
            <h3>Khan Academy</h3>
            <p>Explicaciones claras y videos para aprender programación desde cero.</p>
          </a>
        </div>
      </section>


      <section className="section why-programming-section fade-in">
        <h2>¿Por qué deberías estudiar programación?</h2>
        <div className="why-programming-content">
          <ul className="why-list">
            <li>
              <FaLightbulb className="why-icon" />
              <div>
                <h3>Desarrollo del pensamiento lógico</h3>
                <p>La programación te ayuda a mejorar tus habilidades para resolver problemas de forma estructurada y eficiente.</p>
              </div>
            </li>
            <li>
              <FaRocket className="why-icon" />
              <div>
                <h3>Alta demanda laboral</h3>
                <p>El sector tecnológico está en crecimiento constante, con muchas oportunidades en diferentes industrias.</p>
              </div>
            </li>
            <li>
              <FaDollarSign className="why-icon" />
              <div>
                <h3>Buen salario y beneficios</h3>
                <p>Los desarrolladores suelen tener salarios competitivos y beneficios atractivos en muchas partes del mundo.</p>
              </div>
            </li>
            <li>
              <FaUsers className="why-icon" />
              <div>
                <h3>Trabajo remoto y flexibilidad</h3>
                <p>Muchas empresas ofrecen la posibilidad de trabajar desde casa o con horarios flexibles.</p>
              </div>
            </li>
            <li>
              <FaCheckCircle className="why-icon" />
              <div>
                <h3>Creatividad e innovación</h3>
                <p>Puedes construir desde aplicaciones simples hasta tecnologías que cambian el mundo.</p>
              </div>
            </li>
          </ul>
          
        </div>
      </section>

      {/* 6. Sección creativa libre */}
      <section className="section community-section fade-in">
        <h2>Únete a la comunidad</h2>
        <div className="community-grid">
          <div className="community-card">
            <FaDiscord className="community-icon" />
            <h3>Discord</h3>
            <p>
              Plataformas para chat en tiempo real muy populares entre desarrolladores para soporte, eventos y colaboración.
            </p>
          </div>
          <div className="community-card">
            <FaFacebook className="community-icon" />
            <h3>Facebook Groups</h3>
            <p>
              Grupos activos con miles de programadores donde se comparten recursos, preguntas y oportunidades laborales.
            </p>
          </div>
          <div className="community-card">
            <FaReddit className="community-icon" />
            <h3>Reddit</h3>
            <p>
              Subreddits especializados para discutir lenguajes, frameworks, y recibir ayuda de la comunidad global.
            </p>
          </div>
          <div className="community-card">
            <FaSlack className="community-icon" />
            <h3>Slack</h3>
            <p>
              Canales profesionales con comunidades dedicadas a programación, networking y eventos en vivo.
            </p>
          </div>
          <div className="community-card">
            <FaTelegram className="community-icon" />
            <h3>Telegram</h3>
            <p>
              Grupos de mensajería rápida donde programadores comparten noticias, tutoriales y soporte en tiempo real.
            </p>
          </div>
          <div className="community-card">
            <FaTwitter className="community-icon" />
            <h3>Twitter</h3>
            <p>
              Sigue a líderes de opinión y hashtags para mantenerte actualizado con lo último en programación.
            </p>
          </div>
          <div className="community-card">
            <FaGithub className="community-icon" />
            <h3>GitHub</h3>
            <p>
              Más que un repositorio, es un espacio para colaborar, contribuir a proyectos open source y aprender con código real.
            </p>
          </div>
          <div className="community-card">
            <FaStackOverflow className="community-icon" />
            <h3>Stack Overflow</h3>
            <p>
              Comunidad de preguntas y respuestas donde se resuelven dudas técnicas de programación día a día.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;