import Quotes from "./Quotes"

interface IdentityCardProps {
	name: string
	citation: string[]
	firstWord: string
	imagePath: string
	href: string
}

export default function IdentityCard({ citation, imagePath, name, firstWord, href }: IdentityCardProps) {
	return (
		<div className="w-full relative sm:max-w-5xl sm:h-[424px] flex flex-col sm:flex-row items-start justify-start gap-4 border border-gray-300 rounded-3xl py-4 px-4 mt-4 shadow-sec">
			<img src={`./images/${imagePath}.png`} alt={`Foto - ${name}`} className="w-2/3 sm:h-full" />
			<div className="flex flex-col gap-3 items-start mt-8 sm:px-8">
				<h3 className="font-bold text-3xl mb-8">{name}</h3>
				<Quotes firstWord={firstWord} citation={citation} />
			</div>
			<a href={href} target="_blank" className="w-[36px] h-[36px] flex absolute top-2 right-2 items-center justify-center rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{fill: "#fff"}}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
		</div>
	);
}