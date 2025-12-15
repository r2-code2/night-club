"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import MainButton from "../buttons/MainButton";
import { HeadingXL } from "../typography";

// shadcn components
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Zod schema: date stored as Date, transformed to ISO for submission
const formBookSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have minimum two letters.")
    .regex(/^[\p{L}\s'-]+$/u, "Please enter a valid name."),
  email: z.string().email(),
  table: z.coerce.number("Select a table by clicking on a avaleble table."),
  guests: z.coerce.number().max(8, "No bookings online for over 8 guests."),
  date: z.date().transform((d) => d.toISOString()),
  phone: z.coerce.number(),
  comment: z.string(),
});

const BookForm = ({ selectedTable, setSelectedTable }) => {
  const form = useForm({
    resolver: zodResolver(formBookSchema),
    defaultValues: { date: undefined },
  });

  const { register, handleSubmit, formState, setValue, watch, reset, setError } = form;
  const { errors, isSubmitting } = formState;

  const dateValue = watch("date");

  const url = "http://localhost:4000/reservations";

  useEffect(() => {
    if (selectedTable != null) {
      setValue("table", selectedTable, { shouldValidate: true });
    }
  }, [selectedTable, setValue]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
      reset();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="mt-20 col-(--content-col)">
      <HeadingXL text="book a table" />
      <form className={`grid md:grid-cols-2 col-(-content-col) py-4 ${Object.values(errors).length ? "gap-6" : "gap-4"}`} onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.name?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.name ? "border-red-500" : ""}`} id="name" placeholder="Your Name" {...register("name")} />
        </div>

        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.email?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.email ? "border-red-500" : ""}`} id="email" placeholder="Your Email" {...register("email")} />
        </div>

        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.table?.message}</p>
          <input
            type="text"
            readOnly
            onClick={() => {
              if (!watch("table")) {
                setError("table", {
                  type: "manual",
                  message: "Please select a table by clicking on an available table.",
                });
              }
            }}
            className={`w-full cursor-default h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.table ? "border-red-500" : ""}`}
            id="table"
            placeholder="Table Number"
            {...register("table")}
          />
        </div>

        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.guests?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.guests ? "border-red-500" : ""}`} id="guests" placeholder="Number of Guests" {...register("guests", { valueAsNumber: true })} />
        </div>

        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.date?.message}</p>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" type="button" className={`w-full h-full border md:p-4 p-2 hover:text-accent   border-foreground justify-start text-left  ${!dateValue && "text-muted-foreground"} ${errors.date ? "border-red-500" : ""}`}>
                {dateValue ? dateFormat.format(dateValue) : "Select a date"}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="p-0">
              <Calendar mode="single" selected={dateValue} onSelect={(day) => setValue("date", day, { shouldValidate: true })} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {/* --- PHONE --- */}
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.phone?.message}</p>
          <input type="text" className={`w-full h-full border md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${errors.phone ? "border-red-500" : ""}`} id="phone" placeholder="Your Contact Number" {...register("phone", { valueAsNumber: true })} />
        </div>

        {/* --- COMMENT --- */}
        <div className="col-span-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">{errors.comment?.message}</p>
          <textarea className={`border md:p-4 h-80 p-2 w-full focus:outline-accent placeholder:text-foreground ${errors.comment ? "border-red-500" : ""}`} id="comment" placeholder="Your Comment" {...register("comment")} />
        </div>

        <MainButton disabled={isSubmitting} text={isSubmitting ? "reserving..." : "reserve"} styling="col-span-full w-1/2 md:w-35 justify-self-end" />
      </form>
    </div>
  );
};

export default BookForm;
