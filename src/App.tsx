import './App.css'
import { Box, Flex } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Work from './components/Work'
import About from './components/About'

function Home() {
  return (
    <Flex direction="column" align="center" gap="4">
      <h1>Welcome to My Personal Site</h1>
      <Box className="card">
        <Flex direction="column" gap="4" align="center">
          <p>
            Welcome to my corner of the internet! Feel free to explore.
          </p>
        </Flex>
      </Box>
      <p className="read-the-docs">
        Built with React and Radix UI
      </p>
    </Flex>
  )
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected-work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
