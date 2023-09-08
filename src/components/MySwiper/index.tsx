import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { BoltIcon, ClockIcon, GiftIcon, HeartIcon, ScaleIcon, TrophyIcon, UserIcon } from '@heroicons/react/24/outline'
import SwiperCard from './SwiperCard'

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
          <SwiperCard Icon={GiftIcon} title="Dois por um" description="Obtenha o melhor dos dois mundos com um combo que oferece a expertise de uma nutricionista esportiva e um treinador pelo preço de um. Maximizar sua saúde nunca foi tão acessível." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard Icon={UserIcon} title="Plano Individualizado" description="Tenha resultados notáveis através de um plano individualizado o qual é elaborado sob medida para que alcance seus objetivos de forma saudável e prazerosa!" />
          {/* Tenha resultados notáveis por meio de um plano individualizado o qual é elaborado sob medida para que alcance seus objetivos */}
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard Icon={HeartIcon} title="Vitalidade" description="Cuide do seu corpo por meio de uma dupla abordagem para a sua saúde a qual inclui um plano nutricional exclusivo e um progama de exercícios adaptado às suas necessidades." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard Icon={ScaleIcon} title="Bem-Estar" description="Experimente um equilíbrio entre mente e corpo, melhorando seu bem-estar geral e impulsionando a sua qualidade de vida." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard Icon={BoltIcon} title="Maior Produtividade" description="Potencialize sua produtividade diária com planos de nutrição e treinamento individualizado que te proporcionam uma rotina mais ativa." />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard Icon={TrophyIcon} title="Metas Conquistadas" description="Supere suas metas com o apoio de especialistas que o ajudarão traçar e alcançar as suas metas da melhor forma possível." />
        </SwiperSlide>
      </Swiper>
    </>
  )
}