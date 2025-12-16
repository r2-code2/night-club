import { Suspense } from "react";
import Testimonials from "./Testimonials";

const FetchTestimonials = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Fetch />
    </Suspense>
  );
};
const Fetch = async () => {
  const url = "http://localhost:4000/testimonials";
  const response = await fetch(url);
  const data = await response.json();
  const testimonials = Array.isArray(data) ? data : data?.testimonials ?? [];

  return <Testimonials testimonials={testimonials} />;
};

export default FetchTestimonials;
