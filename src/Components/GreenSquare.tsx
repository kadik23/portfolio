import { motion } from "framer-motion";

export const GreenSquare = ({ isActive }: {isActive:boolean}) => {
    return (
      <motion.div
        animate={{
          x: isActive ? '100%' : '0%',
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        className="w-auto h-auto bg-green rounded-full absolute bottom-0 left-0"
      />
    );
  };