"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Triangles from "../../frames/Triangles";
import { HeadingMain } from "../../typography";

const GalleryNew = () => {
  const span1Variant = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const span2Variant = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { transition: { staggerChildren: 0.02 } },
  };

  const images = [
    { id: 1, src: "/assets/content-img/gallery1_big.jpg", colSpan: 2 },
    { id: 2, src: "/assets/content-img/gallery2_big.jpg", colSpan: 1 },
    { id: 3, src: "/assets/content-img/gallery3_big.jpg", colSpan: 2 },
    { id: 4, src: "/assets/content-img/gallery4_big.jpg", colSpan: 1 },
    { id: 5, src: "/assets/content-img/gallery5_big.jpg", colSpan: 2 },
    { id: 6, src: "/assets/content-img/gallery6_big.jpg", colSpan: 2 },
    { id: 7, src: "/assets/content-img/gallery7_big.jpg", colSpan: 2 },
  ];

  const firstRow = images.filter((img) => img.id < 5);
  const secondRow = images.filter((img) => img.id >= 5);

  return (
    <div
      className="col-(--full-col) h-[2400px] md:h-[500px] mb-50"
      id="gallery">
      <div className=" h-50 flex items-center">
        <HeadingMain
          color="white"
          text="night club gallery"
        />
      </div>
      <motion.div
        className="w-full h-full grid md:grid-cols-6 grid-cols-2 md:grid-rows-2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}>
        <motion.div
          className="contents"
          variants={containerVariant}>
          {firstRow.map((img, index) => {
            const variant = img.colSpan === 2 ? span2Variant : span1Variant;
            const rowSpanClass =
              index === 1 || index === 3
                ? "row-span-2 md:row-span-1"
                : "row-span-1";
            const colSpanClass =
              img.colSpan === 2 ? "col-span-2" : "md:col-span-1 col-span-2";

            return (
              <motion.div
                key={img.id}
                className={` ${colSpanClass} ${rowSpanClass}`}
                variants={variant}>
                <Triangles>
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover w-full h-full"
                  />
                </Triangles>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          className="contents"
          variants={containerVariant}>
          {secondRow.map((img) => (
            <motion.div
              key={img.id}
              className="col-span-2 md:row-start-2"
              variants={span2Variant}>
              <Triangles>
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover w-full h-full"
                />
              </Triangles>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GalleryNew;
