import QuoteLeft from "./QuoteLeft";
import QuoteRight from "./QuoteRight";

interface QuotesProps {
	citation: string
	firstWord: string
}

export default function Quotes({ citation, firstWord }: QuotesProps) {
	return (
		<div className="w-full flex flex-col justify-center">
			<div className="flex relative">
				<div className="absolute top-0 left-0">
					<QuoteLeft />
				</div>
				<div>
					<p className="text-gray-600 text-justify italic">
						<span className="ms-6">{firstWord} </span>
						{citation}
					</p>
				</div>
				<div className="absolute bottom-0 right-0">
					<QuoteRight />
				</div>
			</div>
		</div>
	)
}