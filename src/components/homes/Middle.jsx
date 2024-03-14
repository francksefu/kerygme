import Peinture1 from '../../assets/images/peinture2.png';
import Peinture2 from '../../assets/images/peinture4.png';

const Middle = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-3"> </div>
        <div className="col-md-4 mt-3 p-1 ">
          <h3 className="text-dark some mt-3 mb-2">Son histoire continue ...</h3>
          <p className=" p-3 border-start">
            Apres une profonde crise existencielle, se produit en lui une serieuse
            conversion qui le conduit a consacrer sa vie a Jesus Christ et a l eglise.

            Avec le sculpteur, Coomontes, et l artiste du vitrail, Munos de pablos, il fonde
            en 1960, le groupe de recherche et de promotion de l art sacre : Gremio 62
            Avec ce groupe il realise diverse expositions a Madrid(bibliotheque national)
          </p>
        </div>
        <div className="col-2"> </div>
        <div className="col-md-2">
          <img
            src={Peinture2}
            alt='image de kiko'
            className="img-fluid rounded p-0"
          />
          <img
          src={Peinture1}
          alt='image de kiko'
          className="img-fluid rounded p-0 renverse"
          />
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-4"> </div>
        <div className="col-md-8 pt-3 pb-3 row bg-success">
          <h1 className="text-white some taille col-md-3">&#x201F;</h1>
            
            <p className="p-3 mt-3 mb-3 text-white col-md-9">
              Convaincu que Jesus-Christ est present dans la souffrance des innoncents
              , il va vivre parmi les plus pauvres, dans les baraques du quartier de Palomeras Atlas,
              dans la banlieue de Madrid.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Middle;