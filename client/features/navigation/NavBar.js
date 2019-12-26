import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    title: "🏠 Home",
                    link: "/",
                    exact: true,
                },
                {
                    title: "ℹ Competition Information",
                    link: "/info",
                    exact: false,
                },
                {
                    title: "Login to discord",
                    link: `https://discordapp.com/oauth2/authorize?
client_id=636856968874557442
&scope=guilds.join identify
&code=${window.CSRF_TOKEN}
&response_type=code
&redirect_uri=http://localhost:3000/auth/callback`,
                    outlink: true
                }
            ].concat(props.links ? props.links : []).reverse()
        };
    }
    render () {
        return (
            <Router>
                <ul className="navbar">
                    {
                        this.state.links.map((link, id) => {
                            if (!link.outlink) {
                                return (
                                    <NavLink exact={link.exact} key={id} to={link.link} activeClassName="active">
                                        <p>
                                            {link.title}
                                        </p>
                                    </NavLink>
                                );
                            } else {
                                return (
                                    <a key={id} href={link.link}>
                                        <p>
                                            {link.title}
                                        </p>
                                    </a>
                                );
                            }
                        })
                    }
                </ul>
            </Router>
        );
    }
}

export default NavBar;
