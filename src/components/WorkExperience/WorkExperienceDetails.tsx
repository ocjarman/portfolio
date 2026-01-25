import { WorkExperienceType } from '@/types/types';
import { Flex, Text, Box } from '@radix-ui/themes';

const WorkExperienceDetails = ({
  experience,
}: {
  experience: WorkExperienceType;
}) => {
  return (
    <Flex direction="column" gap="2" className="text-left">
      <Flex justify="between" align="center">
        <h2>{experience.company}</h2>
        <Text size="1">{experience.period}</Text>
      </Flex>
      <Flex direction="column" gap="1">
        <Text size="1" className="text-[var(--gray-11)]">
          {experience.location}
        </Text>
        <Text size="2">{experience.role}</Text>
      </Flex>
      <Box className="mt-3">
        {experience.responsibilities.map((responsibility, index) => (
          <Text key={index} size="2">
            {responsibility}
          </Text>
        ))}
      </Box>
      {experience.companyUrl && (
        <Text size="2" className="mt-2">
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {experience.companyUrl}
          </a>
        </Text>
      )}
    </Flex>
  );
};

export default WorkExperienceDetails;
