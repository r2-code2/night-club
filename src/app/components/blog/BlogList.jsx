import BlogNav from "./BlogNav";
import BlogPost from "./BlogPost";

const BlogList = () => {
  return (
    <div className="col-(--full-col) md:py-20">
      <BlogPost />
      <BlogNav />
    </div>
  );
};

export default BlogList;
