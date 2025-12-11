"use client";

import { HeadingMain } from "../../typography";
import AlbumLibrary from "./AlbumLibrary";
import MediaPlayer from "./MediaPlayer";
import { useState } from "react";

const NightClubTrack = () => {
  const [isSong, setSong] = useState("black-box-funky.mp3");
  const [isImage, setImage] = useState("track_thumb.jpg");
  const [isTitle, setTitle] = useState("Default title");
  return (
    <section className="col-(--content-col)">
      <div className=" h-50 flex items-center">
        <HeadingMain color="white" text="night club track" />
      </div>
      <MediaPlayer isSong={isSong} isImage={isImage} isTitle={isTitle} />
      <AlbumLibrary setSong={setSong} setImage={setImage} setTitle={setTitle} />
    </section>
  );
};

export default NightClubTrack;
