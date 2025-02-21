import React from "react";
import Logo from "@/components/commons/Logo";
import LoginForm from "./components/LoginForm";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div
      className="
    h-screen 
    w-full
    flex
    items-center
    justify-center
    bg-white
    "
    >
      <div
        className="
        flex
        flex-col
        gap-10
        rounded-md
        pt-8
        pb-10
        items-center
        justify-center
        bg-black
        w-[25rem]
        text-white
        "
      >
        <Logo/>
        <LoginForm />
      </div>
    </div>
  );
}



