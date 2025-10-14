import { Box } from '@radix-ui/themes';
import PageWrapper from '../../PageWrapper';
import AnimatedPage from '../../AnimatedPage';
import PacmanGame from './PacmanGame';

const PlayPage = () => {
  return (
    <PageWrapper title="Play">
      <AnimatedPage>
        <Box
          width="100%"
          style={{
            backgroundColor: 'black',
            minHeight: 'calc(100vh - var(--navbar-height) - 100px)',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PacmanGame />
        </Box>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default PlayPage;
