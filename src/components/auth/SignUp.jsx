import React, { Component } from 'react';

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
        console.log(this.state);
    }

    render() { 
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
 
export default SignUp;