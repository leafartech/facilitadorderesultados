import Quotes from "./Quotes"

interface IdentityCardProps {
	name: string
	citation: string
	firstWord: string
	imagePath: string
}

export default function IdentityCard({ citation, imagePath, name, firstWord }: IdentityCardProps) {
	return (
		<div className="w-full max-w-5xl flex items-center justify-start gap-4 border border-gray-300 rounded-xl py-8 px-4 mt-4 shadow-md">
			<img src={`./images/${imagePath}.png`} alt={`Foto - ${name}`} />
			<div className="flex flex-col gap-3 items-start mt-2">
				<h3 className="font-bold text-3xl">{name}</h3>
				<Quotes firstWord={firstWord} citation={citation} />
			</div>
		</div>
	);
}