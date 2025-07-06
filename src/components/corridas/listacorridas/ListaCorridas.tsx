import CardCorridas from "../cardcorrida/CardCorridas"


function ListaCorridas() {
  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col mx-2">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5">
          <CardCorridas />
          <CardCorridas />
          <CardCorridas />
          <CardCorridas />
          <CardCorridas />
        </div>
      </div>
    </div>
  )
}

export default ListaCorridas