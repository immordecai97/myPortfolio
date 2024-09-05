import Container from '@Components/Container'
import BasicsInformation from '@Components/BasicsInformation'
import WorkExperience from '@Components/WorkExperience';
import Education from '@Components/Education';
import Skills from '@Components/Skills';
import Proyects from '@Components/Proyects';
import Modal from '@Components/Modal';
import ProfilePicture from '@Components/ProfilePicture';
import { ModalContext } from '@Context/ModalContext';
import { useContext } from 'react';


export default function App() {
  const { toggleModal, profilePictureModal } = useContext(ModalContext)
  return (
    <>
      <Container>
        <BasicsInformation />
        <WorkExperience />
        <Education />
        <Skills />
        <Proyects />
      </Container>
      {
        toggleModal && profilePictureModal && <Modal>
          <ProfilePicture size={"300px"} />
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
 */