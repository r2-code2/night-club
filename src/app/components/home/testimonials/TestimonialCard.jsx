import SoMe from "../../socials/Socials";

import { HeadingSecondary, Caption } from "../../typography/Typography";

const TestimonialCard = ({image, name, text}) => {
 console.log("IMAGE PROP:", image, "NAME:", name);
  return (
    <div className="text-center flex flex-col  justify-center items-center gap-5 mt-12 mb-8">
      <img
        src={image}
        width={200}
        height={200}
        alt={`Portait of ${name}`}
        className=""
      />
      <div className="*:py-2 mb-2 max-w-[102ch]">
        <HeadingSecondary text={name} />
        <Caption text={text}/>
      </div>
      <SoMe />
    </div>
  );
};

export default TestimonialCard;
