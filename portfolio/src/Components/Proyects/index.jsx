import React from 'react';
import Technologies from '@Components/Technologies';
import { projects } from '@Data/resume.json';
import { getYear } from '@Utils/Dates';

export default function Projects() {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-xl font-bold'>Proyectos</h2>
      <ul className='-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((item, index) => (
          <li  key={index}>
            <a href="#" target='_blank' className='rounded-lg flex flex-col overflow-hidden border p-3'>
              <div className='flex justify-between'>
                <h3 className='inline-flex gap-x-4 font-bold'>
                  <span>{item.name}</span>
                </h3>
                <p className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>
                  <time dateTime={item.startDate}>{getYear(item.startDate)}</time> - <time dateTime={item.endDate}>{getYear(item.endDate)}</time>
                </p>
              </div>
              <p>{item.description}</p>
              <Technologies technologies={item.technologies} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}