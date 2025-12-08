"use client";

import { motion } from "framer-motion";

const Triangles = ({ children }) => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover="hover" // parent hover triggers children
    >
      {/* Top-left triangle */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          absolute top-0 left-0
          w-8 h-8 bg-pink-500
          [clip-path:polygon(0_0,100%_0,0_100%)]
          z-20
        "></motion.div>

      {/* Bottom-right triangle */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          absolute bottom-0 right-0
          w-8 h-8 bg-pink-500
          [clip-path:polygon(100%_100%,0_100%,100%_0)]
          z-20
        "></motion.div>

      {/* Children */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Triangles;
