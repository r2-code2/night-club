"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionLoader = () => {
  //  Idé fra AI til at bruge 'useState' til at skjule animationen
  const [show, setShow] = useState(true);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="inset-0 z-100 flex justify-center items-center w-screen h-screen bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          //  Idé fra AI til at bruge 'onAnimationComplete'
          onAnimationComplete={() => setShow(false)}>
          <motion.img src="/assets/icon/music_loader.gif" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotionLoader;
