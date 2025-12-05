import HomeHero from "./components/home/hero/HomeHero";
import Events from "./components/home/events/Events";
import Gallery from "./components/home/gallery/Gallery";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
        <Events />

        <Gallery />
        <Testimonials />
      </main>
    </>
  );
}
