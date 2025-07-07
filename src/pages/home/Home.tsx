import { Link } from "react-router-dom";
import ListaViagens from "../../components/viagens/listaviagens/ListaViagens";

function Home() {
    return (
        <>
            <div className="flex items-center justify-center w-full py-16 bg-white drop-shadow-lg"> {/* Ajustado para um fundo branco e padding vertical */}
                <div className="container flex flex-col md:flex-row items-center justify-between mx-auto px-4 gap-8"> {/* Container flexível para as duas colunas */}
                    
                    {/* Coluna da Esquerda: Texto e Botão */}
                    <div className="flex flex-col items-start md:w-1/2 text-left"> {/* Alinhamento à esquerda para o texto */}

                        <h1 className="font-bold text-7xl font-Mooli mb-4">
                            <span className="text-[#115B69]">Go</span>
                            <span className="text-[#7D0700]">Lady</span>
                        </h1>
                        <p className="text-3xl text-gray-900 mb-6 text-shadow-lg/10">
                            Do trabalho ao barzinho, seu trajeto em segurança!
                        </p>
                        <button className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-[#115B69] transition duration-300 cursor-pointer">
                            <Link to='/viagens/formulario' >Solicite uma viagem</Link>
                        </button>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center md:justify-end"> 
                        <img
                            src="/ImgCarro.png" 
                            alt="Carro GoLady"
                            className="w-full h-auto" 
                        />
                    </div>
                </div>
            </div>
            <ListaViagens />
        </>
    );
}

export default Home;
