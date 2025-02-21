'use client'
import UserButton from "@/components/commons/UserButton";
import { Table } from "@/components/ui/table";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/Columns";

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
