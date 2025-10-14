import { useEffect, useState, useCallback, useRef } from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';

const MAZE_WIDTH = 19;
const MAZE_HEIGHT = 22;
const GAME_WIDTH = 380;
const GAME_HEIGHT = 440;
const CELL_SIZE_X = GAME_WIDTH / MAZE_WIDTH;
const CELL_SIZE_Y = GAME_HEIGHT / MAZE_HEIGHT;

// Classic Pac-Man maze layout (0: wall, 1: path with dot, 2: empty path)
const MAZE_LAYOUT = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const GRID_SIZE = MAZE_LAYOUT.length;

type Position = {
  x: number;
  y: number;
};

type Ghost = {
  position: Position;
  color: string;
};

const INITIAL_GHOSTS: Ghost[] = [
  { position: { x: 9, y: 9 }, color: 'red' },
  { position: { x: 9, y: 10 }, color: 'pink' },
  { position: { x: 10, y: 9 }, color: 'cyan' },
  { position: { x: 10, y: 10 }, color: 'orange' },
];

const PacmanGame = () => {
  const [pacmanPos, setPacmanPos] = useState<Position>({ x: 1, y: 1 });
  const [dots, setDots] = useState<Position[]>([]);
  const [score, setScore] = useState(0);
  const [ghosts, setGhosts] = useState<Ghost[]>(INITIAL_GHOSTS);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [lives, setLives] = useState(3);

  const pacmanPosRef = useRef(pacmanPos);
  useEffect(() => {
    pacmanPosRef.current = pacmanPos;
  }, [pacmanPos]);

  // Initialize dots based on maze layout
  useEffect(() => {
    const initialDots: Position[] = [];
    for (let y = 0; y < MAZE_LAYOUT.length; y++) {
      for (let x = 0; x < MAZE_LAYOUT[y].length; x++) {
        if (MAZE_LAYOUT[y][x] === 1) {
          initialDots.push({ x, y });
        }
      }
    }
    setDots(initialDots);
  }, []);

  // Ghost movement
  useEffect(() => {
    if (gameOver || gameWon) return;

    const moveGhost = (ghost: Ghost): Ghost => {
      const possibleMoves: Position[] = [
        { x: ghost.position.x - 1, y: ghost.position.y },
        { x: ghost.position.x + 1, y: ghost.position.y },
        { x: ghost.position.x, y: ghost.position.y - 1 },
        { x: ghost.position.x, y: ghost.position.y + 1 },
      ].filter(pos => {
        if (pos.y < 0 || pos.y >= MAZE_LAYOUT.length) return false;
        if (pos.x < 0 || pos.x >= MAZE_LAYOUT[0].length) return false;
        return MAZE_LAYOUT[pos.y][pos.x] !== 0;
      });

      possibleMoves.sort((a, b) => {
        const distA =
          Math.abs(a.x - pacmanPosRef.current.x) +
          Math.abs(a.y - pacmanPosRef.current.y);
        const distB =
          Math.abs(b.x - pacmanPosRef.current.x) +
          Math.abs(b.y - pacmanPosRef.current.y);
        return distA - distB;
      });

      if (possibleMoves.length > 0) {
        return {
          ...ghost,
          position:
            possibleMoves[
              Math.floor(Math.random() * Math.min(2, possibleMoves.length))
            ],
        };
      }
      return ghost;
    };

    const ghostInterval = setInterval(() => {
      setGhosts(prevGhosts => prevGhosts.map(moveGhost));
    }, 400);

    return () => clearInterval(ghostInterval);
  }, [gameOver, gameWon]);

  // Handle ghost collisions
  const handleGhostCollision = useCallback(() => {
    if (!gameOver) {
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setGameOver(true);
        } else {
          setPacmanPos({ x: 1, y: 1 });
          setGhosts(INITIAL_GHOSTS);
        }
        return newLives;
      });
    }
  }, [gameOver]);

  // Check for collisions with ghosts
  useEffect(() => {
    const ghostCollision = ghosts.some(
      ghost =>
        ghost.position.x === pacmanPos.x && ghost.position.y === pacmanPos.y
    );

    if (ghostCollision) {
      handleGhostCollision();
    }
  }, [pacmanPos, ghosts, handleGhostCollision]);

  // Handle keyboard controls
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.startsWith('Arrow')) {
        e.preventDefault();
      }

      if (gameOver || gameWon) return;

      setPacmanPos(prev => {
        const newPos = { ...prev };

        switch (e.key) {
          case 'ArrowUp':
            if (prev.y > 0 && MAZE_LAYOUT[prev.y - 1][prev.x] !== 0) {
              newPos.y = prev.y - 1;
            }
            break;
          case 'ArrowDown':
            if (
              prev.y < GRID_SIZE - 1 &&
              MAZE_LAYOUT[prev.y + 1][prev.x] !== 0
            ) {
              newPos.y = prev.y + 1;
            }
            break;
          case 'ArrowLeft':
            if (prev.x > 0 && MAZE_LAYOUT[prev.y][prev.x - 1] !== 0) {
              newPos.x = prev.x - 1;
            }
            break;
          case 'ArrowRight':
            if (
              prev.x < GRID_SIZE - 1 &&
              MAZE_LAYOUT[prev.y][prev.x + 1] !== 0
            ) {
              newPos.x = prev.x + 1;
            }
            break;
        }

        return newPos;
      });
    },
    [gameOver, gameWon]
  );

  // Handle dot collection and win condition
  useEffect(() => {
    const dotIndex = dots.findIndex(
      dot => dot.x === pacmanPos.x && dot.y === pacmanPos.y
    );
    if (dotIndex !== -1) {
      setDots(prev => {
        const newDots = prev.filter((_, i) => i !== dotIndex);
        if (newDots.length === 0) {
          setGameWon(true);
        }
        return newDots;
      });
      setScore(prev => prev + 10);
    }
  }, [pacmanPos, dots]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <Flex
      direction="column"
      align="center"
      gap="1"
      p="8"
      style={{ backgroundColor: 'black' }}
    >
      <Flex gap="4">
        <Text color="violet" size="6">
          Score: {score}
        </Text>
        <Text color="red" size="6">
          Lives: {lives}
        </Text>
      </Flex>
      <Flex
        className="border border-[#00f]"
        position="relative"
        style={{
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
        }}
      >
        {/* Maze walls */}
        {MAZE_LAYOUT.map((row, y) =>
          row.map(
            (cell, x) =>
              cell === 0 && (
                <Flex
                  key={`wall-${x}-${y}`}
                  position="absolute"
                  style={{
                    left: x * CELL_SIZE_X,
                    top: y * CELL_SIZE_Y,
                    width: CELL_SIZE_X,
                    height: CELL_SIZE_Y,
                    backgroundColor: '#00f',
                  }}
                />
              )
          )
        )}

        {/* Pacman */}
        <Flex
          position="absolute"
          className="rounded-full"
          left={`${pacmanPos.x * CELL_SIZE_X}px`}
          top={`${pacmanPos.y * CELL_SIZE_Y}px`}
          width={`${CELL_SIZE_X}px`}
          height={`${CELL_SIZE_Y}px`}
          style={{
            backgroundColor: 'yellow',
            transition: 'all 0.1s',
          }}
        />

        {/* Ghosts */}
        {ghosts.map((ghost, index) => (
          <Flex
            key={`ghost-${index}`}
            position="absolute"
            className="rounded-full"
            left={`${ghost.position.x * CELL_SIZE_X}px`}
            top={`${ghost.position.y * CELL_SIZE_Y}px`}
            width={`${CELL_SIZE_X}px`}
            height={`${CELL_SIZE_Y}px`}
            style={{
              backgroundColor: ghost.color,
              transition: 'all 0.2s',
            }}
          />
        ))}

        {/* Dots */}
        {dots.map((dot, index) => (
          <Flex
            key={`dot-${index}`}
            position="absolute"
            className="rounded-full"
            width="6px"
            height="6px"
            style={{
              backgroundColor: 'white',
              left: dot.x * CELL_SIZE_X + (CELL_SIZE_X - 6) / 2,
              top: dot.y * CELL_SIZE_Y + (CELL_SIZE_Y - 6) / 2,
            }}
          />
        ))}

        {/* Game Over/Win overlay */}
        {(gameOver || gameWon) && (
          <Flex
            position="absolute"
            style={{
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Text color={gameWon ? 'green' : 'red'} size="8" weight="bold">
              {gameWon ? 'You Win!' : 'Game Over!'}
            </Text>
            <Text style={{ color: 'white' }} size="6">
              Final Score: {score}
            </Text>
            <Box
              as="div"
              onClick={() => {
                setPacmanPos({ x: 1, y: 1 });
                setGhosts(INITIAL_GHOSTS);
                setLives(3);
                setGameOver(false);
                setGameWon(false);
                setScore(0);
                setDots([]);
                // Re-initialize dots
                const initialDots: Position[] = [];
                for (let y = 0; y < MAZE_LAYOUT.length; y++) {
                  for (let x = 0; x < MAZE_LAYOUT[y].length; x++) {
                    if (MAZE_LAYOUT[y][x] === 1) {
                      initialDots.push({ x, y });
                    }
                  }
                }
                setDots(initialDots);
              }}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#00f',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Play Again
            </Box>
          </Flex>
        )}
      </Flex>
      <Box mt="1" style={{ color: 'white' }}>
        Use arrow keys to move Pacman and collect dots!
      </Box>
    </Flex>
  );
};

export default PacmanGame;
