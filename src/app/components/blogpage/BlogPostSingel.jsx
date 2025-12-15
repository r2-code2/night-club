"use client";

import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import ErrorMessages from "@/app/components/errormessages/ErrorMessages";
import Image from "next/image";
import { Caption, HeadingSecondary, HeadingXL, Subheading } from "@/app/components/typography";
import CommentForm from "./CommentForm";
import BlogFull1 from "../../assets/content-img/blog_full1.jpg";
import BlogFull2 from "../../assets/content-img/blog_full2.jpg";
import BlogFull3 from "../../assets/content-img/blog_full3.jpg";
const BlogPostSingel = ({ id }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct id={id} />
    </Suspense>
  );
};
const imageMap = {
  "blog_full1.jpg": BlogFull1,
  "blog_full2.jpg": BlogFull2,
  "blog_full3.jpg": BlogFull3,
};
const FetchProduct = ({ id }) => {
  "use client";
  const [post, setIsPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadBlog() {
      try {
        const response = await axios.get(`http://localhost:4000/blogposts/${id}?embed=comments`);
        setIsPost(response.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadBlog();
  }, []);
  if (isLoading) return <ErrorMessages message="Loading..." />;
  if (error) return <ErrorMessages message="There´s been an error loading, try again later!" error="border bg-accent/50" />;
  if (post.length === 0) return <ErrorMessages message="No posts found" error="border bg-accent/50" />;

  const filename = post.asset?.url?.split("/").pop();
  const imageSrc = imageMap[filename] || BlogFull1; // fallback to BlogFull1 if not found

  return (
    <>
      <div className="col-(--full-col) grid grid-cols-subgrid md:mt-15">
        <Image src={imageSrc} alt={post.title} width={300} height={200} className=" md:col-(--content-col) col-(--full-col) self-stretch w-full object-cover mb-8" />
        <div className=" col-(--content-col) grid gap-8">
          <div className="grid gap-3">
            <HeadingSecondary text={post.title} />
            <Caption text={`By: ${post.author} / ${(post?.comments?.length || 0) === 1 ? "1 comment" : `${post?.comments?.length || 0} comments`} / 16. November 2016`} color="pink" />
          </div>
          <Caption text={post.content} />
        </div>
      </div>
      <div className="col-(--content-col)">
        <FetchComment id={post.id} />
        <CommentForm id={post.id} />
      </div>
    </>
  );
};

const FetchComment = ({ id }) => {
  "use client";
  const [post, setIsPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function loadComments() {
      try {
        const response = await axios.get(`http://localhost:4000/blogposts/${id}?embed=comments`);
        setIsPost(response.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadComments();
  }, []);
  if (isLoading) return <ErrorMessages message="Loading..." />;
  if (error) return <ErrorMessages message="There´s been an error loading, try again later!" error="border bg-accent/50" />;
  if (post.length === 0) return <ErrorMessages message="No posts found" error="border bg-accent/50" />;
  return (
    <div className={`col-(--content-col) gap-5 my-10 ${(post?.comments?.length || 0) === 0 ? "hidden" : "grid"}`}>
      <HeadingXL text={(post?.comments?.length || 0) === 1 ? "1 comment" : `${post?.comments?.length || 0} comments`} />{" "}
      {post?.comments?.map((comment) => {
        if (!comment.date) {
          console.warn("Comment missing date:", comment);
          return null;
        }
        const getDate = comment.date.split("T")[0];
        const [year, month, day] = getDate.split("-");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const formattedDate = `${day}. ${months[month - 1]} ${year}`;
        return (
          <div key={comment.id} className="grid gap-5">
            <div className="flex gap-3 items-baseline">
              <Subheading text={`${comment.name} - `} />
              <Caption text={`Posted ${formattedDate}`} color="pink" />
            </div>
            <Caption text={comment.content} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPostSingel;
