import { Link, useNavigate } from "react-router-dom";
import ListaViagens from "../../components/viagens/listaviagens/ListaViagens";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Home() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/')
        }
    }, [usuario.token])

    return (
        <>

            <div className="relative w-full pt-35 md:pt-25 pb-17 md:pb-17 bg-white drop-shadow-lg overflow-hidden">
                {/* div principal definida com altura fixa ou min-height (ajuste se desejar altura maior ou responsiva) */}

                {/* Conteúdo à esquerda */}
                <div className="relative flex flex-col justify-center items-start h-full w-2/3 md:max-w-[40%] m-auto md:ml-30">
                    <h1 className="font-bold text-6xl md:text-7xl font-Mooli mb-4">
                        <span className="text-[#115B69]">Go</span>
                        <span className="text-[#7D0700]">Lady</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-900 mb-6 text-shadow-lg/10">
                        Do trabalho ao barzinho, seu trajeto em segurança!
                    </p>
                    <Link to="/viagens/formulario" className="px-8 py-3 bg-[#115B69] text-white font-semibold rounded-lg shadow-md hover:bg-[#7d0600ce] transition duration-300 cursor-pointer">
                        Solicite uma viagem
                    </Link>

                </div>

                {/* Imagem encostada à direita */}
                <img
                    src="/ImgCarro.png"
                    alt="Carro GoLady"
                    className="hidden lg:block absolute top-0 right-0 h-full w-auto object-cover"
                />
            </div>

            <ListaViagens />
        </>
    );
}

export default Home;
