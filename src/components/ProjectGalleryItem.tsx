import { Box, Text } from '@radix-ui/themes';

interface ProjectGalleryItemProps {
  title: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
  backgroundColor?: string;
}

const ProjectGalleryItem = ({ title, imageUrl, isSelected, onClick, backgroundColor }: ProjectGalleryItemProps) => {
  return (
    <Box
      onClick={onClick}
      style={{
        position: 'relative',
        width: '250px',
        height: '250px',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        transform: isSelected ? 'scale(0.95)' : 'scale(1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Project image or background color */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: backgroundColor || (imageUrl ? 'transparent' : 'var(--gray-4)'),
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Hover overlay */}
      <Box
        className="project-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          size="5"
          style={{
            color: '#000000',
            textAlign: 'center',
            padding: '1rem',
            fontWeight: '500',
            fontSize: '1.5rem',
            fontFamily: "'Enriqueta', serif"
          }}
        >
          {title === 'Codenames Online Board Game' ? 'Codenames' : 
           title === 'Right Round Records' ? 'Right Round Records' : 
           title}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectGalleryItem; 