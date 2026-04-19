export const motion = {
  duration: {
    fast: '140ms',
    normal: '220ms',
    slow: '360ms',
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    expressive: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  stagger: {
    sm: '60ms',
    md: '120ms',
    lg: '180ms',
  },
} as const;

export type MotionToken = keyof typeof motion;
