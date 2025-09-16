import { Box, Flex } from '@radix-ui/themes';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <Box className="relative w-screen h-[250px] bg-[var(--accent-3)] mb-8 -mx-[calc(50vw-50%)] flex items-center justify-center">
      <Flex direction="column" align="center" gap="2">
        <h1 className="text-[2.75rem] font-semibold text-[var(--gray-12)] m-0 text-center tracking-tight leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-[1.8rem] font-normal text-[var(--gray-11)] m-0 text-center">
            {subtitle}
          </h2>
        )}
      </Flex>
    </Box>
  );
};

export default PageHero; 