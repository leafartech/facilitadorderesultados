import { ElementType } from "react"

interface InformativeCardProps {
	Icon: ElementType
	title: string
}

export default function InformativeCard({ Icon, title }: InformativeCardProps) {
	return (
		<div className="px-2 py-4 text-white flex flex-col gap-2 grad-main rounded-xl justify-center items-center">
			<Icon className="w-8 h-8" />
			<h4 className="text-xl font-bold uppercase">{title}</h4>
		</div>
	)
}