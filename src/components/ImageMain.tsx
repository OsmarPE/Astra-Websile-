import Image from 'next/image'
import React from 'react'
import { BorderAnimation } from './ui/BorderAnimation'

export default function ImageMain() {
    return (
        <div className="py-10 md:py-20 relative">
            <div className="gradient absolute -z-10  w-3/4 inset-0 h-3/4 m-auto blur-[10rem]"></div>
            <div className="-m-2 md:-m-4 p-2 ring-1 ring-inset ring-foreground/20 rounded-xl lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">
                <Image src='/assets/dashboard.svg' width={1200} height={1200} alt="figure of dashboard" className="rounded-md lg:rounded-xl" />
                <BorderAnimation
                    size={250}
                    duration={12}
                    delay={9}
                />
            </div>
        </div>
    )
}
