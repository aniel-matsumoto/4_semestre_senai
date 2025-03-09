
import CalculoIMC from "./components/CalculoIMC"
import ContaPalavras from "./components/contaPalavras"
import Conversor_de_distancia from "./components/Conversor_de_distancia"
import Conversor_de_temperatura from "./components/Conversor_de_temperatura"
import Cronometro from "./components/Cronometro"


function App() {

  return (
   <div>
    <Conversor_de_temperatura/>
    <Conversor_de_distancia/>  
    <CalculoIMC/>
    <Cronometro/>
    <ContaPalavras/>
  </div>
  )
}

export default App
