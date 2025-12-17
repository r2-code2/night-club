import axios from "axios";
import EventsCarousel from "./EventsCarousel";
import { Suspense } from "react";

export default async function Events() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchEvents />
    </Suspense>
  );
}

const FetchEvents = async () => {
  let events = [];
  try {
    const res = await axios.get("http://localhost:4000/events");
    events = res.data || [];
    return <EventsCarousel initialEvents={events} />;
  } catch (error) {
    console.error("Blog fetch failed:", error);
    return (
      <ErrorMessages message="We’re having some trouble loading this data, try again later!" />
    );
  }
};
