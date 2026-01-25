import { Box } from '@radix-ui/themes';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import { workExperiences } from './workExperiences';
import AnimatedPage from '@/components/AnimatedPage';
import { WorkExperienceType } from '@/types/types';
import WorkExperienceDetails from './WorkExperienceDetails';
import WorkItem from './WorkItem';
import { Flex } from '@radix-ui/themes';

const WorkPage = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperienceType | null>(null);
  return (
    <PageWrapper>
      <AnimatedPage>
        <Flex
          direction="column"
          align="center"
          width="100%"
          gap="6"
          style={{ padding: '4rem 2rem' }}
        >
          <PageHeader title="Work Experience" />
          {selectedExperience && (
            <Box width="50%">
              <WorkExperienceDetails experience={selectedExperience} />
            </Box>
          )}

          <Flex
            direction="column"
            gap="9"
            justify="center"
            align="center"
            width="100%"
            style={{ padding: '2rem' }}
          >
            {workExperiences.map((experience, index) => (
              <WorkItem
                key={index}
                experience={experience}
                isSelected={selectedExperience?.company === experience.company}
                onClick={() =>
                  setSelectedExperience(
                    selectedExperience?.company === experience.company
                      ? null
                      : experience
                  )
                }
              />
            ))}
          </Flex>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default WorkPage;
