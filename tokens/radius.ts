export const radius = {
  sm: '0.625rem',
  md: '0.875rem',
  lg: '1.25rem',
  xl: '1.75rem',
  pill: '999px',
} as const;

export type RadiusToken = keyof typeof radius;
