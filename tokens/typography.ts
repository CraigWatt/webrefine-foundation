export const typography = {
  fontSans: '"Inter", "Avenir Next", "Segoe UI", sans-serif',
  fontSerif: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif',
  fontMono: '"SFMono-Regular", "Menlo", "Consolas", monospace',
  measure: '68ch',
  scale: {
    xs: '0.8125rem',
    sm: '0.9375rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.375rem',
    '2xl': '1.75rem',
    '3xl': '2.375rem',
    '4xl': '3.25rem',
    '5xl': '4.5rem',
  },
} as const;

export type TypographyToken = keyof typeof typography.scale;
