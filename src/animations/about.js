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

export const mainVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.3 },
  },
}

export const skillsVariants = {
  initial: {
    opacity: 0,
    y: -50,
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.4, duration: 0.3, staggerChildren: 0.07 },
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
