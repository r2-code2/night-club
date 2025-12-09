import Image from "next/image";
import { BannerText } from "../../typography";
import HoverFrame from "../../hoverFrames/Triangles";
import DetailsOverlay from "./DetailsOverlay";

export default function EventCard({ event }) {
  const dateFormat = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "numeric",
  });

  const timeFormat = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const date = dateFormat.format(new Date(event.date));
  const time = timeFormat.format(new Date(event.date));

  return (
    <div className="relative w-full">
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

      <div className="w-full h-10 bg-accent flex items-center justify-start gap-7 px-6">
        <BannerText text={date} />
        <BannerText
          style="uppercase"
          text={time}
        />
        <BannerText text={`${event.location}, New York`} />
      </div>
    </div>
  );
}
