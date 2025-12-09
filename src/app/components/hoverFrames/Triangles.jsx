"use client";

import { motion } from "framer-motion";

const Triangles = ({ children }) => {
  const triangleVariantsTopLeft = {
    hidden: { x: 0, y: -65 },
    visible: {
      x: 0,
      y: 0,

      transition: {
        type: "tween",
        visualDuration: 0.15,
      },
    },
  };

  const triangleVariantsBottomRight = {
    hidden: { x: 0, y: 65 },
    visible: {
      scale: 1,
      x: 1,
      y: 0,

      transition: {
        type: "tween",
        visualDuration: 0.15,
      },
    },
  };

  const outlineTop = {
    hidden: { x: 0, y: -2, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        damping: 30,
        stiffness: 200,
      },
    },
  };

  const outlineBottom = {
    hidden: { x: 0, y: 2, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        damping: 30,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="relative inline-block w-full -mb-2 overflow-hidden"
      initial="hidden"
      whileHover="visible">
      <motion.div
        variants={triangleVariantsTopLeft}
        className="absolute top-0 left-0 w-(--triangle-size-lg) h-(--triangle-size-lg) bg-accent [clip-path:polygon(0_0,100%_0,0_100%)] z-12"
      />
      <motion.div
        variants={outlineTop}
        className="absolute top-0 left-0 w-full h-0.5 bg-[#6a243b] z-11"
      />

      <div className="relative z-10 w-full h-full">{children}</div>

      <motion.div
        variants={outlineBottom}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6a243b] z-11"
      />
      <motion.div
        variants={triangleVariantsBottomRight}
        className="absolute bottom-0 right-0 w-(--triangle-size-lg) h-(--triangle-size-lg) bg-accent [clip-path:polygon(100%_100%,0_100%,100%_0)] z-12"
      />
    </motion.div>
  );
};

export default Triangles;
