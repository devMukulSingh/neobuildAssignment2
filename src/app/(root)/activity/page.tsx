'use client'
import UserButton from "@/components/commons/UserButton";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { columns } from "./components/Columns";
import DataTable from "./components/DataTable";

// import { DataTableProps } from "./components/DataTable";
// const DataTable = dynamic( () => import("./components/DataTable").then(res => res.default),{
//   loading : () => <Skeleton className="w-full h-3/4"/>
// }) 
export default function ActivityPage() {
  const bookedTickets = useAppSelector((state) => state.bookedTickets);
  return (
    <div className="w-full flex flex-col gap-5">
      <header className="w-full flex justify-end">
        <UserButton />
      </header>
      <h1 className="text-xl font-semibold">Activity</h1>
      <DataTable 
      data={bookedTickets} 
      columns={columns} 
      />
    </div>
  );
}
