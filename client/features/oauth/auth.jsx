import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class OAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        // http://localhost:3000/auth/callback#token_type=Bearer&access_token=Pwl1qt1gJBlT9V0aMJUSvUGaKKFDKi&expires_in=604800&scope=guilds.join+identify
        return (
            <Route children={( location ) => {
                if (location.search) {
                    return null;
                }
                window.location = `https://discordapp.com/api/oauth2/authorize?client_id=${this.props.client_id}&redirect_uri=${this.props.callback}&response_type=code&scope=guilds.join%20identify`;
                return null;
            }}/>
        );
    }
}

export default OAuth;