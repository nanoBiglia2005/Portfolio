"use client";

import { useEffect, useMemo, useState } from "react";
import localFont from "next/font/local";
import { ArrowFatLinesDownIcon, LinkSimpleIcon, ArrowCircleDownRightIcon } from "@phosphor-icons/react";
import { Lobster, Jim_Nightshade, Pinyon_Script, Black_Ops_One , UnifrakturMaguntia, Stack_Sans_Text, Arizonia, Amarante, Rubik_Storm, Notable, Neucha} from "next/font/google";


const lobster = Lobster({
  weight: "400",
  style: "normal",
  variable: "--font-lobster",
});
const neueHaasBlack = localFont({
  src: [
    { path: "../../public/fonts/NeueHaasDisplayBlack.woff2", weight: "400", style: "normal"},
  ],
  variable: "--font-neueHass-black",
});

const neueHaasBold = localFont({
  src: [
    { path: "../../public/fonts/NeueHaasDisplayBold.woff2", weight: "400", style: "normal"},
  ],
  variable: "--font-neueHass-bold",
});

const jimNightshade = Jim_Nightshade({
  weight: "400",
  style: "normal",
  variable: "--font-jimNightshade",
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  style: "normal",
  variable: "--font-pinyonScript",
});

const blackOpsOne = Black_Ops_One({
  weight: "400",
  style: "normal",
  variable: "--font-blackOpsOne",
});

const unifrakturMaguntia = UnifrakturMaguntia({
  weight: "400",
  style: "normal",
  variable: "--font-unifrakturMaguntia",
});

const stackSansText = Stack_Sans_Text({
  weight: "400",
  style: "normal",
  variable: "--font-stackSansText",
});

const arizonia = Arizonia({
  weight: "400",
  style: "normal",
  variable: "--font-arizonia",
});

const amarante = Amarante({
  weight: "400",
  style: "normal",
  variable: "--font-amarante",
});

const rubikStorm = Rubik_Storm({
  weight: "400",
  style: "normal",
  variable: "--font-rubikStorm",
});

const notable = Notable({
  weight: "400",
  style: "normal",
  variable: "--font-notable",
});

const fonts = [
  jimNightshade.className,
  pinyonScript.className,
  blackOpsOne.className,
  unifrakturMaguntia.className,
  stackSansText.className,
  arizonia.className,
  amarante.className,
  rubikStorm.className,
  notable.className,
]

const BACKGROUND_SHAPES_COUNT = 8;
const BACKGROUND_SHAPES_BASE_SPEED_S = 12;
const BACKGROUND_SHAPES_SPEED_VARIATION_S = 5;
const BACKGROUND_SHAPES_MIN_SIZE_PX = 140;
const BACKGROUND_SHAPES_MAX_SIZE_PX = 184;
const BACKGROUND_SHAPES_OPACITY = 0.15;
const BACKGROUND_SHAPES_COLORS = ["#5977d8", "#8fa3ea", "#a2e7f3"];

type BackgroundShapeKind = "circle" | "triangle" | "hexagon";
type BackgroundShape = {
  kind: BackgroundShapeKind;
  size: number;
  top: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
};

