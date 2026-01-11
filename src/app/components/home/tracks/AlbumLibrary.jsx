"use client";

import Image from "next/image";
import Triangles from "../../frames/Triangles";
import TracksOverlay from "./TracksOverlay";
const AlbumLibrary = ({ isImage, setImage, setSong, setTitle }) => {
  return (
    <>
      <section className="md:flex hidden col-(--content-col)">
        <Triangles>
          <Image
            src="/assets/content-img/track1.jpg"
            alt="thumbnail image"
            className="cursor-pointer"
            width={300}
            height={300}
          />
          <TracksOverlay
            title="Track 1"
            image="track1.jpg"
            song="euphoria.mp3"
            setImage={setImage}
            setSong={setSong}
            setTitle={setTitle}
          />
        </Triangles>
        <Triangles>
          <Image
            src="/assets/content-img/track2.jpg"
            alt="thumbnail image"
            className="cursor-pointer"
            width={300}
            height={300}
          />
          <TracksOverlay
            title="Track 2"
            image="track2.jpg"
            song="fashion-red-tape.mp3"
            setImage={setImage}
            setSong={setSong}
            setTitle={setTitle}
          />
        </Triangles>
        <Triangles>
          <Image
            src="/assets/content-img/track_thumb.jpg"
            alt="thumbnail image"
            className="cursor-pointer"
            width={300}
            height={300}
          />
          <TracksOverlay
            title="Default track"
            image="track_thumb.jpg"
            song="black-box-funky.mp3"
            setImage={setImage}
            setSong={setSong}
            setTitle={setTitle}
          />
        </Triangles>
        <Triangles>
          <Image
            src="/assets/content-img/track4.jpg"
            alt="thumbnail image"
            className="cursor-pointer"
            width={300}
            height={300}
          />
          <TracksOverlay
            title="Track 4"
            image="track4.jpg"
            song="euphoria.mp3"
            setImage={setImage}
            setSong={setSong}
            setTitle={setTitle}
          />
        </Triangles>
        <Triangles>
          <Image
            src="/assets/content-img/track5.jpg"
            alt="thumbnail image"
            className="cursor-pointer"
            width={300}
            height={300}
          />
          <TracksOverlay
            title="Track 5"
            image="track5.jpg"
            song="fashion-red-tape.mp3"
            setImage={setImage}
            setSong={setSong}
            setTitle={setTitle}
          />
        </Triangles>
      </section>
      <section className="flex md:hidden justify-center col-(--full-col)">
        <Triangles>
          <Image
            src={`/assets/content-img/${isImage}`}
            alt="thumbnail image"
            className="cursor-pointer self-stretch w-full object-cover aspect-video"
            width={300}
            height={300}
          />
        </Triangles>
      </section>
    </>
  );
};

export default AlbumLibrary;
