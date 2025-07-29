import { CarIcon, ListIcon, SignInIcon, SignOutIcon, UserCircleIcon, XIcon } from "@phosphor-icons/react"
import { useContext, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

type MenuState = 'closed' | 'open'

interface NavbarProps {
  menuState: MenuState
  onMenuToggle: () => void
  onMenuClose: () => void
}

function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {

  const menuRef = useRef<HTMLDivElement>(null)

  const navigate = useNavigate()
  const { usuario, handleLogout } = useContext(AuthContext)

  const handleMenuToggle = (): void => {
    onMenuToggle()
  }

  const handleMenuClose = (): void => {
    onMenuClose()
  }

  function logout() {
    handleLogout()
    ToastAlerta("A Usuária foi desconectada com sucesso!", "sucesso")
    navigate("/")
  }

  return (
    <>
      <nav className="fixed md:relative top-0 py-4 px-9 w-full flex justify-between items-center drop-shadow-xl z-50" style={{
        background: "linear-gradient(90deg, rgba(250,211,196,1) 0%, rgba(255,255,255,1) 54%, rgba(187,213,204,1) 97%)"
      }} >

        <Link to="/">
          <div className="flex items-center font-bold text-2xl font-Mooli">
            <img className="w-[50px]" src="/GoLadyLogo.svg" alt="Logo GoLady" />

            <span className="text-[#115B69]">Go</span>
            <span className="text-[#7D0700]">Lady</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-5 font-Mooli">
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

          <div className="">
            <Link to="/login"
              className=" hover:text-[#7D0700] py-4 px-3 flex items-center">
              {usuario.id === 0 ?
                <SignInIcon size={32} />
                : <SignOutIcon size={32} onClick={logout} />}
            </Link>
          </div>

        </div>

        {menuState === 'closed' && (
          <button className="p-2 md:hidden cursor-pointer" onClick={handleMenuToggle} aria-label="Abrir menu">
            <ListIcon size={32} />
          </button>
        )}

      </nav>

      {menuState === 'open' && (
        <nav
          ref={menuRef}
          className="fixed top-0 left-0 z-50 py-4 px-9 w-full drop-shadow-xl md:hidden transition-all duration-300 ease-in-out animate-fade-in animate-slide-in"
          style={{
            background: "linear-gradient(90deg, rgba(250,211,196,1) 0%, rgba(255,255,255,1) 54%, rgba(187,213,204,1) 97%)",
            animation: 'fade-in 0.3s, slide-in 0.3s'
          }} >

          <div className="relative flex flex-col items-start justify-start gap-2 text-left text-lg">
            <div className="flex w-full items-center justify-between mb-2">
              <Link to="/" onClick={handleMenuClose}>
                <div className="flex items-center font-bold text-2xl font-Mooli">
                  <img className="w-[50px]" src="/GoLadyLogo.svg" alt="Logo GoLady" />

                  <span className="text-[#115B69]">Go</span>
                  <span className="text-[#7D0700]">Lady</span>
                </div>
              </Link>

              <button
                type="button"
                aria-label="Fechar menu"
                className="hover:text-[#7D0700] mr-2 cursor-pointer"
                onClick={handleMenuClose}>

                <XIcon size={32} />
              </button>
            </div>



            <Link to="/projeto" className="text-gray-800 hover:text-[#7D0700] font-Mooli" onClick={handleMenuClose}>
              Sobre o projeto
            </Link>
            <Link to="/sobre" className="text-gray-800 hover:text-[#7D0700] font-Mooli" onClick={handleMenuClose}>
              Sobre a equipe
            </Link>

            {usuario.id !== 0 && (
              <Link to="/cadastrarveiculo" className="text-gray-800 hover:text-[#7D0700] font-Mooli" onClick={handleMenuClose}>
                Cadastrar Veículo
              </Link>
            )}

            <div className="flex gap-3.5">
              {usuario.id !== 0 && (
                <>
                  <Link to="/perfil" onClick={handleMenuClose}>
                    <img src={usuario.foto} alt={usuario.nome} className="rounded-full w-7 border border-gray-800 hover:border-[#7D0700]" />
                  </Link>
                  <Link to="/veiculos" className="text-gray-800 hover:text-[#7D0700]" onClick={handleMenuClose}>
                    <CarIcon size={32} />
                  </Link>
                </>
              )}
              <Link to="/login" onClick={handleMenuClose}
                className=" hover:text-[#7D0700] flex items-center">
                {usuario.id === 0 ?
                  <SignInIcon size={32} />
                  : <SignOutIcon size={32} onClick={logout} />}
              </Link>
            </div>
          </div>

        </nav>
      )}
    </>
  )
}

export default Navbar