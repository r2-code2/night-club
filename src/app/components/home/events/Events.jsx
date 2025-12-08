import { HeadingMain } from "../../typography";
import GradientBg from "../../bgOverlays/GradientBg";
import EventCard from "./EventCard";
import Slider from "../../slider/Slider";

export default function events() {
  return (
    <section className="h-fit col-(--full-col) grid grid-cols-subgrid">
      <GradientBg>
        <div className="col-(--content-col)">
          <div className="h-50 flex  items-center ">
            <HeadingMain
              color="white"
              text="events of the month"
            />
          </div>
          <div className=" md:flex gap-5">
            <EventCard imgUrl="event-thumb5.jpg" />
            <div className="hidden lg:block h-full w-full">
              <EventCard imgUrl="event-thumb5.jpg" />
            </div>
          </div>
          <div className="">
            <Slider />
          </div>
        </div>
      </GradientBg>
    </section>
  );
}
