import HomeHero from "./components/home/hero/HomeHero";
import Events from "./components/home/events/Events";
import Gallery from "./components/home/gallery/Gallery";
import RecentBlog from "./components/home/recentblog/RecentBlog";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
        <Events />

        <Gallery />
        <RecentBlog />
      </main>
    </>
  );
}
