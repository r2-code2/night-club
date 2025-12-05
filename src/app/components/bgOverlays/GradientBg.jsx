import Image from "next/image";

const gradientOverlay = () => {
  return (
    <div>
      <Image
        src="/assets/bg/slider_bg_overlay.png"
        width={500}
        height={500}
        alt="Gradient background overlay"
      />
    </div>
  );
};

export default gradientOverlay;
