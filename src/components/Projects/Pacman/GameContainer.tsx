import { useState } from 'react';
import { Box, Button, Flex } from '@radix-ui/themes';
import PacmanGame from '../Pacman/PacmanGame';

const GameContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box className="w-full">
      <Flex
        direction="column"
        align="center"
        style={{
          minHeight: '200px',
          position: 'relative',
        }}
      >
        {!isPlaying ? (
          <Button
            size="3"
            variant="soft"
            color="pink"
            onClick={() => setIsPlaying(true)}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            Play Now!
          </Button>
        ) : (
          <PacmanGame />
        )}
      </Flex>
    </Box>
  );
};

export default GameContainer;
