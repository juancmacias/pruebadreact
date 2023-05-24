import { Link } from 'react-router-dom';
function Jugar() {
    return (
      <main>
        <h1>Jugar</h1>
        <hr />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link to={`/jugar`}>Jugar</Link>
        
      </main>

    );
  };
  
export default Jugar;