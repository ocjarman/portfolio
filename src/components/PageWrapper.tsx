import { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  return (
    <Flex direction="column" height="100vh">
      {title && <h3 className="">{title}</h3>}
      {children}
    </Flex>
  );
};

export default PageWrapper;
