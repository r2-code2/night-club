import HeroSection from "@/app/components/HeroSection/HeroSection";
import { Suspense } from "react";
import Image from "next/image";
import BlogFull1 from "../../../assets/content-img/blog_full1.jpg";
import BlogFull2 from "../../../assets/content-img/blog_full2.jpg";
import BlogFull3 from "../../../assets/content-img/blog_full3.jpg";
import Link from "next/link";
import { Caption, HeadingSecondary } from "@/app/components/typography";

export default function BlogPost({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct params={params} />
    </Suspense>
  );
}
const imageMap = {
  "blog_full1.jpg": BlogFull1,
  "blog_full2.jpg": BlogFull2,
  "blog_full3.jpg": BlogFull3,
};
const FetchProduct = async ({ params }) => {
  "use server";
  const { id } = await params;
  const response = await fetch(`http://localhost:4000/blogposts/${id}`);
  const post = await response.json();
  const filename = post.asset?.url?.split("/").pop();
  const imageSrc = imageMap[filename] || BlogFull1;

  // fallback to BlogFull1 if not found
  return (
    <main className="grid col-(--full-col) grid-cols-subgrid">
      <HeroSection text="blog post" />
      <div className="col-(--full-col) grid grid-cols-subgrid md:mt-15 gap-10">
        <Image src={imageSrc} alt={post.title} width={300} height={200} className=" md:col-(--content-col) col-(--full-col) self-stretch w-full object-cover basis-0 grow" />
        <div className=" col-(--content-col) grid gap-3">
          <HeadingSecondary text={post.title} />
          <Caption text={`By: ${post.author} / 3 Comments / 16. November 2016`} color="pink" />
          <Caption text={post.content} />
        </div>
      </div>
    </main>
  );
};
