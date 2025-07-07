import { CarIcon, UserCircleIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="py-4 px-9 w-full flex justify-between items-center drop-shadow-xl mb-4" style={{
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
          <Link to="/sobre" className="text-gray-800 hover:text-[#7D0700]">
            Sobre o projeto
          </Link>
          <Link to="/sobre" className="text-gray-800 hover:text-[#7D0700]">
            Sobre a equipe
          </Link>

          <Link to="#" >
            <UserCircleIcon size={32} className="text-gray-800 hover:text-[#7D0700]" />
          </Link>
          <Link to="#" className="text-gray-800 hover:text-[#7D0700]">
            <CarIcon size={32} />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar