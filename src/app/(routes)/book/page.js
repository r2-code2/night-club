"use client";
import { useState } from "react";
import Header from "@/app/components/header/Header";
import BookForm from "@/app/components/book/BookForm";
import TableGrid from "@/app/components/book/TableGrid";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import { set } from "zod";

export default function BookTable() {
  const [selectedTable, setSelectedTable] = useState();
  return (
    <>
      <Header />
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="Book table" />
        <TableGrid selectedTable={selectedTable} setSelectedTable={setSelectedTable} />
        <BookForm selectedTable={selectedTable} setSelectedTable={setSelectedTable} />
      </main>
    </>
  );
}
