import React, { useState } from 'react'

function Conversor_de_distancia() {
    const [inputMedida, setinputMedida] =useState('');
    const [medidaEntrada,setMedidaEntrada] = useState('metros')
    const [medidaSaida,setMedidaSaida] = useState ('milhas')
    const [resultado, setResultado] = useState('')

    const conversorMedida = () => {
        let valor = parseFloat (inputMedida);
        if (isNaN(valor)) {
            setResultado ('valor invalido');
            return;
        }
        let resultadoConversao;
        //valor direto para a mesma unidade de medida
        if (medidaEntrada === medidaSaida ){
            resultadoConversao = valor
        //conversao de metros para milhas 
        }else if (medidaEntrada === 'metros'&& medidaSaida === 'milhas'){
             resultadoConversao =( valor *0.0006).toFixed(2) 
        //conversao de milhas para metro 
        }else if (medidaEntrada === 'milhas' && medidaSaida === 'metros'){
            resultadoConversao = (valor * 1609.34).toFixed(2)
        // conversao de metros para pés
        }else if (medidaEntrada === 'metros' && medidaSaida === 'pés'){
            resultadoConversao =(valor * 3.28084). toFixed(2)
        //conversao de pés para metros 
        }else if(medidaEntrada === 'pés' && medidaSaida === 'metros'){
            resultadoConversao = (valor /3.28084).toFixed(2)
        //conversao de metros para quilometros
        }else if(medidaEntrada === 'metros' && medidaSaida === 'quilometros')
            resultadoConversao = (valor/1000). toFixed(2)
        //converso de quilometros para metros
        else if(medidaEntrada === 'quilometros' && medidaSaida === 'metros'){
            resultadoConversao =(valor*1000)
        //conversao de quilometros para milhas 
        }else if(medidaEntrada === 'quilometros' && medidaSaida === 'milhas'){
            resultadoConversao = (valor/ 1.60934).toFixed(2)
        //conversao de milhas para quilometros 
        }else if(medidaEntrada === 'milhas' && medidaSaida === 'quilometros'){
            resultadoConversao = (valor*1.60934).toFixed(2)
        //conversao de quilometros para pés 
        }else if(medidaEntrada === 'quilometros' && medidaSaida === 'pés'){
            resultadoConversao = (valor* 3280.84).toFixed(2)
         //conversao de pés para quilometros   
        }else if(medidaEntrada === 'pés' && medidaSaida === 'quilometros'){
            resultadoConversao =(valor / 3280.84).toFixed(2)
        //conversao de milhas para pés
        }else if(medidaEntrada === 'milhas' && medidaSaida === 'pés'){
            resultadoConversao =(valor * 5280).toFixed(2)
        //conversao de pés para milhas 
        }else if(medidaEntrada === 'pés' && medidaSaida === 'milhas'){
        resultadoConversao =(valor / 5280).toFixed(2)
        }
        setResultado(resultadoConversao)

    }

  return (
    <div>
        <h2>conversor de medidas</h2>
        <input
        type='number'
        value={inputMedida}
        onChange={(e)=>setinputMedida(e.target.value)}
        placeholder="medida"
        />
        <select value={medidaEntrada} onChange={(e)=>setMedidaEntrada(e.target.value)}>
        <option value={"metros"}>metros</option>
        <option value={"quilometros"}>quilometros</option>
        <option value={"milhas"}>milhas</option>
        <option value={"pés"}> pés</option>
        </select>
        <select value={medidaSaida} onChange={(e)=>setMedidaSaida(e.target.value)}>
        <option value={"metros"}>metros</option>
        <option value={"quilometros"}>quilometros</option>
        <option value={"milhas"}>milhas</option>
        <option value={"pés"}> pés</option>
        </select>
        <button onClick={conversorMedida}>converter medida</button>
        <div>resultado : {resultado}</div>
    </div>

  )
}

export default Conversor_de_distancia