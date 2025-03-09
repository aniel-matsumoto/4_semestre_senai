import React, { useState } from 'react'

function CalculoIMC() {

    const [altura, setAltura]= useState('')
    const [peso, setPeso]=useState('')
    const [resultado, setResultado]= useState('')
    
    const calculoImc=()=>{
        let valorAltura = parseFloat(altura)
        let valorPeso =parseFloat(peso)
         let valor = (valorPeso /(valorAltura * valorAltura)).toFixed(2)

        if (isNaN(valorAltura) || isNaN(valorPeso) || valorAltura <= 0 || valorPeso <= 0) {
            setResultado('Por favor, insira valores válidos para altura e peso.');
            return;
        }

         
         let resultadoConversao
        
        if(valor <18.5){
            resultadoConversao = `seu imc é de ${valor} e está abaixo`
        }else if (valor >=18.5 && valor <=24.9){
            resultadoConversao =`seu imc é de ${valor} e está normal`
        }else if (valor >24.9 && valor <=29.9){
            resultadoConversao =`seu imc é de ${valor} e está sobrepeso`
        }else if (valor >29.9 && valor <=34.9){
            resultadoConversao =`seu imc é de ${valor} e está obesidade grau 1`
        }else if (valor >34.9 && valor <=39.9){
            resultadoConversao =`seu imc é de ${valor} e está obesidade grau 2`
        }else if (valor >39.9){
            resultadoConversao =`seu imc é de ${valor} e está obesidade grau 3`
        }
        setResultado(resultadoConversao)

    }
    return (
    <div>
        <h2>CalculoIMC</h2>
        <input
        type='number'
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder='altura em metros'
        />
         <input
        type='number'
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder='peso'
        />
        <div>
            <button onClick={calculoImc}>calcular</button>
        </div>
        <div>
            {resultado}
        </div>
    </div>
  )
}

export default CalculoIMC