import { Link } from 'react-router-dom';
import { BriefcaseBusinessIcon, Moon, Sun, CodeIcon } from 'lucide-react';
import { Button, Flex, Switch } from '@radix-ui/themes';
import '../styles/NavBar.css';
import { useEffect, useState } from 'react';
import { Theme, applyTheme, getInitialTheme } from '../lib/utils';

const NavBar = () => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <Flex className="nav-links" justify="between" align="center">
        <Link to="/" className="brand-name">
          Olivia Jarman
        </Link>
        <Flex align="center">
          <Flex gap="6" align="center">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/work" className="nav-link">
              Work
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </Flex>
          <Flex gap="4" align="center" ml="8">
           
            <a href="https://github.com/ocjarman" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
              <CodeIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/oliviajarman/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
              <BriefcaseBusinessIcon size={20} />
            </a>
            <Button variant="ghost" aria-label="Toggle theme" className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </nav>
  );
};

export default NavBar; 