import { CiMail } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Contact() {
        return (
                <div className='flex gap-2'>
                        <a className='border border-pink-500 p-2 rounded-md'>
                                <CiMail />
                        </a>
                        <a className='border border-pink-500 p-2 rounded-md'>
                                <FaWhatsapp />
                        </a>
                        <a className='border border-pink-500 p-2 rounded-md'>
                                <FaGithub />
                        </a>
                        <a className='border border-pink-500 p-2 rounded-md'>
                                <FaLinkedin />
                        </a>
                        <a className='border border-pink-500 p-2 rounded-md'>
                                <FaXTwitter />
                        </a>
                </div>
        )
}