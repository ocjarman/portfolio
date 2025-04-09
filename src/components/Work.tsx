import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import PageHero from './PageHero';

interface WorkExperienceProps {
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  image?: string;  // Optional image URL
}

const WorkExperience = ({ company, location, role, period, responsibilities, image }: WorkExperienceProps) => {
  return (
    <Box className="work-experience-card" style={{ width: '100%', maxWidth: '900px', padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: 'var(--gray-2)', borderRadius: '8px' }}>
      <Flex gap="4">
        <Box style={{ flex: '2' }}>
          <Flex direction="column" gap="2" style={{ width: '100%', alignItems: 'flex-start' }}>
            <Box style={{ width: '100%', marginBottom: '1.5rem' }}>
              <Heading size="3" style={{ textAlign: 'left', marginBottom: '4px' }}>{company}</Heading>
              <Flex direction="column" gap="1" style={{ width: '100%' }}>
                <Text size="1" style={{ color: 'var(--gray-11)', textAlign: 'left' }}>{location}</Text>
                <Text size="2" style={{ fontWeight: 500, textAlign: 'left' }}>{role}</Text>
                <Text size="1" style={{ color: 'var(--gray-11)', textAlign: 'left' }}>{period}</Text>
              </Flex>
            </Box>
            <Box style={{ width: '100%' }}>
              {responsibilities.map((responsibility, index) => (
                <Text key={index} size="2" style={{ 
                  textAlign: 'left', 
                  marginBottom: '0.75rem', 
                  lineHeight: '1.6', 
                  color: 'var(--gray-12)',
                  display: 'block',
                  width: '100%'
                }}>
                  {responsibility}
                </Text>
              ))}
            </Box>
          </Flex>
        </Box>
        <Box style={{ 
          flex: '1', 
          backgroundColor: image ? 'transparent' : 'var(--gray-4)', 
          borderRadius: '4px', 
          minHeight: '200px',
          maxHeight: '250px',
          minWidth: '250px',
          maxWidth: '300px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {image ? (
            <img 
              src={image} 
              alt={`${company} workplace`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                borderRadius: '4px'
              }}
            />
          ) : (
            <Text size="2" style={{ color: 'var(--gray-9)' }}>Photo Placeholder</Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

const Work = () => {
  const workExperiences = [
    {
      company: 'SITE Technologies',
      location: 'Remote (Chicago, IL)',
      role: 'Software Engineer',
      period: 'May 2023 - Present',
      responsibilities: [
        'Leading frontend development efforts in a complete application rebuild using React, TypeScript, and modern frameworks. Focused on creating intuitive user interfaces and new features for our stakeholder-facing applications. ',
        'Drove code quality improvements through comprehensive documentation, code reviews, and clean code implementation while managing our codebase using git version control.'
      ],
      image: '/site-tech.jpg'
    },
    {
      company: 'SEO Scholars',
      location: 'New York, NY',
      role: '11th Grade Program Manager & AmeriCorps VISTA Project Manager',
      period: 'June 2017 - April 2022',
      responsibilities: [
        'Managed comprehensive educational programs for 11th-grade students while serving as both Program Manager and AmeriCorps VISTA Project Manager. Developed and implemented curriculum strategies tailored to meet student needs.',
        'Fostered strong partnerships with teachers, parents, and community partners to create an effective collaborative learning environment.'
      ],
      image: '/seo-scholars.jpg'
    },
    {
      company: 'Uncommon Schools',
      location: 'Brooklyn, NY',
      role: 'Special Projects Coordinator',
      period: 'June 2016 - June 2017',
      responsibilities: [
        'Coordinated educational initiatives and school leadership programs while managing administrative operations. Created efficient systems to enhance school effectiveness.',
        'Maintained strong communication channels between staff and families, ensuring all stakeholders remained well-informed and engaged.'
      ],
      image: '/uncommon-schools.jpg'
    },
    {
      company: 'Teach For America',
      location: 'Atlanta, GA',
      role: '10th Grade Science Teacher',
      period: 'May 2014 - June 2016',
      responsibilities: [
        'Designed and implemented an engaging 10th-grade science curriculum that captured students\' imagination while meeting state standards. Created innovative teaching methods to improve student outcomes.',
        'Led cross-curricular learning initiatives and built strong relationships with students and families to support academic success.'
      ],
      image: '/teach-for-america.jpg'
    }
  ];

  return (
    <Flex direction="column" align="center" gap="4">
      <PageHero title="Work" />
      {workExperiences.map((experience, index) => (
        <WorkExperience key={index} {...experience} />
      ))}
    </Flex>
  );
};

export default Work; 