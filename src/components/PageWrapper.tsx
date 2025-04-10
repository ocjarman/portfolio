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
      backgroundColor: '#E8E6F3',
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
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem'
        }}>
          {title && (
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '2rem',
              color: '#4040B2'
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