'use client'
import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  const { id } = useParams();

    return (
    <div className='w-full'>
        
    </div>
  )
}