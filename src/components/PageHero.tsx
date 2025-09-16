import { Box, Flex } from '@radix-ui/themes';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <Box style={{
      position: 'relative',
      width: '100vw',
      height: '250px',
      backgroundColor: 'var(--accent-3)',
      marginBottom: '2rem',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Flex direction="column" align="center" gap="2">
        <h1 style={{ 
          fontSize: '2.75rem',
          fontWeight: '600',
          color: 'var(--gray-12)',
          margin: 0,
          textAlign: 'center',
          letterSpacing: '-0.02em',
          lineHeight: '1.1'
        }}>
          {title}
        </h1>
        {subtitle && (
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '400',
            color: 'var(--gray-11)',
            margin: 0,
            textAlign: 'center'
          }}>
            {subtitle}
          </h2>
        )}
      </Flex>
    </Box>
  );
};

export default PageHero; 