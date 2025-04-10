import './App.css'
import { Box } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Work from './components/Work'
import About from './components/About'
import ProjectGalleryItem from './components/ProjectGalleryItem'
import { useState } from 'react'
import { ProjectDetails, projects, ProjectProps } from './components/Projects'
import './styles/ProjectGallery.css'
import PageWrapper from './components/PageWrapper'
import ContactForm from './components/ContactForm'
import HomeHero from './components/HomeHero'

function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <PageWrapper>
      <HomeHero />
      <Box className={`project-details ${selectedProject ? 'active' : ''}`} style={{ width: '100%' }}>
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Box>
      
      <div className="project-gallery-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-gallery-item">
            <ProjectGalleryItem
              title={project.title}
              imageUrl={project.imageUrl || ''}
              backgroundColor={project.backgroundColor}
              isSelected={selectedProject?.title === project.title}
              onClick={() => setSelectedProject(selectedProject?.title === project.title ? null : project)}
            />
          </div>
        ))}
      </div>
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
      </Routes>
    </Router>
  )
}

export default App
