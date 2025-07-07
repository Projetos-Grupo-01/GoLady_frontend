import { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'
import { buscar } from '../../../services/Service'
import CardVeiculos from '../cardveiculos/CardVeiculos'
import type { Veiculo } from '../../../models/Veiculo'

function ListarVeiculos() {
	
    const [veiculos, setVeiculos] = useState<Veiculo[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarVeiculos() {
        setIsLoading(true)

        try{
            await buscar('/veiculos', setVeiculos)
        }catch(error: any){
            console.log("Erro ao listar os Veiculos!")
        }finally{
            setIsLoading(false)
        }
		
	}

	useEffect(() => {
		buscarVeiculos()
	}, [veiculos.length])

	return (
		<>
			{isLoading && (
				<SyncLoader

					color="#0D9488"
					margin={0}
					size={80}
                    speedMultiplier={2}
                    aria-label="SyncLoader-loading"
                    className='mx-auto my-8'
				/>
			)}
			<div className="flex justify-center w-full my-4">
				<div className="container flex flex-col mx-4">
					{ (!isLoading && veiculos.length === 0) && (
						<span className="my-8 text-3xl text-center">
							Nenhum veiculo foi
							encontrado
						</span>
					)}

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{veiculos.map((veiculo) => (
							<CardVeiculos
								key={veiculo.id}
								veiculos={veiculo}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarVeiculos