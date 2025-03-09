import React, { useState } from 'react';

function Conversor_de_temperatura() {
  const [inputValue, setInputValue] = useState('');
  const [inputUnidade, setUnidade] = useState('celsius');
  const [saidaUnidade, setSaidaunidade] = useState('fahrenheit');
  const [resultado, setResultado] = useState('');

  const converterTemperatura = () => {
    let valor = parseFloat(inputValue);
    if (isNaN(valor)) {
      setResultado('valor invalido');
      return;
    }
    let resultadoConversao;

    if (inputUnidade === saidaUnidade) {
      resultadoConversao = valor;
    } else if (inputUnidade === 'celsius') {
      if (saidaUnidade === 'fahrenheit') {
        resultadoConversao = (valor * 9) / 5 + 32;
      } else if (saidaUnidade === 'kelvin') {
        resultadoConversao = valor + 273.15;
      }
    } else if (inputUnidade === 'fahrenheit') {
      if (saidaUnidade === 'celsius') {
        resultadoConversao = ((valor - 32) * 5) / 9;
      } else if (saidaUnidade === 'kelvin') {
        resultadoConversao = ((valor - 32) * 5) / 9 + 273.15;
      }
    } else if (inputUnidade === 'kelvin') {
      if (saidaUnidade === 'celsius') {
        resultadoConversao = valor - 273.15;
      } else if (saidaUnidade === 'fahrenheit') {
        resultadoConversao = ((valor - 273.15) * 9) / 5 + 32;
      }
    }

    setResultado(resultadoConversao.toFixed(2));
  };

  return (
    <div>
      <h2>conversor de temperatura</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="temperatura"
      />
      <select value={inputUnidade} onChange={(e) => setUnidade(e.target.value)}>
        <option value="celsius">celsius</option>
        <option value="fahrenheit">fahrenheit</option>
        <option value="kelvin">kelvin</option>
      </select>
      <select value={saidaUnidade} onChange={(e) => setSaidaunidade(e.target.value)}>
        <option value="celsius">celsius</option>
        <option value="fahrenheit">fahrenheit</option>
        <option value="kelvin">kelvin</option>
      </select>
      <button onClick={converterTemperatura}>converter</button>
      <div>Resultado: {resultado}</div>
    </div>
  );
}

export default Conversor_de_temperatura;