export const containerVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#00adb5",
    color: "#f0f0f0",
    boxShadow: "0px 62px 29px -40px rgba(0, 0, 0, 0.4)",
  },
}

export const technologiesVariants = {
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
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },
}

export const technologyVariants = {
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
