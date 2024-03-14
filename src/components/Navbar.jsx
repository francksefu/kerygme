import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [change, setChange] = useState({width: 0, height: 0, menu: 'block', cross: 'none'})
  const stylecontentmenu = {width: change.width, height: change.height, display: change.cross}
  const stylemenu = {display: change.menu}
  const stylecross = {display: change.cross}
  const composant = () => {
    const navcontentmobile = document.querySelector('#nav-content-mobile');
    navcontentmobile.style.transition = 'all 1s';
  }
  const handleMobileShow = () => {
   composant();
   setChange({width: '100%', height: '100%', menu: 'none', cross: 'block'})
  }

  const handleMobileHide = () => {
    composant();
    setChange({width: '0%', height: '0%', menu: 'block', cross: 'none'})
   }
  return(
    <>
    <div className="nav">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </h1>
      <div id="nav-desk">
        <ul>
          <li className="p-2 mb-3 border-bottom">
            <Link to="/"  className="text-dark">Home</Link>
          </li>
          <li className="p-2 mb-3 border-bottom">
            <Link to="/carmen" className="text-dark">Carmen</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-mobile backg">
      <h1 className="h-nav pb-2 pt-2 text-white" style={stylemenu} onClick={handleMobileShow} id="h1-nav-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </h1>
      <h1 className="pb-2 pt-2 text-white" onClick={handleMobileHide} id="h1-nav-cross" style={stylecross}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </h1>
      <div id="nav-content-mobile" style={stylecontentmenu}>
        <ul>
          <li className="p-2 mb-3 border-bottom">
            <Link to="/"  className="text-dark">Home</Link>
          </li>
          <li className="p-2 mb-3 border-bottom">
            <Link to="/carmen" className="text-dark">Carmen</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar;