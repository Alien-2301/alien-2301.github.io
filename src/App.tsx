import { NavBar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Projects} from "./components/Projects"
import { Experience} from "./components/Experience"
import { Skills } from "./components/Skill"
import { Contact } from "./components/Contact"


function App() {

  return (
    <>
      <NavBar/>
      <main>
        <Hero/>
        <Projects/>
        <Experience/>
        <Skills />
        {/* <About/> */}
        <Contact/>
      </main>
    </>
  )
}

export default App
 