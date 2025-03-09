import React, { useState } from 'react'

function ContaPalavras() {
    const [texto, setTexto]= useState('')
    const [contadorDeTexto,setContadorDeTexto]= useState(''
    
    )
    const contadorDePalavras = (texto)=>{
        if (texto. trim() === ''){
            return 0
        }
        const palavras = texto.trim().split(/\s+/)
        return palavras.length
    }
    const lidarMudancaTexto = (event) => {
        const novoTexto = event.target.value;
        setTexto(novoTexto);
        setContadorDeTexto(contadorDePalavras(novoTexto));
      };
  return (
    <div>
    <h2>Contador de Palavras</h2>
    <textarea
      value={texto}
      onChange={lidarMudancaTexto}
      placeholder="Digite seu texto aqui..."
      rows="5"
      cols="50"
    />
    <p>Contagem de palavras: {contadorDeTexto}</p>
  </div>
  )
}

export default ContaPalavras