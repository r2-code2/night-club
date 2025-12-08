
import { HeadingMain } from "../../typography";
import VideoCard from "./VideoCard";

export default function LatestVideo() {
  return (
    <section className="col-(--full-col) grid grid-cols-subgrid py-20">
      <div className="col-(--content-col) flex flex-col items-center gap-10">
        <HeadingMain
          color="white"
          text="LATEST VIDEO"
        />

        <VideoCard
          imgUrl="video_poster.jpg"
          altText="videobillede"
        />

        {/* Pile */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button className="w-10 h-10 border border-white flex items-center justify-center">
            <span className="text-white text-lg">&lt;</span>
          </button>
          <button className="w-10 h-10 border border-white flex items-center justify-center">
            <span className="text-white text-lg">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
