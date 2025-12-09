import { Suspense } from "react";
import { HeadingMain } from "../../typography";
import GradientBg from "../../bgOverlays/GradientBg";
import EventCard from "./EventCard";
import Slider from "../../slider/Slider";

const FetchEventsData = async () => {
  "use server";
  const url = "http://localhost:4000/events";
  const response = await fetch(url);

  if (!response.ok) {
    return <div>Error fetching events: {response.status}</div>;
  }

  const events = await response.json();

  return (
    <div className="w-full md:flex gap-5">
      {events.slice(0, 2).map((event, index) => (
        <div
          key={event.id}
          className={index === 1 ? "hidden md:block w-full" : "w-full"}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default function Events() {
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
          <Suspense fallback={<div>Loading events...</div>}>
            <FetchEventsData />
          </Suspense>
          <div>
            <Slider />
          </div>
        </div>
      </GradientBg>
    </section>
  );
}
