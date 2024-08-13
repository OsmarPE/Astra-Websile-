import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface Props {
    className?: string
    children: ReactNode
}

export default function Section({ className, children }: Props) {
    return (
        <section className={cn('py-20 text-center', className)}>
            {children}
        </section>
    )
}
