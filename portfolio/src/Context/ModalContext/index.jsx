
import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
        // State to toggle the modal
        const [toggleModal, setToggleModal] = useState(false);

        // State to show profile picture modal
        const [profilePictureModal, setProfilePictureModal] = useState(false);

        // State to show form to contact me modal
        const [formToContactMeModal, setFormToContactMeModal] = useState(false);

        /**Function to just close modal */
        const closeModal = () => {
                setToggleModal(false);
                setFormToContactMeModal(false);
                setProfilePictureModal(false);
        }

        const togglePictureModal = () => {
                setProfilePictureModal(!profilePictureModal);
                setToggleModal(!toggleModal);
        }
        const toggleFormEmailModal = () => {
                setFormToContactMeModal(!formToContactMeModal);
                setToggleModal(!toggleModal);
        }

        return (
                <ModalContext.Provider value={{
                        toggleModal,
                        closeModal,
                        formToContactMeModal,
                        toggleFormEmailModal, // !-> revisar
                        profilePictureModal,
                        togglePictureModal
                }}>
                        {children}
                </ModalContext.Provider>
        )
}