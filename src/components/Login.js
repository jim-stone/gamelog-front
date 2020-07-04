import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from '../actions/auth';
import Proptypes from 'prop-types'

class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    static propTypes = {
        handleLogin: Proptypes.func.isRequired,
        isAuthenticated: Proptypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.handleLogin(this.state);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/add_game/' />
        }

        return (
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Login</legend>
                    <p>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text" id="username"
                            onChange={e => this.setState({ username: e.target.value })} />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" id="password"
                            onChange={e => this.setState({ password: e.target.value })} />
                    </p>
                    <p>
                        <button type="submit" onSubmit={this.onSubmit.bind(this)}>Login</button>
                    </p>

                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </fieldset>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (loginData) => { dispatch(login(loginData)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);