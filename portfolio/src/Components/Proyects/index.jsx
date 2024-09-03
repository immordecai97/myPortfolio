import React from 'react';
import Technologies from '@Components/Technologies';
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

export default function Projects() {
  return (
    <div>
      <h2 className='text-xl font-bold'>Projects</h2>
      <ul className='flex flex-col gap-2'>
        {projects.map((item, index) => (
          <li className='border border-white' key={index}>
            <div className='flex justify-between'>
              <h3 className='inline-flex gap-x-4'>
                <span>{item.name}</span>
              </h3>
              <p>{getYear(item.startDate)} - {getYear(item.endDate)}</p>
            </div>
            <p>{item.description}</p>
            <Technologies technologies={item.technologies} />
          </li>
        ))}
      </ul>
    </div>
  );
}