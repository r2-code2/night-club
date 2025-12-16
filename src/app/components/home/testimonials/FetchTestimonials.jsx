import { Suspense } from "react";
import Testimonials from "./Testimonials";
import ErrorMessages from "../../errormessages/ErrorMessages";

const FetchTestimonials = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Fetch />
    </Suspense>
  );
};
const Fetch = async () => {
  try {
    const url = "http://localhost:4000/testimonials";
    const response = await fetch(url);
    const data = await response.json();
    const testimonials = Array.isArray(data) ? data : data?.testimonials ?? [];
    if (!response.ok) {
      return <ErrorMessages message="We´re having some trouble loading this data, try again later!" />;
    }
    return <Testimonials testimonials={testimonials} />;
  } catch (error) {
    return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
  }
};

export default FetchTestimonials;
