import React from 'react';
import Technologies from '@Components/Technologies';
import { projects } from '@Data/resume.json';
import { getYear } from '@Utils/Dates';

export default function Projects() {
  return (
    <div>
      <h2 className='text-xl font-bold'>Projects</h2>
      <ul className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((item, index) => (
          <li className='rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3' key={index}>
            <div className='flex justify-between'>
              <h3 className='inline-flex gap-x-4 font-bold'>
                <span>{item.name}</span>
              </h3>
              <p className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{getYear(item.startDate)} - {getYear(item.endDate)}</p>
            </div>
            <p>{item.description}</p>
            <Technologies technologies={item.technologies} />
          </li>
        ))}
      </ul>
    </div>
  );
}