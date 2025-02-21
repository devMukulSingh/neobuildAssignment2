"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schema";
import React, { useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Earth, Keyboard, User,  } from "lucide-react"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Logo from "@/components/commons/Logo";

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

type TformValues = z.infer<typeof loginSchema>;

function LoginForm() {
  const router = useRouter()
  const form = useForm<TformValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  function onSubmit(data: TformValues) {
    if (data.userName !== "naval.ravikant" || data.password !== "05111974"){
      return toast.error("Invalid credentials")
    }
    router.push("/booking")
  }
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="
    flex
    flex-col
    gap-5
    "
    >
      <Form {...form}>
        <FormField
          name="userName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className="
                bg-white
                gap-5
                rounded-md 
                flex
                items-center
               text-black
                w-[10rem] 
                pl-2

                "
                >
                  <User />
                  <Input
                    placeholder="Username"
                    className="
                  pl-0
                  focus-visible:ring-0
                  border-none
                  border-0
                  placeholder:text-black
                  placeholder:font-medium
                  bg-white
                  "
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className="
              bg-white
                gap-5
                rounded-md 
                flex
                items-center
               text-black
                w-[10rem] 
                pl-2
                "
                >
                  <Keyboard />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="
                  pl-0
                  focus-visible:ring-0
                  border-none
                  border-0
                  placeholder:text-black
                  placeholder:font-medium
                  bg-white

                  "
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="
        bg-white 
        text-black 
        hover:bg-white 
        hover:opacity-90 
        rounded-xl
        font-semibold
        "
        >
          Login
        </Button>
      </Form>
    </form>
  );
}
