import PageWrapper from '@/components/PageWrapper';
import AnimatedPage from '@/components/AnimatedPage';
import PageHeader from '@/components/PageHeader';
import { projects } from './projects';
import ProjectCard from './ProjectCard';
import '@/styles/ProjectGallery.css';

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <AnimatedPage>
        <div className="projects-page">
          <PageHeader
            title="Featured Projects"
            subtitle="A showcase of my creative work and technical expertise"
            highlightText="creative work"
          />
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default ProjectsPage;
