import { createPortal } from "react-dom"
import { ModalContext } from "@Context/ModalContext"
import { useContext } from "react"

export default function Modal({ children }) {
        const { closeModal } = useContext(ModalContext)
        return createPortal(
                <div
                        onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
                        className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm backdrop-opacity-0 flex flex-col justify-center items-center">
                        {children}
                </div>,
                document.getElementById("modal")
        )
}