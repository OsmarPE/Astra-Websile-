import { cn } from '@/lib/utils'
import React from 'react'

interface Props{
    className?:string
}

export default function LightCircle({className}:Props) {
  return (
    <div className={cn("hidden md:block absolute bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]",className)}></div>
  )
}
