import HomeHeroAnimation from "./HomeHeroAnimation";
import MusicLoader from "./MusicLoader";
import { Suspense } from "react";

const NewHomeHero = () => {
  const images = ["/assets/bg/header_bg_1.jpg", "/assets/bg/header_bg_2.jpg"];

  const image = images[Math.floor(Math.random() * images.length)];

  return (
    <Suspense fallback={<MusicLoader />}>
      <HomeHeroAnimation image={image} />
    </Suspense>
  );
};

export default NewHomeHero;
