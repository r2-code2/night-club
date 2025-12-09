"use client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MainButton from "../buttons/MainButton";
import { Caption, HeadingXL } from "../typography";

const formBookSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have minimum two letters")
    .regex(/^[\p{L}\s'-]+$/u, "Please enter a valid name"),
  email: z.string().email(),
  table: z.coerce.number(),
  guests: z.coerce.number().max(8, "No bookings online for over 8 guests"),
  date: z
    .string()
    .pipe(z.coerce.date())
    .transform((input) => input.toISOString()),
  phone: z.coerce.number(),
  comment: z.string(),
});

const BookForm = ({ selectedTable, setSelectedTable }) => {
  const form = useForm({ resolver: zodResolver(formBookSchema) });
  const { register, handleSubmit, formState, setValue } = form;
  const { errors, isSubmitting } = formState;
  const url = "http://localhost:4000/reservations";
  useEffect(() => {
    if (selectedTable != null) {
      setValue("table", selectedTable, { shouldValidate: true });
    }
  }, [selectedTable, setValue]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form has been submittet", data);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed:", await response.text());
        return;
      }

      console.log("Success! Form has been submitted", data);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
  return (
    <div className="mt-20 col-(--content-col)">
      <HeadingXL text="book a table" />
      <form className={`grid md:grid-cols-2 col-(-content-col) py-4 ${Object.values(errors).length ? "gap-6" : "gap-4"}`} onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full h-full">
          <p className={errors ? `text-red-500 text-xs h-6 align-baseline pt-2` : `hidden`}>{errors.name?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.name ? "border-red-500" : ""}`} id="name" placeholder="Your Name" {...register("name")} />
        </div>
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.email?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.email ? "border-red-500" : ""}`} id="email" placeholder="Your Email" {...register("email")} />
        </div>
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.table?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.table ? "border-red-500" : ""}`} id="table" placeholder="Table Number" {...register("table")} />
        </div>
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.guests?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.guests ? "border-red-500" : ""}`} id="guests" placeholder="Number of Guests" {...register("guests", { valueAsNumber: true })} />
        </div>
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.date?.message}</p>
          <input type="date" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.date ? "border-red-500" : ""}`} id="date" placeholder="Select Date" {...register("date")} />
        </div>
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.phone?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.phone ? "border-red-500" : ""}`} id="phone" placeholder="Your Contact Number" {...register("phone", { valueAsNumber: true })} />
        </div>
        <div className="col-span-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.comment?.message}</p>
          <textarea type="text" className={`border md:p-4  h-80 p-2 w-full focus:outline-accent placeholder:text-foreground ${errors.comment ? "border-red-500" : ""}`} id="comment" placeholder="Your Comment" {...register("comment")} />
        </div>
        <MainButton disabled={isSubmitting} text={` ${isSubmitting ? "reserving..." : "reserve"} `} styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default BookForm;
