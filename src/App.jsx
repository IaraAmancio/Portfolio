// App.js
import React from 'react';
import Foto_iara from './assets/foto_iara.jpg';
import BootStrap from './assets/icones-tecnologias/bootstrap.png';
import Html from './assets/icones-tecnologias/html.png';
import CSS from './assets/icones-tecnologias/css.png';
import JavaScript from './assets/icones-tecnologias/javascript.png';
import Node from './assets/icones-tecnologias/node.png';
import ReactIcone from './assets/icones-tecnologias/react.png';
import Redux from './assets/icones-tecnologias/redux.png';
import Tailwind from './assets/icones-tecnologias/tailwind.png';
import TypeScript from './assets/icones-tecnologias/typescript.png';
import Next from './assets/icones-tecnologias/nextjs.png';

import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

import FotoProjeto1 from './assets/foto-projetos/projeto1.png';
import FotoProjeto2 from './assets/foto-projetos/projeto2.png';
import FotoProjeto3 from './assets/foto-projetos/projeto3.png';

function App() {

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Seção Inicial */}
      <section id="inicio" className="flex items-center justify-center w-full px-4 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-end justify-items-center gap-8 w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Olá, sou Iara Amancio</h1>
            <p className="text-lg md:text-xl mb-6 text-gray-300">Desenvolvedora Front-end | JavaScript | TypeScript | React | Node.js</p>
            <div className='flex gap-2'>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"><a href="https://drive.google.com/file/d/1v35wi7VauTIfi4vX3AQrXAG3ifjGhC2n/view?usp=sharing">Donwload CV</a></button>
              <button  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"><a href="https://wa.me/5588999966424">Entrar em contato</a></button>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-full shadow-lg overflow-hidden w-72 h-72 md:w-80 md:h-80 border-4 border-amber-50 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:translate-y-1">
            <img 
              src={Foto_iara}
              alt="Foto Iara Amancio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section id="sobre" className="flex justify-center items-center px-4 mt-8">
        <div className="text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Desenvolvedora front-end com formação em <strong>Engenharia de Computação</strong> e
            sólida experiência em projetos utilizando JavaScript, TypeScript, React.js, Redux e Tailwind CSS. 
            Sou apaixonada por desenvolvimento web e comprometida com performance, acessibilidade e a entrega de interfaces de alta qualidade.
          </p>
        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className="px-4 py-16 mt-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={Html} alt="Html" className="mx-auto mb-4 rounded h-32 w-32" />
            <p className="text-xl font-semibold">HTML</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={CSS} alt="Css" className="mx-auto mb-4 rounded h-32 w-32" />
            <p className="text-xl font-semibold">CSS</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={JavaScript} alt="JavaScript" className="mx-auto mb-4 rounded h-32 w-32" />
            <p className="text-xl font-semibold">JavaScript</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={TypeScript} alt="TypeScript" className="mx-auto mb-4 rounded h-32 w-32 object-contain" />
            <p className="text-xl font-semibold">TypeScript</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={Next} alt="Next.js" className="mx-auto mb-4 rounded h-32 w-32 object-contain" />
            <p className="text-xl font-semibold">Next.js</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={ReactIcone} alt="React" className="mx-auto mb-4 rounded h-32 w-32 object-contain" />
            <p className="text-xl font-semibold">React</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={Tailwind} alt="Tailwind" className="mx-auto mb-4 rounded h-32 w-32 object-contain" />
            <p className="text-xl font-semibold">Tailwind CSS</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={BootStrap} alt="Bootstrap" className="mx-auto mb-4 rounded h-32 w-32 object-contain" />
            <p className="text-xl font-semibold">BootStrap</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={Redux} alt="Redux" className="mx-auto mb-4 rounded h-32 w-32 object-contain" />
            <p className="text-xl font-semibold">Redux</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={Node} alt="Node.js" className="mx-auto mb-4 rounded h-32 w-32 object-contain" />
            <p className="text-xl font-semibold">Node.js</p>
          </div>
        </div>
      </section>

      {/* Seção Meus Projetos */}
      <section id="projetos" className="px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={FotoProjeto1} alt="Projeto 1" className="w-full h-1/2 mb-4 rounded object-cover" />
            <h3 className="text-xl font-semibold mb-2">Planejador de Atividades</h3>
            <p className="mb-4 text-gray-400">Um site para gerenciar tarefas diárias, desenvolvido com JavaScript.</p>
            <a href='https://iaraamancio.github.io/ProjetoRocketSeat/'>            
              <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition">Ver Mais</button>
            </a>          
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={FotoProjeto2} alt="Projeto 2" className="w-full h-1/2 mb-4 rounded object-cover" />
            <h3 className="text-xl font-semibold mb-2">Library Web Service</h3>
            <p className="mb-4 text-gray-400">A plataforma mostra artigos de uma API e resultados de busca, usando JavaScript e React.js</p>
            <a href='https://iaraamancio.github.io/LibraryWebService/'>
              <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition">Ver Mais</button>
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition">
            <img src={FotoProjeto3} alt="Projeto 3" className="w-full h-1/2 mb-4 rounded object-cover" />
            <h3 className="text-xl font-semibold mb-2">Consulta de Pokemons</h3>
            <p className="mb-4">Consumindo uma API com HTML, CSS e JavaScript.</p>
            <a href='https://iaraamancio.github.io/Consumindo-Uma-API-de-Pokemon-com-Javascript/'>
              <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition">Ver Mais</button>
            </a>
          </div>
        </div>
      </section>

      {/* Seção Meus Contatos */}
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
    </div>
  );
}

export default App;
