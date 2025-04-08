import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { Flex } from '@radix-ui/themes';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Flex className="nav-links" justify="center" gap="6">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/selected-work" className="nav-link">
          Selected Work
        </Link>
        <Link to="/resume" className="nav-link">
          Resume
        </Link>
        <a href="https://github.com/ocjarman" target="_blank" rel="noopener noreferrer" className="nav-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/oliviajarman/" target="_blank" rel="noopener noreferrer" className="nav-link">
          LinkedIn
        </a>
      </Flex>
    </nav>
  );
};

export default NavBar; 