import { Box } from '@radix-ui/themes';
import PageWrapper from '../PageWrapper';
import { useState } from 'react';
import { workExperiences } from './workExperiences';
import '../../styles/WorkExperience.css';
import AnimatedPage from '../AnimatedPage';
import { WorkExperienceType } from '../../types/types';
import WorkExperienceDetails from './WorkExperienceDetails';
import WorkItem from './WorkItem';

const WorkPage = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperienceType | null>(null);

  return (
    <PageWrapper title="Work Experience">
      <AnimatedPage>
        <Box
          className={`work-experience-details ${selectedExperience ? 'active' : ''}`}
          style={{ width: '100%' }}
        >
          {selectedExperience && (
            <WorkExperienceDetails experience={selectedExperience} />
          )}
        </Box>

        <div className="work-experience-grid">
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
        </div>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default WorkPage;
