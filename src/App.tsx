import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import DeletarVeiculos from './components/veiculos/deletarveiculos/DeletarVeiculos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/sobre'
import { ToastContainer } from 'react-toastify'

import FormViagem from './components/viagens/formviagem/FormViagem'
import ListarVeiculos from './components/veiculos/listarveiculos/ListarVeiculos'
import FormVeiculo from './components/veiculos/formveiculo/FormVeiculo'
import Projeto from './pages/projeto/Projeto'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import Cadastro from './pages/cadastro/Cadastro'
import Perfil from './pages/perfil/Perfil'
import { useState } from 'react'

type MenuState = 'closed' | 'open'

function App() {

  const [menuState, setMenuState] = useState<MenuState>('closed')

  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed')
  }

  const closeMenu = (): void => {
    setMenuState('closed')
  }

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="md:relative">
            <Navbar 
              menuState={menuState} // Menu Mobile aberto ou fechado?
              onMenuToggle={toggleMenu} // Função para abrir e fechar o Menu Mobile
              onMenuClose={closeMenu} // Função fechar o Menu Mobile (botão X)
            />
          </div>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projeto" element={<Projeto />} />

              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil" element={<Perfil />} />
              
              <Route path="/veiculos" element={<ListarVeiculos />} />
              <Route path="/deletarveiculo/:id" element={<DeletarVeiculos />} />
              <Route path="/cadastrarveiculo" element={<FormVeiculo />} />
              <Route path="/atualizarveiculo/:id" element={<FormVeiculo />} />

              <Route path="/viagens/formulario" element={<FormViagem />} />
              <Route path="/viagens/formulario/:id" element={<FormViagem />} />
              <Route path="/editar/viagem/:id" element={<FormViagem />} />


            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App