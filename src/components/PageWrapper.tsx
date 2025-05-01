import { ReactNode } from 'react';
import { Box } from '@radix-ui/themes';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      paddingTop: '5rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
      }}>
        <Box style={{ 
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          padding: '2.5rem'
        }}>
          {title && (
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: '2rem',
              color: '#000000',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>
              {title}
            </h1>
          )}
          {children}
        </Box>
      </div>
    </div>
  );
};

export default PageWrapper; 