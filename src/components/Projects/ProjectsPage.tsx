import { ProjectDetails } from './ProjectsDetails';
import { useState } from 'react';
import PageWrapper from '../PageWrapper';
import AnimatedPage from '../AnimatedPage';
import { Flex } from '@radix-ui/themes';
import { projects } from './projects';
import { ProjectsType } from '../../types/types';
import '../../styles/ProjectGallery.css';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  return (
    <PageWrapper title="Projects">
      <AnimatedPage>
        <Flex gap="2" direction="column">
          {selectedProject && <ProjectDetails project={selectedProject} />}
          <Flex gap="4" justify="center" wrap="wrap">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`project-button ${
                  selectedProject?.id === project.id ? 'active' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </button>
            ))}
          </Flex>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default ProjectsPage;
