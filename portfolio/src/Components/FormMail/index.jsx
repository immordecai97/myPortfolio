import { useRef, useContext, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ModalContext } from '@Context/ModalContext';


export default function FormMail() {
        const { toggleFormEmailModal } = useContext(ModalContext)
        const toName = 'Carlos Marquina'
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')

        const form = useRef(null);
        const userNameInput = useRef(null);

        useEffect(() => {
                userNameInput.current.focus()
        }, [])

        const sendEmail = (e) => {
                e.preventDefault();

                emailjs.sendForm('service_oih3vuj', 'template_09748s5', form.current, {
                        publicKey: 'ATaLfMB4fqKymHyji',
                })
                        .then(
                                () => {
                                        console.log('SUCCESS!');
                                },
                                (error) => {
                                        console.log('FAILED...', error.text);
                                },
                        );
        };

        return (
                <form
                        ref={form} onSubmit={sendEmail}
                        className='bg-amber-50 text-stone-700 rounded-lg p-4 w-full min-w-80 max-w-lg flex flex-col gap-8'>
                        <input type="hidden" name="to_name" value={toName} />
                        <input type="hidden" name="reply_to" value={email} />
                        <div className='flex flex-col gap-1'>
                                <label>Nombre</label>
                                <input
                                        ref={userNameInput}
                                        onChange={(e) => setFromName(e.target.value)}
                                        placeholder='Nombre/Empresa'
                                        type="text" name="user_name"
                                        className='border rounded-lg py-2 px-3 text-stone-700 focus:outline-dashed focus:outline-stone-700' />
                        </div>
                        <div className='flex flex-col gap-1'>
                                <label>Email</label>
                                <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="correo@empresa.com"
                                        type="email" name="user_email"
                                        className='border rounded-lg py-2 px-3 text-stone-700 focus:outline-dashed focus:outline-stone-700' />
                        </div>
                        <div className='flex flex-col gap-1'>
                                <label>Mensaje</label>
                                <textarea
                                        // onChange={(e) => setMessage(e.target.value)}
                                        onChange={(e) => setMessage(message)}
                                        placeholder={`Hola ${toName}, Estamos interesados por tu experiencia y creemos que podrías ser una gran adición a nuestro equipo. Esperamos poder hablar contigo pronto. Saludos.`}
                                        name="message"
                                        className='border rounded-lg py-2 px-3 resize-none text-stone-700 focus:outline-dashed focus:outline-stone-700' />
                        </div>
                        <div className='flex justify-evenly'>
                                <input type="submit" value="Send"
                                        className='transition hover:outline hover:outline-1 hover:outline-stone-400   bg-stone-700 text-amber-50 rounded-lg py-2 px-4 w-24 hover:bg-amber-50 hover:text-stone-700' />

                                <button onClick={() => toggleFormEmailModal()} type="button"
                                        className='text-stone-500 rounded-lg py-2 px-4 w-24 hover:underline'>Cancelar</button>
                        </div>
                </form>
        );
};




// De parte de {{from_name}}, nos gustaría ponernos en contacto contigo para conversar sobre tus servicios y disponibilidad para colaborar con nosotros.

// Estamos impresionados con tu experiencia y creemos que podrías ser una gran adición a nuestro equipo.

// Esperamos poder hablar contigo pronto.

// Saludos cordiales,