export const transitions = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { amount: 0.6, once: false },
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
