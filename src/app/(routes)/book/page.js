import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import BookTableOverview from "@/app/components/book/BookTableOverview";
import ErrorMessages from "@/app/components/errormessages/ErrorMessages";

export default async function BookTable() {
  try {
    const response = await fetch("http://localhost:4000/reservations");
    const data = await response.json();
    if (!response.ok) {
      return <ErrorMessages message="We´re having some trouble loading this data, try again later!" />;
    }
    const takenTables = data.map((r) => String(r.table));
    const date = data.map((r) => r.date);

    return (
      <>
        <Header />
        <main className="grid col-(--full-col) grid-cols-subgrid">
          <HeroSection text="Book table" />
          <BookTableOverview takenTables={takenTables} />
        </main>
      </>
    );
  } catch (error) {
    console.error("Blog fetch failed:", error);

    return <ErrorMessages message="We’re having some trouble loading this data, try again later!" />;
  }
}
