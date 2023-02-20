import './App.css'

import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { SectionAbout } from './components/SectionAbout/SectionAbout'
import { SectionAnimacion } from './components/SectionAnimacion/SectionAnimacion'
import { SectionBox } from './components/SectionBox/SectionBox'
import { SectionContent } from './components/SectionContent/SectionContent'
import { SectionD } from './components/SectionD/SectionD'
import { SectionForm } from './components/SectionForm/SectionForm'
import { SectionServ } from './components/SectionServ/SectionServ'
import { SectionSkills } from './components/SectionSkills/SectionSkills'
import { SectionCalculo } from './components/SectionCalculo/SectionCalculo'
import { DarkMode } from '@chakra-ui/react'


function App() {

  return (
    <div>
      <DarkMode/>
      <Navbar/>
      <SectionD/>
      <SectionAnimacion/>
      <SectionAbout/>
      <SectionSkills/>
      <SectionCalculo/>
      <SectionContent/>
      <SectionBox/>
      <SectionServ/>
      <SectionForm/>
      <Footer/>
    </div>
  )
}

export default App
 