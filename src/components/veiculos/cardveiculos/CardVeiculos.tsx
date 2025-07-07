import { Link } from "react-router-dom"
import type { Veiculo } from "../../../models/Veiculo"

interface CardVeiculosProps {
    veiculos: Veiculo
}

function CardVeiculos({ veiculos }: CardVeiculosProps) {
    return (
        <div className='shadow-2xl flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-cyan-900 text-white font-bold text-2xl'>
                Veiculos
            </header>

            <div className="flex flex-col px-8 py-4 bg-zinc-100 gap-1.5">
                <p className='text-3xl'>{veiculos.modelo}</p>
                <p className='text-xl'>Categoria: {veiculos.categoria}</p>
                <p className='text-xl'>Placa: {veiculos.placa}</p>
            </div>

            <div className="flex">
                <Link to={`/deletarveiculo/${veiculos.id}`} className='text-slate-100 bg-red-900 hover:bg-red-600 w-full 
                    flex items-center justify-center transition delay-2 py-2'>
                    Deletar
                </Link>
                <Link to={`/atualizarveiculo/${veiculos.id}`} className='text-slate-100 bg-cyan-900 hover:bg-cyan-700 w-full 
                    flex items-center justify-center transition delay-2'>
                    Alterar
                </Link>
            </div>
        </div>
    )
}

export default CardVeiculos