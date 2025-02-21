"use client";
import UserButton from "@/components/commons/UserButton";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ticketBookSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { setBookedTicket } from "@/redux/reducer";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Earth, LucideIcon, Minus, Moon, Plus, Sun } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { z } from "zod";

type Props = {};

export default function page({}: Props) {
  const { id } = useParams();
  const movies = useAppSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === id);
  return (
    <div className="w-full">
      <header className="flex gap-10">
        <figure
          className="
          w-4/5
          h-[15rem]
          relative
          rounded-md
          "
        >
          <Image
            src={movie?.poster || ""}
            alt="poster"
            fill
            className="object-cover object-top rounded-md"
          />
        </figure>
        <UserButton />
      </header>
      <div
        className="
        flex
        flex-col
        gap-5
      "
      >
        <h1 className="text-xl font-medium">{movie?.title}</h1>
        <TicketBookForm />
      </div>
    </div>
  );
}

type TformValues = z.infer<typeof ticketBookSchema>;

function TicketBookForm() {
  const dispatch = useDispatch()
  const form = useForm<TformValues>({
    resolver: zodResolver(ticketBookSchema),
    defaultValues: {
      ticketCount: 1,
      date: new Date(),
      showTime: "9:00",
    },
  });
  function onSubmit(data: TformValues) {
    console.log(data);
    dispatch(setBookedTicket(data))
    form.reset({
      date:new Date,
      showTime:"9:00",
      ticketCount:1
    })
    toast.success("Ticket booked")
  }
  return (
    <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
      <Form {...form}>
        <TicketCountField form={form} />
        <ShowTimeFields form={form} />
        <DateField form={form} />
      </Form>
      <Button className="w-[15rem]">Book Ticket</Button>
    </form>
  );
}

type Tform = {
  form: UseFormReturn<TformValues, any, undefined>;
};

function TicketCountField({ form }: Tform) {
  return (
    <FormField
      name="ticketCount"
      control={form.control}
      render={({ field }) => (
        <FormItem className="flex items-center gap-5 ">
          <FormLabel className="w-40 h-fit">Ticket Count</FormLabel>
          <div className="flex items-center gap-1">
            <Button
              type="button"
              onClick={() => field.onChange(field.value - 1)}
              disabled={form.getValues("ticketCount") <= 1}
              size={"icon"}
              variant={"ghost"}
            >
              <Minus />
            </Button>
            <FormControl>
              <Input
                type="number"
                className="
                    text-center
                    text-white 
                    w-16 
                    bg-black
                    "
                {...field}
              />
            </FormControl>

            <Button
              type="button"
              onClick={() => field.onChange(field.value + 1)}
              size={"icon"}
              variant={"ghost"}
            >
              <Plus />
            </Button>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type Toption = {
  value:"9:00" | "12:00" | "18:00",
  icon:LucideIcon
}

function ShowTimeFields({ form }: Tform) {
  const options: Toption[] = [
    {
      icon: Sun,
      value: "9:00",
    },
    {
      icon: Earth,
      value: "12:00",
    },
    {
      icon: Moon,
      value: "18:00",
    },
  ];

  const [activeShowTime, setactiveShowTime] = useState(
    form.getValues("showTime")
  );
  return (
    <FormField
      name="showTime"
      control={form.control}
      render={({ field }) => (
        <FormItem className="flex items-center">
          <FormLabel className="w-40 h-fit">Show Time</FormLabel>
          <div className="flex gap-5">
            {options.map((option, index) => (
              <FormControl key={index}>
                <Button
                  type="button"
                  style={
                    activeShowTime === option.value
                      ? {
                          backgroundColor: "black",
                          color: "white",
                        }
                      : {}
                  }
                  onClick={() => {
                    field.onChange(option.value);
                    setactiveShowTime(option.value)
                  } }
                  className={`
                flex 
                gap-2 
                items-center
                bg-neutral-200
                text-black
                hover:bg-neutral-300
                hover:text-black
                `}
                >
                  <option.icon />
                  {option.value}
                </Button>
              </FormControl>
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function DateField({ form }: Tform) {
  return (
    <FormField
      name="date"
      control={form.control}
      render={({ field }) => (
        <FormItem className="flex items-center">
          <FormLabel className="h-fit w-40">Date</FormLabel>

          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  type="button"
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
