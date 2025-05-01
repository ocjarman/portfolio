import './App.css'
import '@radix-ui/themes/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Work from './components/Work'
import About from './components/About'
import PageWrapper from './components/PageWrapper'
import ContactForm from './components/ContactForm'
import HomeHero from './components/HomeHero'
import ProjectsPage from './components/ProjectsPage'

function Home() {
  return (
    <PageWrapper>
      <HomeHero />
    </PageWrapper>
  )
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
