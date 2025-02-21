"use client";
import UserButton from "@/components/commons/UserButton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Movies from "./components/Movies";
import React from "react";
import { useDispatch } from "react-redux";
import { movies } from "@/lib/constants";
import { setSearchedMovies } from "@/redux/reducer";
import debounce from "debounce"

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
  const dispatch = useDispatch();
  const debouncedSearch = debounce(function handleSearch(e:React.ChangeEvent<HTMLInputElement>){
    const query = e.target.value.toLowerCase();
    if(query.trim().length===0) return dispatch(setSearchedMovies(movies)) 
    const filteredMovies = movies.filter( movie => movie.title.toLowerCase().includes(query));
    dispatch(setSearchedMovies(filteredMovies))
  },500)
  return (
    <header
      className="
        flex
        justify-between
        gap-5
        "
    >
      <div
        className="
        rounded-md
        px-2
        flex
        items-center
        bg-neutral-300
    "
      >
        <Input
          onChange={debouncedSearch}
          className="
          border-0
          shadow-none
          ring-0
          md:w-[50vw]
          w-full
          focus-visible:ring-0
          placeholder:text-black
      "
          placeholder="Search"
        />
        <Search />
      </div>
      <UserButton />
    </header>
  );
}

