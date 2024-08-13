'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
interface Props{
    children:ReactNode,
    className?:string,
    delay?:number,
    reserve?:boolean,
    view?:boolean
}

export default function AnimationSection({children,className,delay,reserve, view = false}:Props) {
  return (
    <motion.div
        initial={{opacity:0, y:reserve ? -20 : 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once:view}}
        transition={{delay, duration:0.4, ease:'easeInOut'}}
        className={clsx('w-full h-full',className)}
    >
        {children}
    </motion.div>
  )
}
