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
        className="flex h-full w-full  absolute bottom-0 left-0  bg-black/50  flex-col justify-center lg:justify-between items-center ">
        <Link
          href="/book "
          className="lg:mt-25">
          <button className="bg-accent  w-30 h-10  cursor-pointer z-12  ">
            Book Now
          </button>
        </Link>

        <div className="bg-black w-full py-5 px-6 gap-2 hidden lg:block">
          <HeadingSecondary
            color="pb-2"
            text={event.title}
          />
          <Caption
            text={event.description}
            wordLimit={25}
          />
        </div>
      </motion.div>
    </>
  );
};

export default details;
