import { useAppSelector } from '@/redux/hooks';
import React from 'react'
import { Tmovie } from "@/redux/types";
import Image from "next/image";
import Link from "next/link";

export default function Movies() {
  const movies = useAppSelector((state) => state.movies);
  return (
    <div
      className="
      flex-col
      gap-5
      overflow-auto
      max-h-[calc(100vh-6rem)]
      pb-10
      flex
  "
    >
      <h1 className="text-lg">Good Morning Mr. Naval Ravikant!</h1>
      <div
        className="
        pr-0
        grid
        lg:grid-cols-3
        md:grid-cols-2
        grid-cols-1
        gap-5
        md:pr-10
      "
      >
        {movies.map((movie, index) => (
          <Movie movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

type TMovieProps = {
  movie: Tmovie;
};

function Movie({ movie }: TMovieProps) {
  return (
    <Link
      href={`/booking/${movie.id}`}
      className="
      flex-col
      gap-5
      flex
    "
    >
      <figure
        className="
        relative
        h-[15rem]
        w-full
        rounded-xl 
        shadow-xl
      "
      >
        <Image
          className="object-cover rounded-xl object-top"
          src={movie.poster}
          fill
          alt="poster"
        />
      </figure>
      <h1
        className="
        text-lg
        font-semibold
    "
      >
        {movie.title}
      </h1>
    </Link>
  );
}
