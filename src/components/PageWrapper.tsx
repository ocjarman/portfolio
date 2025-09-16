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
      backgroundColor: 'var(--color-background)',
      paddingTop: '5rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
      }}>
        <Box style={{ 
          backgroundColor: 'var(--color-panel)',
          padding: '2.5rem'
        }}>
          {title && (
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: '2rem',
              color: 'var(--gray-12)',
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