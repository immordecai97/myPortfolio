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
                                                        <div className='flex items-center gap-x-6'>
                                                                <h3 className='font-bold'>{item.name}</h3>
                                                                <ul className='inline-flex items-center gap-x-2'>
                                                                        <li className='text-[.6rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{item?.position}</li>
                                                                        <li className='text-[.6rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{item?.modality}</li>
                                                                </ul>

                                                        </div>
                                                        <p className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{getMonthYear(item.startDate)} - {getMonthYear(item.endDate)}</p>
                                                </div>
                                                <p>{item.summary}</p>
                                        </li>
                                ))}
                        </ul>
                </div>
        )
}