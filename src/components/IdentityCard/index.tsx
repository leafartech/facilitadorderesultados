import Quotes from "./Quotes"

interface IdentityCardProps {
	name: string
	citation: string[]
	firstWord: string
	imagePath: string
}

export default function IdentityCard({ citation, imagePath, name, firstWord }: IdentityCardProps) {
	return (
		<div className="w-full sm:max-w-5xl sm:h-[424px] flex flex-col sm:flex-row items-start justify-start gap-4 border border-gray-300 rounded-3xl py-4 px-4 mt-4 shadow-sec">
			<img src={`./images/${imagePath}.png`} alt={`Foto - ${name}`} className="w-2/3 sm:h-full" />
			<div className="flex flex-col gap-3 items-start mt-8 sm:px-8">
				<h3 className="font-bold text-3xl mb-8">{name}</h3>
				<Quotes firstWord={firstWord} citation={citation} />
			</div>
		</div>
	);
}