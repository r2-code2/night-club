import Image from "next/image";

export default function WelcomeCard({ imgUrl }) {
  return (
    <div className="w-full">
      <Image
        src={`/assets/content-img/${imgUrl}`}
        width={1000}
        height={1000}
        alt={"Welcome image1"}
        className="w-full object-cover"
      />
    </div>
  );
}
