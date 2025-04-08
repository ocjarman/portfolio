import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { Github, ExternalLink } from 'lucide-react';
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
    <Box className="project-card" style={{ width: '100%', maxWidth: '900px', padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: 'var(--gray-2)', borderRadius: '8px' }}>
      <Flex direction="column" gap="2" style={{ textAlign: 'left' }}>
        <Flex justify="between" align="center">
          <Heading size="3">{project.title}</Heading>
          <Text size="1" style={{ color: 'var(--gray-11)' }}>{project.period}</Text>
        </Flex>
        <Box style={{ marginTop: '0.75rem' }}>
          <Text size="2" style={{ lineHeight: '1.6' }}>
            {project.description.join(' ')}
          </Text>
        </Box>
        <Flex gap="3" style={{ marginTop: '0.75rem' }}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--gray-11)', textDecoration: 'none' }}>
            <Github size={16} />
            <Text size="1">GitHub</Text>
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--gray-11)', textDecoration: 'none' }}>
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
    title: 'Codenames Online Board Game',
    period: 'February 2023',
    description: [
      'Built and deployed a multi-player Codenames board game with a team of developers at Fullstack Academy of Code',
      'Utilized a combination of Firebase and Redux to listen to and update game state dependent on players turn and changing game statuses',
      'Constructed a backend API to hold gameboard data and to secure game answers away from players'
    ],
    technologies: ['TypeScript', 'React', 'Redux', 'Firebase', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'CSS', 'Render'],
    githubUrl: 'https://github.com/2208-Capstone-Team-2/codenames',
    liveUrl: 'https://codenames-0nt7.onrender.com/',
    imageUrl: '/codenames.jpg'
  },
  {
    title: 'Right Round Records',
    period: 'November 2022',
    description: [
      'Built and deployed an e-commerce site that lets users view and checkout record albums',
      'Structured various database models for inventory, orders, and applied secure routes for adding, editing, and deleting shopping cart items'
    ],
    technologies: ['OAuth', 'React', 'Redux', 'Node', 'Express', 'PostgreSQL', 'Sequelize', 'CSS', 'HTML', 'Material-UI', 'Discogs API'],
    githubUrl: 'https://github.com/2208-GS-Team-3/grace-shopper-team-three',
    liveUrl: 'https://rightroundrecords.us',
    imageUrl: '/rightround.jpg'
  },
  {
    title: 'Future Project 1',
    period: 'Coming Soon',
    description: ['Placeholder for future project'],
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com',
    imageUrl: '',
    backgroundColor: '#FFE5E5' // Pastel Pink
  },
  {
    title: 'Future Project 2',
    period: 'Coming Soon',
    description: ['Placeholder for future project'],
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com',
    imageUrl: '',
    backgroundColor: '#E5FFE5' // Pastel Green
  },
  {
    title: 'Future Project 3',
    period: 'Coming Soon',
    description: ['Placeholder for future project'],
    technologies: ['React', 'Express'],
    githubUrl: 'https://github.com',
    imageUrl: '',
    backgroundColor: '#E5E5FF' // Pastel Blue
  },
  {
    title: 'Future Project 4',
    period: 'Coming Soon',
    description: ['Placeholder for future project'],
    technologies: ['React', 'MongoDB'],
    githubUrl: 'https://github.com',
    imageUrl: '',
    backgroundColor: '#FFE5FF' // Pastel Purple
  },
  {
    title: 'Future Project 5',
    period: 'Coming Soon',
    description: ['Placeholder for future project'],
    technologies: ['React', 'GraphQL'],
    githubUrl: 'https://github.com',
    imageUrl: '',
    backgroundColor: '#FFFFE5' // Pastel Yellow
  },
  {
    title: 'Future Project 6',
    period: 'Coming Soon',
    description: ['Placeholder for future project'],
    technologies: ['React', 'AWS'],
    githubUrl: 'https://github.com',
    imageUrl: '',
    backgroundColor: '#E5FFFF' // Pastel Cyan
  },
  {
    title: 'Future Project 7',
    period: 'Coming Soon',
    description: ['Placeholder for future project'],
    technologies: ['React', 'Firebase'],
    githubUrl: 'https://github.com',
    imageUrl: '',
    backgroundColor: '#FFE5F0' // Pastel Rose
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <Flex direction="column" align="center" gap="4" style={{ width: '100%' }}>
      <Box className={`project-details ${selectedProject ? 'active' : ''}`} style={{ width: '100%' }}>
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Box>
      
      <div className="project-gallery-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-gallery-item">
            <ProjectGalleryItem
              title={project.title}
              imageUrl={project.imageUrl || ''}
              backgroundColor={project.backgroundColor}
              isSelected={selectedProject?.title === project.title}
              onClick={() => setSelectedProject(selectedProject?.title === project.title ? null : project)}
            />
          </div>
        ))}
      </div>
    </Flex>
  );
};

export default Projects; 