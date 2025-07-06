function CadastroViagem() {
  return (
    <div className="container flex flex-col mx-auto items-center bg-white p-8 rounded shadow-md">
      <h1 className="text-4xl text-center my-8 text-[#115B68] font-bold">Cadastrar Viagem</h1>

      <form className="flex flex-col w-full max-w-xl gap-6">

        {/* Origem */}
        <div className="flex flex-col gap-1">
          <label htmlFor="origem" className="text-black font-semibold">Origem</label>
          <input
            type="text"
            placeholder="Digite o local de origem"
            name="origem"
            required
            className="border-2 border-gray-300 rounded p-2 text-black"
          />
        </div>

        {/* Destino */}
        <div className="flex flex-col gap-1">
          <label htmlFor="destino" className="text-black font-semibold">Destino</label>
          <input
            type="text"
            placeholder="Digite o destino"
            name="destino"
            required
            className="border-2 border-gray-300 rounded p-2 text-black"
          />
        </div>

        {/* Data e Hora */}
        <div className="flex flex-col gap-1 bg-[#115B68] p-4 rounded">
          <label htmlFor="data" className="text-white font-semibold">Data da Viagem</label>
          <input
            type="date"
            name="data"
            required
            className="rounded p-2 text-white"
          />
          <label htmlFor="hora" className="text-white font-semibold mt-2">Hora de Saída</label>
          <input
            type="time"
            name="hora"
            required
            className="rounded p-2 text-white"
          />
        </div>

        {/* Observações */}
        <div className="flex flex-col gap-1">
          <label htmlFor="observacoes" className="text-black font-semibold">Observações</label>
          <textarea
            name="observacoes"
            placeholder="Ex: posso levar cachorro pequeno, bagagem, etc."
            className="border-2 border-gray-300 rounded p-2 text-black"
          ></textarea>
        </div>

        {/* Botão */}
        <button 
          type='submit' 
          className='rounded bg-[#115B68] hover:bg-[#0d4450]
                     text-white font-bold w-full py-3 mt-4 transition-colors'
        >
          Solicitar viagem
        </button>
      </form>
    </div>
  );
}

export default CadastroViagem;