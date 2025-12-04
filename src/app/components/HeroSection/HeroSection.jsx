import Image from "next/image";
import { HeadingMain } from "../typography";
import HeroSectionBg from "../../assets/bg/footerbg.jpg";

const text = "test";
const HeroSection = ({ text }) => {
  return (
    <div className=" col-(--full-col) h-68 w-screen bg-black relative overflow-hidden">
      <Image className="opacity-15 absolute inset-0 w-full h-full object-cover" alt="Hero background image" src={HeroSectionBg} fill />
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <HeadingMain text={text} color="white" />
      </div>
    </div>
  );
};

export default HeroSection;
