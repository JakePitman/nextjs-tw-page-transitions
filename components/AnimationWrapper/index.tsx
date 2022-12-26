import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const AnimationWrapper = ({ children }: Props) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{ type: "tween" }}
  >
    {children}
  </motion.div>
);
export default AnimationWrapper;
