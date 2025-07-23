import { useContext, useEffect } from "react"

import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import { useNavigate } from "react-router-dom"


function Perfil() {
	const navigate = useNavigate()

	const { usuario } = useContext(AuthContext)

	return (
		<div className="flex justify-center mx-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden">
				<img
					className="w-full h-72 object-cover border-b-8 border-white"
					src="https://ik.imagekit.io/j8alkuh75t/FundoPerfilGolady.png?updatedAt=1753226506397"
					alt="Capa do Perfil"
				/>

				<img
					className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
					src="https://ik.imagekit.io/spmr3qqjt/images_perfil_mulher.jpeg"
					alt={`Foto de perfil de `}
				/>

				<div className="relative mt-[-6rem] h-72 flex flex-col bg-[#bbd5cc] items-center justify-center">
  					<p className="text-2xl font-bold text-center">Nome: {usuario?.nome}</p>
  					<p className="text-2xl font-bold text-center">Email: {usuario?.usuario}</p>
				</div>
			</div>
		</div>
	)
}

export default Perfil