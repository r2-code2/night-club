"use client";
import Image from "next/image";
import TableOne from "../../assets/table/table_1.png";
import TableTwo from "../../assets/table/table_2.png";
import TableThree from "../../assets/table/table_3.png";
import { Subheading } from "../typography";

const Table = ({ number, image, selectedTable, setSelectedTable, taken }) => {
  const imgMap = {
    table1: TableOne,
    table2: TableTwo,
    table3: TableThree,
  };
  const imgSrc = imgMap[image];
  return (
    <div className="grid grid-cols-subgrid grid-rows-1 group transition-colors duration-200" onClick={() => !taken && setSelectedTable(number)}>
      <Image src={imgSrc} alt={number} className={`col-1 row-1 grid-cols-subgrid self-stretch object-cover w-full h-auto ${taken ? "opacity-50" : ""}`} />
      <div className={`col-1 row-1 flex items-center justify-center group-hover:text-accent transition-opacity duration-200 ${selectedTable === number ? "text-accent" : ""}${taken ? "text-gray-400" : ""}`}>
        <Subheading text={number} />
      </div>
    </div>
  );
};

export default Table;
