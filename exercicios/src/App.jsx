
import CalculoIMC from "./components/CalculoIMC"
import Conversor_de_distancia from "./components/Conversor_de_distancia"
import Conversor_de_temperatura from "./components/Conversor_de_temperatura"


function App() {

  return (
   <div>
    <Conversor_de_temperatura/>
    <Conversor_de_distancia/>  
    <CalculoIMC/>
  </div>
  )
}

export default App
