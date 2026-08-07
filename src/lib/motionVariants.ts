// Shared Motion variants — keeps easing/duration consistent while letting each
// section pick a different entrance style instead of repeating one fade-up everywhere.
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: EASE },
};

export const slideInRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: EASE },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.45, ease: EASE },
};

export const imageReveal = {
  initial: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  animate: { opacity: 1, clipPath: 'inset(0 0 0% 0)' },
  transition: { duration: 0.7, ease: EASE },
};

// Per-index stagger delay helper — pass idx from a .map()
export const staggerDelay = (idx: number, step = 0.1, base = 0) => ({
  transition: { duration: 0.5, ease: EASE, delay: base + idx * step },
});

export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3, ease: EASE } },
};

export const buttonMotion = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: EASE },
};
