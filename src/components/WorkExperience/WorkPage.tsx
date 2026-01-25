import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import { workExperiences } from './workExperiences';
import AnimatedPage from '@/components/AnimatedPage';
import WorkItem from './WorkItem';
import { Flex } from '@radix-ui/themes';

const WorkPage = () => {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Flex
          direction="column"
          align="center"
          width="100%"
          gap="4"
          style={{ padding: '2rem 2rem' }}
        >
          <PageHeader title="Work Experience" />

          <Flex
            direction="column"
            gap="0"
            justify="center"
            align="center"
            width="100%"
            style={{ maxWidth: '900px' }}
          >
            {workExperiences.map(experience => (
              <WorkItem key={experience.id} experience={experience} />
            ))}
          </Flex>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default WorkPage;
