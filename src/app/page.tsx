"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Jim_Nightshade, Pinyon_Script, Black_Ops_One , UnifrakturMaguntia, Stack_Sans_Text, Arizonia, Amarante, Rubik_Storm, Notable} from "next/font/google";

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
      >
        <h1 style={{userSelect: 'none'}} className={`${fonts[fontIndex]} text-center text-9xl text-white`}>
            {" "}
            Stefano Biglia{" "}
        </h1>
      </main>
      <section
        id="about-me-section"
        className= {`flex-col items-center ${currentStepIndex > 0 ? "is-open" : ""} h-screen !pt-2 !px-2`}
        data-step-id='1'

        onClick={() => {
          if (currentStepIndex < 2) moveStep(2);
        }}
      >
        <div className="flex flex-col h-full w-full bg-white rounded-t-xl shadow-2xl !py-2 justify-start gap-5">
          <div className="group flex h-fit items-end !mx-7 hover:cursor-pointer !my-6">
            <h4 className={`text-8xl h-fit w-300 text-black border-be-2 border-black ${stackSansText.className} group-hover:w-full transition-[width] duration-200 ease-in`}><span className="text-9xl italic">D</span>esa<span className="italic">rro</span>llo <span className="italic">Web</span> Full<span className="italic">St</span>ack</h4>
          </div>
          <div className="group flex h-fit items-end !mx-7 justify-end hover:cursor-pointer !mt-18">
            <h4 className={`text-8xl !me-20 h-fit w-206 text-black border-be-2 border-black ${stackSansText.className} text-right group-hover:w-full transition-[width] duration-200 ease-in`}><span className="text-9xl">A</span>nálisis de Datos</h4>
          </div>
          <div className="group flex h-fit items-end !mx-7 hover:cursor-pointer justify-start !mt-10">
            <h4 className={`text-8xl !ms-30 h-fit w-188 text-black border-be-2 border-black ${stackSansText.className} group-hover:w-full transition-[width] duration-200 ease-in`}><span className="text-9xl">B</span>ases de Datos</h4>
          </div>
          <div className="group flex h-fit items-end !mx-7 justify-end hover:cursor-pointer !mt-6">
            <h4 className={`text-8xl !me-50 h-fit w-73 text-black border-be-2 border-black ${stackSansText.className} text-right group-hover:w-full transition-[width] duration-200 ease-in`}><span className="text-9xl">O</span>tros</h4>
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