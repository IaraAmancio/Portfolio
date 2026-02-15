import { FaBars } from "react-icons/fa";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Modal from '@mui/material/Modal';

export function Header(){
    const [ open ,setOpen ] = useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    return (
        <div className="w-full top-0 left-0 z-50 fixed bg-black px-6 h-24 flex items-center justify-center">
            <nav className="w-full max-w-4xl hidden md:flex items-center justify-between">
                <div className="flex gap-8 items-end">
                    <a href="#">
                        <h2 className="text-5xl font-bold">Iara</h2>
                    </a>
                    <a href="#" className="text-gray-300 font-medium text-lg">
                        Início
                    </a>   
                    <a href="#sobre" className="text-gray-300 font-medium text-lg">
                        Sobre mim
                    </a>   
                    <a href="#projetos" className="text-gray-300 font-medium text-lg">
                        Projetos
                    </a>   
                    <a href="#contatos" className="text-gray-300 font-medium text-lg">
                        Contatos
                    </a> 
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/IaraAmancio">
                        <FaGithub size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/iara-amancio-48aa85231/">
                        <FaLinkedin size={20}/>                   
                    </a>
                </div>    
            </nav>

            <nav className="w-full md:hidden flex justify-between items-center">
                <a href="#">
                    <h2 className="text-3xl font-bold">Portfólio</h2>
                </a>
                <FaBars size={32} onClick={handleOpen} className="cursor-pointer"/>

                <Modal open={open} onClose={handleClose}>
                    <div className="w-full flex flex-col gap-8 py-6 px-4 top-1/6 absolute bg-zinc-900 shadow-xl">
                        <div className="w-full flex justify-end">
                             <MdClose size={40} color="white" onClick={handleClose}/>                            
                        </div>
                        <div className="flex flex-col justify-start gap-8 mb-2">
                            <a href="#" className="text-gray-300 font-medium text-3xl" onClick={handleClose}>
                                Início
                            </a>   
                            <a href="#sobre" className="text-gray-300 font-medium text-3xl" onClick={handleClose}>
                                Sobre mim
                            </a>   
                            <a href="#projetos" className="text-gray-300 font-medium text-3xl" onClick={handleClose}>
                                Projetos
                            </a>   
                            <a href="#contatos" className="text-gray-300 font-medium text-3xl" onClick={handleClose}>
                                Contatos
                            </a> 
                            <a href="https://github.com/IaraAmancio" className="text-gray-300 font-medium text-2xl flex gap-2 items-center" onClick={handleClose}>
                                <FaGithub size={20}/> Github
                            </a>
                            <a href="https://www.linkedin.com/in/iara-amancio-48aa85231/" className="text-gray-300 font-medium text-2xl flex gap-2 items-center" onClick={handleClose}>
                                <FaLinkedin size={20}/> LinkedIn                
                            </a>
                        </div>
 
                    </div>
                </Modal>
            </nav>
  

        </div>
    )
}