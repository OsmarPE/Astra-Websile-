import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props{
    children:ReactNode,
    className?:string
}

export default function Container({children,className}:Props) {
  return (
    <div className={cn("w-[90%] mx-auto max-w-[1100px]",className)}>{children}</div>
  )
}
