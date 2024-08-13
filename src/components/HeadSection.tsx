import { cn } from "@/lib/utils";
import BadgeHead from "./BadgeHead";

interface Props{
    sectionName:string
    title:string,
    description:string,
    className?:string

}

export default function HeadSection({description, sectionName,title, className}:Props) {
    return (
        <div className={cn("max-w-lg w-[90%] mx-auto text-left md:text-center",className)}>
            <BadgeHead>{sectionName}</BadgeHead>
            <h2 className="font-semibold text-3xl md:text-4xl my-5">{title}</h2>
            <p className="text-muted-foreground ">{description}</p>
        </div>
    )
}
