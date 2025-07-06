import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom' // Importado useParams
import type Veiculos from '../../../models/veiculos/Veiculos'
import { ToastAlerta } from '../../../utils/ToastAlerta'
import { RotatingLines } from 'react-loader-spinner'
import { deletar } from '../../../services/service'

function DeletarVeiculo() {
	const navigate = useNavigate()
    const { id } = useParams<{ id: string }>(); // <--- AQUI! Extraindo o 'id' da URL

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [veiculos, setVeiculo] = useState<Veiculos>({} as Veiculos)

	async function deletarVeiculo() {
		setIsLoading(true)

        // Verificação adicional para garantir que o ID existe antes de tentar deletar
        if (!id) {
            ToastAlerta('ID do veículo não encontrado na URL!', "erro");
            setIsLoading(false);
            retornar();
            return;
        }

		try {
			await deletar(`/veiculos/${id}`)
			ToastAlerta('Veiculo excluído com sucesso!', "sucesso")
		} catch (error: any) {
            if (error.response && error.response.status === 404) {
                ToastAlerta('Veículo não encontrado ou já excluído!', "erro");
            } else {
                ToastAlerta('Erro ao Excluir o veículo!', "erro");
            }
			console.error(error)
		}

		setIsLoading(false)
		retornar()
	}

	function retornar() {
		navigate('/veiculoss')
	}

	return (
		<div className="container w-1/3 mx-auto">
			<h1 className="text-4xl text-center my-4">Deletar veiculos</h1>
			<p className="text-center font-semibold mb-4">
				Você tem certeza de que deseja apagar o veiculo a
				seguir?
			</p>
			<div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
				<header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
					Veiculo
				</header>
              
				<p className="p-8 text-3xl bg-slate-200 h-full">
					{veiculos.descricao || 'Carregando descrição...'}
				</p>
				<div className="flex">
					<button
						className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
						onClick={retornar}
					>
						Não
					</button>
					<button
						className="w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center"
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
