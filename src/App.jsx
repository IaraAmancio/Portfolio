// App.js
import React, { useEffect } from 'react';

import { motion } from 'motion/react';

import Foto_iara from './assets/foto_iara.jpg';
import BootStrap from './assets/icones-tecnologias/bootstrap.svg';
import Html from './assets/icones-tecnologias/html5.svg';
import CSS from './assets/icones-tecnologias/css.svg';
import JavaScript from './assets/icones-tecnologias/javascript.svg';
import Node from './assets/icones-tecnologias/nodedotjs.svg';
import ReactIcone from './assets/icones-tecnologias/react.svg';
import Redux from './assets/icones-tecnologias/redux.svg';
import Tailwind from './assets/icones-tecnologias/tailwindcss.svg';
import TypeScript from './assets/icones-tecnologias/typescript.svg';
import Next from './assets/icones-tecnologias/nextdotjs.svg';
import Figma from './assets/icones-tecnologias/figma.svg';

import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import Projeto1 from './assets/foto-projetos/projeto4.png';
import Projeto2 from './assets/foto-projetos/projeto1.png';
import Projeto3 from './assets/foto-projetos/projeto2.png';
import Projeto4 from './assets/foto-projetos/projeto3.png';

import { Header } from './components/header';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from  'embla-carousel-autoplay';

