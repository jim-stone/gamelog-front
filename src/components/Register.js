import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    onSubmit = () => {

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { username, email, password, password2 } = this.state;
        return (
            <div>
                <h3>This will be User registration page</h3>
            </div>
        )
    }
}

export default Register
