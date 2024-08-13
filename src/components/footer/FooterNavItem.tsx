import { ReactNode } from "react"

interface Props {
    title: string,
    children:ReactNode
}

export default function FooterNavItem({children,title}:Props) {
    return (
        <div className="basis-36">
            <h3 className="mb-4 font-medium">{title}</h3>
            <ul className="text-muted-foreground leading-relaxed text-sm grid gap-1">
                {children}
            </ul>
        </div>
    )
}
