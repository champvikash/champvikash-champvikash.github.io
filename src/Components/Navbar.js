import React from 'react';

class Navbar extends React.Component {
    render() { 
        return (
            <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">MyBookStore</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">HomePage <span className="sr-only"></span></a>
            </li>
            


            
            
            
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <div>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
          </form>
        </div>
      </nav>
      </div>
        );
        
    }
}
 
export default Navbar;