import { Box, Flex } from '@radix-ui/themes';
import PageWrapper from '../../PageWrapper';
import AnimatedPage from '../../AnimatedPage';
import PacmanGame from './PacmanGame';

const PlayPage = () => {
  return (
    <PageWrapper title="Play">
      <Flex
        width="100%"
        p="2"
        justify="center"
        align="center"
        style={{
          backgroundColor: 'black',
          minHeight: 'calc(100vh - var(--navbar-height) - 100px)',
        }}
      >
        <PacmanGame />
      </Flex>
    </PageWrapper>
  );
};

export default PlayPage;
