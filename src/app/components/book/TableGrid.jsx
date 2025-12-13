"use client";
import { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
import ErrorMessages from "../errormessages/ErrorMessages";
const TableGrid = ({ selectedTable, setSelectedTable }) => {
  const [isTable, setTable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function FetchTable() {
      try {
        const response = await axios.get("http://localhost:4000/reservations");
        setTable(response.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    FetchTable();
  }, []);
  if (isLoading) return <ErrorMessages message="Loading..." />;
  if (error) return <ErrorMessages message="There´s been an error loading, try again later!" error="border bg-accent/50" />;
  if (isTable.length === 0) return <ErrorMessages message="No posts found" error="border bg-accent/50" />;
  const takenTables = isTable.map((reservation) => String(reservation.table));
  return (
    <div className="col-(--content-col)">
      <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-10 mt-20">
        <Table number="1" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("1")} />
        <Table number="2" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("2")} />
        <Table number="3" image="table2" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("3")} />
        <Table number="4" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("4")} />
        <Table number="5" image="table3" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("5")} />
        <Table number="6" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("6")} />
        <Table number="7" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("7")} />
        <Table number="8" image="table2" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("8")} />
        <Table number="9" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("9")} />
        <Table number="10" image="table3" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("10")} />
        <Table number="11" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("11")} />
        <Table number="12" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("12")} />
        <Table number="13" image="table2" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("13")} />
        <Table number="14" image="table1" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("14")} />
        <Table number="15" image="table3" selectedTable={selectedTable} setSelectedTable={setSelectedTable} taken={takenTables.includes("15")} />
      </div>
    </div>
  );
};

export default TableGrid;
