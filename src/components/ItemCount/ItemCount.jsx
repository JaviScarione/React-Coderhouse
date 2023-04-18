import { useCount } from "../../hooks/useCount.js"
import "./ItemCount.css";

export const ItemCount = ({ ValInicial, min, max, onAdd }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
    <div className="itemCount mt-3">
      <button className="btn btn-dark me-2" onClick={minus}>-</button>
      {count}
      <button className="btn btn-dark mx-2" onClick={sum}>+</button>
      <button className="btn reset ms-2" onClick={reset}>Resetear</button>
      <div>
        <button className="btn agregar mt-3 ms-3" onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </div>
    </div>
  )
}