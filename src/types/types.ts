export type ProjectsType = {
  id: string;
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  backgroundColor?: string;
};

export type WorkExperienceType = {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  responsibilities: (string | React.ReactElement)[];
  image?: string;
  companyUrl?: string;
};
