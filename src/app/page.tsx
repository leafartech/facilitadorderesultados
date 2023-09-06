'use client'

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Text from "./components/Text";
import TimelineCard from "./components/TimelineCard";

export default function Home() {

  if (typeof window !== 'undefined') {
    const menuItems = document.querySelectorAll('#link_item');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      // Verifique qual seção está visível
      // Você pode usar o método getBoundingClientRect() para isso

      // Adicione/remova a classe para destacar o item do menu correspondente
      menuItems.forEach((menuItem) => {
        if (menuItem !== null && menuItem) {
          const sectionId = menuItem.getAttribute('href')!.substring(1);
          const section: HTMLElement | null = document.querySelector(sectionId);

          const sectionTop = section!.offsetTop;
          const sectionHeight = section!.offsetHeight;
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            menuItem.classList.add('active'); // Adicione uma classe 'active' para destacar o item
          } else {
            menuItem.classList.remove('active'); // Remova a classe 'active' se não estiver visível
          }
        }
      });
    });
  }


  return (
    <>
      <header className="" id="inicio">
        <Navbar />
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
          <div className="max-w-7xl sm:grid sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-3 max-w-xl">
              <h1 className="font-extrabold text-5xl"><span className="text-my text-shadow">COMBO </span>FACILITADOR  <br /> DE RESULTADOS</h1>
              <p className="font-medium">Seja muito bem-vindo(a) ao ponto de partida para sua nova vida. Sou especialista em estratégias individualizadas de treinamento, e estou aqui para </p>
              <div className="mt-2">
                <a href="" className="btn shadow">Quero saber mais</a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src="./images/bg.png" alt="Imagem do João + Ana" className="h-[440px]" />
            </div>
          </div>
          <div className="absolute bottom-2 max-w-7xl flex gap-12 items-center justify-between">
            <Card
              href="nutricionista"
              main="Nutrição"
              bottom="Acompanhamento profissional"
              bg={false}
            >
              <img src="./images/cards/apple.png" alt="" className="h-6 w-6" />
            </Card>
            <div className="relative flex items-center justify-center h-2 w-5">
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
            <div className="relative flex items-center justify-center flex-col h-20 w-6 gap-1 translate-y-2">
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
      </header>
      <main className="mt-20">
        <Section id="funciona" parallax={true} imagePath="parallax1">
          <div className="z-10 flex flex-col items-center">
            <Text
              bg={true}
              main="Como funciona"
              subtitle="o Combo Facilitador de Resultados"
            />
            <div className="relative h-[824px] max-w-5xl w-full flex items-center">
              <div className="absolute top-12">
                <TimelineCard
                  main="Aquisição"
                  paragraph="Explore ao máximo a qualidade de vida por meio da transformação física! Uma abordagem exclusiva de treinos feitos sob a medida das suas especificidades."
                >
                  <p className="absolute -right-2 float-number">1</p>
                </TimelineCard>
              </div>
              <img src="./images/arrow1.png" alt="" className="absolute top-[90px] left-[276px] w-[476px] h-[299px]" />
              <div className="absolute right-0">
                <TimelineCard
                  main="Contato"
                  paragraph="Explore ao máximo a qualidade de vida por meio da transformação física! Uma abordagem exclusiva de treinos feitos sob a medida das suas especificidades."
                >
                  <p className="absolute -top-2 -left-1 float-number">2</p>
                </TimelineCard>
              </div>
              <img src="./images/arrow2.png" alt="" className="absolute bottom-[70px] right-[111px]" />
              <div className="absolute bottom-0 left-24">
                <TimelineCard
                  main="Consultas"
                  paragraph="Explore ao máximo a qualidade de vida por meio da transformação física! Uma abordagem exclusiva de treinos feitos sob a medida das suas especificidades."
                >
                  <p className="absolute float-number bottom-[52px] -right-4">3</p>
                </TimelineCard>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer>

      </footer>
    </>
  )
}