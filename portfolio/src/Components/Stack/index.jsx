import { stack } from '@Data/resume.json';

export default function Stack() {
        return (
                <div className='flex flex-col gap-3'>
                        <div>
                                <h2 className='text-xl font-bold'>Stack preferido</h2>
                                <p>Actualmente me especializo en trabajar con el stack completo MERN</p>
                        </div>
                        <ul className='flex flex-wrap gap-3'>
                                {
                                        stack.map((item, index) => (
                                                <li key={index} className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{item}</li>
                                        ))
                                }
                        </ul>
                </div>
        )
}