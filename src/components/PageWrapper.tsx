import { ReactNode } from 'react';
import { Flex } from '@radix-ui/themes';

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

const PageWrapper = ({ children, title }: PageWrapperProps) => {
  return (
    <Flex direction="column">
      {title && <h1 className="">{title}</h1>}
      {children}
    </Flex>
  );
};

export default PageWrapper;
