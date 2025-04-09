import { Box, Flex, Text } from '@radix-ui/themes';
import PageHero from './PageHero';

const About = () => {
  return (
    <Flex direction="column" align="center" gap="6">
      <PageHero title="About" />
      <Box className="card" style={{ padding: '2rem', backgroundColor: 'var(--gray-1)', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Flex 
          direction="column" 
          gap="6" 
          align="center" 
          style={{ 
            maxWidth: '800px',
            lineHeight: '1.6'
          }}
        >
          <Box style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            overflow: 'hidden',
            marginBottom: '1rem',
            boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="/profile-image.jpg" 
              alt="Olivia" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          <Text size="3" style={{ textAlign: 'left' }}>
            Hi! I'm Olivia, a software engineer with a unique journey that combines education, athletics, and technology. 
            My path began at Wingate University where I played collegiate tennis, before transferring to the University of Florida 
            to complete my education.
          </Text>
          
          <Text size="3" style={{ textAlign: 'left' }}>
            After graduating, I dedicated myself to education, working as a teacher and later as a nonprofit education program manager. 
            This experience gave me valuable insights into how technology can transform learning and improve lives. 
            Driven by this passion, I took the leap into software engineering by completing a coding bootcamp, 
            successfully transitioning into a new career in tech.
          </Text>

          <Text size="3" style={{ textAlign: 'left' }}>
            Beyond my professional life, I'm an accomplished runner who has completed the NYC Marathon, 
            demonstrating my commitment to personal growth and perseverance. This same determination 
            has been instrumental in my career transition and continues to drive my work as a software engineer.
          </Text>

          <Text size="3" style={{ textAlign: 'left' }}>
            I believe in creating technology that makes a positive impact, drawing from my diverse background 
            in education, athletics, and software development to bring unique perspectives to every project.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About; 