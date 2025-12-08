import { HeadingMain } from "../../typography";
import WelcomeCard from "./WelcomeCard";
import PatternBg from "../../bgOverlays/PatternBg";

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
            />
            <WelcomeCard
              imgUrl="reastaurant_1.jpg"
              altText="Serving food in restaurant area"
            />
            <WelcomeCard
              imgUrl="thumb2.jpg"
              altText="People at the bar in nightclub"
            />
          </div>
        </div>
      </PatternBg>
    </section>
  );
}
