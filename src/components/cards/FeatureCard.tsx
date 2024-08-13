import { featuresType } from '@/types'
import React from 'react'

type Props = featuresType
export default function FeatureCard({description,icon:Icon,title}:Props) {
    return (
        <article className="p-2 text-left">
            <Icon className="size-8 " />
            <h3 className="font-medium mt-6 mb-2 text-lg">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </article>
    )
}
