import { ElementType } from "react"

interface InformativeCardProps {
	Icon: ElementType
	title: string
}

export default function InformativeCard({ Icon, title }: InformativeCardProps) {
	return (
		<div className="w-full text-center px-4 py-8 text-white flex flex-col gap-2 grad-main rounded-3xl justify-center items-center">
			{/* <Icon className="w-8 h-8" /> */}
			<h4 className="text-lg sm:text-xl font-bold uppercase">{title}</h4>
		</div>
	)
}