
import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
        // State to toggle the modal
        const [toggleModal, setToggleModal] = useState(false);

        // State to show profile picture modal
        const [profilePictureModal, setProfilePictureModal] = useState(false);

        /**Functio to just close modal */
        const closeModal = () => {
                setToggleModal(false);
                setProfilePictureModal(false);
        }

        const openPictureModal = () => {
                setProfilePictureModal(!profilePictureModal);
                setToggleModal(!toggleModal);
        }

        return (
                <ModalContext.Provider value={{
                        toggleModal,
                        closeModal,
                        profilePictureModal,
                        openPictureModal
                }}>
                        {children}
                </ModalContext.Provider>
        )
}