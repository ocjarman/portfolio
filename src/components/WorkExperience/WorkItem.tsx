import { WorkExperienceType } from '../../types/types';
import { Flex } from '@radix-ui/themes';
import { useState } from 'react';

const WorkItem = ({
  experience,
  onClick,
}: {
  experience: WorkExperienceType;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <>
      {experience.image && (
        <Flex
          className="relative inline-block group cursor-pointer hover:scale-150 transition-scale duration-300"
          onClick={onClick}
          onMouseEnter={() => setIsHovered(experience.id)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <img
            src={experience.image}
            alt={`${experience.company} workplace`}
            className="grayscale block"
            height="auto"
            width="200px"
          />
        </Flex>
      )}
      {isHovered === experience.id && (
        <Flex className="absolute z-100 inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-2xl font-semibold tracking-wide">
            {experience.period}
          </span>
        </Flex>
      )}
    </>
  );
};

export default WorkItem;
