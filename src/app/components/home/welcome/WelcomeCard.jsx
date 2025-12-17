import Image from "next/image";
import WelcomeOverlay from "./WelcomeOverlay";
import HoverFrame from "../../frames/Triangles";

export default function WelcomeCard({
  imgUrl,
  altText,
  title,
  description,
  icon,
}) {
  return (
    <div className="relative w-full">
      <HoverFrame>
        <Image
          src={`/assets/content-img/${imgUrl}`}
          width={1000}
          height={1000}
          alt={altText}
          className="w-full object-cover"
        />

        <WelcomeOverlay
          icon={icon}
          description={description}
          title={title}
        />
      </HoverFrame>
    </div>
  );
}
