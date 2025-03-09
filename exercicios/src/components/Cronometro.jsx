import React, { useState, useRef, useEffect } from 'react';

function Cronometro() {
  const [tempo, setTempo] = useState(0);
  const [estaAtivo, setEstaAtivo] = useState(false);
  const intervaloRef = useRef(null);

  useEffect(() => {
    if (estaAtivo) {
      intervaloRef.current = setInterval(() => {
        setTempo((tempoAtual) => tempoAtual + 1);
      }, 1000);
    } else if (!estaAtivo && intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }

    return () => clearInterval(intervaloRef.current);
  }, [estaAtivo]);

  const iniciarCronometro = () => {
    setEstaAtivo(true);
  };

  const pausarCronometro = () => {
    setEstaAtivo(false);
  };

  const resetarCronometro = () => {
    clearInterval(intervaloRef.current);
    setTempo(0);
    setEstaAtivo(false);
  };

  const formatarTempo = (tempo) => {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;

    return `${horas.toString().padStart(2, '0')}:${minutos
      .toString()
      .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Cronômetro</h2>
      <p>{formatarTempo(tempo)}</p>
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={pausarCronometro}>Pausar</button>
      <button onClick={resetarCronometro}>Resetar</button>
    </div>
  );
}

export default Cronometro;