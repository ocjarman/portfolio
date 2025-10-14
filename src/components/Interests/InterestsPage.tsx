import { useState } from 'react';
import { Box, Text, Flex, Button } from '@radix-ui/themes';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '../PageWrapper';
import AnimatedPage from '../AnimatedPage';
import { interests } from './interests';

const InterestsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === interests.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? interests.length - 1 : prevIndex - 1
    );
  };

  return (
    <PageWrapper title="Interests">
      <AnimatedPage>
        <Flex direction="column" align="center" className="w-full px-4 pt-8">
          {/* Main Content Container */}
          <Box className="w-full max-w-[800px] mx-auto">
            {/* Carousel Section */}
            <Box className="relative mb-6">
              {/* Image Container */}
              <Box className="w-[400px] h-[400px] mx-auto rounded-lg overflow-hidden">
                <img
                  src={interests[currentIndex].imagePath}
                  alt={interests[currentIndex].title}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
              </Box>

              {/* Navigation Buttons */}
              <Flex
                className="absolute inset-x-[-50px] top-1/2 transform -translate-y-1/2"
                justify="between"
                align="center"
              >
                <Button
                  variant="soft"
                  onClick={prevSlide}
                  className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white/90 shadow-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="soft"
                  onClick={nextSlide}
                  className="rounded-full w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white/90 shadow-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </Flex>
            </Box>

            {/* Text Content */}
            <Box className="text-center px-4">
              <Text size="5" weight="bold" className="mb-3 block">
                {interests[currentIndex].title}
              </Text>
              <Text size="2" className="leading-relaxed max-w-[600px] mx-auto">
                {interests[currentIndex].description}
              </Text>
            </Box>

            {/* Dots Navigation */}
            <Flex gap="2" justify="center" mt="4">
              {interests.map((_, index) => (
                <Button
                  key={index}
                  variant="soft"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full p-0 ${
                    currentIndex === index
                      ? 'bg-gray-800 dark:bg-gray-200'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default InterestsPage;
