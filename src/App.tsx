import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import DeletarVeiculos from './components/veiculos/deletarveiculos/DeletarVeiculos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/sobre'
import { ToastContainer } from 'react-toastify'

import FormViagem from './components/viagens/formviagem/FormViagem'
import ListarVeiculos from './components/veiculos/listarveiculos/ListarVeiculos'
import FormVeiculo from './components/veiculos/formveiculo/FormVeiculo'
import Projeto from './pages/projeto/Projeto'
import CadastroViagem from './components/cadastroviagem/CadastroViagem'



function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projeto" element={<Projeto />} />

            <Route path="/veiculos" element={<ListarVeiculos />} />
            <Route path="/deletarveiculo/:id" element={<DeletarVeiculos />} />
            <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
            <Route path="/atualizarveiculo/:id" element={<FormVeiculo />} />

            <Route path="/cadastrarviagem" element={<CadastroViagem />} />
            <Route path="/viagens/formulario" element={<FormViagem />} />
            <Route path="/viagens/formulario/:id" element={<FormViagem />} />
            <Route path="/editar/viagem/:id" element={<FormViagem />} />


          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App