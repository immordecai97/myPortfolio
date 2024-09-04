import { basics } from '@Data/resume.json';

export default function About() {
        return (
                <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>About</h2>
                        <p>
                                {basics.summary} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat distinctio voluptatibus officiis eius iure quasi perspiciatis minus tempora aut perferendis nihil modi accusantium nesciunt, ea a aspernatur molestiae quos architecto?
                        </p>
                </div>
        )
}