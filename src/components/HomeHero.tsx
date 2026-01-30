import { Flex, Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import '@/styles/HomeHero.css';
import PageWrapper from '@/components/PageWrapper';

const HomeHero = () => {
  return (
    <PageWrapper>
      <Flex mt="200px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-800px w-full"
        >
          <Text
            size="6"
            className="bg-gradient-to-r from-accent-solid to-[var(--blue-11)] bg-clip-text text-transparent"
          >
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
    </PageWrapper>
  );
};

export default HomeHero;
