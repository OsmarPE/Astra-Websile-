import { testimoniesType } from '@/types'
import { User } from 'lucide-react'
import React from 'react'

type Props = testimoniesType

export default function TestimonyCard({name,text,user}:Props) {
    return (
        <figure className="max-w-72 p-5 rounded-2xl text-left border border-foreground/10">
            <div className="flex items-center gap-2">
                <User className="size-6" />
                <div className="">
                    <figcaption className="text-sm">
                        {name}
                    </figcaption>
                    <p className="text-xs text-muted-foreground">@{user}</p>
                </div>
            </div>
            <blockquote className="text-sm mt-2">
               {text}
            </blockquote>
        </figure>
    )
}
