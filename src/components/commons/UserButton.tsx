import React from 'react'
import { Button } from '../ui/button';
import { CircleUser } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  className?:string
}

export default function UserButton({ className }: Props) {
  return (
    <div className={cn(className, `flex gap-2`)}>
      <Button
        className="
            hover:bg-netrual-100
            bg-neutral-300
            rounded-full
            h-14
            w-14
            "
      >
       <CircleUser className='!w-9 !h-9 text-black' />  
      </Button>
      <div className="">
        <h1 className="">Naval</h1>
        <h1> Ravikant</h1>
      </div>
    </div>
  );
}