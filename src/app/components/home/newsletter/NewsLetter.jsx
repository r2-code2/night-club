import { Caption, HeadingSecondary } from "../../typography";
import NewsForm from "./NewsForm";

const NewsLetter = () => {
  return (
    <section className="grid gap-4 col-(--content-col) text-center my-40">
      <HeadingSecondary text="Want the latest night club news" />
      <div className="px-10">
        <Caption text="Subscribe to our newsletter and never miss an" /> <Caption text="Event" color="pink" />
      </div>
      <NewsForm />
    </section>
  );
};

export default NewsLetter;
