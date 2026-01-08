"use client";

import { useState, useRef, useEffect } from "react";
import { HeadingMain } from "../../typography";
import GradientBg from "../../bgoverlays/GradientBg";
import EventCard from "./EventCard";
import Slider from "../../slider/Slider";

export default function EventsCarousel({ initialEvents }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  // Endelig får jeg prøvet at bruge useRef :D

  const slides = [];
  for (let i = 0; i < initialEvents.length; i += 2) {
    slides.push(initialEvents.slice(i, i + 2));
  }

  const handleScroll = () => {
    const slide = scrollRef.current;
    if (!slide) return;

    const index = Math.floor(
      (slide.scrollLeft + slide.clientWidth / 2) / slide.clientWidth
    );

    setCurrentIndex(index);
  };

  const handleDotChange = (index) => {
    const slide = scrollRef.current;
    if (!slide) return;
    slide.scrollTo({
      left: index * slide.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  return (
    <section
      className="col-(--full-col) grid grid-cols-subgrid"
      id="events">
      <GradientBg>
        <div className="col-(--content-col) flex flex-col">
          <div className="h-50 flex items-center">
            <HeadingMain
              color="white"
              text="events of the month"
            />
          </div>

          {slides.length > 0 && (
            <div className="w-full max-h-125 mt-6">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="
                  flex overflow-x-auto scroll-smooth
                  snap-x snap-mandatory
                  no-scrollbar  
                ">
                {slides.map((slideEvents, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full snap-start first:mr-5 last:ml-5">
                    <div className="w-full md:flex gap-5 ">
                      {slideEvents.map((event, idx) => (
                        <div
                          key={event.id}
                          className={
                            idx === 1 ? "hidden md:block w-full" : "w-full"
                          }>
                          <EventCard event={event} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Slider
            currentIndex={currentIndex ?? 0}
            onChange={handleDotChange}
          />
        </div>
      </GradientBg>
    </section>
  );
}
