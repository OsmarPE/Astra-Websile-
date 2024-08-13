import { Metadata } from 'next'

export const meta:Metadata ={
    title:{
        default:'Astra - AI powered website builter',
        template:'Astra'
    },
    description:'Astra is am AI powered website that ypu helps you create pages in minutes.',
    icons:{
        icon:{
            url:'/favicon.ico',
            href:'/favicon.ico',
        }
    },
    openGraph:{
        title:'Astra - Bulter Website in Minutes',
        description:'Astra is am AI powered website that ypu helps you create pages in minutes.',
        images:[
            {
                url:'/assets/og-image.png',
            }
        ]
    },
    twitter:{
        card:'summary_large_image',
        creator:'@OsmarPT',
        title:'Astra - Bulter Website in Minutes',
        images:[
            {
                url:'/assets/og-image.png'
            }
        ]
    },
    metadataBase:new URL('https://astra-os.vercel.app')
}