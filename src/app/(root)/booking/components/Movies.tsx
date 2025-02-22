import { useAppSelector } from "@/redux/hooks";
import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
const Movie = dynamic( () => import("./Movie") ,{
  loading:() =>  <Skeleton className="h-[15rem] w-full"/>
})

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
        {movies.length === 0 ? (
          <h1>No movies found</h1>
        ) : (
          movies.map((movie, index) => <Movie movie={movie} key={index} />)
        )}
      </div>
    </div>
  );
}

