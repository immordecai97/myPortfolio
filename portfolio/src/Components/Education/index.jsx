import { education } from '@Data/resume.json';
import { getYear } from '@Utils/Dates';

export default function Education() {
        return (
                <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>Educación</h2>
                        <ul className='-mx-3 flex flex-col gap-2'>
                                {education.map((item, index) => (
                                        <li className='border p-3 rounded-lg' key={index}>
                                                <div className='flex justify-between'>
                                                        <h3 className='inline-flex gap-x-4 font-bold'>
                                                                <a target='_blank' href={item.url} className='hover:underline'>{item.institution}</a>
                                                        </h3>
                                                        <p className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>
                                                                <time dateTime={item.startDate}>{getYear(item.startDate)}</time> - <time dateTime={item.endDate}>{getYear(item.endDate)}</time>

                                                        </p>
                                                </div>
                                                <h4>{item.area}</h4>
                                        </li>
                                ))}
                        </ul>
                </div>
        )
}


