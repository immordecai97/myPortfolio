import Container from '@Components/Container'
import BasicsInformation from '@Components/BasicsInformation'
import About from '@Components/About'
import WorkExperience from '@Components/WorkExperience';
import Education from '@Components/Education';
import Skills from '@Components/Skills';
import Proyects from '@Components/Proyects';

export default function App() {
  return (
    <Container>
      <BasicsInformation />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Proyects />
    </Container>
  )
}

/**
 * Todo: Limpiar el código
 * Todo: Ajustar mi información
 * todo: Ajustar estilos
 * todo: Ajustar el responsive
 * todo: Faltaba algo y no me acuerdo que era
 */