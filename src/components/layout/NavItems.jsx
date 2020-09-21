import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from '../../actions/authActions';
import { connect } from 'react-redux';

const NavItems = ({signOut, uid}) => {
  if(uid){
    return (
      <li>
        <NavLink to="/signin" onClick={signOut}>
          SignOut
        </NavLink>
      </li>
    );
  }
  else{
    return (
      <>
        <li>
          <NavLink to="/signup">
            SignUp
          </NavLink>
        </li>
        <li>
          <NavLink to="/signIn">
            SignIn
          </NavLink>
        </li>
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
