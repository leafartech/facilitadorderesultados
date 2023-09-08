import MyLink from "./MyLink";

export default function Navbar() {
    return (
        <nav className="fixed left-0 top-0 h-14 bg-white w-full border-b flex items-center z-20">
            <div className="w-full flex justify-center items-center">
                <div className="max-w-7xl flex gap-6 items-center">
                    <div className="">
                        <img src="./images/logo.png" alt="Logo" className="sm:h-8 sm:w-8 w-7 h-7 " />
                    </div>
                    <ul className="hidden sm:flex gap-4">
                        <MyLink id={true} path="inicio">Início</MyLink>
                        <MyLink id={true} path="funciona">Como funciona</MyLink>
                        <MyLink id={true} path="nutricionista">Nutricionista</MyLink>
                        <MyLink id={true} path="treinador">Treinador</MyLink>
                        <MyLink id={true} path="beneficios">Benefícios</MyLink>
                        <MyLink id={true} path="oferta">Oferta</MyLink>
                        <MyLink id={true} path="duvidas">Dúvidas</MyLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}