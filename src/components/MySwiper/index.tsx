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
					<SwiperCard Icon={UserIcon} title="Plano Individualizado" description="Desfrute de um plano individualizado, meticulosamente elaborado sob as suas medidas para o alcance de suas metas. Alcance resultados notáveis com plano totalmente adaptado a você!" />
        </SwiperSlide>
        <SwiperSlide>
					<SwiperCard Icon={BoltIcon} title="Maior Produtividade" description="Alcance o seu potencial máximo com planos de nutrição e treinamento individualizado que impulsionam a sua produtividade diária." />
        </SwiperSlide>
        <SwiperSlide>
					<SwiperCard Icon={HeartIcon} title="Vitalidade" description="Cuide do seu corpo com uma abordagem abrangente para a saúde, que inclui nutrição equilibrada e um progama de exercícios bem planejado!" />
        </SwiperSlide>
        <SwiperSlide>
					<SwiperCard Icon={TrophyIcon} title="Metas Conquistadas" description="Supere suas metas com o apoio de especialistas que o ajudarão traçar e alcançar metas realistas." />
        </SwiperSlide>
        <SwiperSlide>
					<SwiperCard Icon={ScaleIcon} title="Bem-Estar" description="Experimente um equilíbrio entre mente e corpo, melhorando seu bem-estar geral." />
        </SwiperSlide>
        <SwiperSlide>
					<SwiperCard Icon={GiftIcon} title="Dois por UM" description="Obtenha o melhor dos dois mundos com um combo que oferece a expertise de uma nutricionista esportiva e um treinador pelo preçp de um. Maximizar sua saúde nunca foi tão acessível" />
        </SwiperSlide>
        <SwiperSlide>
					<SwiperCard Icon={ClockIcon} title="Suporte Contínuo" description="Conte com a orientação constante para se manter no caminho certo, adaptando-se ás suas necessidade em constante mudança." />
        </SwiperSlide>
      </Swiper>
    </>
	)
}