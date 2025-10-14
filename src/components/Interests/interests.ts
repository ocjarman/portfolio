interface Interest {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

export const interests: Interest[] = [
  {
    id: 'running',
    title: 'Running',
    description:
      'Pushing boundaries and finding strength in every stride. From training sessions to race day, running has become an integral part of my journey towards personal growth and achievement. Each race represents months of dedication and the thrill of surpassing my own limits.',
    imagePath: '/interests/marathon.JPG',
  },
  {
    id: 'tennis-1',
    title: 'Tennis',
    description:
      'A lifelong hobby that began in childhood and continued in college. Proudly earned the Wingate MVP award for the tennis team and achieved an undefeated conference record in my second year. Tennis has taught me discipline, strategy, and the joy of continuous improvement.',
    imagePath: '/interests/wingate-tennis.JPG',
  },
  {
    id: 'tennis-2',
    title: 'Tennis',
    description:
      'A lifelong passion that began in childhood and flourished through college. Proudly earned the Wingate MVP award for the tennis team and achieved an undefeated conference record in my second year. Tennis has taught me discipline, strategy, and the joy of continuous improvement.',
    imagePath: '/interests/wingate-tennis-poole.jpg',
  },
  {
    id: 'parenting',
    title: 'Parenting',
    description:
      'The most rewarding and transformative journey of my life. Being a mother has brought immeasurable joy, countless learning moments, and a deeper understanding of what truly matters. Every day brings new adventures and opportunities to grow together.',
    imagePath: '/interests/family.jpg',
  },
];
