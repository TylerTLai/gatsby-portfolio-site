export const fullNameVariants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // type: "spring",
     
      when: "beforeChildren",
      staggerChildren: 0.1,
      // stiffness: 300,
    },
  },
  hover: {
    x: [1, -7, 1, -7, 1],
    transition: {duration: .5}
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
