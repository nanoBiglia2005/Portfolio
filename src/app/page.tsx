"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BASE_COLOR = "#5977d8";
const SPOT_COLOR = "#a2e7f3";
const SPOT_RADIUS_PX = 80;

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isProyectsVisible, setIsProyectsVisible] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const proyectsSectionRef = useRef<HTMLElement | null>(null);

  const spotlightBackground = useMemo(() => {
    return `radial-gradient(circle ${SPOT_RADIUS_PX}px at ${mousePosition.x}px ${mousePosition.y}px, ${SPOT_COLOR} 0 ${SPOT_RADIUS_PX}px, ${BASE_COLOR} ${SPOT_RADIUS_PX + 1}px)`;
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    const currentProject = document.querySelector<HTMLElement>(`[data-article-id="${currentProjectIndex}"]`)

    if (!currentProject) return;

    currentProject.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentProjectIndex]);

  useEffect(() => {
    if (!isAboutVisible || !aboutSectionRef.current) return;

    aboutSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [isAboutVisible]);

  useEffect(() => {
    if (!isProyectsVisible || !proyectsSectionRef.current) return;

    proyectsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [isProyectsVisible]);

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <main
        onMouseMove={(event) =>
          setMousePosition({ x: event.clientX, y: event.clientY })
        }
        onMouseLeave={() => setMousePosition({ x: -1000, y: -1000 })}
        onClick={() => {
          if (!isAboutVisible) setIsAboutVisible(true);
        }}
        style={{ background: spotlightBackground }}
      >
        <h1 style={{ color: "white", fontSize: "6rem", fontWeight: "bold", userSelect: 'none', textAlign: 'center'}}>
            {" "}
            Stefano Biglia{" "}
        </h1>
      </main>
      <section
        id="about-me-section"
        className={isAboutVisible ? "is-open" : ""}
        ref={aboutSectionRef}

        onClick={() => {
          if (!isProyectsVisible) setIsProyectsVisible(true);
        }}
      >
        <h3>Hola! Soy Stefano Bigla, un técnico en programación graduado de la UTN FRH con conocimientos en</h3>

        <div style={{display:'flex', flexDirection:'column', marginTop: '4rem', gap:'3rem', width:'80%'}}>
          <div style={{padding: '3rem', backgroundColor: '#FFFFFF', display:'flex', justifyContent:'space-between'}}>
            <h4>Desarrollo Web FullStack</h4>
            <p>HTML, CSS, JavaScript, TypeScript, Node.js, Next.js, React, Bootstrap, PHP, C#, Java</p>
          </div>
          <div style={{padding: '3rem', backgroundColor: '#FFFFFF', display:'flex', justifyContent:'space-between'}}>
            <h4>Análisis de Datos</h4>
            <p>Excel, Python, SQL, Power BI</p>
          </div>
          <div style={{padding: '3rem', backgroundColor: '#FFFFFF', display:'flex', justifyContent:'space-between'}}>
            <h4>Bases de Datos</h4>
            <p>MySQL, OracleSQL, PostgreSQL</p>
          </div>
          <div style={{padding: '3rem', backgroundColor: '#FFFFFF', display:'flex', justifyContent:'space-between'}}>
            <h4>Otros</h4>
            <p>GitHub, AWS, Jira, Confluence, Documentación</p>
          </div>
        </div>
      </section>

      <section
        id='proyects-section'
        className={isProyectsVisible ? "is-open" : ""}
        ref={proyectsSectionRef}
        >
          
        <article
          id='stockify-article'
          data-article-id='0'
          onClick={() => {
            if (currentProjectIndex < 1) setCurrentProjectIndex(1);
          }}
          style={{display: 'flex', flexDirection: "row", justifyContent: "space-between" , width: '100%', minHeight: '600px', alignItems: 'center'}}
        >
          <p style={{width: '500px', fontSize: '1.5rem'}}>
          StockiFy fue una aplicación web apuntada a ayudar a pequeños emprendimientos con el manejo de inventarios.</p>

          <img src={'/images/stockify.png'} style={{height: '500px', marginTop: '100px'}}></img>
          <h2 style={{fontSize: '3rem', height: 'fit-content', alignSelf:'start', position:'absolute', margin: '2rem'}}>StockiFy</h2>
        </article>
        
        <article
          id='music-article'
          data-article-id='1'
          className={currentProjectIndex >= 1 ? 'is-open' : ""}
          onClick={() => {
            if (currentProjectIndex === 1) setCurrentProjectIndex(2);
          }}
          style={{flexDirection: "row", justifyContent: "space-between" , width: '100%', minHeight: '600px', alignItems: 'center'}}
        >
          <p style={{width: '500px', fontSize: '1.5rem'}}>
          StockiFy fue una aplicación web apuntada a ayudar a pequeños emprendimientos con el manejo de inventarios.</p>

          <img src={'/images/stockify.png'} style={{height: '500px', marginTop: '100px'}}></img>
          <h2 style={{fontSize: '3rem', height: 'fit-content', alignSelf:'start', position:'absolute', margin: '2rem'}}>Distribucion de la Musica</h2>
        </article>

        <article
          id='portfolio-article'
          data-article-id='2'
          className={currentProjectIndex >= 2 ? 'is-open' : ""}
          style={{flexDirection: "row", justifyContent: "space-between" , width: '100%', minHeight: '600px', alignItems: 'center'}}
        >
          <p style={{width: '500px', fontSize: '1.5rem'}}>
          StockiFy fue una aplicación web apuntada a ayudar a pequeños emprendimientos con el manejo de inventarios.</p>

          <img src={'/images/stockify.png'} style={{height: '500px', marginTop: '100px'}}></img>
          <h2 style={{fontSize: '3rem', height: 'fit-content', alignSelf:'start', position:'absolute', margin: '2rem'}}>Mi Portfolio!</h2>
        </article>

      </section>
    </div>
  );
}