import { useState } from 'react';
import { Box, Text, Flex, Button } from '@radix-ui/themes';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from '../PageWrapper';
import AnimatedPage from '../AnimatedPage';
import { passions } from './passions';

const PassionsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === passions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? passions.length - 1 : prevIndex - 1
    );
  };

  return (
    <PageWrapper title="Passions">
      <AnimatedPage>
        <Flex direction="column" align="center" className="w-full px-4 pt-8">
          {/* Main Content Container */}
          <Box className="w-full max-w-[800px] mx-auto">
            {/* Carousel Section */}
            <Box className="relative mb-6">
              {/* Image Container */}
              <div
                className="w-[400px] h-[400px] mx-auto overflow-hidden shadow-lg relative"
                style={{ borderRadius: '16px' }}
              >
                {passions.map((passion, index) => (
                  <div
                    key={index}
                    className="absolute w-full h-full transition-all duration-500 ease-in-out"
                    style={{
                      transform: `translateX(${(index - currentIndex) * 100}%)`,
                      opacity: index === currentIndex ? 1 : 0,
                      transition:
                        'transform 500ms ease-in-out, opacity 500ms ease-in-out',
                    }}
                  >
                    <img
                      src={passion.imagePath}
                      alt={passion.title}
                      className="w-full h-full object-cover rounded-[16px]"
                      style={{ borderRadius: '16px' }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <Flex
                className="absolute inset-x-[-50px] top-1/2 transform -translate-y-1/2"
                justify="between"
                align="center"
              >
                <Button
                  variant="soft"
                  onClick={prevSlide}
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <ChevronLeft className="w-7 h-7 text-gray-700" />
                </Button>
                <Button
                  variant="soft"
                  onClick={nextSlide}
                  className="rounded-full w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <ChevronRight className="w-7 h-7 text-gray-700" />
                </Button>
              </Flex>
            </Box>

            {/* Text Content */}
            <Box className="text-center px-4">
              <Text size="5" weight="bold" className="mb-3 block">
                {passions[currentIndex].title}
              </Text>
              <Text size="2" className="leading-relaxed max-w-[600px] mx-auto">
                {passions[currentIndex].description}
              </Text>
            </Box>

            {/* Dots Navigation */}
            <Flex gap="2" justify="center" mt="4">
              {passions.map((_, index) => (
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

export default PassionsPage;
