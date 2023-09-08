import { ElementType } from "react";

interface SwiperCardProps {
  Icon: ElementType
  title: string
  description: string
}

export default function SwiperCard({ Icon, title, description }: SwiperCardProps) {
  return (
    <div className={`w-full h-full`}>
			<div className="flex flex-col gap-2 justify-center w-full items-center">
				<Icon className={`w-8 h-8 text-my`} />
				<h4 className="font-bold text-2xl text-my">{title}</h4>
				<p className='text-gray-600 text-justify'>{description}</p>
		  </div>
		</div>
  )
}