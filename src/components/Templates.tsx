import { Box, Flex, Heading } from '@radix-ui/themes';

const Templates = () => {
  return (
    <Flex direction="column" align="center" gap="4" style={{ padding: '2rem' }}>
      <Heading size="6">Templates</Heading>
      <Box className="card">
        <Flex direction="column" gap="4" align="center">
          <p>Welcome to the Templates section!</p>
          <p>Here you'll find various templates and resources.</p>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Templates; 