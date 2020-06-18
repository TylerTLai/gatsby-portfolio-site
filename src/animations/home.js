export const fullNameVariants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
  hover: {
    x: [1, -7, 1, -7, 1],
    transition: { duration: 0.4 },
  },
}

export const nameVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
}

export const userExperienceVariants = {
  initial: {
    backgroundColor: "white",
  },
  hover: {
    backgroundColor: "black",
    color: "white",
  },
}

export const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    opacity: 1,
    scale: 1.1,
    backgroundColor: "black",
  },
}
