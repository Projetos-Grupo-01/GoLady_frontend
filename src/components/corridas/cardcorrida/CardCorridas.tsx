import { MapPinIcon } from "@phosphor-icons/react"


function CardCorridas() {
  return (
    <div className="flex flex-col justify-between rounded-2xl overflow-hidden">
      <header className="bg-cyan-900 text-white py-4 px-5">
        Sexta, 4 de Junho - 10:38
      </header>
      <div className="flex flex-col bg-zinc-100 p-4 text-xl">

        <div className="flex items-center gap-1 py-0.5">
          <MapPinIcon size={24} />
          <p>Rua Trindade, 123</p>
        </div>
        <div className="flex items-center gap-1 py-0.5">
          <MapPinIcon size={24} color="#7D0700" weight="fill" />
          <p>Rua Bento, 230</p>
        </div>

        <span className="pt-5">FIAT ARGO - ATM2X22</span>
        <p className="font-bold text-2xl">R$ 12,30</p>
      </div>
    </div>
  )
}

export default CardCorridas