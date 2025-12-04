import MainButton from "../../buttons/MainButton";
import { Caption } from "../../typography";

const ContactForm = () => {
  return (
    <div className="col-(--content-col) my-10">
      <form className="grid grid-cols-2 mx-5 py-4 gap-3 lg:px-80 md:px-40">
        <div className="border col-span-full p-2">
          <input type="text" className="w-full h-full" defaultValue="Your name" />
        </div>
        <div className="border col-span-full p-2">
          <input type="text" className="w-full h-full" defaultValue="Your Email" />
        </div>
        <div className="border col-span-full h-70 p-2">
          <input type="text" className="w-full" defaultValue="Your Comment" />
        </div>
        <MainButton text="send" styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default ContactForm;
