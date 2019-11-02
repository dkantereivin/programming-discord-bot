import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                    title: "ℹ Project information",
                    link: "/info",
                    exact: false,
                },
            ].concat(props.links ? props.links : []).reverse()
        };
    }
    render () {
        return (
            <React.Fragment>
                <ul className="navbar">
                    {
                        this.state.links.map((link) => {
                            return (
                                <NavLink exact={link.exact} to={link.link} activeClassName="active">
                                    <p>
                                        {link.title}
                                    </p>
                                </NavLink>
                            );
                        })
                    }
                </ul>
            </React.Fragment>
      );
  }
}

export default NavBar;
