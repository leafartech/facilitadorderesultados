import { ReactNode } from "react"

interface TimelineCardProps {
    main: string
    paragraph: string
    children: ReactNode
}

export default function TimelineCard({ children, main, paragraph }: TimelineCardProps) {
    return (
        <div className="relative border border-white/50 bg-my/40 rounded-3xl py-6 px-6 flex flex-col justify-center w-full sm:max-w-[300px]">
            <h3 className="text-white font-bold text-xl">{main}</h3>
            <p className="text-white">{paragraph}</p>
            {children}
        </div>
    )
}