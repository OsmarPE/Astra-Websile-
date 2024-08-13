import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default async function ActionSession() {

    const user = await currentUser()

    return (
        <div className="text-sm flex items-center gap-4 font-medium">
            {
                user ? <UserButton /> : (
                    <>
                        <Link href='/sign-in' className={buttonVariants({ variant: 'ghost', size: 'sm' })} >Login</Link>
                        <Link href='/sign-up' className={buttonVariants({ variant: 'default', size: 'sm' })} >Start free trial</Link>
                    </>
                )
            }
        </div>

    )
}
