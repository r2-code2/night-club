"use client";

import { motion } from "framer-motion";
import { Caption, HeadingSecondary } from "../../typography";

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
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* SELVE OVERLAY CARD */}
      <div className="relative w-full h-full bg-background border border-accent flex flex-col items-center justify-center px-8 py-10 text-center">

        {/* Icon box */}
        <div className="border border-accent w-20 h-20 flex items-center justify-center mb-6">
          <span className="text-accent text-3xl">
            {icon}
          </span>
        </div>

        {/* Title */}
        <HeadingSecondary text={title} />

        {/* Text */}
        <div className="mt-4 max-w-[36ch]">
          <Caption text={description} />
        </div>
      </div>
    </motion.div>
  );
}