function App() {
  const [ emblaRef, emblaApi ] = useEmblaCarousel({loop: false}, [Autoplay({delay: 3000})]);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();
  
  useEffect(()=>{
    if(!emblaApi) return
      emblaApi.plugins().autoplay?.play()
  },[emblaApi])
  

  const projects = [
    {
        id: 1,
        title: "Plataforma E-commerce",
        description: "Projeto para vendas de carros, com autenticação de usuário", 
        imgProject: Projeto1, 
        urlProject: "plataforma-de-vendas-eight.vercel.app", 
        urlRepositorio: "https://github.com/IaraAmancio/PlataformaDeVendas", 
        stacks: ["TYPESCRIPT", ,"REACT", "TAILWIND", "FIREBASE"]
    }, 
    {
        id: 2,
        title: "Planejador de tarefas",
        description: "Projeto desenvolvido na trilha de desenvolvimento web da RocketSeat", 
        imgProject: Projeto2, 
        urlProject: "https://iaraamancio.github.io/ProjetoRocketSeat/", 
        urlRepositorio: "https://github.com/IaraAmancio/ProjetoRocketSeat", 
        stacks: ["HTML", "CSS", "JAVASCRIPT"]
    }, 
    {
        id: 3,
        title: "Library Web Service",
        description: "Projeto com busca de dados de API de artigos", 
        imgProject: Projeto3, 
        urlProject: "https://iaraamancio.github.io/LibraryWebService/", 
        urlRepositorio: "https://github.com/IaraAmancio/LibraryWebService", 
        stacks: ["REACT", "JAVASCRIPT"]
    }, 
    {
        id: 4,
        title: "Consulta de Pókemons",
        description: "Consula de API de pókemons", 
        imgProject: Projeto4, 
        urlProject: "https://iaraamancio.github.io/Consumindo-Uma-API-de-Pokemon-com-Javascript/", 
        urlRepositorio: "https://github.com/IaraAmancio/Consumindo-Uma-API-de-Pokemon-com-Javascript", 
        stacks: ["HTML", "CSS", "JAVASCRIPT"]
    }, 
  ]




  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header/>

      {/* Seção Inicial */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}>

        <section id="inicio" className="flex justify-center w-full px-4 py-20 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 w-full max-w-4xl">
            <div className="flex flex-col order-last md:order-first justify-items-center">
              <h1 className="text-4xl md:text-6xl md:text-start text-center font-bold mb-4">Olá, sou Iara Amancio</h1>
              <p className="text-lg md:text-xl md:text-start mb-6 text-gray-300 text-center">Desenvolvedora Front-end | JavaScript | TypeScript | React | Node.js</p>
              <div className='flex gap-2 md:justify-start justify-center'>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"><a href="https://drive.google.com/file/d/18vTMLVmKMMqfH0g_t8WbKhTJasQO7tUS/view?usp=sharing">Donwload CV</a></button>
                <button  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"><a href="https://wa.me/5588999966424">Entrar em contato</a></button>
              </div>
            </div>
            <div className="flex justify-center order-first md:order-last items-center rounded-full shadow-lg overflow-hidden w-72 h-72 md:w-86 md:h-86 border-4 border-amber-50 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:translate-y-1">
              <img 
                src={Foto_iara}
                alt="Foto Iara Amancio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </motion.div>
      

      {/* Seção Sobre Mim */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}      
      >
      <section id="sobre" className="flex justify-center items-center px-4 mt-8">
        <div className="text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Desenvolvedora front-end com formação em <strong>Engenharia de Computação</strong> e
            sólida experiência em projetos utilizando JavaScript, TypeScript, React.js, Next.js, Tailwind e Node.js. 
            Sou apaixonada por desenvolvimento web e comprometida com performance, acessibilidade e a entrega de interfaces de alta qualidade.
          </p>
        </div>
      </section>
      </motion.div>


      {/* Seção Habilidades */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}      
      >
      <section id="habilidades" className="w-full max-w-4xl px-4 py-16 mt-8 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">Habilidades</h2>
        <h4 className='text-center mb-12'>Possuo conhecimentos e já desenvolvi projetos com essas tecnologias!</h4>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-9 max-w-6xl mx-auto">
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={Html} alt="Html" className="mx-auto mb-1 rounded h-18 w-18" />
            <p className="text-base font-semibold text-black">HTML</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={CSS} alt="Css" className="mx-auto mb-1 rounded h-18 w-18" />
            <p className="text-base font-semibold text-black">CSS</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={JavaScript} alt="JavaScript" className="mx-auto mb-1 rounded h-18 w-18" />
            <p className="text-base font-semibold text-black">JavaScript</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={TypeScript} alt="TypeScript" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">TypeScript</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={Next} alt="Next.js" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">Next.js</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={ReactIcone} alt="React" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">React</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={Tailwind} alt="Tailwind" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">Tailwind</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={BootStrap} alt="Bootstrap" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">BootStrap</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={Figma} alt="Figma" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">Figma</p>
          </div>          
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={Redux} alt="Redux" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">Redux</p>
          </div>
          <div className="bg-white py-4 rounded-lg text-center transition-all shadow-xl duration-300 hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:scale-105">
            <img src={Node} alt="Node.js" className="mx-auto mb-1 rounded h-18 w-18 object-contain" />
            <p className="text-base font-semibold text-black">Node.js</p>
          </div>
        </div>
      </section>
      </motion.div>


    {/* Seção Meus Projetos */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
      >

        <div id='projetos' className='w-full max-w-11/12 mx-auto relative'>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">Meus Projetos</h2>
          <h4 className='text-center mb-12'>Projetos pessoais que desenvolvi</h4>

          <div className='w-full mx-auto overflow-hidden' ref={emblaRef}>

            <div className='flex gap-6 touch-pan-y touch-pinch-zoom'>
              {
                projects.map((project)=>{
                  return(
                    <div key={project.id} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-6 rounded-lg text-center transition group">
                      <div className='relative overflow-hidden border-b-4  border-white'>
                        <img src={project.imgProject} alt={project.title} className="w-full h-56 mb-4 rounded object-cover transition duration-300 group-hover:brightness-50 group-hover:scale-120" />
                        <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                          <a href={project.urlRepositorio}>            
                            <button className="bg-white/70 text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition">
                              Repositório
                            </button>
                          </a>                   
                          <a href={project.urlProject}>            
                            <button className="bg-white/70 text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition">
                              Projeto
                            </button>
                          </a>                   
                        </div>
                      </div>
                    <h3 className="text-xl font-semibold mb-2 mt-2">{project.title}</h3>
                    <p className="mb-4 text-gray-400 text-sm">{project.description}</p>

                    <div className='flex justify-center mt-4 px-2 gap-2'>
                      {project.stacks.map((stack)=>{
                        return(
                          <div className='text-[10px] font-medium border border-white/50 rounded-md p-1 text-white/50'>{stack}</div>                       
                        )
                      })}
                    </div>
                  </div>
                  )
                })
              }         
            </div>
  
            </div>
            <button className='bg-zinc-600 p-1 rounded-full absolute left-0 -translate-x-1/2 top-1/2 cursor-pointer' onClick={goToPrev}><LuChevronLeft size={24}/></button>
            <button className='bg-zinc-600 p-1 rounded-full absolute right-0 translate-x-1/2 top-1/2 cursor-pointer' onClick={goToNext}><LuChevronRight size={24}/></button>

        </div>  

      </motion.div>

      

      {/* Seção Meus Contatos */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}        
      >
      <section id="contatos" className="px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Meus Contatos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-6 text-center hover:scale-110 transition">
            <div className='bg-gray-800 p-4 mb-3 rounded-full'>
               <FaWhatsapp size={50}/>
            </div>
            <a href="https://wa.me/5588999966424" className="text-xl font-semibold hover:underline">WhatsApp</a>
            <p className='text-gray-400'>88 99996-6424</p>
          </div>
          <div className="flex flex-col items-center p-6 text-center hover:scale-110 transition">
            <div className='bg-gray-800 p-4 mb-3 rounded-full'>
              <FaGithub size={50}/>
            </div>
            <a href="https://github.com/IaraAmancio" className="text-xl font-semibold hover:underline">GitHub</a>
            <p className='text-gray-400'>@IaraAmancio</p>
          </div>
          <div className="flex flex-col items-center p-6 text-center hover:scale-110 transition">
            <div className='bg-gray-800 p-4 mb-3 rounded-full'>
              <FaLinkedin size={50}/>
            </div>
            <a href="https://www.linkedin.com/in/iara-amancio-48aa85231/" className="text-xl font-semibold hover:underline">LinkedIn</a>
            <p className='text-gray-400'>@IaraAmancio</p>
          </div>
          <div className="flex flex-col items-center p-6 text-center hover:scale-110 transition">
            <div className='bg-gray-800 p-4 mb-3 rounded-full'>
              <MdEmail size={50}/>
            </div>
            <a href="mailto:iaraamancio1986@gmail.com" className="text-xl font-semibold hover:underline">Email</a>
            <p className='text-gray-400 overflow-hidden md:break-normal break-all'>iaraamancio1986@gmail.com</p>         
          </div>
        </div>
      </section>
      </motion.div>

    </div>
  );
}

export default App;
