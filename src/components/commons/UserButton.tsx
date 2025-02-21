import React from 'react'
import { Button } from '../ui/button';
import { UserCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  className?:string
}

export default function UserButton({ className }: Props) {
  return (
    <div className={cn(className, `flex gap-2`)}>
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
  );
}