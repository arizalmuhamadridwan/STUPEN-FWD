import { Link } from "react-router";
import logo from "../assets2/logo.png";

export default function Header () {
    return (
        <>
        <header className="d-flex  flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-2 border-bottom ">          
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <img src={logo} alt="Logo" width="80" height="64" />
              <span className='ms-2 fs-2'>LightFurry</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2">Home</Link></li>
            <li><Link to="/catalogs" className="nav-link px-2">Catalog</Link></li>
            <li><Link to="/teams" className="nav-link px-2">Team</Link></li>
            <li><Link to="/footers" className="nav-link px-2">Contact</Link></li>
          </ul>

          <div className="col-md-3 text-end">
            <Link to="/login"><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>

        </header>  
        </>
    )
}