export default function Home() {
  const [currentStepIndex, moveStep] = useState(0);
  const [fontIndex, setFontIndex] = useState(0);
  const [activeH4, setActiveH4] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [menuOpen, setMenuStatus] = useState(false);

  const [aboutBackgroundShapes, setAboutBackgroundShapes] = useState<BackgroundShape[]>([]);

  useEffect(() => {
    const shapeKinds: BackgroundShapeKind[] = ["triangle", "circle", "hexagon"];

    const shapes = Array.from({ length: BACKGROUND_SHAPES_COUNT * (currentStepIndex + 1) }, (_, index) => {
      const size =
        BACKGROUND_SHAPES_MIN_SIZE_PX +
        Math.random() * (BACKGROUND_SHAPES_MAX_SIZE_PX - BACKGROUND_SHAPES_MIN_SIZE_PX);

      return {
        kind: shapeKinds[index % shapeKinds.length],
        size,
        top: Math.random() * 100,
        delay: -Math.random() * (BACKGROUND_SHAPES_BASE_SPEED_S + BACKGROUND_SHAPES_SPEED_VARIATION_S),
        duration: BACKGROUND_SHAPES_BASE_SPEED_S + Math.random() * BACKGROUND_SHAPES_SPEED_VARIATION_S,
        opacity: BACKGROUND_SHAPES_OPACITY + Math.random() * 0.12,
        color: BACKGROUND_SHAPES_COLORS[Math.floor(Math.random() * BACKGROUND_SHAPES_COLORS.length)],
      };
    });

    setAboutBackgroundShapes(shapes);
  }, [currentStepIndex]);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>(`[data-step-id="${currentStepIndex}"]`)

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: 'start'
    });
  }, [currentStepIndex]);

  const [introPhase, setIntroPhase] = useState<'hidden' | 'center' | 'moved' | 'skills'>(
    currentStepIndex > 0 ? 'skills' : 'hidden'
  );

  const [skillsAnimating, setSkillsAnimating] = useState(currentStepIndex > 0 ? false : true);

  useEffect(() => {
    if (currentStepIndex === 1 && introPhase === 'hidden') {
      setTimeout(() => setIntroPhase('center'), 300);
      setTimeout(() => setIntroPhase('moved'), 4000);
      setTimeout(() => setIntroPhase('skills'), 4500);
      setTimeout(() => setSkillsAnimating(false), 4500 + 1600 + 600);
    }
  }, [currentStepIndex]);
  
  useEffect(() => {
    if (currentStepIndex === 1 && introPhase === 'hidden') {
      setTimeout(() => setIntroPhase('center'), 300);
      setTimeout(() => setIntroPhase('moved'), 4000);
      setTimeout(() => setIntroPhase('skills'), 4500);
    }
  }, [currentStepIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setFontIndex((prev) => {
        if (fonts.length <= 1) return prev;

        let next = Math.floor(Math.random() * fonts.length);
        while (next === prev) {next = Math.floor(Math.random() * fonts.length);}
        return next;
      });
    }, 100);

    return () => clearInterval(id);
  }, []);

  const goToSection = (id : any) => {
    const section = document.querySelector<HTMLElement>(`[data-step-id="${id}"]`)

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: 'start'
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formspree.io/f/mzdojdjz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#5977d8]">
      <div style={{
      }}
        className={`${currentStepIndex > 4 ? "" : "hidden"} bg-[white] ${neueHaasBold.className} border-2 border-black select-none text-lg text-black fixed z-20 flex flex-col !ms-5 !mt-5 rounded-xl sm:drop-shadow-[5px_5px_0_black] drop-shadow-[2px_2px_0_black] selection-none hover:drop-shadow-[7px_7px_0_black] shadow-xl transition-all duration-100 ease-in`}>
        <ArrowCircleDownRightIcon onClick={ () => setMenuStatus(!menuOpen)} className={` ${menuOpen ? 'rotate-180' : ''} sm:size-12 size-8 cursor-pointer sm:!p-2 !p-1 transition-all duration-150 ease-in`}/>
        <div className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
      !menuOpen ? 'max-h-0 max-w-0 opacity-0 gap-0 !p-0' : 'max-h-[300px] max-w-[300px] opacity-100 gap-3 !px-3 !pb-3'
    }`}>
        <div onClick= { () => goToSection(0)} className="w-fit cursor-pointer hover:!my-1 hover:text-[#5977d8] border-b-2 border-black hover:border-[#5977d8] hover:text-base sm:text-base text-sm sm:hover:text-xl transition-all duration-100 ease-in">Inicio</div>
        <div onClick= { () => goToSection(1)} className="w-fit cursor-pointer hover:!my-1 hover:text-[#5977d8] border-b-2 border-black hover:border-[#5977d8] hover:text-base sm:text-base text-sm sm:hover:text-xl transition-all duration-100 ease-in">Sobre Mi</div>
        <div onClick= { () => goToSection(2)} className="w-fit cursor-pointer hover:!my-1 hover:text-[#5977d8] border-b-2 border-black hover:border-[#5977d8] hover:text-base sm:text-base text-sm sm:hover:text-xl transition-all duration-100 ease-in">Proyectos</div>
        <div onClick= { () => goToSection(5)} className="w-fit cursor-pointer hover:!my-1 hover:text-[#5977d8] border-b-2 border-black hover:border-[#5977d8] hover:text-base sm:text-base text-sm sm:hover:text-xl transition-all duration-100 ease-in">Contacto</div>
        </div>
      </div>
      <main
        onClick={() => {
          if (currentStepIndex < 1) moveStep(1);
        }}
        data-step-id='0'
        className={`flex item-center justify-center ${currentStepIndex > 1 ? '' : 'cursor-pointer'}`}
      >
        <h1 className={`${fonts[fontIndex]} text-center sm:text-9xl text-5xl text-white select-none`}>
            {" "}
            Stefano Biglia{" "}
        </h1>
      </main>
      <div className={`overflow-hidden relative bg-white rounded-t-xl shadow-2xl !mx-2 !mt-5 ${currentStepIndex > 0 ? "" : "hidden"} ${currentStepIndex > 4 ? "!mb-2 rounded-b-xl !pb-10" : ""}` } data-step-id='1'>
      <div className="about-bg-shapes" aria-hidden="true">
          {aboutBackgroundShapes.map((shape, index) => (
            <span
              key={`bg-shape-${index}`}
              className={`about-bg-shape about-bg-shape--${shape.kind}`}
              style={
                {
                  "--shape-size": `${shape.size}px`,
                  "--shape-top": `${shape.top}%`,
                  "--shape-delay": `${shape.delay}s`,
                  "--shape-duration": `${shape.duration}s`,
                  "--shape-opacity": `${shape.opacity}`,
                  "--shape-color": shape.color,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      <section
        className= {`relative overflow-hidden flex-col items-center flex h-screen min-h-[800px]`}
      >
        <div className={`z-10 flex flex-col md:flex-row-reverse sm:h-full h-fit w-full !py-5 sm:!px-15 !px-5 select-none justify-center items-center gap-5`}>
        <div
      className={`flex items-center transition-all duration-1000 ease-in-out
        ${introPhase === 'hidden' ? 'opacity-0 w-0' : ''}
        ${introPhase === 'center' ? 'opacity-100 absolute inset-0 flex justify-center items-center z-20 w-full' : ''}
        ${introPhase === 'moved' || introPhase === 'skills' ? 'opacity-100 md:w-[40%] w-fit' : ''}
      `}
    >
      <div className={`${lobster.className} text-black lg:text-2xl text-xs flex flex-col !px-5 !py-0 md:!py-10 h-fit justify-center md:gap-10 gap-3`}>
        <div
          className={`transition-all duration-700 ease-out
            ${introPhase !== 'hidden' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: introPhase !== 'hidden' ? '600ms' : '0ms' }}
        >
          <span className={`${notable.className} float-tag float-tag--1 bg-[#5977d8] lg:text-4xl md:text-2xl text-lg text-blue-300 !p-3 w-fit text-center shadow-2xl !ms-[10%] rounded-sm`}>
            Hola!
          </span>
          <span className="text-left w-fit text-black !me-[15%] self-end"> soy</span>
        </div>

        <span
          className={`${notable.className} float-tag float-tag--2 bg-[#5977d8] text-blue-300 lg:text-5xl md:text-3xl !p-3 w-full shadow-2xl text-right rounded-sm
            transition-all duration-700 ease-out
            ${introPhase !== 'hidden' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: introPhase !== 'hidden' ? '1200ms' : '0ms' }}
        >
          Stefano<br />Biglia
        </span>
        <div
          className={`flex h-fit transition-all duration-700 ease-out
            ${introPhase !== 'hidden' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: introPhase !== 'hidden' ? '1800ms' : '0ms' }}
        >
          <span className="text-right w-fit text-black !me-[5%] self-end">un</span>
          <span className={`${notable.className} float-tag float-tag--3 bg-[#5977d8] text-blue-300 lg:text-2xl text-xs md:text-xl !p-3 w-fit shadow-2xl rounded-sm`}>
            Técnico en Programación
          </span>
        </div>

        <div
          className={`flex flex-col justify-center items-center gap-2 transition-all duration-700 ease-out
            ${introPhase !== 'hidden' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: introPhase !== 'hidden' ? '2600ms' : '0ms' }}
        >
          <span className="text-black !ms-[5%] self-start">graduado de la</span>
          <span className={`${notable.className} float-tag float-tag--4 bg-[#5977d8] text-blue-300 lg:text-2xl text-xs md:text-lg !p-3 w-fit shadow-2xl rounded-sm !mt-2`}>
            <img src={'images/utn haedo.png'} className="md:w-70 w-20 transition-width duration-300 ease-in"/>
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center w-full">
      <div
        className={`flex flex-col border-black border-y-2 hover:cursor-pointer relative overflow-hidden
          transition-all duration-2000 ease-out
          ${introPhase === 'skills' ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}
        style={{ transitionDelay: introPhase === 'skills' ? '400ms' : '0ms' }}
        onClick={() => setActiveH4(activeH4 === 'fullstack-h4' ? null : 'fullstack-h4')}
      >
        <h4 className={`${skillsAnimating ? 'whitespace-nowrap' : ''} ${activeH4 === 'fullstack-h4' ? '2xl:text-8xl md:text-5xl text-2xl md:!pt-10 !pt-5 !pb-0 md:!pb-0' : ''} 2xl:text-7xl md:text-4xl text-1xl !py-5 md:!py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}
          >desarrollo fullstack.</h4>
          <div className="flex w-full justify-end">
            <img src={"images/html.png"} alt='html' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/javascript.png"} alt='javascript' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/tailwind.png"} alt='html' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2 md:!py-2 !py-1 !ml-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>     
            <img src={"images/php.png"} alt='php' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-10 md:h-7 h-4 2xl:!mt-6 md:!mt-4 !mt-3' : ''} opacity-0 h-0 !ml-2 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/c.png"} alt='c' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/c++.png"} alt='c++' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/c sharp.png"} alt='c sharp' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/next.png"} alt='next' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
          </div>
      </div>

      <div
        className={`flex flex-col border-black border-be-2 hover:cursor-pointer relative overflow-hidden
          transition-all duration-2000 ease-out
          ${introPhase === 'skills' ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}
        style={{ transitionDelay: introPhase === 'skills' ? '800ms' : '0ms' }}
        onClick={() => setActiveH4(activeH4 === 'data-h4' ? null : 'data-h4')}
      >
            <h4 className={`${skillsAnimating ? 'whitespace-nowrap' : ''} ${activeH4 === 'data-h4' ? '2xl:text-8xl md:text-5xl text-2xl md:!pt-10 !pt-5 !pb-0 md:!pb-0' : ''} 2xl:text-7xl md:text-4xl text-1xl !py-5 md:!py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}>análisis de datos.</h4>
            <div className="flex w-full justify-end">
            <img src={"images/python.png"} alt='python' className={`${activeH4 === 'data-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/excel.png"} alt='excel' className={`${activeH4 === 'data-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/power bi.png"} alt='power bi' className={`${activeH4 === 'data-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            </div>
      </div>

      <div
        className={`flex flex-col border-black border-be-2 hover:cursor-pointer relative overflow-hidden
          transition-all duration-2000 ease-out
          ${introPhase === 'skills' ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}
        style={{ transitionDelay: introPhase === 'skills' ? '1200ms' : '0ms' }}
        onClick={() => setActiveH4(activeH4 === 'database-h4' ? null : 'database-h4')}
      >
        <h4 className={`${skillsAnimating ? 'whitespace-nowrap' : ''} ${activeH4 === 'database-h4' ? '2xl:text-8xl md:text-5xl text-2xl md:!pt-10 !pt-5 !pb-0 md:!pb-0' : ''} 2xl:text-7xl md:text-4xl text-1xl !py-5 md:!py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}>base de datos.</h4>
            <div className="flex w-full justify-end">
            <img src={"images/oracle.png"} alt='oracle' className={`${activeH4 === 'database-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/mysql.png"} alt='mysql' className={`${activeH4 === 'database-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/postgresql.webp"} alt='postgresql' className={`${activeH4 === 'database-h4' ? 'opacity-100 2xl:h-15 md:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            </div>
      </div>

      <div
        className={`flex flex-col border-black border-be-2 hover:cursor-pointer relative overflow-hidden
          transition-all duration-2000 ease-out
          ${introPhase === 'skills' ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}
        style={{ transitionDelay: introPhase === 'skills' ? '1600ms' : '0ms' }}
        onClick={() => setActiveH4(activeH4 === 'others-h4' ? null : 'others-h4')}
      >
        <h4 className={`${skillsAnimating ? 'whitespace-nowrap' : ''} ${activeH4 === 'others-h4' ? '2xl:text-8xl md:text-5xl text-2xl md:!pt-10 !pt-5 !pb-0 md:!pb-0' : ''} 2xl:text-7xl md:text-4xl text-1xl !py-5 md:!py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}>otros.</h4>
            <div className="flex w-full justify-end">
            <img src={"images/amazon.png"} alt='amazon' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 md:h-8 h-4 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/jira.png"} alt='jira' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 md:h-8 h-4 !my-2' : ''} !ml-2 opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/confluence.webp"} alt='confluence' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 md:h-8 h-4 !my-2' : ''} !ml-4 opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/vercel.png"} alt='javascript' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 md:h-8 h-4 !my-2' : ''} !ml-4 opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/github.png"} alt='confluence' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 md:h-8 h-4 !my-2' : ''} !ml-4 opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            </div>  
      </div>
    </div>
    </div>
    <div className={`${currentStepIndex > 1 ? 'hidden' : ''} group absolute w-screen h-[10%] z-20 flex items-center justify-center bottom-0 bg-gradient-to-b from-transparent to-gray-900/50 hover:to-gray-900/70 transition duration-300 ease-out hover:cursor-pointer overflow-hidden`}
            onClick={() => {
            if (currentStepIndex < 2) moveStep(2);}}>
              <ArrowFatLinesDownIcon size={32} color="black" className="group-hover:opacity-70  opacity-30 transition-opacity duration-300 ease-out"/>
          </div>
      </section>
      <section
        className={`${currentStepIndex > 1 ? "flex" : "hidden"} h-fit w-full flex-col relative !px-5 select-none`}
        data-step-id='2'
        >     
        <article
          className="flex justify-center items-center gap-5 h-screen w-full min-h-[800px]"
        >
          <div className="flex w-[100%] justify-center gap-15 items-center flex-col lg:flex-row">
            <div>
            <div className="2xl:h-130 relative transition-all duration-200 ease-out"><img src={'/images/stockify.png'} className='float-tag float-tag--3 h-full rounded-xl drop-shadow-[10px_10px_0px_#BB6663] border-1 border-black shadow-xl cursor-pointer hover:drop-shadow-[13px_13px_0px_red] hover:shadow-2xl transition-all duration-100 ease-in'></img></div>  
            <div className="float-tag float-tag--3 w-full">
            <div className="flex absolute">
            <img src={"images/html.png"} alt='html' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !my-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/javascript.png"} alt='javascript' className='lg:h-15 sm:h-9 !my-2 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 w-fit transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/css.png"} alt='css' className='lg:h-15 sm:h-9 !my-2 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !ml-2 w-fit transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/php.png"} alt='php' className='lg:h-10 sm:h-7 lg:!mt-6 !mt-3 h-4 lg:hover:h-12 sm:hover:h-9 hover:h-6 !ml-2 w-fit transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/mysql.png"} alt='mysql' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !my-2 !ml-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/github.png"} alt='confluence' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !my-2 !ml-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>
            </div>
            </div>
            </div>
            <div>
            <h2 className={`${neueHaasBold.className} float-tag text-black text-4xl sm:text-7xl text-shadow-lg sm:!mb-9 !mb-4 transition-all duration-200 ease-out`}>StockiFy</h2>
            <h4 className={`${neueHaasBlack.className} h-fit border-b-2 border-black sm:text-lg sm:w-90 text-black w-70 !pb-2 text-xs transition-all duration-200 ease-out`}>una aplicación web FullStack diseñada para ayudar a pequeños emprendimientos con el manejo del stock.</h4>
            <a href="https://github.com/nanoBiglia2005/StockiFy" target="_blank" rel="noopener noreferrer" className="flex items-center !mt-5 w-fit !p-1 group" ><LinkSimpleIcon size={20} className="text-black group-hover:text-blue-600 transition-colors duration-100 ease-out"/><p className={`text-black ${stackSansText.className} group-hover:border-b-2 group-hover:text-blue-600 sm:text-base text-xs transition-all duration-100 ease-out`}>GitHub</p></a>
            </div>
          </div>
          <div className={`${currentStepIndex > 2 ? 'hidden' : ''} group absolute w-screen h-[10%] z-20 flex items-center justify-center bottom-0 bg-gradient-to-b from-transparent to-gray-900/50 hover:to-gray-900/70 transition duration-300 ease-out hover:cursor-pointer overflow-hidden`}
            onClick={() => {
            if (currentStepIndex < 3) moveStep(3);}}>
              <ArrowFatLinesDownIcon size={32} color="black" className="group-hover:opacity-70  opacity-30 transition-opacity duration-300 ease-out"/>
          </div>
        </article>
        
        <article
          className={`${currentStepIndex > 2 ? "flex" : "hidden"} flex justify-center items-center gap-5 h-screen min-h-[700px] w-full sm:!mt-30`}
          data-step-id='3'>

          <div className="flex w-[100%] justify-center gap-20 items-center flex-col lg:flex-row-reverse">
            <div>
            <div className="xl:h-130 relative transition-all duration-200 ease-out"><img src={'/images/musica.png'} className='float-tag float-tag--3 h-full rounded-xl drop-shadow-[10px_10px_0px_#80B46A] border-1 border-black shadow-xl cursor-pointer hover:drop-shadow-[13px_13px_0px_#01962e] hover:shadow-2xl transition-all duration-100 ease-in'></img></div>  
            <div className="float-tag float-tag--3 w-full">
            <div className="flex absolute">
            <img src={"images/python.png"} alt='python' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !my-2 !ml-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>
            </div>
            </div>
            </div>
            <div>
            <h2 className={`${neueHaasBold.className} float-tag text-black text-4xl sm:text-7xl text-shadow-lg sm:!mb-9 !mb-4 transition-all duration-200 ease-out w-40`}>Distribución de la Música</h2>
            <h4 className={`${neueHaasBlack.className} h-fit border-b-2 border-black sm:text-lg sm:w-90 text-black w-70 !pb-2 text-xs transition-all duration-200 ease-out`}>un estudio sobre la evolución de la distribución de la música en los últimos 40 años hecho con Python (Pandas).</h4>
            <a href="https://www.kaggle.com/code/stefanobiglia/distribuci-n-de-la-m-sica" target="_blank" rel="noopener noreferrer" className="flex items-center !mt-5 w-fit !p-1 group" ><LinkSimpleIcon size={20} className="text-black group-hover:text-blue-600 transition-colors duration-100 ease-out"/><p className={`text-black ${stackSansText.className} group-hover:border-b-2 group-hover:text-blue-600 sm:text-base text-xs transition-all duration-100 ease-out`}>Kaggle</p></a>
            </div>
          </div>
          <div className={`${currentStepIndex > 3 ? 'hidden' : ''} group absolute w-screen h-[5%] z-20 flex items-center justify-center bottom-0 bg-gradient-to-b from-transparent to-gray-900/50 hover:to-gray-900/70 transition duration-300 ease-out hover:cursor-pointer overflow-hidden`}
            onClick={() => {
            if (currentStepIndex < 4) moveStep(4);}}>
              <ArrowFatLinesDownIcon size={32} color="black" className="group-hover:opacity-70  opacity-30 transition-opacity duration-300 ease-out"/>
          </div>
        </article>

        <article
          className={`${currentStepIndex > 3 ? "flex" : "hidden"} flex justify-center items-center gap-5 h-screen min-h-[700px] w-full sm:!mt-30`}
          data-step-id='4'>
          <div className="flex w-[100%] justify-center gap-15 items-center flex-col lg:flex-row">
            <div>
            <div className="2xl:h-110 relative transition-all duration-200 ease-out"><img src={'/images/portfolio.png'} className='float-tag float-tag--3 h-full rounded-xl drop-shadow-[10px_10px_0px_#5977d8] border-1 border-black shadow-xl cursor-pointer hover:drop-shadow-[13px_13px_0px_blue] hover:shadow-2xl transition-all duration-100 ease-in'></img></div>  
            <div className="float-tag float-tag--3 w-full">
            <div className="flex absolute">
            <img src={"images/next.png"} alt='next' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !my-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/tailwind.png"} alt='html' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:!py-2 sm:hover:h-11 hover:h-7 !ml-2 !my-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>     
            <img src={"images/vercel.png"} alt='javascript' className='lg:h-15 sm:h-9 !my-2 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !ml-2 w-fit transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/cursor.png"} alt='confluence' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !my-2 !ml-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>
            <img src={"images/github.png"} alt='confluence' className='lg:h-15 sm:h-9 h-5 lg:hover:h-17 sm:hover:h-11 hover:h-7 !my-2 !ml-2 w-auto transition-all duration-200 ease-out cursor-pointer'></img>
            </div>
            </div>
            </div>
            <div>
            <h2 className={`${neueHaasBold.className} float-tag text-black text-4xl sm:text-7xl text-shadow-lg sm:!mb-9 !mb-4 transition-all duration-200 ease-out`}>Mi Portfolio!</h2>
            <h4 className={`${neueHaasBlack.className} h-fit border-b-2 border-black sm:text-lg sm:w-90 text-black w-70 !pb-2 text-xs transition-all duration-200 ease-out`}>la página web en la que estas ahora mismo :).</h4>
            <a href="https://github.com/nanoBiglia2005/Portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center !mt-5 w-fit !p-1 group" ><LinkSimpleIcon size={20} className="text-black group-hover:text-blue-600 transition-colors duration-100 ease-out"/><p className={`text-black ${stackSansText.className} group-hover:border-b-2 group-hover:text-blue-600 sm:text-base text-xs transition-all duration-100 ease-out`}>GitHub</p></a>
            </div>
          </div>
          <div className={`${currentStepIndex > 4 ? 'hidden' : ''} group absolute w-screen h-[3%] z-20 flex items-center justify-center bottom-0 bg-gradient-to-b from-transparent to-gray-900/50 hover:to-gray-900/70 transition duration-300 ease-out hover:cursor-pointer overflow-hidden`}
            onClick={() => {
            if (currentStepIndex < 5) moveStep(5);}}>
              <ArrowFatLinesDownIcon size={32} color="black" className="group-hover:opacity-70  opacity-30 transition-opacity duration-300 ease-out"/>
          </div>
        </article>

      </section>

      <section
        className={`${currentStepIndex > 4 ? "flex" : "hidden"}
        h-screen min-h-[700px] justify-center items-center md:!mt-25`}
        data-step-id='5'>
              <div className="isolate !px-6 lg:!px-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-full text-center">
        <h2 className={`${neueHaasBlack.className} text-4xl tracking-tight text-balance text-black sm:text-5xl`}>Contacto</h2>
      </div>
        <form onSubmit={handleSubmit} className="!mx-auto max-w-xl sm:!mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={`${neueHaasBold.className} block text-sm/6 text-black`}>
              Nombre
            </label>
            <div className="!mt-2.5">
              <input
                required
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white !px-3.5 !py-2 text-base text-black outline-2 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className={`${neueHaasBold.className} block text-sm/6 font-semibold text-black`}>
              Apellido
            </label>
            <div className="!mt-2.5">
              <input
                required
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white !px-3.5 !py-2 text-base text-black outline-2 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={`${neueHaasBold.className} block text-sm/6 font-semibold text-black`}>
              Email
            </label>
            <div className="!mt-2.5">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white !px-3.5 !py-2 text-base text-black outline-2 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className={`${neueHaasBold.className} block text-sm/6 font-semibold text-black`}>
              Telefono
            </label>
            <div className="!mt-2.5">
              <div className="flex rounded-md bg-white outline-2 -outline-offset-1 outline-black has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-600">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="+54 11 1234-5678"
                  className="block min-w-0 grow !px-3.5 !py-1.5 text-base text-black focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={`${neueHaasBold.className} block text-sm/6 text-black`}>
              Mensaje
            </label>
            <div className="!mt-2.5">
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white !px-3.5 !py-2 text-base text-black outline-2 -outline-offset-1 outline-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="!mt-10">
          <button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className={`${neueHaasBold.className} block w-full rounded-md ${isSubmitting  ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-500'} disabled:bg-gray-400 disabled:cursor-not-allowed !px-3.5 !py-2.5 text-center text-sm text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          {submitStatus === 'success' && (
            <p className="mt-4 text-center text-sm text-green-600 font-semibold">
              ¡Mensaje enviado con éxito! Te responderé pronto.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-center text-sm text-red-600 font-semibold">
              Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.
            </p>
          )}
        </div>
      </form>
      <div className="flex justify-between w-full !mt-2">
          <a href="https://github.com/nanoBiglia2005" target="_blank" rel="noopener noreferrer"><img src={'images/github.png'} className="md:h-10 h-7 hover:h-8 md:hover:h-11 transition-all duration-100 ease-in"/></a>
          <a href="https://www.linkedin.com/in/stefano-biglia-223623275/" target="_blank" rel="noopener noreferrer"><img src={'images/linkedin.webp'} className="md:h-10 h-7 hover:h-8 md:hover:h-11 transition-all duration-100 ease-in"/></a>
      </div>
    </div>
      </section>
      </div>
    </div>
  );
}