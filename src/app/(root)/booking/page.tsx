'use client'
import UserButton from "@/components/commons/UserButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/redux/hooks";
import { Tmovie } from "@/redux/types";
import { Search, User, UserCircle, UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function BookingPage() {
  return (
    <div
      className="
      w-full
      space-y-5
      "
    >
      <Header />
      <Movies />
    </div>
  );
}

function Header() {
  return (
    <header
      className="
        flex
        justify-between
        gap-5
        "
    >
      <Searchbar />
      <UserButton/>
    </header>
  );
}

function Searchbar() {
  return (
    <div
      className="
    bg-neutral-300
    rounded-md
    px-2
    flex
    items-center
    "
    >
      <Input
        className="
      placeholder:text-black
      border-0
      shadow-none
      ring-0
      focus-visible:ring-0
      md:w-[50vw]
      w-full
      "
        placeholder="Search"
      />
      <Search />
    </div>
  );
}

function Movies() {
  const movies = useAppSelector(state => state.movies);
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
