import { Box, Flex, Text } from '@radix-ui/themes';
import PageWrapper from './PageWrapper';
import AnimatedPage from './AnimatedPage';

const About = () => {
  return (
    <PageWrapper title="About">
      <AnimatedPage>
        <Flex 
          direction="column" 
          gap="8" 
          align="center" 
          maxWidth="800px"
        >
          <Box width="200px" height="200px" mb="1rem" className="rounded-full overflow-hidden box-shadow-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/portfolio/profile-image.jpg" 
              alt="Olivia" 
              className="w-full h-full object-cover filter grayscale-100"
            />
          </Box>

          <Text size="3" className="text-center">
            Hi! I'm Olivia, a software engineer with a unique journey that combines education, athletics, and technology. 
            My path began at Wingate University where I played collegiate tennis, before transferring to the University of Florida 
            to complete my education.
          </Text>
          <br />
          
          <Text size="3" className="text-center">
            After graduating, I dedicated myself to education, working as a teacher and later as a nonprofit education program manager. 
            This experience gave me valuable insights into how technology can transform learning and improve lives. 
            Driven by this passion, I took the leap into software engineering by completing a coding bootcamp, 
            successfully transitioning into a new career in tech.
          </Text>
          <br />

          <Text size="3" className="text-center">
            Beyond my professional life, I'm an accomplished runner who has completed the NYC Marathon, 
            demonstrating my commitment to personal growth and perseverance. This same determination 
            has been instrumental in my career transition and continues to drive my work as a software engineer.
          </Text>
          <br />

          <Text size="3" className="text-center">
            I believe in creating technology that makes a positive impact, drawing from my diverse background 
            in education, athletics, and software development to bring unique perspectives to every project.
          </Text>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default About; 