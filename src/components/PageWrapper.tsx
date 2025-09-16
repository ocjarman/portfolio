import { ReactNode } from 'react';
import { Box } from '@radix-ui/themes';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-20 text-[var(--gray-12)]">
      <div className="max-w-[1200px] mx-auto p-8">
        <Box className="bg-[var(--color-panel)] p-10">
          {title && (
            <h1 className="text-2xl font-semibold text-center mb-8 text-[var(--gray-12)] tracking-tight leading-[1.1]">
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