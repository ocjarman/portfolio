import { WorkExperienceType } from '@/types/types';
import { Flex, Text, Box } from '@radix-ui/themes';
import { useTheme } from '@/hooks/useTheme';

const WorkItem = ({ experience }: { experience: WorkExperienceType }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <Flex
      direction="row"
      align="start"
      gap="5"
      width="100%"
      className="scroll-mt-20"
      style={{
        padding: '2rem 0',
        borderBottom: '1px solid var(--gray-6)',
      }}
    >
      {experience.image && (
        <Flex
          className="flex-shrink-0"
          style={{ width: '120px', paddingTop: '0.25rem' }}
          align="start"
        >
          <img
            src={experience.image}
            alt={`${experience.company} workplace`}
            className={`block ${isDarkMode ? 'grayscale invert' : 'grayscale'} transition-all duration-300 hover:opacity-80`}
            height="auto"
            width="120px"
            style={{ objectFit: 'contain', maxHeight: '80px' }}
          />
        </Flex>
      )}

      <Flex
        direction="column"
        gap="2"
        className="text-left flex-1"
        style={{ minWidth: 0 }}
      >
        <Flex justify="between" align="start" wrap="wrap" gap="2">
          <Flex
            direction="column"
            gap="1"
            style={{ flex: 1, minWidth: '200px' }}
          >
            <h2 className="text-xl font-semibold">{experience.company}</h2>
            <Text size="2" className="text-[var(--gray-11)]">
              {experience.location}
            </Text>
            <Text size="3" weight="medium">
              {experience.role}
            </Text>
          </Flex>
          <Text
            size="2"
            weight="medium"
            className="text-[var(--gray-11)] whitespace-nowrap"
          >
            {experience.period}
          </Text>
        </Flex>
        <Box className="mt-3 space-y-2">
          {experience.responsibilities.map((responsibility, idx) => (
            <div key={idx} className="mb-2">
              {typeof responsibility === 'string' ? (
                <Text size="2" className="block leading-relaxed">
                  {responsibility}
                </Text>
              ) : (
                responsibility
              )}
            </div>
          ))}
        </Box>
        {experience.companyUrl && (
          <Text size="2" className="mt-3">
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-11)] hover:underline"
            >
              {experience.companyUrl}
            </a>
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default WorkItem;
