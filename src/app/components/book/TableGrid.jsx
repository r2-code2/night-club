"use client";

import Table from "./Table";

const TableGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-10 mt-20">
      <Table number="1" image="table1" />
      <Table number="2" image="table1" />
      <Table number="3" image="table2" />
      <Table number="4" image="table1" />
      <Table number="5" image="table3" />
      <Table number="6" image="table1" />
      <Table number="7" image="table1" />
      <Table number="8" image="table2" />
      <Table number="9" image="table1" />
      <Table number="10" image="table3" />
      <Table number="11" image="table1" />
      <Table number="12" image="table1" />
      <Table number="13" image="table2" />
      <Table number="14" image="table1" />
      <Table number="15" image="table3" />
    </div>
  );
};

export default TableGrid;
