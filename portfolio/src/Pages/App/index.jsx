

import Container from '@Components/Container'
import BasicsInformation from '@Components/BasicsInformation'
import About from '@Components/About'
import WorkExperience from '@Components/WorkExperience';
import Education from '@Components/Education';
import Skills from '@Components/Skills';
import Proyects from '@Components/Proyects';




import {
  basics,
  work,
  volunteer,
  education,
  awards,
  certificates,
  publications,
  skills,
  languages,
  interests,
  references,
  projects,
} from '@Data/resume.json';


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