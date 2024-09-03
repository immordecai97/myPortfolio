
export default function Technologies({ technologies }) {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-xl font-bold'>Technologies</h2>
      <ul className='flex gap-3'>
        {technologies.map((tech, index) => (
          <li key={index} className='text-[.8rem] bg-gray-50 rounded py-[.3rem] px-[.4rem] text-black'>{tech}</li>
        ))}
      </ul>
    </div>
  );
}