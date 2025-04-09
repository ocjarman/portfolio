import './App.css'
import { Box, Flex } from '@radix-ui/themes'
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
import PageHero from './components/PageHero'

function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <Flex direction="column" align="center" gap="4" style={{ width: '100%' }}>
      <PageHero title="Olivia Jarman" subtitle="Frontend Software Engineer" />

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
    </Flex>
  )
}

function App() {
  return (
    <Router>
      <NavBar />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selected-work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </PageWrapper>
    </Router>
  )
}

export default App
