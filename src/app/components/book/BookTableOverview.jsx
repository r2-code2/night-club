"use client";
import TableGrid from "./TableGrid";
import BookForm from "./BookForm";
import { useState } from "react";

const BookTableOverview = ({ data }) => {
  const [selectedTable, setSelectedTable] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const takenTables = selectedDate ? data.filter((r) => r.date.split("T")[0] === selectedDate).map((r) => String(r.table)) : [];
  console.log(takenTables);
  return (
    <>
      <BookForm setSelectedDate={setSelectedDate} selectedTable={selectedTable} setSelectedTable={setSelectedTable} takenTables={takenTables} />
      <TableGrid selectedTable={selectedTable} setSelectedTable={setSelectedTable} takenTables={takenTables} />
    </>
  );
};

export default BookTableOverview;
