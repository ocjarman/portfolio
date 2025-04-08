import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, FileText, Home } from 'lucide-react';
import { Flex, Box } from '@radix-ui/themes';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Box className="hamburger" onClick={toggleMenu}>
        <Box className={`hamburger-line ${isOpen ? 'open' : ''}`}></Box>
        <Box className={`hamburger-line ${isOpen ? 'open' : ''}`}></Box>
        <Box className={`hamburger-line ${isOpen ? 'open' : ''}`}></Box>
      </Box>
      
      <Flex direction="column" className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <Home size={16} />
          Home
        </Link>
        <a href="https://github.com/ocjarman" target="_blank" rel="noopener noreferrer">
          <Github size={16} />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/oliviajarman/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} />
          LinkedIn
        </a>
        <Link to="/templates" onClick={() => setIsOpen(false)}>
          <FileText size={16} />
          Templates
        </Link>
      </Flex>
    </nav>
  );
};

export default NavBar; 