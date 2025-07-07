import { Link } from "react-router-dom"
import type { Veiculo } from "../../../models/Veiculo"

interface CardVeiculosProps {
    veiculos: Veiculo
}

function CardVeiculos({ veiculos }: CardVeiculosProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Veiculos
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculos.modelo}</p>

            <div className="flex">
                <Link to={`/deletarveiculo/${veiculos.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center transition delay-2'>
                    Deletar
                </Link>
                <Link to={`/atualizarveiculo/${veiculos.id}`} className='text-slate-100 bg-cyan-500 hover:bg-cyan-700 w-full 
                    flex items-center justify-center transition delay-2'>
                    Alterar
                </Link>
            </div>
        </div>
    )
}

export default CardVeiculos