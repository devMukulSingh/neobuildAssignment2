"use client";
import Logo from "@/components/commons/Logo";
import { Computer, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div
      className="
    bg-black
    rounded-md
    px-2
    py-10
    w-[15rem]
    text-white
    sticky
    top-0
    left-0
    flex
    flex-col
    gap-10
    h-full
    "
    >
      <Logo />
      <Navlinks />
    </div>
  );
}

function Navlinks() {
  const pathName = usePathname();
  const navlinks = [
    {
      title: "Booking",
      isActive: pathName.includes("/booking"),
      link: "/booking",
      icon: Computer,
    },
    {
      title: "Activity",
      isActive: pathName.endsWith("/activity"),
      link: "/activity",
      icon: Download,
    },
  ];
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        "
    >
      {navlinks.map((navlink, index) => (
        <Link
          className={`px-3 
              flex
              gap-3
              items-center
              ${navlink.isActive ? "bg-white text-black py-1 rounded-md" : ""}`}
          href={navlink.link}
          key={index}
        >
          <navlink.icon size={15}/>
          {navlink.title}
        </Link>
      ))}
    </div>
  );
}
