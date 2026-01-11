"use client";

import { motion } from "framer-motion";
import { HeroSubheading } from "../../typography";
import MusicLoader from "./MusicLoader";
import { useState, useEffect } from "react";

export default function HomeHero({image}) {

  const [hideCursor, setHideCursor] = useState(true);

  useEffect(() => {

    // Extra lækker animation med skjult cursor
    const timer = setTimeout(() => setHideCursor(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-screen relative h-screen col-(--full-col) grid-cols-subgrid grid overflow-hidden ${
        hideCursor ? "cursor-none" : "cursor-auto"
      }`}
      id="hero">
      <MusicLoader />

      <motion.img
        src={image}
        alt="Background image"
        className="bg-black absolute inset-0 col-(--full-col) object-cover row-span-full  min-w-screen  h-screen scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, ease: "anticipate", type: "tween" }}
      />

      <div className="relative inset-0 flex flex-col justify-center items-center col-(--full-col)">
        <motion.div style={{ perspective: 800 }}>
          <motion.img
            src="/assets/icon/Logo.svg"
            alt="Logo"
            className=" ~w-100/170"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeIn",
              type: "tween",
              delay: 1,
            }}
            style={{
              transformOrigin: "top",
              // Fandt frem til 'transformStyle: preserve-3d' vha. AI
              transformStyle: "preserve-3d",
              display: "inline-block",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col w-full items-center justify-center mt-6">
          <HeroSubheading
            color="white mt-4 ml-2"
            text="have a good time"
          />
          <motion.img
            src="/assets/bottom_line2.png"
            alt="Pink neon glow bottom line"
            width={300}
            height={24}
          />
        </motion.div>
      </div>
    </div>
  );
}
