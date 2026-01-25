import { useRef, useState } from 'react';
import { Box, Text, Flex } from '@radix-ui/themes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import PageWrapper from '@/components/PageWrapper';
import AnimatedPage from '@/components/AnimatedPage';
import { passions } from './passions';
import '@/styles/PassionsCarousel.css';

const PassionsPage = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <PageWrapper title="Passions">
      <AnimatedPage>
        <Flex direction="column" align="center" className="w-full px-4 pt-8">
          {/* Main Content Container */}
          <Box className="w-full max-w-[800px] mx-auto">
            {/* Swiper Carousel Section */}
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              effect="fade"
              grabCursor
              loop
              onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
              fadeEffect={{
                crossFade: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={800}
              className="passions-swiper"
            >
              {passions.map((passion, index) => (
                <SwiperSlide key={index} className="passions-slide">
                  <img
                    src={passion.imagePath}
                    alt={passion.title}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}

              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev-custom"></div>
              <div className="swiper-button-next-custom"></div>
            </Swiper>

            {/* Text Content */}
            <Box className="text-center" p="5">
              <Text size="3" weight="bold" className="mb-3 block">
                {passions[activeIndex]?.title}
              </Text>
              <Text size="2" className="leading-relaxed max-w-[600px] mx-auto">
                {passions[activeIndex]?.description}
              </Text>
            </Box>
          </Box>
        </Flex>
      </AnimatedPage>
    </PageWrapper>
  );
};

export default PassionsPage;
