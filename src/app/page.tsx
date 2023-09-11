'use client'

import Card from "@/components/Card"
import Dropdown from "@/components/Dropdown"
import IdentityCard from "@/components/IdentityCard"
import InformativeCard from "@/components/InformativeCard"
import MySwiper from "@/components/MySwiper"
import Navbar from "@/components/Navbar"
import Section from "@/components/Section"
import Text from "@/components/Text"
import TimelineCard from "@/components/TimelineCard"
import { StarIcon } from "@heroicons/react/24/outline"

export default function Home() {

  if (typeof window !== 'undefined') {
    const menuItems = document.querySelectorAll('#link_item')

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY

      // Verifique qual seção está visível
      // Você pode usar o método getBoundingClientRect() para isso

      // Adicione/remova a classe para destacar o item do menu correspondente
      menuItems.forEach((menuItem) => {
        if (menuItem !== null && menuItem) {
          const sectionId = menuItem.getAttribute('href')!.substring(1)
          const section: HTMLElement | null = document.querySelector(`#${sectionId}`)

          const sectionTop = section!.offsetTop
          const sectionHeight = section!.offsetHeight

          if (scrollPosition + 300 >= sectionTop && scrollPosition + 300 < sectionTop + sectionHeight) {
            menuItem.classList.add('active') // Adicione uma classe 'active' para destacar o item
          } else {
            menuItem.classList.remove('active') // Remova a classe 'active' se não estiver visível
          }
        }
      })
    })
  }


  return (
    <>
      <header className="relative" id="inicio">
        <Navbar />
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center pt-[72px] sm:pt-0">
          <div className="max-w-7xl flex flex-col-reverse sm:grid sm:grid-cols-2 mb-6 sm:mb-0">
            <div className="flex flex-col justify-center gap-3 max-w-xl px-4 sm:px-0 mt-4 sm:mt-0">
              <h1 className="font-extrabold text-2xl sm:text-5xl"><span className="text-my text-shadow">COMBO </span>FACILITADOR  <br /> DE RESULTADOS</h1>
              <p className="font-medium text-sm sm:text-base">
                Revitalize seu estilo de vida e conquiste seus objetivos de forma eficiente e sustentável por meio de nossa <span className="font-semibold"> abordagem individualizada</span>.
              </p>
              <div className="mt-2 w-full">
                <a href="#oferta" className="btn shadow w-full block sm:inline text-center">Quero saber mais</a>
              </div>
            </div>
            <div className="flex items-center justify-center px-2 sm:px-0">
              <img src="./images/bgPc.png" alt="Imagem do João + Ana" className="hidden sm:block w-full sm:w-[452px] sm:h-[440px]" />
              <img src="./images/bgMob.png" alt="Imagem do João + Ana" className="block sm:hidden w-full sm:w-[452px] sm:h-[440px]" />
            </div>
          </div>
          <div className="relative sm:absolute sm:bottom-2 max-w-7xl w-full flex flex-col sm:flex-row gap-3 sm:gap-8 items-center justify-between px-4">
            <Card
              href="nutricionista"
              main="Nutrição"
              bottom="Acompanhamento profissional"
              bg={false}
            >
              <img src="./images/cards/apple.png" alt="" className="h-6 w-6" />
            </Card>
            <div className="relative hidden sm:flex items-center justify-center h-16 w-16">
              <span className="absolute bg-gray-900 h-[2px] rounded-full w-full"></span>
              <span className="absolute bg-gray-900 h-[2px] rounded-full w-full rotate-90"></span>
            </div>
            <Card
              href="treinador"
              main="Treinador"
              bottom="Treinos feitos sob a sua medida"
              bg={false}
            >
              <img src="./images/cards/gym.png" alt="" className="h-6 w-6" />
            </Card>
            <div className=" relative hidden sm:flex items-center justify-center flex-col h-20 w-16 gap-1 translate-y-2">
              <span className="bg-gray-900 h-[2px] mb-[2px] rounded-full w-full"></span>
              <span className="bg-gray-900 h-[2px] -translate-y-[14px] rounded-full w-full"></span>
            </div>
            <Card
              main="Resultados"
              bottom="Alcance sua melhor forma"
              bg={true}
            >
              <img src="./images/cards/star.png" alt="" className="h-6 w-6" />
            </Card>
          </div>
        </div>
        <img src="./images/rect.png" alt="" className="absolute top-12 h-56 hidden sm:block" />
        {/* <img src="./images/rect4.png" alt="" className="absolute bottom-12 -left-12 h-24" /> */}
      </header>
      <main className="sm:mt-20 pb-20">
        <Section id="funciona" parallax={true} imagePath="parallax1">
          <div className="z-10 flex flex-col items-center">
            <Text
              bg={true}
              main="Como funciona"
              subtitle="o Combo Facilitador de Resultados"
            />
            <div className="relative h-[700px] sm:h-[824px] max-w-5xl w-full flex flex-col sm:flex-row sm:items-center px-4 gap-8 sm:gap-0 mt-6">
              <div className="relative sm:absolute sm:top-12">
                <TimelineCard
                  main="Contato"
                  // É o momento crucial em que você decide investir em si mesmo
                  paragraph="Esta é a fase em que estabelecemos uma base sólida para um relacionamento de confiança. Em até 72h, o treinador e a nutricionista entrarão em contato de forma individual."
                  // paragraph="Em até 72 horas, estabeleceremos uma base sólida para um relacionamento de confiança, garantindo que sua experiência seja personalizada e voltada para o seu objetivo."
                >
                  <p className="absolute -top-4 -left-2 sm:left-[92%] sm:top-[84px] float-number">1</p>
                </TimelineCard>
              </div>
              <img src="./images/arrow1.png" alt="" className="absolute top-[90px] left-[292px] w-[416px] h-[301px] hidden sm:block" />
              <div className="relative sm:absolute right-0">
                <TimelineCard
                  main="Nutricionista"
                  paragraph="1 consulta + feedback quinzenal + caderno de receitas práticas + manual de industrializados + acesso ao app exclusivo + método de redução de danos em restaurantes + suporte online. "
                >
                  <p className="absolute -top-4 -left-2 sm:-top-1 sm:-left-1 float-number">2</p>
                </TimelineCard>
              </div>
              <img src="./images/arrow2.png" alt="" className="absolute bottom-[59px] right-[92px] hidden sm:block" />
              <div className="relative sm:absolute bottom-0 sm:left-24">
                <TimelineCard
                  main="Treinador"
                  paragraph="1 consulta + avaliação postural + treino individualizado que será disponibilizado através de um APP de celular + correção de exercícios via envio de vídeos no WhatsApp + suporte online."
                >
                  <p className="absolute -top-4 -left-2 float-number sm:top-[64%] sm:left-[92%] sm:right-2">3</p>
                </TimelineCard>
              </div>
            </div>
            <div className="mt-4 sm:mt-12 w-full flex justify-center px-4 sm:px-0">
              <a href="#oferta" className="btn shadow w-full sm:max-w-xs block sm:inline text-center">Quero saber mais</a>
            </div>
          </div>
        </Section>
        <Section id="nutricionista" parallax={false}>
          <Text main="Nutricionista" subtitle="Esportiva e Comportamental" bg={false} />
          <IdentityCard href="https://instagram.com/nutri.anaclarafsaa?igshid=MzRlODBiNWFlZA==" name="Ana Clara Freire" firstWord="Olá, " citation={
            ['eu me chamo Ana Clara e sou especialista na área da nutrição esportiva e comportamental!',
              'Meu propósito é transformar vidas por meio da alimentação, promovendo uma mudança de comportamento de forma organizada.',
              'Trabalho para desenvolver dietas que se integram perfeitamente à rotina de cada indivíduo, tornando a jornada alimentar não apenas saudável, mas também prazerosa e saborosa.']
          } imagePath="ana-clara" />
          <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-4 sm:gap-20 items-center justify-between mt-8 sm:mt-16 pb-8 px-4 sm:px-0">
            <InformativeCard title="+ 4 anos de experiência" />
            <InformativeCard title="Graduada em nutrição no Cesupa" />
            <InformativeCard title="Pós Graduada na Uniguaçu" />
          </div>
          <img src="./images/rect.png" alt="retângulo" className="hidden sm:block absolute top-0 left-0 h-48" />
        </Section>
        <Section id="treinador" parallax={false}>
          <Text main="Treinador" subtitle="Esportivo" bg={false} />
          <IdentityCard isJoaoPhoto={true} href="https://instagram.com/joaonavarrotreinador?igshid=MzRlODBiNWFlZA==" name="João Navarro" firstWord="Opa, " citation={
            ['me chamo João e sou especialista em Bodybuilding & Coach.',
              'A prioridade do meu trabalho é cuidarmos da sua saúde de forma responsável e eficaz.',
              'Como faço isso? Através de uma abordagem totalmente individualizada, desenvolvido com base nas suas caracteísticas únicas e necessidades do seu físico, contribuindo para uma qualidade de vida e uma sensção de bem-estar para sua vida!']
          } imagePath="joao-navarro" />
          <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-4 sm:gap-20 items-center justify-between mt-8 sm:mt-16 pb-8 px-4 sm:px-0">
            <InformativeCard title="Graduado na Uniguaçu" />
            <InformativeCard title="+ 9 anos de experiência" />
            <InformativeCard title="Bacharel em educação física" />
          </div>
          <img src="./images/rect2.png" alt="retângulo" className="hidden sm:block absolute top-0 right-0 h-48" />
          <img src="./images/rect.png" alt="retângulo" className="hidden sm:block absolute bottom-0 left-0 h-48" />
        </Section>
        <Section id="beneficios" parallax={true} imagePath="parallax2">
          <Text bg={true} main="Benefícios" subtitle="do Combo Facilitador de Resultados" />
          <div className="w-full h-full flex-col flex justify-center items-center mt-4 pt-6 pb-6 sm:py-24">
            <MySwiper />
          </div>
          <div className="mt-4 sm:mt-12 w-full flex justify-center px-4 sm:px-0">
            <a href="#oferta" className="btn shadow w-full sm:max-w-xs block sm:inline text-center">Quero saber mais</a>
          </div>
        </Section>
        <Section id="oferta" parallax={false}>
          <Text bg={false} main="Combo Facilitador de Resultados" subtitle="Serviço de excelência, oferta única!" />
          <div className="relative w-full mt-8 sm:mt-16 sm:mb-24">
            <img src="./images/rect3.png" alt="" className="hidden sm:block absolute -left-56 -top-24 -z-10" />
            <img src="./images/rect3.png" alt="" className="hidden sm:block absolute -right-56 -bottom-24 -z-10" />
            <div className="max-w-lg w-full rounded-3xl flex flex-col grad-main py-10 px-8 border border-white shadow">
              <div className="text-white">
                <h5 className="font-semibold text-3xl">Pagamento único</h5>
              </div>
              <div className="text-white flex justify-between items-end">
                <p className="mt-4">
                  <span className="text-white/50 font-medium text-sm">de R$</span>
                  <span className="font-medium line-through text-2xl">524,00</span>
                </p>
                <p>
                  <span className="text-white/50 font-medium text-sm">por R$</span>
                  <span className="font-medium text-3xl">13</span>
                  <span className="text-white/50 font-medium text-sm">/dia</span>
                </p>
              </div>
              <div className="border-y-2 border-white/50 py-6 my-6 px-2">
                <p className="text-white/70 font-medium">Conforme a duração do plano aumenta, o preço que você vai pagar diminui!</p>
              </div>
              <div className="text-white flex flex-col">
                <h5 className="font-semibold text-3xl">Planos</h5>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <a href="https://pay.kiwify.com.br/gvjUM43" className="border border-white rounded-xl font-medium py-2 text-center hover:bg-white hover:text-my hover:font-bold">Mensal</a>
                  <a href="https://pay.kiwify.com.br/V3HSTLx" className="relative border border-white bg-white hover:border-white/95 hover:bg-white/95 text-my rounded-xl font-bold py-2 text-center">
                    <span className="absolute -top-[22px] text-sm font-medium right-0 text-white/50 flex items-end"><StarIcon className="w-5 h-5" />Favorito</span>
                    Trimestral
                  </a>
                  <a href="https://pay.kiwify.com.br/U1VMdBb" className="border border-white rounded-xl font-medium py-2 text-center hover:bg-white hover:text-my hover:font-bold">Semestral</a>
                  <a href="https://pay.kiwify.com.br/h5c1o4n" className="border border-white rounded-xl font-medium py-2 text-center hover:bg-white hover:text-my hover:font-bold">Anual</a>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="duvidas" parallax={false}>
          <Text bg={false} main="FAQ" subtitle="Dúvidas frequentes" />
          <div className="sm:w-[700px] flex gap-8 flex-wrap justify-between mt-8 px-4 sm:px-0">
            <Dropdown
              title="Por onde receberei a dieta e o treino?"
              text="Receberá por meio de um aplicativo exclusivo que será disponibilizado e o acesso será de acordo com o templo do plano contratado."
            />
            <Dropdown
              title="O app disponibilizado é pago?"
              text="Não! ele é disponibilizado de forma 100% gratuita aos pacientes."
            />
            <Dropdown
              title="E quem não pode ir presencialmente?"
              text="O acompanhamento será online, terá a mesma qualidade da presencial. Daremos todo o suporte possível."
            />
            <Dropdown
              title="Por quanto tempo terei acesso ao suporte?"
              text="Depende 100% do plano contratado, exemplo: no plano contratado de 30 dias, você terá 30 dias de suporte para o que você precisar!"
              />
            <Dropdown
              title="Como é feita a avaliação física online?"
              text="Sera encaminhado para vocẽ um guia de medidas em PDF para vocẽ realizar a sua própria avaliação seguindo as instruções do PDF. Nos passará as medidas, fotos e peso para fazermos a reavaliação mensalment."
            />
            <Dropdown
              title="Posso fazer alteração de plano?"
              text="Se você já comprou um plano, terá até 7 dias para cancelar o plano atual e fazer uma nova aquisição por outro plano."
            />
          </div>
        </Section>
      </main>
      <footer className="py-8 bg-black flex sm:items-center sm:justify-center justify-center gap-2 flex-col px-4">
        <div className="max-w-2xl">
          <div className=" w-full max-w-5xl flex flex-col gap-2 items-start sm:items-start text-zinc-300 font-medium text-sm">
            <span className="text-xl text-my mb-1">Explore</span>
            <div className="flex sm:justify-start justify-start gap-12 sm:gap-32 w-full">
              <div className="flex flex-col gap-1">
                <a className="transition hover:text-my" href="#inicio">Inicio</a>
                <a className="transition hover:text-my" href="#funciona">Como Funciona</a>
                <a className="transition hover:text-my" href="#nutricionista">Nutricionista</a>
                <a className="transition hover:text-my" href="#treinador">Treinador</a>
              </div>
              <div className="flex flex-col gap-1">
                <a className="transition hover:text-my" href="#beneficios">Beneficios</a>
                <a className="transition hover:text-my" href="#oferta">Oferta</a>
                <a className="transition hover:text-my" href="#duvidas">Dúvidas</a>
              </div>
            </div>
          </div>
          <p className="text-zinc-300/60 font-medium text-center text-xs mt-8">Todos os direitos reservados 2023<br /> <span className="text-my">&copy;João Navarro | Ana Clara Freire</span></p>
        </div>
      </footer>
    </>
  )
}
