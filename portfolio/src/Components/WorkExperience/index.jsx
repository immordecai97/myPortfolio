import { work } from '@Data/resume.json';
import { getMonthYear } from '@Utils/Dates';

export default function WorkExperience() {
        return (
                <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>Work Experience</h2>
                        <ul className='flex flex-col gap-2'>
                                {work.map((item, index) => (
                                        <li className='border border-white' key={index}>
                                                <div className='flex justify-between'>
                                                        <h3 className='inline-flex gap-x-4'>
                                                                <span>{item.name}</span>
                                                                <span className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{item.modality}</span>
                                                        </h3>
                                                        <p className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{getMonthYear(item.startDate)} - {getMonthYear(item.endDate)}</p>
                                                </div>
                                                <h4>{item.position}</h4>
                                                <p>{item.summary}</p>
                                        </li>
                                ))}
                        </ul>
                </div>
        )
}