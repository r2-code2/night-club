import SoMe from "../socials/Socials";
import Image from "next/image";
import { HeadingSecondary, Caption } from "../typography";

const testimonials = () => {
  let image = "/assets/content-img/testimonial_1.jpg";
  return (
    <div className="text-center flex flex-col  justify-center items-center gap-5 mt-12 mb-8">
      <Image
        src={image}
        width={200}
        height={200}
        alt="Portrait image"
        className=""
      />
      <div className="*:py-2 mb-2 max-w-[102ch]">
        <HeadingSecondary text="Alex" />
        <Caption
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by 
injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarassing hidden in the middle of the text."
        />
      </div>
      <SoMe />
    </div>
  );
};

export default testimonials;
