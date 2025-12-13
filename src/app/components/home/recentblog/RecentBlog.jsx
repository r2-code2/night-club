"use client";

import { HeadingMain } from "../../typography";
import RescentBlogPost from "./RecentBlogPost";
import PatternBg from "../../bgOverlays/PatternBg";

const RecentBlog = () => {
  return (
    <section className="col-(--content-col)">
      <PatternBg>
        <div className=" h-50 flex items-center">
          <HeadingMain color="white" text="Recent blog" />
        </div>
        <div className="grid md:flex gap-10 md:gap-5">
          <RescentBlogPost />
        </div>
      </PatternBg>
    </section>
  );
};

export default RecentBlog;
