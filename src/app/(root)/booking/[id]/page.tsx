"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";
import { useParams,  } from "next/navigation";
const Header = dynamic( () => import("./components/Header"),{
  loading: () => <Skeleton className="w-full h-[15rem]"/>
})
const TicketBookForm = dynamic( () => import("./components/TicketBookForm"),{
  loading: () => <Skeleton className="w-full h-[20rem]"/>
})

type Props = {};

export default function page({}: Props) {
  const { id } = useParams();
  const movies = useAppSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === id);
  if (movie)
    return (
      <div className="w-full space-y-5">
        <Header poster={movie.poster}/>
        <div
          className="
        flex
        flex-col
        gap-5
      "
        >
          <h1 className="text-2xl font-semibold">{movie?.title}</h1>
          <TicketBookForm movie={movie} />
        </div>
      </div>
    );
}

