
export type stepsType = {
    icon: (props: LucideProps) => JSX.Element,
    title:string,
    description:string
}

export type featuresType = {
    icon: (props: LucideProps) => JSX.Element,
    title:string,
    description:string
}

export type plansType = {
    type:string,
    price:number,
    text:string,
    features:string[],
    main:boolean
    href:string,
    textButton:string,
}

export type testimoniesType = {
    name:string,
    user:string,
    text:string
}
