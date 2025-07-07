import ListaViagens from "../../components/viagens/listaviagens/ListaViagens";

function Home() {
    return (
        <>
            <div className="mt-4 relative w-full h-[400px] bg-white drop-shadow-lg overflow-hidden"> 
                {/* div principal definida com altura fixa ou min-height (ajuste se desejar altura maior ou responsiva) */}
                
                {/* Conteúdo à esquerda */}
                <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-[50%] pl-30">
                    <h1 className="font-bold text-7xl font-Mooli mb-4">
                        <span className="text-[#115B69]">Go</span>
                        <span className="text-[#7D0700]">Lady</span>
                    </h1>
                    <p className="text-3xl text-gray-900 mb-6 text-shadow-lg/10">
                        Do trabalho ao barzinho, seu trajeto em segurança!
                    </p>
                    <button className="px-8 py-3 bg-[#115B69] text-white font-semibold rounded-lg shadow-md hover:bg-[#7d0600ce] transition duration-300 cursor-pointer">
                        Solicite uma viagem
                    </button>
                </div>

                {/* Imagem encostada à direita */}
                <img
                    src="/ImgCarro.png"
                    alt="Carro GoLady"
                    className="absolute top-0 right-0 h-full w-auto object-cover"
                />
            </div>

            <ListaViagens />
        </>
    );
}

export default Home;
