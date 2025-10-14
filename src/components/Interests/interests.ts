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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    imagePath: '/interests/marathon.JPG',
  },
  {
    id: 'tennis-1',
    title: 'Tennis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    imagePath: '/interests/wingate-tennis.JPG',
  },
  {
    id: 'tennis-2',
    title: 'Tennis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    imagePath: '/interests/wingate-tennis-poole.jpg',
  },
  {
    id: 'parenting',
    title: 'Parenting',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
    imagePath: '/interests/family.jpg',
  },
];
