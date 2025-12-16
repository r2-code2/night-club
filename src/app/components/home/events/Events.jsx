import axios from "axios";
import EventsCarousel from "./EventsCarousel";

export default async function Events() {
  let events = [];
  try {
    const res = await axios.get("http://localhost:4000/events");
    events = res.data || [];
  } catch (err) {
    console.error("Failed to fetch events:", err);
  }
  return <EventsCarousel initialEvents={events} />;
}
