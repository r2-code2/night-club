import BookForm from "@/app/components/book/BookForm";
import TableGrid from "@/app/components/book/TableGrid";
import HeroSection from "@/app/components/HeroSection/HeroSection";

export default function BookTable() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="Book table" />
        <TableGrid />
        <BookForm />
      </main>
    </>
  );
}
