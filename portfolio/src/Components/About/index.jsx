

import { basics } from '@Data/resume.json';


export default function About() {
        return (
                <div className='flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>About</h2>
                        <p>
                                {basics.summary}
                        </p>
                </div>
        )
}