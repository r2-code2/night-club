"use client";

import { useState } from "react";
import { HeadingMain } from "../../typography";
import GradientBg from "../../bgoverlays/GradientBg";
import EventCard from "./EventCard";
import Slider from "../../slider/Slider";

export default function EventsCarousel({ initialEvents }) {
  const [events] = useState(initialEvents);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < events.length; i += 2) {
    slides.push(events.slice(i, i + 2));
  }

  return (
    <section className="h-fit col-(--full-col) grid grid-cols-subgrid">
      <GradientBg>
        <div className="col-(--content-col)">
          <div className="h-50 flex items-center">
            <HeadingMain color="white" text="events of the month" />
          </div>

          {slides.length > 0 && (
            <div className="w-full mt-6">
              <div className="relative w-full overflow-hidden">
                <div className="invisible">
                  <div className="w-full md:grid md:grid-cols-2 gap-5">
                    {slides[0].map((event, idx) => (
                      <div key={`sizing-${event.id}`} className={idx === 1 ? "hidden md:block w-full" : "w-full"}>
                        <EventCard event={event} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0">
                  <div
                    className="flex flex-nowrap h-full transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                  >
                    {slides.map((slideEvents, slideIndex) => (
                      <div key={slideIndex} className="min-w-full ">
                        <div className="w-full md:flex gap-5">
                          {slideEvents.map((event, idx) => (
                            <div key={event.id} className={idx === 1 ? "hidden md:block w-full" : "w-full"}>
                              <EventCard event={event} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <Slider currentIndex={currentIndex} onChange={setCurrentIndex} />
        </div>
      </GradientBg>
    </section>
  );
}
