import { Caption, HeadingTertiary, BannerText } from "../../typography";
import NewsForm from "./NewsForm";

const NewsLetter = () => {
  return (
    <section className="grid gap-4 col-(--content-col) text-center my-40">
      <HeadingTertiary text="Want the latest night club news" />
      <div className="px-10 flex justify-center items-center gap-1">
        <BannerText text="Subscribe to our newsletter and never miss an" />{" "}
        <BannerText
          text=" Event"
          color="text-accent"
        />
      </div>
      <NewsForm />
    </section>
  );
};

export default NewsLetter;
