import { useState } from "react"
import './Demo2.css'
import Usuario from "./Usuario"
function Demo2() {
const  [valor, setValor] = useState(0)
const [usuario, setUsuario] = useState('')

  return (
    <div className="container-demo2">
        <h2>useState</h2>
        <button onClick={() =>{setValor(valor - 1)}}>-</button>
        {valor}
         <button onClick={() =>{setValor(valor +1)}}>+</button>
         <button onClick={()=>{setUsuario(prompt("username"))}}>fazer login</button>
         {usuario ? <p>olá {usuario}</p>: <p>faça o login</p>}
        <Usuario username ={usuario}/>

    </div>
  )
}

export default Demo2