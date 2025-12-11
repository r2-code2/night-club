"use client";

import Image from "next/image";
import Triangles from "../../hoverFrames/Triangles";
const AlbumLibrary = ({ setImage, setSong, setTitle }) => {
  return (
    <section className="flex">
      <Triangles>
        <Image
          src="/assets/content-img/track1.jpg"
          alt="thumbnail image"
          width={300}
          height={300}
          onClick={() => {
            setImage("track1.jpg");
            setSong("euphoria.mp3");
            setTitle("Track 1");
          }}
        />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track2.jpg"
          alt="thumbnail image"
          width={300}
          height={300}
          onClick={() => {
            setImage("track2.jpg");
            setSong("fashion-red-tape.mp3");
            setTitle("Track 2");
          }}
        />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track_thumb.jpg"
          alt="thumbnail image"
          width={300}
          height={300}
          onClick={() => {
            setImage("track_thumb.jpg");
            setSong("black-box-funky.mp3");
            setTitle("Default track");
          }}
        />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track4.jpg"
          alt="thumbnail image"
          width={300}
          height={300}
          onClick={() => {
            setImage("track4.jpg");
            setSong("euphoria.mp3");
            setTitle("Track 4");
          }}
        />
      </Triangles>
      <Triangles>
        <Image
          src="/assets/content-img/track5.jpg"
          alt="thumbnail image"
          width={300}
          height={300}
          onClick={() => {
            setImage("track5.jpg");
            setSong("fashion-red-tape.mp3");
            setTitle("Track 5");
          }}
        />
      </Triangles>
    </section>
  );
};

export default AlbumLibrary;
