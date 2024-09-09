import { CiMail } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbIconsOff } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { ModalContext } from "@Context/ModalContext";
import { useContext } from "react";

const icons = {
        "": <TbIconsOff />,
        "CiMail": <CiMail />,
        "FaWhatsapp": <FaWhatsapp />,
        "FaGithub": <FaGithub />,
        "FaLinkedin": <FaLinkedin />,
        "FaXTwitter": <FaXTwitter />
}

export default function Contact({ profiles = [] }) {
        const { toggleFormEmailModal } = useContext(ModalContext)
        return (
                <ul className="inline-flex gap-3">
                        {
                                profiles.map((profile, index) => {
                                        if (profile.network !== 'Email') {
                                                return (
                                                        <li key={index} className="aspect-w-1 aspect-h-1">

                                                                <a target="_blank" href={profile.url} className="block border border-stone-700 p-2 rounded-md transition hover:bg-stone-700 hover:text-amber-50 hover:animate-wiggle">
                                                                        {icons?.[profile.icon] || <TbIconsOff />}
                                                                </a>
                                                        </li>
                                                )
                                        } else {
                                                return (
                                                        <li key={index} className="aspect-w-1 aspect-h-1">
                                                                <button
                                                                        onClick={() => toggleFormEmailModal()}
                                                                        type="button"
                                                                        className="block border border-stone-700 p-2 rounded-md transition hover:bg-stone-700 hover:text-amber-50 hover:animate-wiggle">
                                                                        {icons?.[profile.icon] || <TbIconsOff />}
                                                                </button>
                                                        </li>
                                                )
                                        }
                                })
                        }
                </ul>
        )
}

// export default function Contact() {
//         return (
//                 <div className='flex gap-2'>
//                         <a className={`
//                                 border border-stone-700 p-2 rounded-md transition
//                                 hover:bg-stone-700 hover:text-amber-50 hover:animate-wiggle
//                                 `}>
//                                 <CiMail />
//                         </a>
//                         <a className={`
//                                 border border-stone-700 p-2 rounded-md transition
//                                 hover:bg-stone-700 hover:text-amber-50 hover:animate-wiggle
//                                 `}>
//                                 <FaWhatsapp />
//                         </a>
//                         <a className={`
//                                 border border-stone-700 p-2 rounded-md transition
//                                 hover:bg-stone-700 hover:text-amber-50 hover:animate-wiggle
//                                 `}>
//                                 <FaGithub />
//                         </a>
//                         <a className={`
//                                 border border-stone-700 p-2 rounded-md transition
//                                 hover:bg-stone-700 hover:text-amber-50 hover:animate-wiggle
//                                 `}>
//                                 <FaLinkedin />
//                         </a>
//                         <a className={`
//                                 border border-stone-700 p-2 rounded-md transition
//                                 hover:bg-stone-700 hover:text-amber-50 hover:animate-wiggle
//                                 `}>
//                                 <FaXTwitter />
//                         </a>
//                 </div>
//         )
// }