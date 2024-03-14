import { Link } from 'react-router-dom';
import Livre2 from '../../assets/images/franckkiko.png';
const Foot = () => {
  return(
    <div className="bg-dark p-3 text-white container-fluid">
      <div className="row p-3">
        <h2 className="col-md-4 some"><Link to="/" className="text-light">LE KERYGME</Link></h2>
        <div className="col-md-2"> </div>
        <div className="col-md-4 row bg-secondary rounded">
          <img
            src={Livre2}
            alt='image du livre de kiko'
            className="img-fluid rounded p-0 mt-3 mb-3 col-md-4"
          />
          <p>
            Franck sefu is a fullstack web developper with many hobbies like listen music
            ,watch movies and many other stuff
            but he like so much spend time with his computer.
            thanks for reading.
          </p>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-md-5"> </div>
        <div className="col-md-3 mettre">
          <a href="https://www.linkedin.com/in/franck-sefu/" className=" mt-3 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
          </a>
          <span className="p-3">Privacy Policy</span>
        </div>
        <div className="col-md-3"> </div>
      </div>
     
      
    </div>
  );
}

export default Foot;