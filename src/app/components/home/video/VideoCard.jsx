import Image from "next/image";

export default function VideoCard({imgUrl}) {
  return (
    <div className="frame border border-accent w-full mx-auto">
      <Image
        src={`/assets/content-img/${imgUrl}`}
        width={1600}
        height={900}
        alt={"videobillede"}
        className="w-full h-[220px] md:h-[360px] lg:h-[420px] object-cover"
      />
    </div>
  );
}