import { ReactNode } from "react"


interface Props{
    children:ReactNode
}

export default function AuthLayout({children}:Props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
        {children}
    </div>
  )
}
