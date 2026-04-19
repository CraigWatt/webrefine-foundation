export const colors = {
  ink: '#0d1117',
  inkSoft: '#5b6575',
  paper: '#f5f1ea',
  paperSoft: '#fbfaf8',
  line: 'rgba(13, 17, 23, 0.12)',
  accent: '#164e63',
  accentSoft: '#d6ecf2',
  signal: '#b45309',
  signalSoft: '#fce7cf',
} as const;

export type ColorToken = keyof typeof colors;
