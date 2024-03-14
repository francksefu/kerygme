import ImageKiko from '../../assets/images/kiko.png';
import ImageJesus from '../../assets/images/jesus.png';
import Imagekiko2 from '../../assets/images/kiko2.png';

const Header = () => {
  return (
    <div className="bg-dark container-fluid">
      <div className="row p-2">
        <div className="col-3 p-3">
          <h2 className="text-white some border-end">KERYGME</h2>
        </div>
        
        <div className="col-6"> </div>
        <img
          src={ImageKiko}
          alt='image de kiko'
          className="img-fluid col-md-3 rounded p-0"
        />
        
        <img
          src={ImageJesus}
          alt='image de kiko'
          className="img-fluid col-2 rounded p-0 renverse"
        />
        <div className="title text-center text-white"><h1 className="text-center taille">INITIATEUR</h1><h1 className="taille text-center">DU CAMINO NEOCATECUMENAL</h1> </div>
      </div>
      <div className="row p-2">
      
        <div className="col-md-2"> </div>
        <p className="col-md-4 text-white p-3 border-start">
          Francisco Jose Gomez Arguello Wirtz est ne a leon(Espagne), le 9 janvier 1939.
          Il etudie les beaux arts a l academie de San Fernando a Madrid, ou il recoit le titre 
          de professeur de peinture et de dessin. En 1959, il obtient le prix national extraordinaire
          de peinture.
        </p>
        <div className="col-md-2"> </div>
        <img
          src={Imagekiko2}
          alt='image de kiko'
          className="img-fluid col-3 rounded p-0"
        />
      </div>
      
    </div>
  );
}

export default Header;