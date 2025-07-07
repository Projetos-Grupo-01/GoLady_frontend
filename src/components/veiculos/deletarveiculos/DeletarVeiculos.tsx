import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom' // Importado useParams
import { ToastAlerta } from '../../../utils/ToastAlerta'
import { RotatingLines } from 'react-loader-spinner'
import type { Veiculo } from '../../../models/Veiculo'
import { buscar, deletar } from '../../../services/Service'

function DeletarVeiculo() {
	const navigate = useNavigate()
	const { id } = useParams<{ id: string }>(); // <--- AQUI! Extraindo o 'id' da URL

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [veiculos, setVeiculo] = useState<Veiculo>({} as Veiculo)

	async function buscarVeiculoPorId(id: string) {
		try {
			await buscar(`/veiculos/${id}`, setVeiculo)
		} catch (error: any) {
			if (error.toString().includes(404)) {
				ToastAlerta('Veículo não encontrado ou já excluído!', "erro");
				retornar()
			} else {
				ToastAlerta('Erro ao Excluir o veículo!', "erro");
				console.log(error)
			}
		}
	}

	async function deletarVeiculo() {
		setIsLoading(true)

		try {
			await deletar(`/veiculos/${id}`)
			ToastAlerta('Veiculo excluído com sucesso!', "sucesso")
		} catch (error: any) {

			ToastAlerta('Houve algum erro ao carregar o veiculo!', 'erro')
			console.log(error)
		}

		setIsLoading(false)
		retornar()
	}

	function retornar() {
		navigate('/veiculos')
	}

	useEffect(() => {
		if (id !== undefined) {
			buscarVeiculoPorId(id)
		} else {
			setVeiculo({
				id: undefined,
				categoria: "",
				modelo: "",
				placa: "",
				velocidadeMedia: 0
			})
		}
	},)

	return (
		<div className="container w-1/3 mx-auto">
			<h1 className="text-4xl text-center my-4">Deletar veiculo</h1>
			<p className="text-center font-semibold mb-4">
				Você tem certeza de que deseja apagar o veiculo a
				seguir?
			</p>
			<div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
				<header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
					Veiculo
				</header>

				<p className="p-8 text-3xl bg-slate-200 h-full">
					{veiculos.modelo || 'Carregando descrição...'}
				</p>
				<div className="flex">
					<button
						className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 transition delay-2"
						onClick={retornar}
					>
						Não
					</button>
					<button
						className="w-full text-slate-100 bg-cyan-500 transition delay-2
                                   hover:bg-cyan-700 flex items-center justify-center"
						onClick={deletarVeiculo} // Chama a função de deletar
					>
						{isLoading ? (
							<RotatingLines
								strokeColor="white"
								strokeWidth="5"
								animationDuration="0.75"
								width="24"
								visible={true}
							/>
						) : (
							<span>Sim</span>
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
export default DeletarVeiculo
