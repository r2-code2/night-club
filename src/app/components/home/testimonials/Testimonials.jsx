"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PartyBg from "../../bgOverlays/PartyBg";
import Slider from "../../slider/Slider";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await axios.get("http://localhost:4000/testimonials");
        setTestimonials(res.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadTestimonials();
  }, []);

  // vælg hvad vi vil vise
  let content = null;

  if (isLoading) {
    content = <p className="text-white mt-12">Loading testimonials...</p>;
  } else if (error) {
    content = <p className="text-red-400 mt-12">Loading failed</p>;
  } else if (testimonials.length > 0) {
    content = (
      <div className="w-full overflow-hidden mt-12">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-full flex justify-center"
            >
              <TestimonialCard
                image={t.asset?.url}
                name={t.name}
                text={t.content}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="col-(--full-col) grid grid-cols-subgrid h-full">
      <PartyBg>
        {content}

        <Slider
          currentIndex={currentIndex}
          onChange={setCurrentIndex}
        />
      </PartyBg>
    </div>
  );
}
