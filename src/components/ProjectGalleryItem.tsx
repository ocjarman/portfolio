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
      className={`relative w-[250px] h-[250px] cursor-pointer overflow-hidden transition-all duration-300 ${isSelected ? 'scale-95' : 'scale-100'}`}
    >
      {/* Project image or background color */}
      <Box
        className="absolute inset-0 grayscale"
        style={{
          backgroundColor: backgroundColor || (imageUrl ? 'transparent' : 'var(--gray-4)'),
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Hover overlay */}
      <Box
        className="project-overlay absolute inset-0 flex items-center justify-center"
        style={{ background: 'color-mix(in oklab, var(--color-panel) 95%, transparent)' }}
      >
        <Text
          size="5"
          className="text-[var(--gray-12)] text-center p-4 font-medium text-[1.5rem] font-['Enriqueta',serif]"
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