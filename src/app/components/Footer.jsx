import IconBorder from "./icons/IconBorder";
import { FaFacebookF } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerbg from "../assets/bg/footerbg.jpg";
import Image from "next/image";
import Logo from "../assets/icon/Logo_main.svg";

import { Caption, HeadingSecondary } from "./typography";

const Footer = () => {
  return (
    <div className="grid col-(--full-col) grid-cols-subgrid">
      <Image src={footerbg} alt="Footer background" width={300} height={200} className="col-(--full-col) row-1 self-stretch object-cover w-full h-auto grid-cols-subgrid opacity-15" priority={false} />
      <div className="col-(--content-col) row-1 grid grid-cols-subgrid justify-center my-10 text-center gap-7">
        <Image src={Logo} alt="logo" className="justify-self-center w-24 h-auto" width={96} height={96} />
        <div>
          <HeadingSecondary text="Location" />
          <Caption
            text="Kompagnistræde 278
1265 Købehavn K"
          />
        </div>
        <div>
          <HeadingSecondary text="Opening Hours" />
          <Caption text="WED - THU 10:30 PMTO 3 AM" />
          <Caption text="SAT - SUN: 11 PM TO 5 AM" />
        </div>
        <div>
          <Caption text="Stay connected with us" />
          <div className="flex justify-center gap-3 my-2">
            <IconBorder>
              <FaFacebookF size={20} />
            </IconBorder>
            <IconBorder>
              <FaSnapchatGhost size={20} />
            </IconBorder>
            <IconBorder>
              <FaInstagram size={25} />
            </IconBorder>
          </div>
        </div>
        <Caption text="Night Club PSD Template" />
        <Caption text="All Rights Reserved" />
        <Caption text="Copyright © NightClub" />
      </div>
    </div>
  );
};

export default Footer;
