import { Link } from 'react-router-dom';
function Jugar() {
    return (
      <div>
        <h1>Jugar</h1>
        <hr />
        <Link to={`/jugar`}>Jugar</Link>
        
      </div>

    );
  };
  
export default Jugar;