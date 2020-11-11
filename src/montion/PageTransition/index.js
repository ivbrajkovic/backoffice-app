// Page transition

import PropTypes from "prop-types";

// Framer motion
import { motion } from "framer-motion";

// Transition variants
import { pageStyle, pageVariants } from "./variants";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
    >
      {children}
    </motion.div>
  );
};
PageTransition.propTypes = { children: PropTypes.element.isRequired };

export default PageTransition;
