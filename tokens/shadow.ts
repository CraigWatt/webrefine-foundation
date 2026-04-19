export const shadow = {
  sm: '0 1px 2px rgba(13, 17, 23, 0.08)',
  md: '0 12px 30px rgba(13, 17, 23, 0.08)',
  lg: '0 24px 60px rgba(13, 17, 23, 0.12)',
} as const;

export type ShadowToken = keyof typeof shadow;
