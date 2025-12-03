"use client";
import { Caption } from "../typography";
import { FaTwitter } from "react-icons/fa";
const RecentTweets = ({ text, date }) => {
  return (
    <>
      <FaTwitter size={30} className="ml-5 text-accent" />
      <div className="grid gap-2">
        <Caption text={text} />
        <Caption text={date} />
      </div>
    </>
  );
};

export default RecentTweets;
