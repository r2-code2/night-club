import Image from "next/image";
import HeroBackground1 from "../../../assets/bg/header_bg_1.jpg";
import HeroBackground2 from "../../../assets/bg/header_bg_2.jpg";
import Logo from "../../../assets/icon/Logo.svg";
import BottomLineSmall from "../../../assets/bottom_line2.png";
import BottomLineLarge from "../../../assets/bottom_line.png";
import { HeroSubheading } from "../../typography";

{
  /* <Image src={BottomLineLarge} 
      alt="Pink neon glow bottom line"
      width={1364}
      height={109}/> */
}

const HomeHero = () => {
  return (
    <div className="h-screen  md:h-160 overflow-hidden m col-(--full-col) grid-cols-subgrid grid ">
      <Image
        className="row-1 col-(--full-col) object-cover  h-full"
        src={HeroBackground2}
        alt="Background image"
        width={1620}
        height={868}
      />

      <div className="flex flex-col justify-center items-center row-1 col-(--full-col) mt-8">
        <Image
          className="mb-2 "
          src={Logo}
          alt="NIGHT CLUB - HAVE A GOOD TIME"
          width={320}
          height={50}
        />
        <HeroSubheading
          color="white"
          text="have a good time"
        />

        <Image
          src={BottomLineSmall}
          alt="Pink neon glow bottom line"
          width={300}
          height={24}
        />
      </div>
    </div>
  );
};

export default HomeHero;
