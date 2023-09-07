import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { BugAntIcon } from '@heroicons/react/24/outline'

export default function MySwiper() {
	return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 tex-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 text-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 text-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 text-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 text-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 text-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 text-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 tex-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
        <SwiperSlide>
					<div className="w-full h-full">
						<div className="flex flex-col gap-2 justify-center w-full items-center">
							<BugAntIcon className="w-8 h-8 tex-my" />
							<h4 className="font-bold text-2xl text-my">ARTHUR É MUITO LINDO</h4>
							<p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit sed beatae ut? Sit nostrum distinctio possimus</p>
						</div>
					</div>
        </SwiperSlide>
      </Swiper>
    </>
	)
}