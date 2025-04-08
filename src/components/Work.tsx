import { Box, Flex, Heading, Text } from '@radix-ui/themes';

interface WorkExperienceProps {
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const WorkExperience = ({ company, location, role, period, responsibilities }: WorkExperienceProps) => {
  return (
    <Box className="work-experience-card" style={{ width: '100%', maxWidth: '700px', padding: '1.5rem', marginBottom: '1.5rem', backgroundColor: 'var(--gray-2)', borderRadius: '8px' }}>
      <Flex direction="column" gap="2">
        <Flex justify="between" align="center">
          <Heading size="3">{company}</Heading>
          <Text size="1" style={{ color: 'var(--gray-11)' }}>{location}</Text>
        </Flex>
        <Flex justify="between" align="center">
          <Text size="2" style={{ fontWeight: 500 }}>{role}</Text>
          <Text size="1" style={{ color: 'var(--gray-11)' }}>{period}</Text>
        </Flex>
        <Box style={{ marginTop: '0.75rem' }}>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {responsibilities.map((responsibility, index) => (
              <li key={index} style={{ marginBottom: '0.4rem' }}>
                <Text size="1">{responsibility}</Text>
              </li>
            ))}
          </ul>
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
        'Contributed to complete frontend app rebuild using React, Vite, Radix, and React-Query',
        'Developed new features and components for stakeholder-facing application',
        'Built responsive client-facing web features using modern frontend frameworks',
        'Improved legacy codebase quality through clean code implementation',
        'Built intuitive user interfaces for new roofing module',
        'Created documentation for API integrations and reusable components',
        'Managed code repository using git version control',
        'Participated in code reviews and provided technical feedback'
      ]
    },
    {
      company: 'SEO Scholars',
      location: 'New York, NY',
      role: '11th Grade Program Manager & AmeriCorps VISTA Project Manager',
      period: 'June 2017 - April 2022',
      responsibilities: [
        'Managed educational programs for 11th-grade students',
        'Developed curriculum and student support systems',
        'Coordinated with stakeholders for program success',
        'Led AmeriCorps VISTA educational initiatives'
      ]
    },
    {
      company: 'Uncommon Schools',
      location: 'Brooklyn, NY',
      role: 'Special Projects Coordinator',
      period: 'June 2016 - June 2017',
      responsibilities: [
        'Coordinated educational initiatives and projects',
        'Supported school leadership initiatives',
        'Managed staff and family communications',
        'Oversaw administrative operations'
      ]
    },
    {
      company: 'Teach For America',
      location: 'Atlanta, GA',
      role: '10th Grade Science Teacher',
      period: 'May 2014 - June 2016',
      responsibilities: [
        'Designed and taught 10th-grade science curriculum',
        'Created engaging teaching methods to improve student outcomes',
        'Collaborated on cross-curricular learning initiatives',
        'Built strong relationships with students and parents'
      ]
    }
  ];

  return (
    <Flex direction="column" align="center" gap="4">
      <Heading size="5" style={{ marginBottom: '2rem' }}>Work Experience</Heading>
      {workExperiences.map((experience, index) => (
        <WorkExperience key={index} {...experience} />
      ))}
    </Flex>
  );
};

export default Work; 