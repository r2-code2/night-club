"use server";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Caption, HeadingSecondary } from "../typography";
import BlogFull1 from "../../assets/content-img/blog_full1.jpg";
import BlogFull2 from "../../assets/content-img/blog_full2.jpg";
import BlogFull3 from "../../assets/content-img/blog_full3.jpg";
import MainButton from "../buttons/MainButton";
import ErrorMessages from "../errormessages/ErrorMessages";

const BlogPost = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <FetchBlogPost />
    </Suspense>
  );
};

const imageMap = {
  "blog_full1.jpg": BlogFull1,
  "blog_full2.jpg": BlogFull2,
  "blog_full3.jpg": BlogFull3,
};

const FetchBlogPost = async () => {
  try {
    const url = "http://localhost:4000/blogposts/?embed=comments";
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
    }

    const data = await response.json();

    const posts = Array.isArray(data) ? data : data?.posts ?? [];

    const directions = ["flex", "flex-row-reverse"];
    const paddings = ["md:pr-30 pl-5", "md:pl-30 pr-5"];

    if (!posts || posts.length === 0) {
      return <div>No posts available</div>;
    }

    return posts.map((post, index) => {
      const direction = directions[index % directions.length];
      const padding = paddings[index % paddings.length];
      const filename = post.asset?.url?.split("/").pop();
      const imageSrc = imageMap[filename] || BlogFull1;

      return (
        <section href={`/detalje/${post.id}`} key={post.id ?? index} className={`grid group md:flex ${direction}`}>
          <Image src={imageSrc} alt={post.title} width={300} height={200} className="self-stretch w-full object-cover basis-0 grow" />
          <div className=" basis-0 grow">
            <div className={`grid py-10 ${padding}`}>
              <HeadingSecondary text={post.title} />
              <Caption text={`By: ${post.author} / ${post.comments.length > 1 ? post.comments.length + " comments" : "1 comment"} / 16. November 2016`} color="pink" />
              <Caption text={post.content} wordLimit={70} />
              <Link href={`/detalje/${post.id}`} key={post.id ?? index} className="justify-self-center w-50 md:justify-self-end ">
                <MainButton text="read more" styling="col-span-full w-full mt-5 md:w-50 justify-self-center" />
              </Link>
            </div>
          </div>
        </section>
      );
    });
  } catch (error) {
    console.error("Blog fetch failed:", error);

    return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
  }
};

export default BlogPost;
