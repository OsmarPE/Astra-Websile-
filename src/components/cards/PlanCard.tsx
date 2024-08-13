import { cn } from '@/lib/utils'
import { plansType } from '@/types'
import { Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = plansType

export default function PlanCard({ features, href, main, price, text, textButton, type }: Props) {
    return (
        <article className={cn("text-left bg-card border-foreground/20 rounded-lg grid grid-rows-[auto_1fr]",
            main ? 'border-[2px] border-primary' : 'border border-foreground/20')}>
            <div className="p-6 border-b border-b-primary/20">
                <span className="">{type}</span>
                <h3 className={cn("font-bold text-2xl", main ? 'text-foreground' : 'text-muted-foreground')}>{price === 0 ? 'Free' : `$${price}`}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
            </div>
            <div className="p-6 grid grid-row-[auto_1fr] gap-8">
                <ul className="grid gap-2">
                    {
                        features.map((item, i) => (
                            <li key={i} className="inline-flex items-center gap-2"> <Zap className="size-4 text-primary fill-primary" />{item}</li>
                        ))
                    }
                </ul>
                <Link href={href} className={cn(
                    "py-2.5 px-5 rounded-lg self-end text-sm font-medium transition-opacity hover:opacity-70 w-full inline-block text-center",
                    main ? 'bg-primary text-foreground' : 'bg-card-foreground text-black '
                )}>{textButton}</Link>
            </div>
        </article>
    )
}
