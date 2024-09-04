export default function Technologies({ technologies = [] }) {
  return (
    <div className='flex flex-col gap-3'>
      <h4 className="font-semibold">Technologies:</h4>
      <ul className='flex flex-wrap gap-1 w-full'>
        {
          technologies.map((tech, index) => (
            <li key={index} className='text-[.6rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{tech}</li>
          ))
        }
      </ul>
    </div>
  );
}