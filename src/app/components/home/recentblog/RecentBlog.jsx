import { HeadingMain } from "../../typography";
import RescentBlogPost from "./RecentBlogPost";
import PatternBg from "../../bgOverlays/PatternBg";

const RecentBlog = () => {
  return (
    <PatternBg>
      <section className="grid col-(--content-col) overflow-hidden">
        <div className="h-50 flex items-center">
          <HeadingMain color="white" text="Recent blog" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          <RescentBlogPost />
        </div>
      </section>
    </PatternBg>
  );
};

export default RecentBlog;
