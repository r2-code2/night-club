"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionLoader = () => {
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="inset-0 z-100 flex justify-center items-center w-screen h-screen bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
          onAnimationComplete={() => setShow(false)}>
          <motion.img src="/assets/icon/music_loader.gif" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotionLoader;
