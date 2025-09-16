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
        className='max-w-800px w-full'
      >
        <Text 
          size="9" 
          className='font-sans font-bold text-center mb-4 tracking-tighter'
        >
          <span className="brand-name">Olivia Jarman</span>
        </Text>
        <Text
          size="5"
          className="font-sans font-medium tracking-tight text-[var(--gray-11)] text-center mb-8 block break-words"
        >
          Frontend Software Engineer
        </Text>
        <Text
          size="4"
          className="font-sans font-normal tracking-tight text-[var(--gray-10)] text-center max-w-[600px] mx-auto leading-relaxed block break-words"
        >
          Crafting beautiful and intuitive user experiences through clean code and thoughtful design.
        </Text>
      </motion.div>
    </Flex>
  );
};

export default HomeHero; 