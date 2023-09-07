import { ReactNode } from "react"

interface SectionProps {
    parallax: boolean
    imagePath?: string
    children: ReactNode
    id?: string
}

export default function Section({ parallax, imagePath, children, id }: SectionProps) {

    if (parallax) {
        return (
            <section id={id} className={`relative ${imagePath} bg-fixed py-12 mt-10`}>
                {/* <div className="absolute top-0 left-0 bg-black/70 w-full h-full"></div> */}
                <div className="z-10">
                    {children}
                </div>
            </section>
        )
    }

    return (
        <section id={id} className="relative w-full flex justify-center items-center mt-10">
            <div className="max-w-7xl flex flex-col items-center">
                {children}
            </div>
        </section>
    )
}