import { education } from '@Data/resume.json';
import { getYear } from '@Utils/Dates';

export default function Education() {
        return (
                <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>Education</h2>
                        <ul className='flex flex-col gap-2'>
                                {education.map((item, index) => (
                                        <li className='border border-white' key={index}>
                                                <div className='flex justify-between'>
                                                        <h3 className='inline-flex gap-x-4 font-bold'>
                                                                <span>{item.institution}</span>
                                                        </h3>
                                                        <p className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{getYear(item.startDate)} - {getYear(item.endDate)}</p>
                                                </div>
                                                <h4>{item.area}</h4>
                                        </li>
                                ))}
                        </ul>
                </div>
        )
}


