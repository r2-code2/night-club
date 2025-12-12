"use client";

import { motion } from "framer-motion";
import { Caption, HeadingSecondary } from "../../typography";
const MotionHeadingSecondary = motion(HeadingSecondary);

export default function WelcomeOverlay({ icon, description, title }) {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      whileHover="visible"
      className="absolute inset-0 flex items-center justify-center">
      {/* SELVE OVERLAY CARD */}
     <div className="relative w-full h-full bg-background border border-accent flex flex-col items-center justify-center px-8 py-10 text-center">

        {/* Icon */}
       <motion.div
        variants={{
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="border border-accent w-20 h-20 flex items-center justify-center mb-6">
        <span className="text-accent text-3xl">
        {icon}
        </span>
        </motion.div>


        {/* Title */}
     <motion.h2
        variants={{
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
            }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-white text-2xl">
         {title}
    </motion.h2>




        {/* description */}
<motion.p
  variants={{
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="mt-4 max-w-[36ch]"
>
  {description}
</motion.p>





     </div>
    </motion.div>
  );
}
