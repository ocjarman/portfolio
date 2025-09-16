import { Box, Flex, Text } from '@radix-ui/themes';
import { CodeIcon, ExternalLink } from 'lucide-react';
import { ProjectsType } from '../../types/types';

export const ProjectDetails = ({ project }: { project: ProjectsType }) => {
  return (
    <Box className="w-full max-w-[900px] p-6 mb-6 bg-[var(--color-panel)]">
      <Flex direction="column" gap="2" className="text-left">
        <Flex justify="between" align="center">
          <h2 className="text-[1.25rem] font-semibold text-[var(--gray-12)] m-0">
            {project.title}
          </h2>
          <Text size="1" className="text-[var(--gray-11)]">
            {project.period}
          </Text>
        </Flex>
        <Box className="mt-3">
          <Text size="2" className="leading-[1.6] text-[var(--gray-12)]">
            {project.description.join(' ')}
          </Text>
        </Box>
        <Flex gap="3" className="mt-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--gray-12)] no-underline"
          >
            <CodeIcon size={16} />
            <Text size="1">GitHub</Text>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[var(--gray-12)] no-underline"
            >
              <ExternalLink size={16} />
              <Text size="1">Live Demo</Text>
            </a>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectDetails;
