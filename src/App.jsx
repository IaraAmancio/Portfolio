// App.js
import { useEffect, useState } from 'react';
import { MaquinaDeEscrever } from './components/maquinaDeEscrever';
import { motion } from 'motion/react';

import Foto_iara from './assets/foto_iara.jpg';
import Foto_iara2 from './assets/foto_iara2.jpg';

import BootStrap from './assets/icones-tecnologias/bootstrap.png';
import Html from './assets/icones-tecnologias/html.png';
import CSS from './assets/icones-tecnologias/css.png';
import JavaScript from './assets/icones-tecnologias/javascript.png';
import Node from './assets/icones-tecnologias/node.png';
import ReactIcone from './assets/icones-tecnologias/react.png';
import Redux from './assets/icones-tecnologias/redux.png';
import Tailwind from './assets/icones-tecnologias/tailwind.png';
import TypeScript from './assets/icones-tecnologias/typescript.png';
import Next from './assets/icones-tecnologias/nextdotjs.svg';
import Figma from './assets/icones-tecnologias/figma.svg';

import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { TbDeviceImacCode } from "react-icons/tb";

import Projeto1 from './assets/foto-projetos/projeto4.png';
import Projeto2 from './assets/foto-projetos/projeto5.png';
import Projeto3 from './assets/foto-projetos/projeto1.png';
import Projeto4 from './assets/foto-projetos/projeto2.png';
import Projeto5 from './assets/foto-projetos/projeto3.png';

import { Header } from './components/header';
import { Input } from './components/input';
import { Footer } from './components/footer';

import useEmblaCarousel from 'embla-carousel-react';
import { Lateral } from './components/lateral';


