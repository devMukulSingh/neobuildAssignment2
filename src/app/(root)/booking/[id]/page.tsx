"use client";
import UserButton from "@/components/commons/UserButton";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useParams,  } from "next/navigation";
import React from "react";
import TicketBookForm from "./components/TicketBookForm";

type Props = {};

export default function page({}: Props) {
  const { id } = useParams();
  const movies = useAppSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === id);
  if (movie)
    return (
      <div className="w-full">
        <Header poster={movie.poster}/>
        <div
          className="
        flex
        flex-col
        gap-5
      "
        >
          <h1 className="text-xl font-medium">{movie?.title}</h1>
          <TicketBookForm movie={movie} />
        </div>
      </div>
    );
}

function Header({poster} : {poster:string}) {
  return (
    <header className="flex gap-10">
      <figure
        className="
          w-4/5
          h-[15rem]
          relative
          rounded-md
          "
      >
        <Image
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
