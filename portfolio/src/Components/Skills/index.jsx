import { skills } from '@Data/resume.json';

export default function Skills() {
        return (
                <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>Otros conocimientos</h2>
                        <ul className='flex flex-wrap gap-3'>
                                {
                                        skills.map((skill, index) => (
                                                <li key={index} className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{skill.name}</li>
                                        ))
                                }
                        </ul>
                </div>
        )
}