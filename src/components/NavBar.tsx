import { Link } from 'react-router-dom';
import { BriefcaseBusinessIcon, Moon, Sun, CodeIcon } from 'lucide-react';
import { Button, Flex } from '@radix-ui/themes';
import '../styles/NavBar.css';
import { useTheme } from './ThemeProvider';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

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
            <a
              href="https://github.com/ocjarman"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center"
            >
              <CodeIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/oliviajarman/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link flex items-center"
            >
              <BriefcaseBusinessIcon size={20} />
            </a>
            <Button
              variant="ghost"
              aria-label="Toggle theme"
              className="button-theme-toggle"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </nav>
  );
};

export default NavBar;
