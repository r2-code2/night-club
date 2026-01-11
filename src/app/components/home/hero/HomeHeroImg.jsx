"use server";

import HomeHeroAnimation from "./HomeHero";
import MusicLoader from "./MusicLoader";
import { Suspense } from "react";

const HomeHero = () => {
  const images = ["/assets/bg/header_bg_1.jpg", "/assets/bg/header_bg_2.jpg"];

  const image = images[Math.floor(Math.random() * images.length)];
  return (
    <Suspense fallback={<MusicLoader />}>
      <HomeHeroAnimation image={image} />
    </Suspense>
  );
};

export default HomeHero;
