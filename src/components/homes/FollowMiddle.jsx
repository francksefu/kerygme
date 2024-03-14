import CarmenKiko from '../../assets/images/carnenkiko.png';
import Livre1 from '../../assets/images/livre1.png';
import Livre2 from '../../assets/images/livre2.png';

const FollowMiddle = () => {
  return (
    <div className="container-fluid fond p-3">
      <div className="mt-3 text-white">
        <h2 className="some mt-3">Le chemin fini par aider plusieurs</h2>
        <h2 className="some"> famille et jeunes gens</h2>
      </div>
      <div className="row mt-3">
        <div className="col-md-5">
          <img
            src={CarmenKiko}
            alt='image de carmen et kiko'
            className="img-fluid rounded p-0"
          />
        </div>
       
        <div className="col-md-5">
          <ul>
            <li className="text-light border-bottom mt-2 mb-2">Missio ad gentes</li>
            <li className="text-light border-bottom mb-2"> Descrition de la photo</li>
          </ul>
        </div>
      </div>

      <div className="row mt-3 text-dark bg-white">
        <h5 className="col-md-3 some mt-3">Quelques livres de Kiko a lire absolument</h5>
        <div className="col-md-4">
          <img
            src={Livre1}
            alt='image du livre de kiko'
            className="img-fluid rounded p-0 mt-3"
          />
          <h6 className="some mt-3 mb-3">Le Kerygme</h6>
        </div>

        <div className="col-md-4">
          <img
            src={Livre2}
            alt='image du livre de kiko'
            className="img-fluid rounded p-0 mt-3"
          />
          <h6 className="some mt-3 mb-3"> Antioches </h6>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default FollowMiddle;