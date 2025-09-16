import './App.css';
import '@radix-ui/themes/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import NavBar from './components/NavBar';
import Work from './components/Work';
import About from './components/About';
import HomeHero from './components/HomeHero';
import ProjectsPage from './components/Projects/ProjectsPage';

function Home() {
  return <HomeHero />;
}

function App() {
  return (
    <ThemeProvider>
      <Router basename="/portfolio">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
