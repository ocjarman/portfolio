import { Box, Flex, Heading } from '@radix-ui/themes';

const Resume = () => {
  return (
    <Flex direction="column" align="center" gap="4" style={{ padding: '2rem' }}>
      <Heading size="6">Resume</Heading>
      <Box className="card">
        <Flex direction="column" gap="4" align="center">
          <p>Welcome to my Resume section!</p>
          <p>Here you'll find my professional experience and skills.</p>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Resume; 