export const fullNameVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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
