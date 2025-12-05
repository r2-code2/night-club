import MainButton from "../../buttons/MainButton";

const NewsForm = () => {
  return (
    <form className="grid gap-3 md:flex md:justify-self-center md:w-2/3 md:gap-5">
      <input type="text" defaultValue="Enter Your Email" className="p-2 border-b md:basis-3/4" />
      <MainButton text="Subscribe" styling="w-1/2 justify-self-center md:basis-1/4" />
    </form>
  );
};

export default NewsForm;
