import { Box, Flex, Text } from '@radix-ui/themes';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import AnimatedPage from '@/components/AnimatedPage';

const About = () => {
  return (
    <PageWrapper>
      <AnimatedPage>
        <Flex
          direction="column"
          gap="1"
          align="center"
          maxWidth="800px"
          mx="auto"
          style={{ padding: '4rem 2rem' }}
        >
          <PageHeader title="About" />
          <Box
            width="200px"
            height="200px"
            mb="1rem"
            className="rounded-full overflow-hidden box-shadow-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="./profile-image.jpg"
              alt="Olivia image"
              className="w-full h-full object-cover object-top filter grayscale-100"
            />
          </Box>

          <Text size="3" className="text-center">
            Hi! I'm Olivia, a frontend engineer, mom of two young kids, runner,
            and coffee enthusiast. I live with my husband, our dog, and our two
            little ones who keep life interesting (and busy!).
          </Text>
          <br />

          <Text size="3" className="text-center">
            My path to tech wasn't linear—I started in education, working as a
            teacher and later managing nonprofit education programs. That
            experience showed me how technology can transform learning, which
            led me to complete a coding bootcamp and make the jump into software
            engineering. I'm grateful for that diverse background; it helps me
            bring a unique perspective to every project.
          </Text>
          <br />

          <Text size="3" className="text-center">
            These days, I mostly code during work hours (as any parent of young
            kids knows, that's the reality). When I do have free time, I
            prioritize running, managing my house/kids, and various homeowner
            projects.
          </Text>
          <br />

          <Text size="3" className="text-center">
            I believe in building technology that makes a real difference,
            whether that's creating intuitive user experiences or solving
            problems that matter. When life gets busy, I've learned to make
            every moment count.
          </Text>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default About;
