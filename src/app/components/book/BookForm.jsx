import MainButton from "../buttons/MainButton";
import { Caption, HeadingXL } from "../typography";

const BookForm = () => {
  return (
    <div className="mt-20 col-(--content-col)">
      <HeadingXL text="book a table" />
      <form className="grid md:grid-cols-2 col-(-content-col)  py-4 gap-4">
        <input type="text" className="w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Name" />
        <input type="text" className="w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Email" />
        <input type="text" className="w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Number" />
        <input type="text" className="w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Number of Guests" />
        <input type="text" className="w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Select Date" />
        <input type="text" className="w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground" placeholder="Your Contact Number" />
        <textarea type="text" className="border md:p-4 col-span-full h-80 p-2 w-full focus:outline-accent placeholder:text-foreground" placeholder="Your Comment" />
        <MainButton text="reserve" styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default BookForm;
