import { useState } from "react";

const Card = () => {

  const [valor, setValor] = useState(0);

  function adicionar(){
    setValor(valor + 1);
  }

  function remover(){
    setValor(valor - 1);
  }

  return (
    <div className="card">
      <div className="card-header">
        Meu card
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-success" onClick={adicionar}>
          Adicionar
        </button>
        <button type="button" className="btn btn-danger" onClick={remover}>
          Remover
        </button>
        <p>{valor}</p>    
      </div>
</div>
  )
}

export default Card;