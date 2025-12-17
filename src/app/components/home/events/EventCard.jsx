import Image from "next/image";
import { BannerText } from "../../typography";
import HoverFrame from "../../frames/Triangles";
import DetailsOverlay from "./DetailsOverlay";

export default function EventCard({ event }) {
  const dateFormat = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
  });

  const timeFormat = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const eventDate = event?.date ? new Date(event.date) : null;
  const isValidDate = eventDate && !isNaN(eventDate.getTime());

  const date = isValidDate ? dateFormat.format(eventDate) : "TBD";
  const time = isValidDate ? timeFormat.format(eventDate) : "--:--";

  return (
    <div className="relative  mb-10 w-full">
      <HoverFrame>
        <Image
          src={`/assets/content-img/event-thumb${event.id}.jpg`}
          alt={event.title || "Event image"}
          width={403}
          height={570}
          className="w-full h-full object-cover"
        />
        <DetailsOverlay
          key={event.id}
          event={event}
        />
      </HoverFrame>

      <div className="w-full h-fit py-2 md:py-3 flex-2 bg-accent flex items-center justify-start gap-7 px-6">
        <BannerText
          text={date}
          color="text-nowrap"
        />
        <BannerText
          color="uppercase text-nowrap"
          text={time}
        />
        <BannerText text={`${event.location}, New York`} />
      </div>
    </div>
  );
}
