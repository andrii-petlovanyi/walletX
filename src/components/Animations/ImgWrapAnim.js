import { motion } from 'framer-motion';

const ImgWrapAnim = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ImgWrapAnim;
