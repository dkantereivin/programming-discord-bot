import React, { Component } from 'react';
import OAuth from "./auth.jsx";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backend: this.props.server ? this.props.server : "localhost:3000",
            callback: this.props.callback ? this.props.callback : window.location.href,
            alerted: false
        }
    }
    render () {
        return (
            <OAuth backend={this.state.backend} callback={this.state.callback} client_id={this.props.client_id}/>
        );
    }
}

export default Auth;
