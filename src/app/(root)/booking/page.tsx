"use client";
import UserButton from "@/components/commons/UserButton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Movies from "./components/Movies";

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
          className="
      placeholder:text-black
      border-0
      shadow-none
      ring-0
      md:w-[50vw]
      w-full
      focus-visible:ring-0
      "
          placeholder="Search"
        />
        <Search />
      </div>
      <UserButton />
    </header>
  );
}

