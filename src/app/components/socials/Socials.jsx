import IconBorder from "../icons/IconBorder";
import { FaFacebookF, FaSnapchatGhost, FaInstagram } from "react-icons/fa";

const socials = () => {
  return (
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
  );
};

export default socials;
