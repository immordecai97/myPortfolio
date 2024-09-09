import Container from '@Components/Container'
import BasicsInformation from '@Components/BasicsInformation'
import WorkExperience from '@Components/WorkExperience';
import Education from '@Components/Education';
import Skills from '@Components/Skills';
import Proyects from '@Components/Proyects';
import Modal from '@Components/Modal';
import FormMail from '@Components/FormMail';
import ProfilePicture from '@Components/ProfilePicture';
import { ModalContext } from '@Context/ModalContext';
import { useContext } from 'react';
import Stack from '@Components/Stack';

export default function App() {
  document.title = "Carlos Marquina | Portafolio"
  const { toggleModal, profilePictureModal, formToContactMeModal } = useContext(ModalContext)
  return (
    <>
      <Container>
        <BasicsInformation />
        <WorkExperience />
        <Education />
        <Stack />
        <Skills />
        <Proyects />
      </Container>
      {
        toggleModal && <Modal>
          {
            profilePictureModal && <ProfilePicture size="md" /> ||
            formToContactMeModal && <FormMail />
          }
        </Modal>
      }
    </>
  )
}

/**
 * Todo: Limpiar el código
 * Todo: Ajustar mi información
 * todo: Ajustar estilos
 * todo: Ajustar el responsive
 * todo: Faltaba algo y no me acuerdo que era
 *
 * Hola,

Solicitud de contacto de {{from_name}}:

{{message}}
Hola {{to_name}},

De parte de {{from_name}}, nos gustaría ponernos en contacto contigo para conversar sobre tus servicios y disponibilidad para colaborar con nosotros.

Estamos impresionados con tu experiencia y creemos que podrías ser una gran adición a nuestro equipo.

Esperamos poder hablar contigo pronto.

Saludos cordiales,
{{from_name}}



Best wishes,
EmailJS team
 */



// toggleModal && profilePictureModal && <Modal>
//   <ProfilePicture size="md" />
//   {/* <ProfilePicture size={"300px"} /> */}
// </Modal>




//----------------------------------------------

// profilePictureModal && <Modal>
// <ProfilePicture size="md" />
// {/* <ProfilePicture size={"300px"} /> */}
// </Modal> || 
// formToContactMeModal && <Modal>
// <FormMail />
// </Modal>