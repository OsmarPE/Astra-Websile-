import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode,
    href:string
}

export default function FooterNavLink({children,href}:Props) {
  return (
    <li><Link className='transition-colors duration-200 hover:text-foreground' href={href}>{children}</Link></li>
  )
}
