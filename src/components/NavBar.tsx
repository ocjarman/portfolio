import { Link } from 'react-router-dom';
import { BriefcaseBusinessIcon, Moon, Sun, CodeIcon } from 'lucide-react';
import { Flex, Link as RadixLink } from '@radix-ui/themes';
import { useTheme } from './ThemeProvider';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Flex
      align="center"
      wrap="wrap"
      justify="between"
      height="var(--navbar-height)"
      className="px-4"
      width="90vw"
    >
      <Flex>
        <Link
          to="/"
          className="brand-name inline-flex items-center cursor-pointer"
        >
          Olivia Jarman
        </Link>
      </Flex>

      <Flex align="center" wrap="wrap">
        <Flex align="center" gap="3" wrap="wrap" mr="4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/play">Play</Link>
        </Flex>
        <Flex align="center" justify="center" gap="2">
          <RadixLink
            href="https://github.com/ocjarman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon size={20} className="block" color="black" />
          </RadixLink>
          <RadixLink
            href="https://www.linkedin.com/in/oliviajarman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BriefcaseBusinessIcon size={20} className="block" color="black" />
          </RadixLink>
          {theme === 'dark' ? (
            <Sun size={18} onClick={toggleTheme} className="cursor-pointer" />
          ) : (
            <Moon size={18} onClick={toggleTheme} className="cursor-pointer" />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
