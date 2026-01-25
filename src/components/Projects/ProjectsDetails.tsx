import { Box, Flex, Text } from '@radix-ui/themes';
import { CodeIcon, ExternalLink } from 'lucide-react';
import { ProjectsType } from '@/types/types';
import GameContainer from './Pacman/GameContainer';

export const ProjectDetails = ({ project }: { project: ProjectsType }) => {
  return (
    <Flex direction="column" className="text-left" p="2">
      <Flex justify="between" align="center">
        <h2>{project.title}</h2>
        <Text size="1">{project.period}</Text>
      </Flex>
      <Box>
        <Text size="2" className="leading-[1.6] text-[var(--gray-12)]">
          {project.description.join(' ')}
        </Text>
      </Box>
      <Flex gap="3" className="mt-3" justify="start" align="center">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Flex gap="1">
            <CodeIcon size={16} />
            <Text size="1">GitHub</Text>
          </Flex>
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Flex gap="1">
              <ExternalLink size={16} />
              <Text size="1">Demo</Text>
            </Flex>
          </a>
        )}
      </Flex>
      {project.id === 'pacman' && (
        <Box className="mt-4">
          <GameContainer />
        </Box>
      )}
    </Flex>
  );
};

export default ProjectDetails;
