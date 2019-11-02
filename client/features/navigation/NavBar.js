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
            ].concat(props.links ? props.links : []).reverse()
        };
    }
    render () {
        return (
            <Router>
                <ul className="navbar">
                    {
                        this.state.links.map((link, id) => {
                            return (
                                <NavLink exact={link.exact} key={id} to={link.link} activeClassName="active">
                                    <p>
                                        {link.title}
                                    </p>
                                </NavLink>
                            );
                        })
                    }
                </ul>
            </Router>
        );
    }
}

export default NavBar;
