import Image from 'next/image'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Projects from "./components/projects/Projects"
import Team from './components/Team'
import Form from './components/Form'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Projects />
      <Team />
      <Form />
      <Footer />
    </main>
  )
}
