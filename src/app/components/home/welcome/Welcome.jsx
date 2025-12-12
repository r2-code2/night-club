import { HeadingMain } from "../../typography";
import WelcomeCard from "./WelcomeCard";
import PatternBg from "../../bgOverlays/PatternBg";
import { GiGlassCelebration } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { MdMan4 } from "react-icons/md";

export default function Welcome() {
  return (
    <section className="col-(--full-col) grid grid-cols-subgrid py-20">
      <PatternBg>
        <div className="col-(--content-col) flex flex-col items-center gap-11">
          {/* Titel */}
          <HeadingMain
            color="white"
            text="WELCOME IN NIGHTCLUB"
          />

          {/* 3 billeder i række */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <WelcomeCard
              imgUrl="thumb1.jpg"
              altText="Table with food and drinks in nightclub"
              title="NIGHT CLUB"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
              icon={<MdMan4 />}
            />
       
            <WelcomeCard
              imgUrl="reastaurant_1.jpg"
              altText="Serving food in restaurant area"
              title= "RESTAURANT"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
              icon = {<BiDish />}
            />
            <WelcomeCard
              imgUrl="thumb2.jpg"
              altText="People at the bar in nightclub"
              title="BAR"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
              icon = {<GiGlassCelebration />}
             
            />
          </div>
        </div>
      </PatternBg>
    </section>
  );
}
