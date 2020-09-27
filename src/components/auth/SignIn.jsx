import React, { Component } from 'react';
import { signIn } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
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
        this.props.signIn(this.state);
        console.log(this.state);
    }

    render() { 
        const { uid } = this.props;
        if(uid) return <Redirect exact to="/" />
        return ( 
            <div className="card SignInCard">
                <div className="card-body">
                    <span className="card-title"><h3>Sign In</h3></span>
                    <form className="container" autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-group mt-4">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">SignIn</button>
                    </form>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    let uid = state.firebase.auth.uid;
    return {
        uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => {dispatch(signIn(creds))}
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);