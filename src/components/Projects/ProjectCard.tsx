import { ProjectsType } from '@/types/types';
import { Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectsType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Construct image path with base URL for Vite
  const getImageSrc = () => {
    if (!project.imageUrl) return null;
    // Vite base URL already includes trailing slash
    const baseUrl = import.meta.env.BASE_URL;
    const imagePath = project.imageUrl.startsWith('/')
      ? project.imageUrl.slice(1)
      : project.imageUrl;
    return `${baseUrl}${imagePath}`;
  };

  const imageSrc = getImageSrc();

  return (
    <div className="project-card">
      <div className="project-card-image-container">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            className="project-card-image"
            loading="lazy"
            onError={e => {
              console.error('Image failed to load:', imageSrc);
              console.error('Base URL:', import.meta.env.BASE_URL);
              console.error('Original path:', project.imageUrl);
              // Hide broken image and show placeholder
              e.currentTarget.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = 'project-card-image-placeholder';
              placeholder.innerHTML = `<span class="project-card-placeholder-text">${project.title}</span>`;
              e.currentTarget.parentElement?.appendChild(placeholder);
            }}
          />
        ) : (
          <div className="project-card-image-placeholder">
            <span className="project-card-placeholder-text">
              {project.title}
            </span>
          </div>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-demo-link"
            aria-label={`View ${project.title} demo`}
          >
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">
          {project.description.join(' ')}
        </p>
        <div className="project-card-tags">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <span key={index} className="project-tag">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          <Github size={16} />
          <span>View Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
