import './App.css';
import '@radix-ui/themes/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import NavBar from '@/components/NavBar';
import Work from '@/components/WorkExperience/WorkPage';
import About from '@/components/About';
import HomeHero from '@/components/HomeHero';
import ProjectsPage from '@/components/Projects/ProjectsPage';
import PassionsPage from '@/components/Passions/PassionsPage';
import AnimatedBackground from '@/components/AnimatedBackground';

function Home() {
  return <HomeHero />;
}

function App() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <Router basename="/portfolio/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/passions" element={<PassionsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
