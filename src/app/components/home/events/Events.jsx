"use client";

import { useEffect, useState } from "react";
import { HeadingMain } from "../../typography";
import GradientBg from "../../bgOverlays/GradientBg";
import EventCard from "./EventCard";
import Slider from "../../slider/Slider";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hent events fra API
  useEffect(() => {
    async function loadEvents() {
      const res = await fetch("http://localhost:4000/events");
      const data = await res.json();
      setEvents(data || []);
    }

    loadEvents();
  }, []);

  // Lav slides med 2 events i hver (0-1, 2-3, 4-5, ...)
  const slides = [];
  for (let i = 0; i < events.length; i += 2) {
    slides.push(events.slice(i, i + 2));
  }

  return (
    <section className="h-fit col-(--full-col) grid grid-cols-subgrid">
      <GradientBg>
        <div className="col-(--content-col)">
          <div className="h-50 flex items-center">
            <HeadingMain
              color="white"
              text="events of the month"
            />
          </div>

          {/* KARUSEL – kun hvis vi har data */}
          {slides.length > 0 && (
            <div className="w-full mt-6">
              {/* Ydre container der styrer højde + overlap */}
              <div className="relative w-full overflow-hidden">
                {/* 1) FAKE SLIDE – usynlig, men giver højde (én række kort) */}
                <div className="invisible">
                  <div className="w-full md:grid md:grid-cols-2 gap-5">
                    {slides[0].map((event, idx) => (
                      <div
                        key={`sizing-${event.id}`}
                        className={
                          idx === 1 ? "hidden md:block w-full" : "w-full"
                        }>
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
                    }}>
                    {slides.map((slideEvents, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="min-w-full ">
                        <div className="w-full md:flex gap-5">
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
              </div>
            </div>
          )}

          {/* Dots slider – samme som i testimonials */}
          <Slider
            currentIndex={currentIndex}
            onChange={setCurrentIndex}
          />
        </div>
      </GradientBg>
    </section>
  );
}
