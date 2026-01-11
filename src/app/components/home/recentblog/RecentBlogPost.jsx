import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { Caption, HeadingSecondary } from "../../typography";
import ErrorMessages from "../../errormessages/ErrorMessages";

const RescentBlogPost = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <FetchRecentBlogPost />
    </Suspense>
  );
};

const FetchRecentBlogPost = async () => {
  try {
    const url = "http://localhost:4000/blogposts/?embed=comments";
    const response = await fetch(url);
    const data = await response.json();
    const posts = Array.isArray(data) ? data : data?.posts ?? [];

    return posts.map((post, index) => {
      const filename = post.asset?.url?.split("/").pop();

      return (
        <Link href={`/detalje/${post.id}`} key={post.id ?? index} className={`grid gap-3 cursor-pointer`}>
          <Image src={`/assets/content-img/${filename}`} alt={post.title} width={200} height={200} className="self-stretch w-full object-cover" />
          <div className="grid gap-2 pr-15">
            <HeadingSecondary text={post.title} wordLimit={4} />
            <Caption text={`By: ${post.author} / ${post.comments.length > 1 ? post.comments.length + " comments" : "1 comment"} / 16. November 2016`} color="pink" />
            <Caption text={post.content} wordLimit={15} color="mt-4" />
          </div>
        </Link>
      );
    });
  } catch (error) {
    return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
  }
};

export default RescentBlogPost;
