// Transition variants

// Page CSS style
export const pageStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

// Transition
export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Variants
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },

  /** ******************************
      Simple zoom-fade-in-out
   */
  in: {
    opacity: 1,
    scale: 1,
    transition: {
      ...pageTransition,
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 0.9,
    transition: {
      ...pageTransition,
      duration: 0.3,
    },
  },

  /** ******************************
      Spring zoom-fade-in-out
   */
  in1: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      velocity: 1,
    },
  },
  out1: {
    opacity: 0,
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 50,
      velocity: 1,
    },
  },
};
