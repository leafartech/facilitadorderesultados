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
import { AcademicCapIcon, ClockIcon, StarIcon } from "@heroicons/react/24/outline"

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
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-7xl flex flex-col-reverse sm:grid sm:grid-cols-2 mb-6 sm:mb-0">
            <div className="flex flex-col justify-center gap-3 max-w-xl px-4 sm:px-0">
              <h1 className="font-extrabold text-2xl sm:text-5xl"><span className="text-my text-shadow">COMBO </span>FACILITADOR  <br /> DE RESULTADOS</h1>
              <p className="font-medium text-sm sm:text-base">
                Revitalize seu estilo de vida e conquiste seus objetivos de forma eficiente e sustentável por meio de nossa <span className="font-semibold"> abordagem individualizada</span>.
              </p>
              <div className="mt-2 w-full">
                <a href="" className="btn shadow w-full block sm:inline text-center">Quero saber mais</a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="./images/bg.png" alt="Imagem do João + Ana" className="w-full sm:h-[440px]" />
            </div>
          </div>
          <div className="relative sm:absolute sm:bottom-2 max-w-7xl w-full flex flex-col sm:flex-row gap-3 sm:gap-12 items-center justify-between px-4">
            <Card
              href="nutricionista"
              main="Nutrição"
              bottom="Acompanhamento profissional"
              bg={false}
            >
              <img src="./images/cards/apple.png" alt="" className="h-6 w-6" />
            </Card>
            <div className="relative hidden sm:flex items-center justify-center h-2 w-5">
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
            <div className=" relative hidden sm:flex items-center justify-center flex-col h-20 w-6 gap-1 translate-y-2">
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
      <main className="mt-20 pb-20">
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
                  main="Aquisição"
                  // É o momento crucial em que você decide investir em si mesmo
                  paragraph="A aquisição é o momento crucial em que você decide investir em si mesmo e dá o primeiro passo para a sua jornada em direção a um estilo de vida mais saudável e equilibrado."
                >
                  <p className="absolute -top-4 -left-2 sm:-right-2 float-number">1</p>
                </TimelineCard>
              </div>
              <img src="./images/arrow1.png" alt="" className="absolute top-[90px] left-[276px] w-[476px] h-[299px] hidden sm:block" />
              <div className="relative sm:absolute right-0">
                <TimelineCard
                  main="Contato (até 72h)"
                  paragraph="Esta é a fase em que estabelecemos a base sólida para um relacionamento de confiança, garantindo que sua experiência seja personalizada e voltada para o seu objetivo."
                >
                  <p className="absolute -top-4 -left-2 sm:-top-2 sm:-left-1 float-number">2</p>
                </TimelineCard>
              </div>
              <img src="./images/arrow2.png" alt="" className="absolute bottom-[70px] right-[111px] hidden sm:block" />
              <div className="relative sm:absolute bottom-0 sm:left-24">
                <TimelineCard
                  main="Consultas"
                  paragraph="No coração do Combo Facilitador de Resultados estão as consultas nas quais os profissionais altamente qualificados trabalham em estreita colaboração com você."
                >
                  <p className="absolute -top-4 -left-2 float-number sm:bottom-[52px] sm:-right-4">3</p>
                </TimelineCard>
              </div>
            </div>
          </div>
        </Section>
        <Section id="nutricionista" parallax={false}>
          <Text main="Nutricionista" subtitle="Esportiva" bg={false} />
          <IdentityCard name="Ana Clara Ferreira" firstWord="Olá, " citation={
            ['eu me chamo Ana Clara e sou especialista na área da nutrição!',
              'Meu propósito é transformar vidas por meio da alimentação, promovendo uma mudança de comportamento de forma natural e estruturada.',
              'Trabalho para desenvolver dietas que se integram perfeitamente à rotina de cada indivíduo, tornando a jornada alimentar não apenas saudável, mas também prazerosa e saborosa.']
          } imagePath="ana-clara" />
          <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-4 sm:gap-20 items-center justify-between mt-8 sm:mt-16 pb-8 px-4 sm:px-0">
            <InformativeCard Icon={ClockIcon} title="+ 10 anos de experiência" />
            <InformativeCard Icon={ClockIcon} title="Pós graduada na Facuminas" />
            <InformativeCard Icon={ClockIcon} title="Graduada na Uniguaçu" />
          </div>
          <img src="./images/rect.png" alt="retângulo" className="hidden sm:block absolute top-0 left-0 h-48" />
        </Section>
        <Section id="treinador" parallax={false}>
          <Text main="Treinador" subtitle="Esportivo" bg={false} />
          <IdentityCard name="João Navarro" firstWord="Opa, " citation={
            ['me chamo João e sou especialista em treinamentos.',
              'A prioridade do meu trabalho é cuidarmos da sua saúde de forma responsável.',
              'Como faço isso? Através de uma abordagem individualizada, eu consigo proporcionar treinamentos de excelência, contribuindo para uma qualidade de vida e sensação de bem-estar excepcionais em sua vida!']
          } imagePath="joao-navarro" />
          <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-4 sm:gap-20 items-center justify-between mt-8 sm:mt-16 pb-8 px-4 sm:px-0">
            <InformativeCard Icon={StarIcon} title="Graduado na Uniguaçu" />
            <InformativeCard Icon={ClockIcon} title="+ 9 anos de experiência" />
            <InformativeCard Icon={AcademicCapIcon} title="Planos individualizados" />
          </div>
          <img src="./images/rect2.png" alt="retângulo" className="hidden sm:block absolute top-0 right-0 h-48" />
          <img src="./images/rect.png" alt="retângulo" className="hidden sm:block absolute bottom-0 left-0 h-48" />
        </Section>
        <Section id="beneficios" parallax={true} imagePath="parallax2">
          <Text bg={true} main="Benefícios" subtitle="do Combo Facilitador de Resultados" />
          <div className="w-full h-full flex justify-center items-center mt-4 py-12 sm:py-24">
            <MySwiper />
          </div>
        </Section>
        <Section id="oferta" parallax={false}>
          <Text bg={false} main="Combo Facilitador de Resultados" subtitle="Serviço de excelência, oferta única!" />
          <div className="relative w-full mt-8 sm:mt-16 mb-24">
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
                <p className="text-white/50 font-medium">Conforme a duração do plano aumenta, o preço que você vai pagar diminui!</p>
              </div>
              <div className="text-white flex flex-col">
                <h5 className="font-semibold text-3xl">Planos</h5>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <a href="https://pay.kiwify.com.br/TMdmcNk" className="border border-white rounded-xl font-medium py-2 text-center hover:bg-white hover:text-my hover:font-bold">Mensal</a>
                  <a href="https://pay.kiwify.com.br/icSlEZE" className="relative border border-white bg-white hover:border-white/95 hover:bg-white/95 text-my rounded-xl font-bold py-2 text-center">
                    <span className="absolute -top-[22px] text-sm font-medium right-0 text-white/50 flex items-end"><StarIcon className="w-5 h-5" />Favorito</span>
                    Trimestral
                  </a>
                  <a href="https://pay.kiwify.com.br/5rhrfyy" className="border border-white rounded-xl font-medium py-2 text-center hover:bg-white hover:text-my hover:font-bold">Semestral</a>
                  <a href="https://pay.kiwify.com.br/ejHnms7" className="border border-white rounded-xl font-medium py-2 text-center hover:bg-white hover:text-my hover:font-bold">Anual</a>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="duvidas" parallax={false}>
          <Text bg={false} main="FAQ" subtitle="Dúvidas frequentes" />
          <div className="sm:w-[700px] flex gap-8 flex-wrap justify-between px-4 sm:px-0">
            <Dropdown
              title="Dúvida 1"
              text="It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but "
            />
            <Dropdown
              title="Dúvida 2"
              text="It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but "
            />
            <Dropdown
              title="Dúvida 3"
              text="It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but "
            />
            <Dropdown
              title="Dúvida 4"
              text="It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but "
            />
            <Dropdown
              title="Dúvida 5"
              text="It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but "
            />
            <Dropdown
              title="Dúvida 6"
              text="It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but "
            />
          </div>
        </Section>
      </main>
      <footer className="py-8 bg-black flex items-center justify-center gap-2 flex-col text-white/50">
        <p>Todos os direitos reservados</p>
      </footer>
    </>
  )
}