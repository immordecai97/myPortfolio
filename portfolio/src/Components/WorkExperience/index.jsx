
import {
        basics,
        work,
        volunteer,
        education,
        awards,
        certificates,
        publications,
        skills,
        languages,
        interests,
        references,
        projects,
} from '@Data/resume.json';
const getYear = (date) => {
        const dateNow = new Date(date);
        return dateNow.getFullYear();
}

function getMonthYear(dateString) {
        const date = new Date(dateString);
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript son 0-indexados
        const year = date.getFullYear();
        return `${month}/${year}`;
}


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
                                                                <span className='text-[.8rem] bg-gray-50 rounded py-[.3rem] px-[.4rem] text-black'>{item.modality}</span>
                                                        </h3>
                                                        <p>{getMonthYear(item.startDate)} - {getMonthYear(item.endDate)}</p>
                                                </div>
                                                <h4>{item.position}</h4>
                                                <p>{item.summary}</p>
                                        </li>
                                ))}
                        </ul>
                </div>
        )
}


