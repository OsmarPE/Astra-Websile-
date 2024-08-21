import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from 'framer-motion'
import ActionSession from "../ActionSession";
import AnimationSection from "../AnimationSection";
export default function Header() {
    return (
        <header className="border-b border-b-border sticky top-0 backdrop-blur-lg z-30">
            <AnimationSection reserve>
                <div style={{height:60}} className="w-[90%] max-w-6xl mx-auto flex items-center justify-between">
                    <Link href="#" className="flex items-center gap-3">
                        <Image src={'/assets/icon.png'} alt="logo" width={24} height={24} className="size-6" />
                        Astra
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4 text-sm">
                            <li> <Link href='#'>Pricing</Link> </li>
                            <li> <Link href='#'>About</Link> </li>
                            <li> <Link href='#'>Fectures</Link> </li>
                            <li> <Link href='#'>Blog</Link> </li>
                        </ul>
                    </nav>
                <ActionSession />
                </div>
                
            </AnimationSection>
        </header>
    )
}
