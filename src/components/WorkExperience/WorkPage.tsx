import { Box } from '@radix-ui/themes';
import PageWrapper from '../PageWrapper';
import { useState } from 'react';
import { workExperiences } from './workExperiences';
import AnimatedPage from '../AnimatedPage';
import { WorkExperienceType } from '../../types/types';
import WorkExperienceDetails from './WorkExperienceDetails';
import WorkItem from './WorkItem';
import { Flex } from '@radix-ui/themes';

const WorkPage = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperienceType | null>(null);

  return (
    <PageWrapper title="Work Experience">
      <AnimatedPage>
        <Box width="100%">
          {selectedExperience && (
            <WorkExperienceDetails experience={selectedExperience} />
          )}
        </Box>

        <Flex direction="column" gap="9" justify="center" align="center">
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
      </AnimatedPage>
    </PageWrapper>
  );
};

export default WorkPage;
