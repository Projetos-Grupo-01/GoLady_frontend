import { useContext } from "react"

import { AuthContext } from "../../contexts/AuthContext"
import { StarIcon } from "@phosphor-icons/react"


function Perfil() {

	const { usuario } = useContext(AuthContext)

	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden mt-25 md:mt-0">
				<img
					className="w-full h-72 object-cover border-b-8 border-white"
					src="https://ik.imagekit.io/j8alkuh75t/FundoPerfilGolady.png?updatedAt=1753226506397"
					alt="Capa do Perfil"
				/>

				<img
					className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
					src={usuario.foto}
					alt={`Foto de perfil de ${usuario.nome}`}
				/>

				<div className="relative mt-[-6rem] h-80 flex flex-col bg-[#bbd5cc] items-center justify-center">
					<p className="text-2xl text-center pt-2.5">
						<span className="font-bold">Nome:</span> {usuario?.nome}
					</p>
					<p className="text-2xl text-center">
						<span className="font-bold">Email:</span> {usuario?.usuario}
					</p>
					<p className="text-2xl text-center">
						<span className="font-bold">Telefone:</span> {usuario?.telefone}
					</p>
					<p className="text-2xl text-center flex gap-2">
						<StarIcon size={32} color="#fcff2e" weight="fill"/> {usuario?.avaliacao}/5
					</p>
				</div>
			</div>
		</div>
	)
}

export default Perfil