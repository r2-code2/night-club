"use client";
import { motion } from "framer-motion";
import { Subheading } from "../../typography";
import { FaPlay } from "react-icons/fa";
const TracksOverlay = ({ title, image, song, setImage, setSong, setTitle }) => {
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
        className="flex h-full w-full absolute bottom-0 left-0  bg-black/50  flex-col justify-center lg:justify-between items-center "
        onClick={() => {
          setImage(image);
          setSong(song);
          setTitle(title);
        }}
      >
        <div className="border-4 mt-18 *:pl-1 rounded-full p-1 w-10 h-10 grid justify-center items-center cursor-pointer hover:border-accent text-accent">
          <FaPlay size={20} />
        </div>
        <div className="bg-black w-full py-2 text-center px-6 gap-2 hidden lg:block">
          <Subheading color="pb-2 uppercase" text={title} />
        </div>
      </motion.div>
    </>
  );
};

export default TracksOverlay;
