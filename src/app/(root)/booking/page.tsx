import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, UserCircle, UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex items-center gap-2">
        <Button
          size={"icon"}
          className="
            hover:bg-netrual-100
            bg-neutral-300
            rounded-full
            h-12
            w-12
            "
        >
          <UserCircle2 size={30} className="text-black " />
        </Button>
        <div className="">
          <h1 className="">Naval</h1>
          <h1> Ravikant</h1>
        </div>
      </div>
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
  const movies = [
    {
      id: 1,
      title: "Reacher",
      poster:
        "https://www.themoviedb.org/t/p/w1280/oIAMQ42lzSd6ksvGe4WFMKqT0ja.jpg",
    },
    {
      id: 3,
      title: "Zero Day (2025)",
      poster:
        "https://www.themoviedb.org/t/p/w1280/odIyR46aAX59dvQ1ON4P53ow1aE.jpg",
    },
    {
      id: 4,
      title: "INVINCIBLE (2021)",
      poster:
        "https://www.themoviedb.org/t/p/w1280/jBn4LWlgdsf6xIUYhYBwpctBVsj.jpg",
    },
    {
      id: 5,
      title: "The Brutalist (2024)",
      poster:
        "https://www.themoviedb.org/t/p/w1280/zGsBZKyUTXgNSkqAfgoCb4Bz0FK.jpg",
    },
    {
      id: 6,
      title: "Captain America: Brave New World ",
      poster:
        "https://www.themoviedb.org/t/p/w1280/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
    },
  ];
  return (
    <div
      className="
  flex
  flex-col
  gap-5
  overflow-auto
  max-h-[calc(100vh-6rem)]
  pb-10
  "
    >
      <h1 className="text-lg">Good Morning Mr. Naval Ravikant!</h1>
      <div
        className="
      md:pr-10
      pr-0
      grid
      lg:grid-cols-3
      md:grid-cols-2
      grid-cols-1
      gap-5
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
  movie: {
    title: string;
    poster: string;
    id:number
  };
};

function Movie({ movie }: TMovieProps) {
  return (
    <Link
    href={`/booking/${movie.id}`} 
      className="
    flex
    flex-col
    gap-5
    "
    >
      <figure
        className="
      relative
      h-[15rem]
      w-full
      shadow-xl
      rounded-xl 
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
