import { ModalContext } from "@Context/ModalContext"
import { useContext, useEffect } from "react"
import { basics } from "@Data/resume.json"

const sizes = { "sm": '28', "md": '72', "xl": '80' }

export default function ProfilePicture({ size = "sm" }) {
        const { togglePictureModal } = useContext(ModalContext)
        return (
                <figure className={`flex justify-center items-center w-full min-w-${sizes[size]} max-w-${sizes[size]} aspect-w-1 aspect-h-1 rounded-lg overflow-hidden transition hover:-translate-y-1 hover:scale-110`}>
                        <img
                                className={`cursor-pointer w-full h-full object-cover max-w-72 overflow-hidden rounded-lg`}
                                onClick={() => togglePictureModal()}
                                src={basics.image} alt={basics.name} />
                </figure>
        )
}