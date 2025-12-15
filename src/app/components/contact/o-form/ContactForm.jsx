"use client";

import { useState } from "react";
import MainButton from "../../buttons/MainButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PatternBg from "../../bgOverlays/PatternBg";


const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  content: z.string().max(200, "Message must be max 200 characters"),
});

const ContactForm = () => {
  const url = "http://localhost:4000/contact_messages";

  const [serverError, setServerError] = useState("");


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      content: "",
    },
  });


  const onSubmit = async (data) => {
    setServerError("");
    

    const payload = {
      ...data,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const txt = await response.text();
        setServerError(txt || "Failed to send message");
        return;
      }

      // success
      reset({ name: "", email: "", content: "" });
      
      console.log("Message sent!", payload);
    } catch (err) {
      console.error(err);
      setServerError("Network error. Please try again.");
    }
  };

  return (
   <PatternBg>
    <div className="col-(--content-col) my-10">
    
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 mx-5 py-4 gap-1 lg:px-80 md:px-40"
      >
        {/* Name */}
        <div className="col-span-full mt-2">
          <p className="text-red-500 text-xs min-h-1.75rem">
            {errors.name?.message}
          </p>

          <input
            type="text"
            placeholder="Your Name"
            className={`w-full border p-2 focus:outline-accent placeholder:text-foreground ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name")}
          />
        </div>

        {/* Email */}
        <div className="col-span-full mt-2">
          <p className="text-red-500 text-xs min-h-1.75rem">
            {errors.email?.message}
          </p>

          <input
            type="text"
            placeholder="Your Email"
            className={`w-full border p-2 focus:outline-accent placeholder:text-foreground ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email")}
          />
        </div>

        {/* Message (content) */}
        <div className="col-span-full mt-2">
          <p className="text-red-500 text-xs min-h-1.75rem">
            {errors.content?.message}
          </p>

          <textarea
            placeholder="Your Comment"
            className={`w-full border h-70 p-2 focus:outline-accent placeholder:text-foreground ${
              errors.content ? "border-red-500" : ""
            }`}
            {...register("content")}
          />

        
        </div>

        {/* Server error */}
        {serverError && (
          <p className="text-red-500 text-s col-span-full">
            {serverError}
          </p>
        )}

    

        <MainButton
          text={isSubmitting ? "Sending..." : "send"}
          styling="col-span-full w-1/2 md:w-35 justify-self-end"
        />
      </form>
      
    </div>
    </PatternBg>
  );
};

export default ContactForm;
