import { Box, Flex, Heading } from '@radix-ui/themes';

const SelectedWork = () => {
  return (
    <Flex direction="column" align="center" gap="4" style={{ padding: '2rem' }}>
      <Heading size="6">Selected Work</Heading>
      <Box className="card">
        <Flex direction="column" gap="4" align="center">
          <p>Welcome to my Selected Work section!</p>
          <p>Here you'll find highlights from my portfolio.</p>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SelectedWork; 