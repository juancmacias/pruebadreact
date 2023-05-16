import { Link } from 'react-router-dom';
import valores from "../data/datos_valor.json";
function Productos() {
    return (
      <div>
        <h1>Productos</h1>
        <hr />
        { 
          valores.map((datos, id)=>(
            <section key={id} idd={id}>
              {datos.title}
              <Link to={`/detalles/${id}`}>Ver detalles del producto</Link>
            <hr />
            </section>
          ))
        }
      </div>

    );
  };
  
export default Productos;