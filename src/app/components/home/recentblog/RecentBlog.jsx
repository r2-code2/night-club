import { HeadingMain } from "../../typography";
import RescentBlogPost from "./RecentBlogPost";

const RecentBlog = () => {
  return (
    <section className="col-(--content-col)">
      <div className=" h-50 flex items-center">
        <HeadingMain color="white" text="Recent blog" />
      </div>
      <div className="grid md:flex gap-10 md:gap-5">
        <RescentBlogPost />
      </div>
    </section>
  );
};

export default RecentBlog;
