import React from 'react'
import { FcDebian } from "react-icons/fc";
export default function Demo1() {

  function responderClique(){
    alert('parabens, você clicou')
  }
  return (
    <div className='container-demo'>
      <button onClick={responderClique}>clique aqui</button>
      <button onClick={() => {alert("vim de uma arrow function")}}>clique dois</button>
      <FcDebian/>
      <img src='./'/>
      </div>
  )
}
