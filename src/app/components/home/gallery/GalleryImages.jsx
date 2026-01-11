"use client";

import { HeadingMain } from "../../typography";
import { motion } from "framer-motion";
import Triangles from "../../frames/Triangles";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/shadcncomponents/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/shadcncomponents/ui/dialog";

const GalleryImages = ({ isImage }) => {
  const [isActive, setActive] = useState(0);
  return (
    <div className="col-(--full-col) grid grid-cols-subgrid">
      <Dialog>
        <section className="w-screen h-full col-span-full grid-cols-subgrid">
          <div className=" h-50 flex items-center">
            <HeadingMain
              color="white"
              text="night club gallery"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 [&>*:nth-child(1)]:md:col-span-2 [&>*:nth-child(1)]:md-row-span-1 [&>*:nth-child(2)]:md:col-span-1 [&>*:nth-child(2)]:md-row-span-1  [&>*:nth-child(3)]:md:col-span-2 [&>*:nth-child(3)]:md-row-span-1 [&>*:nth-child(4)]:md:col-span-1 [&>*:nth-child(4)]:md-row-span-1 [&>*:nth-child(5)]:md:col-span-2 [&>*:nth-child(5)]:md-row-span-2 [&>*:nth-child(6)]:md:col-span-2 [&>*:nth-child(6)]:md-row-span-2 [&>*:nth-child(7)]:md:col-span-2 [&>*:nth-child(7)]:md-row-span-2 *:object-cover *:self-stretch ">
            {isImage.length > 0 &&
              isImage.slice(0, 7).map((img, index) => {
                const filename = img.asset.url.split("/").pop();
                return (
                  <DialogTrigger
                    asChild
                    key={img.id}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className="block w-full">
                      <Triangles>
                        <motion.div
                          className="h-65"
                          initial={{ x: -50, y: 0, opacity: 0 }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            transition: {
                              type: "tween",
                              duration: 1,
                              ease: "easeInOut",
                            },
                          }}>
                          <Image
                            key={img.id}
                            src={`/assets/content-img/${filename}`}
                            alt={
                              filename ||
                              img.description ||
                              `Gallery image ${img.id}`
                            }
                            className="w-full h-full object-cover hover:opacity-30"
                            width={1200}
                            height={800}
                          />
                          ;
                        </motion.div>
                      </Triangles>
                    </button>
                  </DialogTrigger>
                );
              })}
          </div>
        </section>
        <DialogContent className="w-full h-full bg-transparent p-0 border-none flex items-center justify-center">
          <DialogTitle></DialogTitle>
          <Carousel
            className="w-full"
            opts={{ startIndex: isActive, loop: true }}>
            <CarouselContent>
              {isImage.length > 0 &&
                isImage.slice(0, 7).map((img) => {
                  const filename = img.asset.url.split("/").pop();
                  return (
                    <CarouselItem
                      key={img.id}
                      className="w-500 h-100">
                      <Image
                        key={img.id}
                        src={`/assets/content-img/${filename}`}
                        alt={
                          filename ||
                          img.description ||
                          `Gallery image ${img.id}`
                        }
                        className="w-full h-full object-cover"
                        width={1200}
                        height={800}
                      />
                      ;
                    </CarouselItem>
                  );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryImages;
