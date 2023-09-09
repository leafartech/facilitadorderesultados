import { ElementType } from "react"

interface InformativeCardProps {
	title: string
}

export default function InformativeCard({ title }: InformativeCardProps) {
	return (
		<div className="w-full text-center px-4 py-4 sm:py-8 text-white flex flex-col gap-2 grad-main rounded-2xl sm:rounded-3xl justify-center items-center">
			<h4 className="text-base sm:text-xl font-bold uppercase">{title}</h4>
		</div>
	)
}