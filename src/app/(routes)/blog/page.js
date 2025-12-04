import BlogList from "@/app/components/blog/BlogList";
import HeroSection from "@/app/components/HeroSection/HeroSection";

export default function (Blog) {
  return (
    <main className="grid col-(--full-col) grid-cols-subgrid">
      <HeroSection text="blog" />
      <BlogList />
    </main>
  );
}
