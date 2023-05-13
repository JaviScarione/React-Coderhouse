import { useCount } from "../../hooks/useCount.js"
import "./ItemQuantitySelector.css";

export const ItemCount = ({ ValInicial, min, max, onAdd }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
    <div className="row itemCount">
      <div className="buttons p-0">
      <button className="btn btn-dark mx-2 mx-md-0 me-md-2" onClick={minus}>-</button>
      {count}
      <button className="btn btn-dark mx-2" onClick={sum}>+</button>
      </div>
      <button className="btn agregar mt-2" onClick={() => onAdd(count)}>Agregar al Carrito</button>
      <button className="btn reset mt-2" onClick={reset}>Resetear</button>
    </div>
  )
}