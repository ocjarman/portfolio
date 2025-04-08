import './App.css'
import { Box, Flex, Button } from '@radix-ui/themes'
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

function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <Flex direction="column" align="center" gap="4" style={{ width: '100%' }}>
      <Box style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundColor: '#E8E6F3', // Lilac color
        marginBottom: '2rem',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        {/* Hero banner placeholder - replace src with your image once added to public folder */}
        <Box style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left',
          zIndex: 1,
          width: '100%',
          padding: '0 2rem'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem',
            marginBottom: '1rem',
            color: 'var(--gray-12)'
          }}>Olivia Jarman</h1>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '400',
            color: 'var(--gray-11)',
            whiteSpace: 'nowrap'
          }}>Frontend Software Engineer</h2>
          <Button
            onClick={() => window.location.href = '/contact'}
            style={{
              backgroundColor: '#646cff',
              color: 'white',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              marginTop: '2rem'
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>

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
