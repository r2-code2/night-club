"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PartyBg from "../bgOverlays/PartyBg";
import Slider from "../slider/Slider";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {

  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // hvilket kort vi viser lige nu (index 0 = første person)
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

 const current = testimonials[currentIndex];
 console.log("CURRENT TESTIMONIAL:", current);


  return (
    <div className="col-(--full-col) grid grid-cols-subgrid h-full">
      <PartyBg>

        {isLoading && (
          <p className="text-white mt-12">Loading testimonials...</p>
        )}

        {error && (
          <p className="text-red-400 mt-12">Loading failed</p>
        )}

        {current && (
          <TestimonialCard 
            image={current.asset?.url}
            name={current.name}
            text={current.content}
          />
        )}

      </PartyBg>
    </div>
  );
}