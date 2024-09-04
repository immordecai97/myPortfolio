import { CiMail } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
        return (
                <div className='flex gap-2'>
                        <a className={`
                                border border-stone-700 p-2 rounded-md
                                hover:bg-stone-700 hover:text-ambar-50 transition
                                `}>
                                <CiMail />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md
                                hover:bg-stone-700 hover:text-ambar-50 transition
                                `}>
                                <FaWhatsapp />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md
                                hover:bg-stone-700 hover:text-ambar-50 transition
                                `}>
                                <FaGithub />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md
                                hover:bg-stone-700 hover:text-ambar-50 transition
                                `}>
                                <FaLinkedin />
                        </a>
                        <a className={`
                                border border-stone-700 p-2 rounded-md
                                hover:bg-stone-700 hover:text-ambar-50 transition
                                `}>
                                <FaXTwitter />
                        </a>
                </div>
        )
}