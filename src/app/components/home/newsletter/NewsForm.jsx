"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MainButton from "../../buttons/MainButton";
import { Caption } from "../../typography";

const formSchema = z.object({
  email: z.string().email(),
});

const NewsForm = () => {
  const form = useForm({ resolver: zodResolver(formSchema) });
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form has been submittet", data);
  };
  return (
    <>
      <Caption color="text-red-500" text={errors.email?.message} />
      <form className="grid gap-3 md:flex md:justify-self-center md:w-2/3 md:gap-5" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id="email" placeholder="Enter Your Email" className="p-2 border-b md:basis-3/4 focus:outline-accent placeholder:text-foreground" {...register("email")} />
        <MainButton disabled={isSubmitting} text={` ${isSubmitting ? "Subscribing..." : "Subscribe"} `} styling="w-1/2 justify-self-center md:basis-1/4" />
      </form>
    </>
  );
};

export default NewsForm;
