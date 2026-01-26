interface Passion {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

export const passions: Passion[] = [
  {
    id: 'parenting',
    title: 'Family Life',
    description: `My two young kids are my world. Life is busy, chaotic, and wonderful. Between work and parenting, there isn't much time for hobbies these days, but I wouldn't have it any other way. Watching them grow and learn is the best part of my day.`,
    imagePath: './passions/fam.JPG',
  },
  {
    id: 'running',
    title: 'Running',
    description: `Running is my sanity and my strength. I completed the NYC Marathon, and these days, I squeeze in runs whenever I can. It's not always easy to find the time with two little ones, but it's worth it—running keeps me grounded, energized, and ready to tackle whatever comes next.`,
    imagePath: './passions/marathon.JPG',
  },
  {
    id: 'tennis',
    title: 'Tennis',
    description: `A sport I loved growing up and through college, where I earned an MVP award and had an undefeated conference record. While I don't play much these days, tennis taught me discipline, strategy, and the value of practice—lessons that still serve me well.`,
    imagePath: './passions/wingate-tennis.JPG',
  },
];
