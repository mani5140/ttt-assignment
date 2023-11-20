import logo from "./terribly.jpg";
import './Navbar.css';
function Navbar() {
    return (
     
<nav className="navbar navbar-light bg-dark">
  <a className="navbar-brand" href="#">
    <img src={logo} width="40" id="logo" className="d-inline-block align-top" alt="" /><span id="slash">{" "}|{" "}</span>
    <span id="demo">STORIES</span>
  </a>
  <button type="button" className="btn btn-warning" id="but">Courses</button>
</nav>
        
        
    );
  }
  
export default Navbar;
{/* <nav className="navbar navbar-light bg-dark">
          <div className="row">
          <div className="col-1" id="logo"><img src={logo} alt="logo"id="tiny"/></div>
          <div className="col-7 text-start"><a className="nav-link text-light" href="#">STORIES</a></div>
          <div className="col-4 text-end"><button type="button" className="btn btn-warning">Courses</button></div>
          
          </div>
          

        </nav> */}