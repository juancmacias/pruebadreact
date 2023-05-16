import { Link, useParams } from 'react-router-dom';
import detallesValores from '../data/datos_valor.json';

function Detalles() {
  const { id } = useParams();
  const detalles = detallesValores[id];

  if (!detalles) {
    return (
      <div>
        <h2>Error</h2>
        <p>No se encontraron detalles para la ID {id}.</p>
        <Link to="/">Volver a la home</Link>
        <hr />
      </div>
    );
  }

  const { title, level, invited } = detalles;
  return (
    <div>
      <h2>Detalle</h2>
      <p>Me han pasado la id {id} en el state</p>
      <p>{title}</p>
      <p>{level}</p>
      <p>{invited}</p>
      <Link to="/">Volver a la home</Link>
      <hr />
    </div>
  );
}

export default Detalles;
