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
import { options } from "@/lib/constants";
import { ticketBookSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { setBookedTicket } from "@/redux/reducer";
import { Tmovie } from "@/redux/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  CalendarIcon,
  Loader2,
  Minus,
  Plus,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { z } from "zod";


type TformValues = z.infer<typeof ticketBookSchema>;

type TticketBookFormProps = {
  movie: Tmovie;
};

export default function TicketBookForm({ movie }: TticketBookFormProps) {
  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const form = useForm<TformValues>({
    resolver: zodResolver(ticketBookSchema),
    defaultValues: {
      ticketCount: 1,
      date: new Date(),
      showTime: "12:00",
    },
  });
  async function onSubmit(data: TformValues) {
    try {
      setIsLoading(true);
      dispatch(
        setBookedTicket({
          ...data,
          id: Math.ceil(Math.random() * 10).toString(),
          movie: movie.title,
          ticketPrice: movie.ticketPrice,
        })
      );
      await delay();
      toast.success("Ticket booked");
      form.reset({
        date: new Date(),
        showTime: "12:00",
        ticketCount: 1,
      });
      router.push("/activity");
    } catch (e) {
      toast.error("Unable to book ticket, please contact the developer.");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
      <Form {...form}>
        <TicketCountField disabled={isLoading} form={form} />
        <ShowTimeField disabled={isLoading} form={form} />
        <DateField disabled={isLoading} form={form} />
      </Form>
      <Button disabled={isLoading} className="w-[15rem]">
        {isLoading ? <Loader2 className="animate-spin" /> : "Book Ticket"}
      </Button>
    </form>
  );
}

type Tform = {
  form: UseFormReturn<TformValues, any, undefined>;
  disabled: boolean;
};

function TicketCountField({ form, disabled }: Tform) {
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
              disabled={disabled || form.getValues("ticketCount") <= 1}
              size={"icon"}
              variant={"ghost"}
            >
              <Minus />
            </Button>
            <FormControl>
              <Input
                disabled={disabled}
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
              disabled={disabled}
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

function ShowTimeField({ form, disabled }: Tform) {
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
                  disabled={disabled}
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
                    setactiveShowTime(option.value);
                  }}
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

function DateField({ form, disabled }: Tform) {
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
                  disabled={disabled}
                  type="button"
                  variant={"outline"}
                  className={cn(
                    "w-[140px] pl-3 font-normal bg-neutral-300",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="text-black mr-auto h-4 w-4 " />
                  {field.value ? (
                    format(field.value, "dd-MM-yyyy")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date()}
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
