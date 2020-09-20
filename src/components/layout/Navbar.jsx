import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        TodoApp
      </Link>
      <button className="navbar-toggler" type="button" onClick={openNav}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav ml-auto">
          <NavItems closeNav={closeNav} />
        </ul>
      </div>

      <div id="mySidenav" className="sidenav">
        <button
          className="closebtn"
          style={{
            background: "none",
            border: "none",
            color: "rgb(136, 79, 201)",
          }}
          onClick={closeNav}>
          &times;
        </button>
        <NavItems closeNav={closeNav} />
      </div>
    </nav>
  );
};

export default Navbar;
