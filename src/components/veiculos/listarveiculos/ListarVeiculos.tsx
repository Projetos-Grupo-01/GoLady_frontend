import { useContext, useEffect, useState } from 'react'
import { buscar } from '../../../services/Service'
import CardVeiculos from '../cardveiculos/CardVeiculos'
import type { Veiculo } from '../../../models/Veiculo'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlerta } from '../../../utils/ToastAlerta'
import { ColorRing } from 'react-loader-spinner'

function ListarVeiculos() {

	const navigate = useNavigate()

	const { usuario } = useContext(AuthContext)
	const token = usuario.token

	const [veiculos, setVeiculos] = useState<Veiculo[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarVeiculos() {
		setIsLoading(true)

		try {
			await buscar('/veiculos', setVeiculos, {
				headers: {
					Authorization: token
				}
			})
		} catch (error: any) {
			console.log("Erro ao listar os Veiculos!")
		} finally {
			setIsLoading(false)
		}

	}

	useEffect(() => {
		if (token === "") {
			ToastAlerta('Você precisa estar logado', 'info')
			navigate('/')
		}
	}, [token])

	useEffect(() => {
		buscarVeiculos()
	}, [veiculos.length])

	return (
		<>
			{isLoading && (
				<div className="flex justify-center">
					<ColorRing
						visible={true}
						height="80"
						width="80"
						ariaLabel="color-ring-loading"
						wrapperStyle={{}}
						wrapperClass="color-ring-wrapper"
						colors={['#7D0700', '#FD7866', '#FAD3C4', '#BBD5CC', '#115B69']}
					/>
				</div>
			)}
			<div className="flex justify-center w-full my-4 pt-25 md:pt-0">
				<div className="container flex flex-col mx-4">
					{(!isLoading && veiculos.length === 0) && (
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