import { Flex, Text } from '@radix-ui/themes';

const HomeHero = () => {
  return (
    <Flex 
      direction="column" 
      align="center" 
      justify="center" 
      style={{ 
        minHeight: '70vh',
        width: '100%',
        padding: '2rem'
      }}
    >
      <Text 
        size="9" 
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: '600',
          letterSpacing: '-0.04em',
          marginBottom: '1rem',
          color: '#1a1a1a'
        }}
      >
        Olivia Jarman
      </Text>
      <Text
        size="5"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: '400',
          letterSpacing: '-0.02em',
          color: '#666'
        }}
      >
        Frontend Software Engineer
      </Text>
    </Flex>
  );
};

export default HomeHero; 