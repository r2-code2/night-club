import MainButton from "../../buttons/MainButton";
import { Caption } from "../../typography";

const ContactForm = () => {
  return (
    <div className="col-(--content-col) my-10">
      <form className="grid grid-cols-2 mx-5 py-4 gap-3 lg:px-80 md:px-40">
        <input type="text" className="w-full h-full border col-span-full p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Name" />
        <input type="text" className="w-full h-full border col-span-full p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Email" />
        <textarea type="text" className="w-full border col-span-full h-70 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Comment" />
        <MainButton text="send" styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default ContactForm;
