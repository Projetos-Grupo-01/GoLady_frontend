import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import DeletarVeiculos from './components/veiculos/deletarveiculos/DeletarVeiculos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import CadastroViagem from './components/cadastroviagem/CadastroViagem'
import Sobre from './pages/sobre/sobre'
import { ToastContainer } from 'react-toastify'

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

            <Route path="/deletarveiculo/:id" element={<DeletarVeiculos />} />

            <Route path="/cadastrarviagem" element={<CadastroViagem />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App