import BlogPostSingel from "@/app/components/blogpage/BlogPostSingel";
import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/HeroSection/HeroSection";
export default async function BlogPost({ params }) {
  const { id } = await params;
  return (
    <>
      <Header />
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="blog post" />
        <BlogPostSingel id={Number(id)} />{" "}
      </main>
    </>
  );
}
