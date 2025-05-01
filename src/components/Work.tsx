import { Box, Flex, Text } from '@radix-ui/themes';
import PageWrapper from './PageWrapper';
import { useState } from 'react';
import { Github } from 'lucide-react';
import '../styles/WorkExperience.css';

interface WorkExperienceProps {
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: (string | React.ReactElement)[];
  image?: string;
  companyUrl?: string;
}

const WorkExperienceDetails = ({ experience }: { experience: WorkExperienceProps }) => {
  return (
    <Box className="work-experience-card" style={{ width: '100%', padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
      <Flex direction="column" gap="2" style={{ textAlign: 'left' }}>
        <Flex justify="between" align="center">
          <h2 style={{ 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#000000',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            margin: 0
          }}>{experience.company}</h2>
          <Text size="1" style={{ color: '#333333' }}>{experience.period}</Text>
        </Flex>
        <Flex direction="column" gap="1">
          <Text size="1" style={{ color: '#333333' }}>{experience.location}</Text>
          <Text size="2" style={{ fontWeight: 500, color: '#000000' }}>{experience.role}</Text>
        </Flex>
        <Box style={{ marginTop: '0.75rem' }}>
          {experience.responsibilities.map((responsibility, index) => (
            <Text key={index} size="2" style={{ 
              marginBottom: '0.75rem', 
              lineHeight: '1.6', 
              color: '#000000',
              display: 'block'
            }}>
              {responsibility}
            </Text>
          ))}
        </Box>
        {experience.companyUrl && (
          <Text size="2" style={{ marginTop: '0.5rem' }}>
            <a 
              href={experience.companyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#000000',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              {experience.companyUrl}
            </a>
          </Text>
        )}
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
      'As a Software Engineer at SITE Technologies, I contribute to frontend development efforts in a complete application rebuild using React, TypeScript, and modern frameworks. My focus is on creating intuitive user interfaces and implementing new features for our stakeholder-facing applications.',
      'I drive code quality improvements through comprehensive documentation, code reviews, and clean code implementation while managing our codebase using git version control.',
      <Flex gap="2" align="center">
        <a 
          href="https://github.com/ojarmanST" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px',
            color: '#000000',
            textDecoration: 'none',
            fontWeight: 500
          }}
        >
          <Github size={16} />
          GitHub
        </a>
      </Flex>
    ],
    image: '/site-tech.jpg',
    companyUrl: 'https://www.sitetechnologies.com/'
  },
  {
    company: 'SEO Scholars',
    location: 'New York, NY',
    role: '11th Grade Program Manager & AmeriCorps VISTA Project Manager',
    period: 'June 2017 - April 2022',
    responsibilities: [
      'During my time at SEO Scholars, I managed comprehensive educational programs for 11th-grade students while serving in dual roles as Program Manager and AmeriCorps VISTA Project Manager. I developed and implemented curriculum strategies specifically tailored to meet student needs.',
      'I fostered strong partnerships with teachers, parents, and community partners to create an effective collaborative learning environment that supported student success.'
    ],
    image: '/seo-scholars.jpg',
    companyUrl: 'https://www.seoscholars.org/'
  },
  {
    company: 'Uncommon Schools',
    location: 'Brooklyn, NY',
    role: 'Special Projects Coordinator',
    period: 'June 2016 - June 2017',
    responsibilities: [
      'As a Special Projects Coordinator at Uncommon Schools, I coordinated educational initiatives and school leadership programs while managing administrative operations. I created efficient systems to enhance overall school effectiveness.',
      'In addition, I maintained strong communication channels between staff and families, ensuring all stakeholders remained well-informed and actively engaged in the educational process.'
    ],
    image: '/uncommon-schools.jpg',
    companyUrl: 'https://www.uncommonschools.org/'
  },
  {
    company: 'Teach For America',
    location: 'Atlanta, GA',
    role: '10th Grade Science Teacher',
    period: 'May 2014 - June 2016',
    responsibilities: [
      'At Teach For America, I designed and implemented an engaging 10th-grade science curriculum that captured students\' imagination while meeting state standards. I created innovative teaching methods to improve student outcomes and academic success.',
      'I led cross-curricular learning initiatives and built strong relationships with students and families to support their educational journey.'
    ],
    image: '/teach-for-america.jpg',
    companyUrl: 'https://www.teachforamerica.org/'
  }
];

const Work = () => {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperienceProps | null>(null);

  return (
    <PageWrapper title="Work">
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