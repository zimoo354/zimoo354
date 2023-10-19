export const pageTransitions = {
  fadeOutIn: {
    initial: {
      y: -15,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -15,
      opacity: 0,
    },
    transition: {
      duration: 0.25,
      delay: 0.15,
    },
  },
};
