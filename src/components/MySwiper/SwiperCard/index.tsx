import { ElementType } from "react";

interface SwiperCardProps {
  Icon: ElementType
  title: string
  description: string
}

export default function SwiperCard({ Icon, title, description }: SwiperCardProps) {
  return (
    <div className={`relative rounded-md py-6 px-6 flex flex-col justify-center w-full sm:max-w-[300px]`}>
      <div className="flex flex-col gap-2 justify-center w-full items-start">
        <Icon className={`w-8 h-8 text-white`} />
        <h4 className="font-bold text-xl text-white">{title}</h4>
        <p className='text-left text-white'>{description}</p>
      </div>
    </div>
  )
}

{/* <div className="relative border border-white/50 bg-my/40 rounded-md py-6 px-6 flex flex-col justify-center w-full sm:max-w-[300px]">
  <h3 className="text-my font-bold text-xl">{main}</h3>
  <p className="text-white">{paragraph}</p>
  {children}
</div> */}