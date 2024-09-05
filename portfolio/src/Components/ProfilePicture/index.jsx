import { ModalContext } from "@Context/ModalContext"
import { useContext, useEffect } from "react"
import { basics } from "@Data/resume.json"

export default function ProfilePicture({ size = "112px" }) {
        const { openPictureModal } = useContext(ModalContext)
        return (
                <figure className={`flex justify-center items-center min-w-[${size}] max-w-[${size}] aspect-w-1 aspect-h-1 rounded-lg overflow-hidden transition hover:-translate-y-1 hover:scale-110`}>
                        <img
                                onClick={() => openPictureModal()}
                                src={basics.image} alt={basics.name} />
                </figure>
        )
}