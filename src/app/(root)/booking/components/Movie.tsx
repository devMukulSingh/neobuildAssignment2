import { Tmovie } from '@/redux/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type TMovieProps = {
  movie: Tmovie;
};
export default function Movie({ movie }: TMovieProps) {
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
            loading="lazy"
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
  };