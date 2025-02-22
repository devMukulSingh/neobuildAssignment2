"use client";
import { TTicket } from "@/redux/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";


export const columns: ColumnDef<TTicket>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "movie",
    header: "Movie",
  },
  {
    accessorKey: "ticketCount",
    header: "Tickets",
  },
  {
    accessorKey: "ticketPrice",
    header: "Amount",
    cell: ({ row }) => (
      <> $ {row.original.ticketPrice * row.original.ticketCount} </>
    ),
  },
  {
    accessorKey: "showTime",
    header: "Time",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <>{format(row.original.date, "dd-MM-yy")}</>,
  },
];
