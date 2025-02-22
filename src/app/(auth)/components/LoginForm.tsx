"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schema";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Keyboard, Loader2, User } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { z } from "zod";

type Props = {};
type TformValues = z.infer<typeof loginSchema>;
type TForm = {
  form: UseFormReturn<TformValues, any, undefined>;
};
export default function LoginForm({}: Props) {
  const router = useRouter();
  const form = useForm<TformValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  async function onSubmit(data: TformValues) {
    if (data.userName !== "naval.ravikant" || data.password !== "05111974") {
      return toast.error("Invalid credentials");
    }
    router.push("/booking");
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
        <UserNameField form={form} />
        <PasswordField form={form} />
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

function UserNameField({ form,  }: TForm) {
  return (
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
  );
}

function PasswordField({ form,  }: TForm) {
  return (
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
  );
}
