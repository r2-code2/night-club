"use client";
import TableGrid from "./TableGrid";
import BookForm from "./BookForm";
import { useState } from "react";

const BookTableOverview = ({ takenTables }) => {
  const [selectedTable, setSelectedTable] = useState();

  return (
    <>
      <TableGrid selectedTable={selectedTable} setSelectedTable={setSelectedTable} takenTables={takenTables} />
      <BookForm selectedTable={selectedTable} setSelectedTable={setSelectedTable} takenTables={takenTables} />
    </>
  );
};

export default BookTableOverview;
