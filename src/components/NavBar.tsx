import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { Flex } from '@radix-ui/themes';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Flex className="nav-links" justify="between" align="center">
        <Link to="/" className="brand-name">
          Olivia Jarman
        </Link>
        <Flex gap="6">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/selected-work" className="nav-link">
            Work
          </Link>
          <a href="https://github.com/ocjarman" target="_blank" rel="noopener noreferrer" className="nav-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/oliviajarman/" target="_blank" rel="noopener noreferrer" className="nav-link">
            LinkedIn
          </a>
        </Flex>
      </Flex>
    </nav>
  );
};

export default NavBar; 