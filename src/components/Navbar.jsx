import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="nav">
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
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
  );
}

export default Navbar;