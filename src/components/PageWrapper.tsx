import { ReactNode } from 'react';
import { Box } from '@radix-ui/themes';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box style={{ 
      paddingTop: '5rem', // Space for fixed navbar
      minHeight: '100vh',
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '5rem 2rem 2rem 2rem' // top right bottom left
    }}>
      {children}
    </Box>
  );
};

export default PageWrapper; 