import { useState, useEffect } from 'react'
import './App.css'
import Calculadora from './components/calculadora.jsx'
import Tabela from './components/tabela.jsx'

function App() {
  // Global variables
    let [altura, setAltura] = useState(0)
    let [peso, setPeso] = useState(0)
    let [IMC, setIMC] = useState(0)
  //
  useEffect(() => {
    const newIMC = peso / (altura * altura).toFixed(2);
    setIMC(newIMC)
  }, [peso, altura])
  //
  return (
    <>
      <Calculadora setAltura={setAltura} setPeso={setPeso}/>
      <Tabela IMC={IMC}/>
    </>
  )
}

export default App
