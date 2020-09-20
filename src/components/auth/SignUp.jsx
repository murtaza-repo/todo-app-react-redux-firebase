import React, { Component } from 'react';
import { signUp } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    state = { 
        email: '',
        password: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        console.log(this.state);
    }

    render() {
        const { uid } = this.props;
        if(uid) return <Redirect exact to="/" /> 
        return ( 
            <div className="card SignInCard">
                <div className="card-body">
                    <span className="card-title"><h3>Sign Up</h3></span>
                    <form className="container" autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group mt-4">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">SignUp</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let uid = state.firebase.auth.uid;
    return {
        uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: creds => {dispatch(signUp(creds))}
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);