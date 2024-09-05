import { CiMail } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
        return (
                <div className='flex gap-2'>
                        <a className={`
                                border border-stone-700 p-2 rounded-md transition
                                hover:bg-stone-700 hover:text-ambar-50 hover:animate-wiggle
                                `}>
                                <CiMail />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md transition
                                hover:bg-stone-700 hover:text-ambar-50 hover:animate-wiggle
                                `}>
                                <FaWhatsapp />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md transition
                                hover:bg-stone-700 hover:text-ambar-50 hover:animate-wiggle
                                `}>
                                <FaGithub />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md transition
                                hover:bg-stone-700 hover:text-ambar-50 hover:animate-wiggle
                                `}>
                                <FaLinkedin />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md transition
                                hover:bg-stone-700 hover:text-ambar-50 hover:animate-wiggle
                                `}>
                                <FaXTwitter />
                        </a>
                </div>
        )
}