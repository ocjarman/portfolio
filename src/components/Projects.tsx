import { Box, Flex, Text } from '@radix-ui/themes';
import { CodeIcon, ExternalLink } from 'lucide-react';
import ProjectGalleryItem from './ProjectGalleryItem';
import { useState } from 'react';
import '../styles/ProjectGallery.css';

export interface ProjectProps {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  backgroundColor?: string;
}

export const ProjectDetails = ({ project }: { project: ProjectProps }) => {
  return (
    <Box className="project-card w-full max-w-[900px] p-6 mb-6 bg-[var(--color-panel)]">
      <Flex direction="column" gap="2" className="text-left">
        <Flex justify="between" align="center">
          <h2 className="text-[1.25rem] font-semibold text-[var(--gray-12)] tracking-tight leading-[1.1] m-0">{project.title}</h2>
          <Text size="1" className="text-[var(--gray-11)]">{project.period}</Text>
        </Flex>
        <Box className="mt-3">
          <Text size="2" className="leading-[1.6] text-[var(--gray-12)]">
            {project.description.join(' ')}
          </Text>
        </Box>
        <Flex gap="3" className="mt-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--gray-12)] no-underline">
            <CodeIcon size={16} />
            <Text size="1">GitHub</Text>
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--gray-12)] no-underline">
              <ExternalLink size={16} />
              <Text size="1">Live Demo</Text>
            </a>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export const projects: ProjectProps[] = [
  {
    title: 'Assistant',
    period: 'March 2024',
    description: [
      'Developed a Python-based wellness assistant that integrates with Oura Ring to track sleep patterns and provide personalized health insights. ',
      'Implemented automated scheduling system for daily workouts, affirmations, and motivational content delivery. ',
      'Built SMS notification system using TextBelt API for timely updates and reminders. '
    ],
    technologies: ['Python', 'Oura Ring API', 'TextBelt API', 'Environment Variables', 'Scheduling System'],
    githubUrl: 'https://github.com/ocjarman/assistant.git',
    imageUrl: '/portfolio/assistant.jpg'
  },
  {
    title: 'Codenames Online Board Game',
    period: 'February 2023',
    description: [
      'Built and deployed a multi-player Codenames board game with a team of developers at Fullstack Academy of Code. ',
      'Utilized a combination of Firebase and Redux to listen to and update game state dependent on players turn and changing game statuses. ',
      'Constructed a backend API to hold gameboard data and to secure game answers away from players. '
    ],
    technologies: ['TypeScript', 'React', 'Redux', 'Firebase', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'CSS', 'Render'],
    githubUrl: 'https://github.com/2208-Capstone-Team-2/codenames',
    liveUrl: 'https://codenames-0nt7.onrender.com/',
    imageUrl: '/portfolio/codenames.jpg'
  },
  {
    title: 'Right Round Records',
    period: 'November 2022',
    description: [
      'Built and deployed an e-commerce site that lets users view and checkout record albums.',
      'Structured various database models for inventory, orders, and applied secure routes for adding, editing, and deleting shopping cart items. ',
      'Utilized OAuth for user authentication and Material-UI for styling. '
    ],
    technologies: ['OAuth', 'React', 'Redux', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'CSS', 'HTML', 'Material-UI', 'Discogs API'],
    githubUrl: 'https://github.com/2208-GS-Team-3/grace-shopper-team-three',
    liveUrl: 'https://rightroundrecords.us',
    imageUrl: '/portfolio/rightround.jpg'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <Flex direction="column" align="center" gap="4" style={{ width: '100%' }}>
      <Box className={`project-details ${selectedProject ? 'active' : ''}`} style={{ width: '100%' }}>
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Box>
      
      <Flex className="project-gallery-grid">
        {projects.map((project, index) => (
          <Flex key={index} className="project-gallery-item">
            <ProjectGalleryItem
              title={project.title}
              imageUrl={project.imageUrl || ''}
              isSelected={selectedProject?.title === project.title}
              onClick={() => setSelectedProject(selectedProject?.title === project.title ? null : project)}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects; 