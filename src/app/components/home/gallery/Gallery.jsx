import { Suspense } from "react";
import GalleryImages from "./GalleryImages";
import ErrorMessages from "../../errormessages/ErrorMessages";

export default function Gallery() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <FetchGallery />
    </Suspense>
  );
}

const FetchGallery = async () => {
  try {
    const url = "http://localhost:4000/gallery";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Ensure isImage is always an array
    const isImage = Array.isArray(data) ? data : data?.isImage ?? [];

    return <GalleryImages isImage={isImage} />;
  } catch (error) {
    return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
  }
};
