import React, { Component } from 'react';

class Redirect extends Component {
    static

    render () {
        window.location = this.props.url;
        return (
            <React.Fragment>
                Redirecting you... <a href={props.url}>I'm not being redirected...</a>
            </React.Fragment>
        );
    }
}

export default Redirect;
