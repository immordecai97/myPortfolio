import Contact from "@Components/Contact";
import ProfilePicture from "@Components/ProfilePicture";
import { basics } from '@Data/resume.json';
import { CiLocationOn } from "react-icons/ci";

export default function BasicsInformation() {

        return (
                <div className="flex justify-between items-center">
                        <div className='flex flex-col gap-3'>
                                <div className="flex flex-col items-start">
                                        <h1 className='text-3xl font-bold'>{basics.name}</h1>
                                        <p className='text-[.8rem] bg-stone-700 rounded py-[.3rem] px-[.5rem] text-amber-50'>{basics.label}</p>
                                </div>
                                <p className='max-w-md'>
                                        {basics.summary}
                                </p>
                                <p>
                                        <a href="#" className='inline-flex gap-x-1.5 items-center hover:underline transition '>
                                                <CiLocationOn /> <span className="text-sm">{basics.location.city}, {basics.location.country}, {basics.location.countryCode}</span>
                                        </a>
                                </p>
                                <Contact />
                        </div>
                        <ProfilePicture />
                </div>
        )
}