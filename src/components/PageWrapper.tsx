import { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Flex direction="column" height="100vh">
      {children}
    </Flex>
  );
};

export default PageWrapper;
