import { CarIcon, UserCircleIcon } from "@phosphor-icons/react"

function Navbar() {
  return ( 
    <>
        <nav className="p-4" style={{
        background: "linear-gradient(90deg, rgba(250,211,196,1) 0%, rgba(255,255,255,1) 54%, rgba(187,213,204,1) 97%)"
      }} >
      <div className=" w-full flex justify-between items-center">
        
        <div className="flex items-center font-bold text-2xl font-Mooli"> 
            <img className="w-[50px]" src="/GoLadyLogo.svg" alt="Logo GoLady" />
        
          <span className="text-[#115B69]">Go</span>
          <span className="text-[#7D0700]">Lady</span>
        </div>

        

        
        <div className="flex items-center gap-5 font-Mooli">
          <a href="#" className="text-gray-800 hover:text-[#7D0700]">
            Sobre o projeto
          </a>
          <a href="#" className="text-gray-800 hover:text-[#7D0700]">
            Sobre a equipe
          </a>
          <a href="#" className="text-gray-800 hover:text-[#7D0700]">
            <UserCircleIcon size={32} /> 
          </a>
          <a href="#" className="text-gray-800 hover:text-[#7D0700]">
            <CarIcon size={32} />
          </a>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar