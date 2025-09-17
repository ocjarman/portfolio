import { Flex, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import '../styles/HomeHero.css';

const HomeHero = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      width="100vw"
      p="2rem"
      position="fixed"
      top="0"
      left="0"
      overflow="hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-800px w-full"
      >
        <Text size="6">
          <span>Olivia Jarman</span>
        </Text>
        <Text
          size="5"
          mt="2"
          mb="2"
          align="center"
          className="text-[var(--gray-11)] block"
        >
          Frontend Software Engineer
        </Text>
        <Text align="center" size="4" className="text-[var(--gray-10)]">
          Crafting beautiful and intuitive user experiences through clean code
          and thoughtful design.
        </Text>
      </motion.div>
    </Flex>
  );
};

export default HomeHero;
