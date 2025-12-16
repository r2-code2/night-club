import { Suspense } from "react";
import Image from "next/image";
import BlogFull1 from "../../../../public/assets/content-img/blog_full1.jpg";
import BlogFull2 from "../../../../public/assets/content-img/blog_full2.jpg";
import BlogFull3 from "../../../../public/assets/content-img/blog_full3.jpg";
import { Caption, HeadingSecondary, HeadingXL, Subheading } from "@/app/components/typography";
import CommentForm from "@/app/components/blogpage/CommentForm";
import ErrorMessages from "../errormessages/ErrorMessages";
export default function BlogPostSingel({ id }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FetchProduct id={id} />
    </Suspense>
  );
}
const imageMap = {
  "blog_full1.jpg": BlogFull1,
  "blog_full2.jpg": BlogFull2,
  "blog_full3.jpg": BlogFull3,
};
const FetchProduct = async ({ id }) => {
  try {
    const response = await fetch(`http://localhost:4000/blogposts/${id}?embed=comments`);
    const post = await response.json();
    const filename = post.asset?.url?.split("/").pop();
    const imageSrc = imageMap[filename] || BlogFull1;

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
          <Comments comments={post.comments} />
          <CommentForm />
        </div>
      </>
    );
  } catch (error) {
    console.error("Blog fetch failed:", error);

    return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
  }
};

const Comments = ({ comments }) => {
  try {
    return (
      <div className={`col-(--content-col)  gap-5 my-10 ${comments.length === 0 ? `hidden` : `grid`}`}>
        <HeadingXL text={comments.length === 1 ? `${comments.length} comment` : `${comments.length} comments`} />
        {comments.map((comment) => {
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
  } catch (error) {
    console.error("Blog fetch failed:", error);

    return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
  }
};
