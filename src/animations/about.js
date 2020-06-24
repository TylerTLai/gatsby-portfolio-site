export const containerVariants = {
  initial: {
    opacity: 0,
    y: -50,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

export const skillsVariants = {
  initial: {
    opacity: 1,
    scale: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      // delay: 0.01,
      
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },
}

export const skillsItemVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    scale: 1.1,
    originX: 0,
    transition: { type: "spring", stiffness: 500 },
  },
}
