import { Link } from 'react-router-dom';
import Carmen from '../../assets/images/carmen1.png';
import CarmenKiko from '../../assets/images/carmenkikojp2.png';

const Header = () => {
  return(
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-3 p-3">
          <h2 className="text-dark some"><Link to="/" className="text-dark"> KERYGME</Link></h2>
        </div>    
      </div>
      <div className="row p-3">
        <img
          src={CarmenKiko}
          alt='image de kiko'
          className="img-fluid rounded p-0 col-md-3"
        />
        <div className="col-md-2"> </div>
        <h1 className="text-dark col-md-5 taille mt-3 mb-3">Carmen</h1>
      </div>
      <div className="row">
        <div className="col-md-2"> </div>
        <img
          src={Carmen}
          alt='image de kiko'
          className="img-fluid rounded p-0 col-md-2 renverse mb-3"
        />
        <div className="col-md-2"> </div>
        <div className="col-md-4 text-dark">
          <h3 className="some"> Sa rencontre avec Kiko</h3>
          <p className="border-start p-3">
            Par la suite, Kiko Arguello fait la connaissance de Carmen Hernandez.
            Stimulés par l environnement de pauvreté, ils se voient contraints de 
            trouver une forme de predication, une synthese  &quotes; kerygmatico-cathechetique &qutes;
            qui conduiras a la formation d une petite communauté chretienne.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;