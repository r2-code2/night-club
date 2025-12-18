import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/herosection/HeroSection";
import BookTableOverview from "@/app/components/book/BookTableOverview";
import ErrorMessages from "@/app/components/errormessages/ErrorMessages";
import { Suspense } from "react";

export default async function BookTable() {
  return (
    <>
      <Header />
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="Book table" />
        <Suspense fallback={<div>Loading ...</div>}>
          <FetchTable></FetchTable>
        </Suspense>
      </main>
    </>
  );
}
const FetchTable = async () => {
  try {
    const response = await fetch("http://localhost:4000/reservations");
    const data = await response.json();
    if (!response.ok) {
      return <ErrorMessages message="We´re having some trouble loading this data, try again later!" />;
    }
    const takenTables = data.map((r) => String(r.table));

    return (
      <>
        <BookTableOverview takenTables={takenTables} />
      </>
    );
  } catch (error) {
    console.error("Blog fetch failed:", error);

    return (
      <>
        <ErrorMessages message="We’re having some trouble loading this data, try again later!" />
      </>
    );
  }
};
