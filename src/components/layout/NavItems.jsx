import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from '../../actions/authActions';
import { connect } from 'react-redux';

const NavItems = ({closeNav, signOut, uid}) => {
  if(uid){
    return (
      <>
        <NavLink exact to="/" className="nav-link" onClick={closeNav}>
          Dashboard
        </NavLink>
        <NavLink to="/signin" className="nav-link" onClick={() => {signOut(); closeNav();}}>
          SignOut
        </NavLink>
      </>
    );
  }
  else{
    return (
      <>
        <NavLink to="/signup" className="nav-link" onClick={closeNav}>
          SignUp
        </NavLink>
  
        <NavLink to="/signIn" className="nav-link" onClick={closeNav}>
          SignIn
        </NavLink>
      </>
    );
  }
};

const mapStateToProps = state => {
  let uid = state.firebase.auth.uid;
  return {
    uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
