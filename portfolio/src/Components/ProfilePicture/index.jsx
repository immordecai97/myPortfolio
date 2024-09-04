export default function ProfilePicture({ src, alt }) {
        return (
                <figure className='flex justify-center items-center min-w-[112px] max-w-[112px] aspect-w-1 aspect-h-1 rounded-lg overflow-hidden'>
                        <img src={src} alt={alt} />
                </figure>
        )
}