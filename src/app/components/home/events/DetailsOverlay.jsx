"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Caption, HeadingSecondary } from "../../typography";

const details = ({ event }) => {
      const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
      variants={overlayVariants}
        initial="hidden"
        whileHover="visible"
        className="h-full w-full  absolute bottom-0 left-0  bg-black/40 flex flex-col justify-between items-center ">
        <Link href="/book">
          <button className="bg-accent w-30 h-10 mt-25 cursor-pointer z-12">
            Book Now
          </button>
        </Link>

        <div className="bg-black w-full py-5 px-6 gap-2 ">
          <HeadingSecondary
            color="pb-2"
            text={event.title}
          />
          <Caption
            text={event.description}
            wordLimit={30}
          />
        </div>
      </motion.div>
    </>
  );
};

export default details;
