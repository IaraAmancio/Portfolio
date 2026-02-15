import { FaBars } from "react-icons/fa";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import Modal from '@mui/material/Modal';

export function Header(){
    return (
        <div className="w-full top-0 left-0 z-50 fixed bg-black px-4 h-24 flex items-center justify-center">
            <nav className="w-full max-w-4xl flex items-center justify-between">
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

        </div>
    )
}