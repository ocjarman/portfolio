import { WorkExperienceType } from '../../types/types';
import { Box, Text } from '@radix-ui/themes';
const WorkItem = ({
  experience,
  isSelected,
  onClick,
}: {
  experience: WorkExperienceType;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <Box
      className={`work-experience-item ${isSelected ? 'scale-95' : 'scale-100'}`}
      onClick={onClick}
    >
      {experience.image ? (
        <img
          src={experience.image}
          alt={`${experience.company} workplace`}
          className="work-experience-image"
        />
      ) : (
        <Box className="w-full h-full bg-[var(--gray-4)] flex items-center justify-center">
          <Text size="2" className="text-[var(--gray-9)]">
            Photo Placeholder
          </Text>
        </Box>
      )}
      <Box className="work-experience-overlay" />
    </Box>
  );
};

export default WorkItem;
