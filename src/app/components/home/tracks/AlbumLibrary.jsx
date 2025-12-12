"use client";

import Image from "next/image";
import Triangles from "../../hoverFrames/Triangles";
import TracksOverlay from "./TracksOverlay";
const AlbumLibrary = ({ setImage, setSong, setTitle }) => {
  return (
    <section className="flex">
      <Triangles>
        <Image
          src="/assets/content-img/track1.jpg"
          alt="thumbnail image"
          className="cursor-pointer"
          width={300}
          height={300}
          onClick={() => {
            setImage("track1.jpg");
            setSong("euphoria.mp3");
            setTitle("Track 1");
          }}
        />
        <TracksOverlay title="Track 1" />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track2.jpg"
          alt="thumbnail image"
          className="cursor-pointer"
          width={300}
          height={300}
          onClick={() => {
            setImage("track2.jpg");
            setSong("fashion-red-tape.mp3");
            setTitle("Track 2");
          }}
        />
        <TracksOverlay title="Track 2" />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track_thumb.jpg"
          alt="thumbnail image"
          className="cursor-pointer"
          width={300}
          height={300}
          onClick={() => {
            setImage("track_thumb.jpg");
            setSong("black-box-funky.mp3");
            setTitle("Default track");
          }}
        />
        <TracksOverlay title="Default track" />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track4.jpg"
          alt="thumbnail image"
          className="cursor-pointer"
          width={300}
          height={300}
          onClick={() => {
            setImage("track4.jpg");
            setSong("euphoria.mp3");
            setTitle("Track 4");
          }}
        />
        <TracksOverlay title="Track 4" />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track5.jpg"
          alt="thumbnail image"
          className="cursor-pointer"
          width={300}
          height={300}
          onClick={() => {
            setImage("track5.jpg");
            setSong("fashion-red-tape.mp3");
            setTitle("Track 5");
          }}
        />
        <TracksOverlay title="Track 5" />
      </Triangles>
    </section>
  );
};

export default AlbumLibrary;
