import { Link } from "@phosphor-icons/react"
import type Veiculos from "../../../models/veiculos/Veiculos"

interface CardVeiculosProps{
    veiculos: Veiculos
}

function CardVeiculos({ veiculos }: CardVeiculosProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Veiculos
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{veiculos.descricao}</p>

                <Link to={`/deletarveiculo/${veiculos.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
    )
}

export default CardVeiculos