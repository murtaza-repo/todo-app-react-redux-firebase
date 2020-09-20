import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = (props) => {
  return (
    <>
      <NavLink exact to="/" className="nav-link" onClick={props.closeNav}>
        Dashboard
      </NavLink>
      <NavLink to="/signin" className="nav-link" onClick={props.closeNav}>
        SignOut
      </NavLink>

      <NavLink to="/signup" className="nav-link" onClick={props.closeNav}>
        SignUp
      </NavLink>

      <NavLink to="/signIn" className="nav-link" onClick={props.closeNav}>
        SignIn
      </NavLink>
    </>
  );
};

export default NavItems;
