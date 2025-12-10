import HomeHero from "./components/home/hero/HomeHero";
import Header from "./components/header/Header";
import Events from "./components/home/events/Events";
import Gallery from "./components/home/gallery/Gallery";
import Welcome from "./components/home/welcome/Welcome";
import LatestVideo from "./components/home/video/LatestVideo";
import RecentBlog from "./components/home/recentblog/RecentBlog";
import Testimonials from "./components/home/testimonials/Testimonials";
import NewsLetter from "./components/home/newsletter/NewsLetter";

export default function Home() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HomeHero />
        <Header />
        <Welcome />
        <Events />
        <Gallery />
        <LatestVideo />
        <Testimonials />
        <RecentBlog />
        <NewsLetter />
      </main>
    </>
  );
}
