import { CarIcon, SignInIcon, SignOutIcon, UserCircleIcon } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Navbar() {

  const navigate = useNavigate()
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlerta("A Usuária foi desconectada com sucesso!", "sucesso")
    navigate("/")
  }

  return (
    <>
      <nav className="py-4 px-9 w-full flex justify-between items-center drop-shadow-xl" style={{
        background: "linear-gradient(90deg, rgba(250,211,196,1) 0%, rgba(255,255,255,1) 54%, rgba(187,213,204,1) 97%)"
      }} >

        <Link to="/">
          <div className="flex items-center font-bold text-2xl font-Mooli">
            <img className="w-[50px]" src="/GoLadyLogo.svg" alt="Logo GoLady" />

            <span className="text-[#115B69]">Go</span>
            <span className="text-[#7D0700]">Lady</span>
          </div>
        </Link>


        <div className="flex items-center gap-5 font-Mooli">
          <Link to="/projeto" className="text-gray-800 hover:text-[#7D0700]">
            Sobre o projeto
          </Link>
          <Link to="/sobre" className="text-gray-800 hover:text-[#7D0700]">
            Sobre a equipe
          </Link>

          {usuario.id !== 0 && (
            <>
              <Link to="/cadastrarveiculo" className="text-gray-800 hover:text-[#7D0700]">
                Cadastrar Veículo
              </Link>

              <Link to="/perfil" >
                <img src={usuario.foto} alt={usuario.nome} className="rounded-full w-7 border border-gray-800 hover:border-[#7D0700]" />
              </Link>
              <Link to="/veiculos" className="text-gray-800 hover:text-[#7D0700]">
                <CarIcon size={32} />
              </Link>
            </>
          )}

          <Link to="/login"
             className=" hover:text-[#7D0700] py-4 px-3 flex items-center">
            {usuario.id === 0 ?
              <SignInIcon size={32} />
              : <SignOutIcon size={32} onClick={logout} />}
          </Link>

        </div>
      </nav>
    </>
  )
}

export default Navbar