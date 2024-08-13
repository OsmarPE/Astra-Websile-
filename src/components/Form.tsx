import React from 'react'
import { Button } from './ui/button'

export default function Form() {
    return (
        <div className="rounded-2xl border border-primary/10 p-8 flex flex-col md:flex-row gap-4">
            <div className="">
                <h3 className="font-semibold text-foreground text-2xl">Join our newsletter</h3>
                <p className="text-muted-foreground mt-2">Be up to date with everything about AI builder</p>
            </div>
            <div className="md:ml-auto">
                <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                    <input type="text" placeholder="Enter your Email" className="h-10 rounded-md bg-background border border-primary/20 px-4 placeholder:text-sm placeholder:text-muted-foreground " />
                    <Button className="bg-primary/10 text-primary border-primary/10 hover:bg-primary/20 hover:text-primary">Subscribe</Button>
                </div>
                <span className="text-xs text-muted-foreground">By subscribing you agree with our Privacy Policy</span>
            </div>
        </div>
    )
}
