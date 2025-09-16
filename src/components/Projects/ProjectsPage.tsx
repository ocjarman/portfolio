import { ProjectDetails } from './ProjectsDetails';
import { useState } from 'react';
import PageWrapper from '../PageWrapper';
import AnimatedPage from '../AnimatedPage';
import { Flex } from '@radix-ui/themes';
import { projects } from './projects';
import { Button } from '@radix-ui/themes';
import { ProjectsType } from '../../types/types';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  return (
    <PageWrapper title="Projects">
      <AnimatedPage>
        <Flex gap="2" direction="column">
          {selectedProject && <ProjectDetails project={selectedProject} />}
          <Flex gap="4" justify="center">
            {projects.map((project, index) => (
              <Flex key={index}>
                <Button
                  variant="soft"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </Button>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default ProjectsPage;
