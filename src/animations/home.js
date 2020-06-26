export const containerVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 160,
    },
  },
}

export const nameVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
}

export const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    opacity: 1,
    scale: 1.1,
    backgroundColor: "#1d1d1f",
  },
}
