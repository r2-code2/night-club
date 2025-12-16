import { Suspense } from "react";
import GalleryImages from "./GalleryImages";

export default function Gallery() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <FetchGallery />
    </Suspense>
  );
}
const FetchGallery = async () => {
  const url = "http://localhost:4000/gallery";
  const response = await fetch(url);
  const data = await response.json();
  const isImage = Array.isArray(data) ? data : data?.isImage ?? [];

  return <GalleryImages isImage={isImage} />;
};
