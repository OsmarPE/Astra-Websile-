import { stepsType } from '@/types'
import React from 'react'

type Props = stepsType

export default function StepCard({description,icon:Icon,title}:Props) {
    return (
        <article className="text-left p-6 border-b lg:border-b-0 lg:border-r border-r-foreground/10 last-of-type:border-b-0 lg:last-of-type:border-r-0">
            <Icon className="size-8" />
            <h3 className="font-medium mt-6 mb-2 text-lg">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </article>
    )
}
