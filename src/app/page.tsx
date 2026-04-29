"use client";

import { act, useEffect, useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import localFont from "next/font/local";
import { Roboto, Jim_Nightshade, Pinyon_Script, Black_Ops_One , UnifrakturMaguntia, Stack_Sans_Text, Arizonia, Amarante, Rubik_Storm, Notable, Neucha} from "next/font/google";

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

const roboto = Roboto({
  weight: "800",
  style: "normal",
  variable: "--font-roboto",
})

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

const BASE_COLOR = "#5977d8";
const SPOT_COLOR = "#a2e7f3";
const SPOT_RADIUS_PX = 80;



function ContactForm() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
      <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
    </div>
    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
            First name
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
            Company
          </label>
          <div className="mt-2.5">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
            Phone number
          </label>
          <div className="mt-2.5">
            <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  aria-label="Country"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              defaultValue={''}
            />
          </div>
        </div>
        <div className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
              <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
              <input
                id="agree-to-policies"
                name="agree-to-policies"
                type="checkbox"
                aria-label="Agree to policies"
                className="absolute inset-0 size-full appearance-none focus:outline-hidden"
              />
            </div>
          </div>
          <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-600">
            By selecting this, you agree to our{' '}
            <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
              privacy policy
            </a>
            .
          </label>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
  )
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [currentStepIndex, moveStep] = useState(0);
  const [fontIndex, setFontIndex] = useState(0);
  const [activeH4, setActiveH4] = useState<string | null>(null);

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
      block: "start",
    });
  }

  const spotlightBackground = useMemo(() => {
    return `radial-gradient(circle ${SPOT_RADIUS_PX}px at ${mousePosition.x}px ${mousePosition.y}px, ${SPOT_COLOR} 0 ${SPOT_RADIUS_PX}px, ${BASE_COLOR} ${SPOT_RADIUS_PX + 1}px)`;
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    const currentStep = document.querySelector<HTMLElement>(`[data-step-id="${currentStepIndex}"]`)

    if (!currentStep) return;

    currentStep.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }, [currentStepIndex]);

  return (
    <div style={{display:'flex', flexDirection:'column', backgroundColor: '#5977d8'}}>
      <div style={{
      }}
        id='menu-bar'
        className={currentStepIndex > 4 ? "is-open" : ""}>
        <div onClick= { () => goToSection(0)}>Inicio</div>
        <div onClick= { () => goToSection(1)}>Sobre Mi</div>
        <div onClick= { () => goToSection(2)}>Proyectos</div>
        <div onClick= { () => goToSection(5)}>Contacto</div>
      </div>
      <main
        onMouseMove={(event) =>
          setMousePosition({ x: event.clientX, y: event.clientY })
        }
        onMouseLeave={() => setMousePosition({ x: -1000, y: -1000 })}
        onClick={() => {
          if (currentStepIndex < 1) moveStep(1);
        }}
        style={{ background: spotlightBackground }}
        data-step-id='0'
        className="flex item-center justify-center"
      >
        <h1 className={`${fonts[fontIndex]} text-center sm:text-9xl text-5xl text-white select-none`}>
            {" "}
            Stefano Biglia{" "}
        </h1>
      </main>
      <section
        className= {`flex-col items-center ${currentStepIndex > 0 ? "flex" : "hidden"} h-screen !px-2 !pt-2`}
        data-step-id='1'

        /*onClick={() => {
          if (currentStepIndex < 2) moveStep(2);
        }}*/
      >
        <div className="flex flex-col-reverse md:flex-row h-full w-full bg-white rounded-t-xl shadow-2xl !py-5 !px-15 select-none">
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col border-black border-be-2 hover:cursor-pointer relative overflow-y-hidden"
            onClick= {() => {setActiveH4( activeH4 === 'fullstack-h4' ? null : 'fullstack-h4')}}>
            <h4 className={`${activeH4 === 'fullstack-h4' ? '2xl:text-8xl sm:text-5xl text-2xl !pt-10 !pb-0' : ''} 2xl:text-7xl sm:text-4xl text-1xl !py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}
          >desarrollo fullstack.</h4>
          <div className="flex w-full justify-end">
            <img src={"images/html.png"} alt='html' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/javascript.png"} alt='javascript' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/css.png"} alt='css' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 !ml-2 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/php.png"} alt='php' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-10 sm:h-7 h-4 2xl:!mt-6 sm:!mt-4 !mt-3' : ''} opacity-0 h-0 !ml-2 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/c.png"} alt='c' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/c++.png"} alt='c++' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/c sharp.png"} alt='c sharp' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/next.png"} alt='next' className={`${activeH4 === 'fullstack-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
          </div>
            </div>  
            <div className="flex flex-col border-black border-be-2 hover:cursor-pointer relative overflow-y-hidden"
            onClick= {() => {setActiveH4( activeH4 === 'data-h4' ? null : 'data-h4')}}>
            <h4 className={`${activeH4 === 'data-h4' ? '2xl:text-8xl sm:text-5xl text-2xl !pt-10 !pb-0' : ''} 2xl:text-7xl sm:text-4xl text-1xl !py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}>análisis de datos.</h4>
            <div className="flex">
            <img src={"images/python.png"} alt='python' className={`${activeH4 === 'data-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/excel.png"} alt='excel' className={`${activeH4 === 'data-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/power bi.png"} alt='power bi' className={`${activeH4 === 'data-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            </div>
            </div>
            <div className="flex flex-col border-black border-be-2 hover:cursor-pointer relative overflow-y-hidden"
            onClick= {() => {setActiveH4( activeH4 === 'database-h4' ? null : 'database-h4')}}>
            <h4 className={`${activeH4 === 'database-h4' ? '2xl:text-8xl sm:text-5xl text-2xl !pt-10 !pb-0' : ''} 2xl:text-7xl sm:text-4xl text-1xl !py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}>base de datos.</h4>
            <div className="flex">
            <img src={"images/oracle.png"} alt='oracle' className={`${activeH4 === 'database-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/mysql.png"} alt='mysql' className={`${activeH4 === 'database-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            <img src={"images/postgresql.webp"} alt='postgresql' className={`${activeH4 === 'database-h4' ? 'opacity-100 2xl:h-15 sm:h-10 h-6 !my-2' : ''} opacity-0 h-0 w-fit !ml-2 transition-all duration-500 ease-out`}></img>
            </div>
            </div>
            <div className="flex flex-col border-black border-be-2 hover:cursor-pointer relative overflow-y-hidden"
            onClick= {() => {setActiveH4( activeH4 === 'others-h4' ? null : 'others-h4')}}>
            <h4 className={`${activeH4 === 'others-h4' ? '2xl:text-8xl sm:text-5xl text-2xl !pt-10 !pb-0' : ''} 2xl:text-7xl sm:text-4xl text-1xl !py-10 overflow-y-hidden w-fit ${neueHaasBlack.className} text-black transition-all duration-400 ease-out`}>otros</h4>
            <div className="flex">
            <img src={"images/amazon.png"} alt='amazon' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 sm:h-8 h-4 !my-2' : ''} opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/jira.png"} alt='jira' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 sm:h-8 h-4 !my-2' : ''} !ml-2 opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            <img src={"images/confluence.webp"} alt='confluence' className={`${activeH4 === 'others-h4' ? 'opacity-100 2xl:h-11 sm:h-8 h-4 !my-2' : ''} !ml-4 opacity-0 h-0 w-fit transition-all duration-500 ease-out`}></img>
            </div>    
            </div> 
          </div>
          <div className="w-[60%] flex flex-col justify-center items-center">
            <div className="h-60 w-40 bg-blue-500">

            </div>
          </div>
        </div>
      </section>

      <section
        id='proyects-section'
        className={currentStepIndex > 1 ? "is-open" : ""}
        data-step-id='2'
        >     
        <article
          onClick={() => {
          if (currentStepIndex < 3) moveStep(3);
          }}
          style={{display: 'flex', flexDirection: "row", justifyContent: "space-between" , width: '100%', minHeight: '600px', alignItems: 'center'}}
        >
          <p style={{width: '500px', fontSize: '1.5rem'}}>
          StockiFy fue una aplicación web apuntada a ayudar a pequeños emprendimientos con el manejo de inventarios.</p>

          <img src={'/images/stockify.png'} style={{height: '500px', marginTop: '100px'}}></img>
          <h2 style={{fontSize: '3rem', height: 'fit-content', alignSelf:'start', position:'absolute', margin: '2rem'}}>StockiFy</h2>
        </article>
        
        <article
          className={currentStepIndex > 2 ? "is-open" : ""}
          data-step-id='3'
          id='music-article'

          onClick={() => {
            if (currentStepIndex < 4) moveStep(4);
          }}
          style={{flexDirection: "row", justifyContent: "space-between" , width: '100%', minHeight: '600px', alignItems: 'center'}}
        >
          <p style={{width: '500px', fontSize: '1.5rem'}}>
          StockiFy fue una aplicación web apuntada a ayudar a pequeños emprendimientos con el manejo de inventarios.</p>

          <img src={'/images/stockify.png'} style={{height: '500px', marginTop: '100px'}}></img>
          <h2 style={{fontSize: '3rem', height: 'fit-content', alignSelf:'start', position:'absolute', margin: '2rem'}}>Distribucion de la Musica</h2>
        </article>

        <article
          className={currentStepIndex > 3 ? "is-open" : ""}
          data-step-id='4'
          id='portfolio-article'

          onClick={() => {
            if (currentStepIndex < 5) moveStep(5);
          }}
          style={{flexDirection: "row", justifyContent: "space-between" , width: '100%', minHeight: '600px', alignItems: 'center'}}
        >
          <p style={{width: '500px', fontSize: '1.5rem'}}>
          StockiFy fue una aplicación web apuntada a ayudar a pequeños emprendimientos con el manejo de inventarios.</p>

          <img src={'/images/stockify.png'} style={{height: '500px', marginTop: '100px'}}></img>
          <h2 style={{fontSize: '3rem', height: 'fit-content', alignSelf:'start', position:'absolute', margin: '2rem'}}>Mi Portfolio!</h2>
        </article>

      </section>
      <section
        id='contact-section'
        className={currentStepIndex > 4 ? "is-open" : ""}
        data-step-id='5'>
          <ContactForm />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '100%', gap: '2rem', marginTop: '15px'}}>
            <a href="https://www.linkedin.com/in/stefano-biglia-223623275/"><h3>LinkedIn</h3></a>
            <a href="https://github.com/nanoBiglia2005"><h3>GitHub</h3></a>
            </div>
      </section>
    </div>
  );
}