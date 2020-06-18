export const nameVariants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300 },
  },
  hover: {
    scale: 1.05,
  },
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

