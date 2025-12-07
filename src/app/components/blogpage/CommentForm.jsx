import MainButton from "../buttons/MainButton";
import { Caption, HeadingXL } from "../typography";

const CommentForm = () => {
  return (
    <div className="my-20">
      <HeadingXL text="leave a comment" />
      <form className="grid md:grid-cols-2 col-(-content-col)  py-4 gap-4">
        <input type="text" className="border w-full h-full md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Name" />
        <input type="text" className="border w-full h-full md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Email" />
        <textarea type="text" className="border md:p-4 w-full col-span-full h-80 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Comment" />
        <MainButton text="submit" styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default CommentForm;
