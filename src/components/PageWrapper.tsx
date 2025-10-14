import { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  return (
    <Flex direction="column" height="100vh">
      {title && <h2 className="">{title}</h2>}
      {children}
    </Flex>
  );
};

export default PageWrapper;
