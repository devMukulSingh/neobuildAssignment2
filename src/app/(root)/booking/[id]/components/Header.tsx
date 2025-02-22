import UserButton from "@/components/commons/UserButton";
import Image from "next/image";
import React from "react";


export default function Header({ poster }: { poster: string }) {
  return (
    <header className="flex gap-10">
      <figure
        className="
          w-4/5
          h-[15rem]
          relative
          rounded-md
          shadow-xl
          "
      >
        <Image
          loading="lazy"
          src={poster || ""}
          alt="poster"
          fill
          className="object-cover object-top rounded-md"
        />
      </figure>
      <UserButton />
    </header>
  );
}
