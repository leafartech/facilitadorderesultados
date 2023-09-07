import QuoteLeft from "./QuoteLeft";
import QuoteRight from "./QuoteRight";

interface QuotesProps {
	citation: string[]
	firstWord: string
}

export default function Quotes({ citation, firstWord }: QuotesProps) {
	return (
		<div className="w-full flex flex-col justify-center">
			<div className="flex relative">
				<div className="absolute top-0 left-0 opacity-40">
					<QuoteLeft />
				</div>
				<div>
					{citation.map((text, index) => (
						<p className="text-gray-600 text-justify italic mb-4" key={index}>
							{index === 0 && (
								<span className="ms-6">{firstWord}</span>
							)}
							{text}
						</p>
					))}
				</div>
				<div className="absolute bottom-0 right-0 opacity-40">
					<QuoteRight />
				</div>
			</div>
		</div>
	)
}