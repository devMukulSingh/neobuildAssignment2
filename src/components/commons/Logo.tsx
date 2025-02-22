import { Earth } from "lucide-react";
import React from "react";


export default function Logo( ) {
  return (
    <div
      className="
    items-center
    flex 
    gap-2
    self-center
    "
    >
      <Earth size={40} />
      <h1 className="text-xl">Almanack</h1>
    </div>
  );
}
