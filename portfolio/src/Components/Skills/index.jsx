
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

export default function Skills () {
        return (
                <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>Skills</h2>
                        <ul className='flex gap-3'>
                                {
                                        skills.map((skill, index) => (
                                                <li key={index} className='text-[.8rem] bg-gray-50 rounded py-[.3rem] px-[.4rem] text-black'>{skill.name}</li>
                                        ))
                                }
                        </ul>
                </div>
        )
}