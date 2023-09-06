import { ReactNode } from "react"

interface SectionProps {
    parallax: boolean
    imagePath?: string
    children: ReactNode
    id: string
}

export default function Section({ parallax, imagePath, children, id }: SectionProps) {

    if (parallax) {
        return (
            <section id={id} className={`relative parallax1 bg-fixed py-12`}>
                {/* <div className="absolute top-0 left-0 bg-black/70 w-full h-full"></div> */}
                <div className="z-10">
                    {children}
                </div>
            </section>
        )
    }

    return (
        <section>
            {children}
        </section>
    )
}