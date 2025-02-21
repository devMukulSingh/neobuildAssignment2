
import React from "react";
import Sidebar from "./components/Sidebar";



export default function Layout({children}:{children:React.ReactNode}){
    return (
      <div
        className="flex gap-5 px-5 py-5 h-screen"
      >
        <Sidebar />
        {children}
      </div>
    );
}