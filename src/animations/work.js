export const containerVariants = {
  initial: {
    opacity: 0,
    y: -50,
    scale: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  },
}

export const mainVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 0.3 },
  },
}
