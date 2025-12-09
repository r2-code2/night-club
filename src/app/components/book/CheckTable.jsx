"use server";
import { Suspense } from "react";

const CheckTable = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <FetchTable />
    </Suspense>
  );
};

const FetchTable = async () => {
  const url = "http://localhost:4000/reservations";
  const response = await fetch(url);
  if (!response.ok) {
    return <div>Error fetching posts: {response.status}</div>;
  }

  const data = await response.json();
  // API may return either an array (e.g. [post, ...]) or an object { posts: [...] }
  const reservations = Array.isArray(data) ? data : data?.reservations ?? [];

  const takenTables = reservations.map((reservation) => Number(reservation.table));

  console.log("Opptatte bord:", takenTables);
};

export default CheckTable;
