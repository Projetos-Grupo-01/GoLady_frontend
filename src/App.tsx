
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'

function App() {
  

  return (
    <>
      <Navbar/>
      <div className='flex flex-col'>
        <div className='flex-grow'>
          <Home/>

        </div>

      </div>
      <Footer/>
    </>
  ) 
}

export default App
