import { GithubLogoIcon } from "@phosphor-icons/react"

function Footer() {
  
  let data = new Date().getFullYear()
  return (
    <>
      <div className= "p-4 shadow-top" style={{ 
      background: "linear-gradient(90deg, rgba(250,211,196,1) 0%, rgba(255,255,255,1) 54%, rgba(187,213,204,1) 97%)"
      }}>
        <div className="flex-col flex justify-center items-center gap-2 font-Mooli">
          <p className="text-xl font-bold text-gray-800">
            GoLady | Copyright: {data}
          </p>
          <div className="flex gap-1 items-center">
            <p className=" text-base text-gray-800">Fale conosco pelo GitHub</p>
            <a href="https://github.com/Projetos-Grupo-01" className="text-gray-800 hover:text-[#7D0700]"target="_blank">
            <GithubLogoIcon size={32}/>
            </a>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer