import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import PageWrapper from './PageWrapper';
import { useState } from 'react';
import '../styles/WorkExperience.css';

interface WorkExperienceProps {
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
  image?: string;
}

const WorkExperienceDetails = ({ experience }: { experience: WorkExperienceProps }) => {
  return (
    <Box className="work-experience-card" style={{ width: '100%', padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: 'var(--gray-2)', borderRadius: '8px' }}>
      <Flex direction="column" gap="2" style={{ textAlign: 'left' }}>
        <Flex justify="between" align="center">
          <Heading size="3">{experience.company}</Heading>
          <Text size="1" style={{ color: 'var(--gray-11)' }}>{experience.period}</Text>
        </Flex>
        <Flex direction="column" gap="1">
          <Text size="1" style={{ color: 'var(--gray-11)' }}>{experience.location}</Text>
          <Text size="2" style={{ fontWeight: 500 }}>{experience.role}</Text>
        </Flex>
        <Box style={{ marginTop: '0.75rem' }}>
          {experience.responsibilities.map((responsibility, index) => (
            <Text key={index} size="2" style={{ 
              marginBottom: '0.75rem', 
              lineHeight: '1.6', 
              color: 'var(--gray-12)',
              display: 'block'
            }}>
              {responsibility}
            </Text>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

const WorkExperienceItem = ({ 
  experience, 
  isSelected, 
  onClick 
}: { 
  experience: WorkExperienceProps; 
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <Box 
      className="work-experience-item" 
      onClick={onClick}
      style={{
        transform: isSelected ? 'scale(0.95)' : 'scale(1)'
      }}
    >
      {experience.image ? (
        <img 
          src={experience.image} 
          alt={`${experience.company} workplace`}
          className="work-experience-image"
        />
      ) : (
        <Box style={{ 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'var(--gray-4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text size="2" style={{ color: 'var(--gray-9)' }}>Photo Placeholder</Text>
        </Box>
      )}
      <Box className="work-experience-overlay" />
    </Box>
  );
};

const workExperiences: WorkExperienceProps[] = [
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

const Work = () => {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperienceProps | null>(null);

  return (
    <PageWrapper>
      <Box className={`work-experience-details ${selectedExperience ? 'active' : ''}`} style={{ width: '100%' }}>
        {selectedExperience && <WorkExperienceDetails experience={selectedExperience} />}
      </Box>
      
      <div className="work-experience-grid">
        {workExperiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            experience={experience}
            isSelected={selectedExperience?.company === experience.company}
            onClick={() => setSelectedExperience(selectedExperience?.company === experience.company ? null : experience)}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Work; 