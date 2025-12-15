"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MotionLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className=" inset 0 z-100 flex justify-center items-center w-screen h-screen bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}>
          <motion.img src="/assets/icon/music_loader.gif" ></motion.img>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotionLoader;
