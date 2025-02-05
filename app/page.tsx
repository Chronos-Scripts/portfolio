import Intro from '../components/intro'
import About from '../components/about'
import Projects from '../components/projects'
import SectionDivider from '../components/section-divider'
import Skills from "../components/skills";
import Contacts from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Contacts/>
    </main>
  )
}
