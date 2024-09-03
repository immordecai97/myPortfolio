import Contact from "@Components/Contact";
import ProfilePicture from "@Components/ProfilePicture";
import { basics } from '@Data/resume.json';
import { CiLocationOn } from "react-icons/ci";




export default function BasicsInformation() {

        return (
                <div className="flex justify-between items-center">
                        <div className='flex flex-col gap-3'>
                                <h1 className='text-3xl font-bold'>{basics.name}</h1>
                                <p className='max-w-md'>{basics.label} repudiandae ratione dolorem similique, amet, mollitia porro labore suscipit. Officiis doloribus nobis velit minus, ad itaque!</p>
                                <p>
                                        <a href="#" className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'>
                                                <CiLocationOn /> {basics.location.city}, {basics.location.country}, {basics.location.countryCode}
                                        </a>
                                </p>
                                <Contact />
                        </div>
                        <ProfilePicture src={basics.image} alt={basics.name} />
                </div>
        )
}