"use client";

import { useState } from "react";
import PartyBg from "../../bgoverlays/PartyBg";
import Slider from "../../slider/Slider";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials({ testimonials = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  let content = null;

  if (testimonials.length > 0) {
    content = (
      <div className="w-full overflow-hidden mt-12">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-full flex justify-center">
              <TestimonialCard image={t.asset?.url} name={t.name} text={t.content} />
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

        <Slider currentIndex={currentIndex} onChange={setCurrentIndex} />
      </PartyBg>
    </div>
  );
}
