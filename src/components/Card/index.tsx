import { ReactNode } from 'react'


interface CardProps {
    main: string
    bottom: string
    children: ReactNode
    bg: boolean
    href?: string
}

export default function Card({ children, bottom, main, bg, href }: CardProps) {
    return (
        <a href={`#${href}`} className={`w-full px-6 py-5 flex flex-col items-center justify-center border border-my rounded-xl ${bg && 'grad-main'}`}>
            {children}
            <div className="text-center mt-1">
                <h3 className={` font-bold ${bg && 'text-white'}`}>{main}</h3>
                <p className={`text-sm font-medium ${bg ? 'text-white' : 'text-gray-600 '}`}>{bottom}</p>
            </div>
        </a>
    )
}