import MainButton from "../buttons/MainButton";
import { Caption, HeadingXL } from "../typography";

const BookForm = () => {
  return (
    <div className="mt-20 col-(--content-col)">
      <HeadingXL text="book a table" />
      <form className="grid md:grid-cols-2 col-(-content-col)  py-4 gap-4">
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Your name" />
        </div>
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Your Email" />
        </div>
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Table Number" />
        </div>
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Number of Guests" />
        </div>
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Select Date" />
        </div>
        <div className="border md:p-4 p-2">
          <input type="text" className="w-full h-full" defaultValue="Your Contact Number" />
        </div>
        <div className="border md:p-4 col-span-full h-80 p-2">
          <input type="text" className="w-full" defaultValue="Your Comment" />
        </div>
        <MainButton text="reserve" styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default BookForm;
