import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'


export function Lateral(){
    return(
        <div className='fixed w-10 h-screen top-0 left-0 hidden md:flex flex-col items-center justify-center gap-4 z-1000 px-4  bg-zinc-700 '>
            <a href="https://github.com/IaraAmancio">
                <FaGithub size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/iara-amancio-48aa85231/">
                <FaLinkedin size={20}/>                   
            </a>
            <a href='https://wa.me/5588999966424'>
                <FaWhatsapp size={20}/>
            </a>
            <a href='mailto:iaraamancio1986@gmail.com'>
                <MdEmail size={20}/>
            </a>
        </div>
    )
}