import React from "react";
import Sidebar from "./components/Sidebar";
import { PersistProviders } from "@/providers/PersistProviders";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PersistProviders>
      <div className="flex gap-5 px-5 py-5 h-screen">
        <Sidebar />
        {children}
      </div>
    </PersistProviders>
  );
}
