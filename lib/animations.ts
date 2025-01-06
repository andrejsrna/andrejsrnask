import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

export const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut"
    }
  }
};

export const crazyButtonVariants: Variants = {
  normal: { 
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0
  },
  crazy: {
    scale: [1, 1.2, 0.8, 1.4, 0.9, 1],
    rotate: [0, 45, -45, 180, -180, 0],
    x: [0, 50, -50, 20, -20, 0],
    y: [0, -30, 30, -15, 15, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    }
  }
};

// ... other variants 