"use client";

import MainButton from "../buttons/MainButton";
import { Caption, HeadingXL } from "../typography";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const formCommentSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(2, "Name must have minimum two letters")
    .regex(/^[\p{L}\s'-]+$/u, "Please enter a valid name"),
  content: z.string(),
  blogpostId: z.number(),
  // date: z.date().transform((d) => d.toISOString()),
});

const CommentForm = ({ id }) => {
  const router = useRouter();
  const url = "http://localhost:4000/comments";
  const form = useForm({
    resolver: zodResolver(formCommentSchema),
    defaultValues: {
      blogpostId: id,
      email: "",
      name: "",
      content: "",
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    const submissionData = {
      ...data,
      date: new Date().toISOString(), // Backend will set this, but send it just in case
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Comment has been posted", submissionData);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        console.error("Failed:", await response.text());
        return;
      }

      console.log("Success! Comment was posted", submissionData);
      reset({
        blogpostId: id,
        email: "",
        name: "",
        content: "",
      });
      router.refresh();
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    <div className="my-20">
      <HeadingXL text="leave a comment" />
      <form
        className="grid md:grid-cols-2 col-(-content-col)  py-4 gap-4"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          value={"10-11-2025"}
          {...register("blogpostId", { valueAsNumber: true })}
        />

        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">
            {errors.name?.message}
          </p>

          <input
            type="text"
            placeholder="Your Name"
            id="name"
            className={`border w-full h-full md:p-4 p-2 focus:outline-accent placeholder:text-foreground ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name")}
          />
        </div>
        <div className="w-full h-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">
            {errors.email?.message}
          </p>

          <input
            type="text"
            placeholder="Your Email"
            id="email"
            className={`focus:outline-accent border w-full h-full md:p-4 p-2 placeholder:text-foreground ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email")}
          />
        </div>
        <div className="w-full h-full col-span-full">
          <p className="text-red-500 text-xs h-6 align-baseline pt-2">
            {errors.comment?.message}
          </p>
          <textarea
            type="text"
            placeholder="Your Comment"
            id="comment"
            className={`border md:p-4 w-full  h-80 p-2 focus:outline-accent placeholder:text-foreground ${
              errors.comment ? "border-red-500" : ""
            }`}
            {...register("content")}
          />
        </div>
        <MainButton
          text={` ${isSubmitting ? "Posting..." : "Submit"} `}
          styling="col-span-full w-1/2 md:w-35 justify-self-end"
        />
      </form>
    </div>
  );
};

export default CommentForm;
