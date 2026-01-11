import Header from "./components/header/Header";
import NewHomeHero from "./components/home/hero/NewHomeHero";
import Events from "./components/home/events/Events";
import Gallery from "./components/home/gallery/Gallery";
import Welcome from "./components/home/welcome/Welcome";
import LatestVideo from "./components/home/video/LatestVideo";
import RecentBlog from "./components/home/recentblog/RecentBlog";
import NewsLetter from "./components/home/newsletter/NewsLetter";
import NightClubTrack from "./components/home/tracks/NightClubTrack";
import FetchTestimonials from "./components/home/testimonials/FetchTestimonials";

export default function Home() {
  return (
    <main className="grid col-(--full-col) grid-cols-subgrid">
      <NewHomeHero />
      <Header />
      <Welcome />
      <Events />
      <Gallery />
      <NightClubTrack />
      <LatestVideo />
      <FetchTestimonials />
      <RecentBlog />
      <NewsLetter />
    </main>
  );
}
