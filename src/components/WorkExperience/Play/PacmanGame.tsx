import { useEffect, useState, useCallback } from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';

const GRID_SIZE = 20;
const CELL_SIZE = 20;

type Position = {
  x: number;
  y: number;
};

const PacmanGame = () => {
  const [pacmanPos, setPacmanPos] = useState<Position>({ x: 1, y: 1 });
  const [dots, setDots] = useState<Position[]>([]);
  const [score, setScore] = useState(0);

  // Initialize dots
  useEffect(() => {
    const initialDots: Position[] = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        if (x !== 1 || y !== 1) {
          // Don't place dot at Pacman's starting position
          initialDots.push({ x, y });
        }
      }
    }
    setDots(initialDots);
  }, []);

  // Handle keyboard controls
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    setPacmanPos(prev => {
      const newPos = { ...prev };

      switch (e.key) {
        case 'ArrowUp':
          if (prev.y > 0) newPos.y = prev.y - 1;
          break;
        case 'ArrowDown':
          if (prev.y < GRID_SIZE - 1) newPos.y = prev.y + 1;
          break;
        case 'ArrowLeft':
          if (prev.x > 0) newPos.x = prev.x - 1;
          break;
        case 'ArrowRight':
          if (prev.x < GRID_SIZE - 1) newPos.x = prev.x + 1;
          break;
      }

      return newPos;
    });
  }, []);

  // Handle dot collection
  useEffect(() => {
    const dotIndex = dots.findIndex(
      dot => dot.x === pacmanPos.x && dot.y === pacmanPos.y
    );
    if (dotIndex !== -1) {
      setDots(prev => prev.filter((_, i) => i !== dotIndex));
      setScore(prev => prev + 10);
    }
  }, [pacmanPos, dots]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <Flex direction="column" align="center" gap="1">
      <Flex>
        <Text color="violet" size="6">
          Score: {score}
        </Text>
      </Flex>
      <Flex
        className="bg-black border border-[#00f]"
        position="relative"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Pacman */}
        <Flex
          position="absolute"
          className="rounded-full"
          left={`${pacmanPos.x * CELL_SIZE}px`}
          top={`${pacmanPos.y * CELL_SIZE}px`}
          width={`${CELL_SIZE}px`}
          height={`${CELL_SIZE}px`}
          style={{
            backgroundColor: 'yellow',
            transition: 'all 0.1s',
          }}
        />

        {/* Dots */}
        {dots.map((dot, index) => (
          <Flex
            key={index}
            position="absolute"
            className="rounded-full"
            width="6px"
            height="6px"
            style={{
              backgroundColor: 'white',
              left: dot.x * CELL_SIZE + (CELL_SIZE - 6) / 2,
              top: dot.y * CELL_SIZE + (CELL_SIZE - 6) / 2,
            }}
          />
        ))}
      </Flex>
      <Box mt="1" style={{ color: 'white' }}>
        Use arrow keys to move Pacman and collect dots!
      </Box>
    </Flex>
  );
};

export default PacmanGame;