function App() {
  const [nome, setNome] = useState("");

  const [ emblaRef, emblaApi ] = useEmblaCarousel({loop: false}, ); //[Autoplay({delay: 5000})]

  const [ prevVisible, setPrevVisible ] = useState(true);
  const [ nextVisible, setNextVisible ] = useState(true);

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  const updateButtons = () => {
    if(!emblaApi) return
    setPrevVisible(!emblaApi.canScrollPrev());
    setNextVisible(!emblaApi.canScrollNext());
  }
  
  useEffect(()=>{
    if(!emblaApi) return

    //emblaApi.plugins().autoplay?.play();

    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

  },[emblaApi])
  

  const projects = [
    {
        id: 1,
        title: "Plataforma E-commerce",
        description: "Projeto para vendas de carros, com autenticação de usuário", 
        imgProject: Projeto1, 
        urlProject: "https://plataforma-de-vendas-eight.vercel.app", 
        urlRepositorio: "https://github.com/IaraAmancio/PlataformaDeVendas", 
        stacks: ["TYPESCRIPT", ,"REACT", "TAILWIND", "FIREBASE"]
    }, 
    {
        id: 2,
        title: "Médicos & Dentistas Voluntários",
        description: "Plataforma para inscrição de serviços de Médicos e Dentistas", 
        imgProject: Projeto2, 
        urlProject: "https://medicos-dentistas-uhv5.vercel.app", 
        urlRepositorio: "https://github.com/IaraAmancio/Medicos_-_Dentistas", 
        stacks: ["JAVASCRIPT", ,"REACT", "TAILWIND"]
    }, 
    {
        id: 3,
        title: "Planejador de tarefas",
        description: "Projeto desenvolvido na trilha de desenvolvimento web da RocketSeat", 
        imgProject: Projeto3, 
        urlProject: "https://iaraamancio.github.io/ProjetoRocketSeat/", 
        urlRepositorio: "https://github.com/IaraAmancio/ProjetoRocketSeat", 
        stacks: ["HTML", "CSS", "JAVASCRIPT"]
    }, 
    {
        id: 4,
        title: "Library Web Service",
        description: "Projeto com busca de dados de API de artigos", 
        imgProject: Projeto4, 
        urlProject: "https://iaraamancio.github.io/LibraryWebService/", 
        urlRepositorio: "https://github.com/IaraAmancio/LibraryWebService", 
        stacks: ["REACT", "JAVASCRIPT"]
    }, 
    {
        id: 5,
        title: "Consulta de Pókemons",
        description: "Consula de API de pókemons", 
        imgProject: Projeto5, 
        urlProject: "https://iaraamancio.github.io/Consumindo-Uma-API-de-Pokemon-com-Javascript/", 
        urlRepositorio: "https://github.com/IaraAmancio/Consumindo-Uma-API-de-Pokemon-com-Javascript", 
        stacks: ["HTML", "CSS", "JAVASCRIPT"]
    }, 
  ]


    const abrirLink = () => {
        window.open('https://drive.google.com/file/d/1WWph3o7JFG8L-ydZ1PrdEr0jBmIkGqOL/view?usp=sharing', '_blank');
    }



  return (
    <div className="bg-neutral-950 text-white min-h-screen w-full">
      <Lateral/>
      <Header/>
      {/* Seção Inicial */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}>

        <section id="inicio" className="flex justify-center box-border items-center w-full min-h-[calc(100vh-theme(space.24))] px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 w-full max-w-4xl">
            <div className="flex flex-col order-last md:order-first justify-items-center">
                <h1 className="text-4xl md:text-6xl md:text-start text-center font-semibold">
                  <MaquinaDeEscrever text="Olá, sou Iara" /> 
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <h1 className="text-4xl md:text-6xl md:text-start text-center font-semibold mb-4">
                    <MaquinaDeEscrever text="              Amancio"/>
                  </h1>
                  <motion.p
                    animate={{ opacity: [0, 1, 0]}}
                    transition={{
                      duration: 1,
                      delay: 2,
                      repeat: Infinity
                    }}
                    className="text-4xl md:text-6xl">
                    |
                  </motion.p>                  
                </div>          
              
              <p className="text-xl md:text-xl font-medium md:text-start text-gray-300 text-center">Desenvolvedora Full Stack Júnior</p>
              <p className="text-sm md:text-sm md:text-start mb-6 text-gray-300 text-center">JavaScript | TypeScript | React | Node.js</p>
              <div className='flex gap-2 md:justify-start justify-center'>
                <button onClick={abrirLink}
                  className="bg-white flex gap-2 items-center cursor-pointer text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                  >
                      <span className='md:text-xl text-[16px] font-medium'>Currículo</span> 
                      <BsDownload size={22}/>
                </button>
                <a href='#projetos'>
                  <button  
                  className="bg-white flex gap-2 items-center text-black px-6 py-3 rounded-full cursor-pointer font-semibold hover:bg-gray-200 transition">
                        <span className='md:text-xl text-[16px] font-medium'>Ver Projetos</span>
                        <TbDeviceImacCode size={22}/>
                  </button>
                </a>

              </div>
            </div>
            <div className="w-11/12 mx-auto flex justify-center order-first md:order-last items-center rounded-2xl shadow-lg overflow-hidden md:w-86 md:h-86 h-76  transition delay-150 duration-300 ease-in-out hover:scale-110 hover:translate-y-1">
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
      <section id="sobre" className="flex justify-center  items-center mt-8">
        <div className="text-center max-w-4xl flex md:flex-row  flex-col  bg-white md:rounded-md">
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='flex flex-1 order-last md:order-first justify-center'>
              <img src={Foto_iara2} className='md:rounded-md '/>              
            </div>
            <div className='flex flex-1 flex-col justify-center px-6 py-8'> 
             <h2 className="text-3xl md:text-5xl text-zinc-800 font-bold mb-6">Sobre Mim</h2>
              <p className="text-lg inline text-zinc-700 font-light text-center md:text-justify">
                      Olá! Me chamo <span className='font-bold'>Iara Amancio</span>, tenho 24 anos e sou de Ipu, Ceará. Sou desenvolvedora <span className='font-bold'>full stack Júnior</span> e programo <span className='font-bold'>desde 2022</span>, quando descobri minha <span className='font-bold'>paixão por tecnologia</span>.
                      No meu tempo livre, gosto de <span className='font-bold'>correr</span>, <span className='font-bold'>fazer trilhas</span> e <span className='font-bold'>ler</span> livros, especialmente do gênero de mistério. Meu personagem literário preferido é Sherlock Holmes. Também aprecio <span className='font-bold'>músicas</span> especialmente <span className='font-bold'>MPB</span>, como “O Velho e a Flor”, de Vinicius de Moraes e Toquinho, além de <span className='font-bold'>pop</span> e <span className='font-bold'>rock</span>. Nos fins de semana, gosto de <span className='font-bold'>assistir filmes</span> e <span className='font-bold'>estar com amigos</span>.
                      Sou uma <span className='font-bold'>pessoa leve</span>, <span className='font-bold'>comunicativa</span> e <span className='font-bold'>gosto de trabalhar em ambientes colaborativos</span>.
              </p>    
            </div>
                   
          </div>

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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Habilidades</h2>
        <div className='flex flex-col gap-5'>
            <div className='border px-4 bg-zinc-950 py-2 rounded-md relative'>
              <div className='absolute -top-3 bg-white text-black px-3 rounded-lg drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]'>
                <h1>Frontend</h1>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-y-3 py-5  max-w-6xl mx-auto">
                <div className="hover:scale-105">
                  <img src={Html} alt="Html" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>
                <div className="hover:scale-105">
                  <img src={CSS} alt="Css" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>
                <div className="hover:scale-105">
                  <img src={JavaScript} alt="JavaScript" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>
                <div className="hover:scale-105">
                  <img src={TypeScript} alt="TypeScript" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>
                <div className="hover:scale-105">
                  <img src={ReactIcone} alt="React" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>
                <div className="hover:scale-105">
                  <img src={Tailwind} alt="Tailwind" className="mx-auto w-12 h-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>        
              </div>
            </div>
            <div className='border px-4 bg-zinc-950 py-2 rounded-md relative'>
              <div className='absolute -top-3 bg-white text-black px-3 rounded-lg drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]'>
                <h1>Backend</h1>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-8 py-5  max-w-6xl mx-auto">
                <div className="hover:scale-105">
                  <img src={Node} alt="Html" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>
                <div className="hover:scale-105">
                  <img src={TypeScript} alt="Css" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div> 
                <div className="hover:scale-105">
                  <img src={Next} alt="Html" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>
                <div className="hover:scale-105">
                  <img src={Redux} alt="Css" className="mx-auto h-12 w-12 object-contain transition-all shadow-lg duration-300 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]" />
                </div>        
              </div>
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

        <div id='projetos' className='w-full max-w-5xl mx-auto relative'>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">Meus Projetos</h2>
          <h4 className='text-center mb-12'>Aqui você encontra aplicações que demonstram minha experiência prática com desenvolvimento front-end, integração com APIs e criação de interfaces modernas.</h4>

          <div className='w-full mx-auto overflow-hidden' ref={emblaRef}>

            <div className='flex gap-6 touch-pan-y touch-pinch-zoom'>
              {
                projects.map((project)=>{
                  return(
                    <div key={project.id} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-6 rounded-lg text-center transition group">
                      <div className='relative overflow-hidden md:border-b-4  md:border-white'>
                        <img src={project.imgProject} alt={project.title} className="w-full h-56 mb-4 rounded object-cover transition duration-300 group-hover:brightness-50 group-hover:scale-120" />
                        <div className="md:absolute md:inset-0 md:opacity-0 flex justify-center items-center gap-2 group-hover:opacity-100 transition duration-300">
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
            <button disabled={prevVisible} 
              className = {`bg-zinc-600 opacity-50 p-1 rounded-full absolute left-0 -translate-x-1/2 top-1/2  ${prevVisible && "invisible"}`} 
              onClick={goToPrev}>
                <LuChevronLeft size={24}/>
            </button>
            <button disabled={nextVisible}
              className={`bg-zinc-600 opacity-50 p-1 rounded-full absolute right-0 translate-x-1/2 top-1/2  ${nextVisible && "invisible"}`}
              onClick={goToNext}>
                <LuChevronRight size={24}/>
              </button>

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
        <div className="w-full  px-4 py-4 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              
              <div className='w-full bg-black/50 pr-0 md:pr-8 flex flex-col gap-4 pb-4 md:pb-0 rounded-md'>
                <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Meus Contatos</h1>
                <div className="w-full flex flex-col gap-4 items-center md:px-2">
                  <div className="w-full  flex items-center bg-zinc-950 rounded-full pr-4 transition-all hover:scale-105 ">
                    
                    {/* Ícone */}
                    <a href='https://wa.me/5588999966424' target="_blank" className="p-2 bg-white shadow-md rounded-full shadow-black">
                      <FaWhatsapp size={36} color="black" />
                    </a>

                    {/* Texto */}
                    <p className="ml-2 text-white">(88) 99996 6424</p>
                    
                  </div>
                  <div className="w-full flex items-center bg-zinc-950 rounded-full pr-4 transition-all hover:scale-105">
                    
                    {/* Ícone */}
                    <a href='mailto:iaraamancio1986@gmail.com' target='_blank' className="p-2 bg-white rounded-full shadow-md shadow-black">
                      <MdEmail size={36} color="black" />
                    </a>

                    {/* Texto */}
                    <p className="ml-2 text-white break-all">iaraamancio1986@gmail.com</p>
                    
                  </div>
                  <div className="w-full  flex items-center bg-zinc-950 rounded-full pr-4 transition-all hover:scale-105 ">
                    
                    {/* Ícone */}
                    <a href='https://www.linkedin.com/in/iara-amancio-48aa85231/' target='_blank' className="p-2 bg-white shadow-md rounded-full shadow-black">
                      <FaLinkedin size={36} color="black" />
                    </a>

                    {/* Texto */}
                    <p className="ml-2 text-white text-base/5 break-all">linkedin.com/in/iara-amancio-48aa85231</p>
                    
                  </div>
                  <div className="w-full flex items-center bg-zinc-950 rounded-full pr-4 transition-all hover:scale-105">
                    
                    {/* Ícone */}
                    <a href='https://github.com/IaraAmancio' target='_blank' className="p-2 bg-white rounded-full shadow-md shadow-black">
                      <FaGithub size={36} color="black" />
                    </a>

                    {/* Texto */}
                    <p className="ml-2 text-white break-all">https://github.com/IaraAmancio</p>
                    
                  </div>
                 
                </div>
              </div>
              
              <form className='w-full bg-zinc-100 py-4 px-3 flex flex-col gap-4 text-black rounded-md shadow-lg shadow-black'>
                <h1 className='text-center text-3xl'>Contate-me</h1>
                <Input name="nome" placeholder="Digite seu nome" value={nome}/>
                <Input name="nome" placeholder="Digite seu email" value={nome}/>
                <textarea placeholder='Deixe sua mensagem...' 
                className='w-full rounded-md py-2 border border-gray-300  bg-white px-4 resize-none h-32 focus:outline-none focus:ring-1 focus:ring-gray-400'
                />
                <button className='w-full rounded-md h-11 bg-zinc-900 text-white cursor-pointer transition-all hover:bg-black'>
                  Enviar
                </button>
              </form>
              
        </div>
      </section>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default App;
