import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav role="navigation" className="navbar navbar-light bg-light navbar-fixed-top">
      <div className="container">
        <div className="navbar-header navbar-left pull-left">
          <Link to="/" className="navbar-brand">TodoApp</Link>   
        </div>
        
        <div className="navbar-header navbar-right pull-right">
          <ul className="nav navbar-right">
            <NavItems />
          </ul>
        </div>
      </div>
    </nav>
    
    // <nav className="navbar navbar-expand-sm navbar-light bg-light">
    //   <Link className="navbar-brand" to="/">
    //     TodoApp
    //   </Link>
    //   <NavItems />
    // </nav>
  );
};

export default Navbar;
