"use client";
import postOne from "../../assets/content-img/recent_post1.jpg";
import postTwo from "../../assets/content-img/recent_post2.jpg";
import Image from "next/image";
import { Caption, BannerText } from "../typography";

const RecentPosts = ({ text, date, image }) => {
  const imgMap = {
    img1: postOne,
    img2: postTwo,
  };
  const imgSrc = imgMap[image] || img1;
  return (
    <>
      <Image src={imgSrc} alt={image} width={100} height={100} className="self-stretch w-full h-full object-cover aspect-square" />
      <div className="flex flex-col gap-1">
        <Caption text={text} />
        <Caption text={date} color="pink" />
      </div>
    </>
  );
};

export default RecentPosts;
