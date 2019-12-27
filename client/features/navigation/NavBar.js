import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

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
            ].concat(props.links ? props.links : [])
        };
        this.xmlhttp = new XMLHttpRequest();
    }

    componentDidMount() {
        this.xmlhttp.onreadystatechange = () => {
            if (
                this.xmlhttp.readyState === 4 &&
                this.xmlhttp.status === 200
            ) {
                let responseJson = JSON.parse(this.xmlhttp.responseText);
                if (!responseJson.success) {
                    if (responseJson.error === "AuthError") {
                        this.setState((previous) => {
                            return {
                                links: [{
                                    title: "👤 Login",
                                    link: `https://discordapp.com/oauth2/authorize?
client_id=${window.DISCORD_CLIENT_ID}
&scope=guilds.join identify
&state=${window.CSRF_TOKEN}
&response_type=code
&redirect_uri=http://${window.location.host}/auth/callback`,
                                    outlink: true
                                }].concat(previous.links)
                            }
                        });
                    }
                } else {
                    this.setState((previous) => {
                        return {
                            links: [{
                                title: `Welcome ${responseJson.user.name} - 👥 Dashboard`,
                                link: `/dashboard`,
                                outlink: false,
                                exact: false
                            }].concat(previous.links)
                        }
                    });
                }
            }
        };
        this.xmlhttp.open(
            "GET",
            "/api/get/user",
            new Date().getTime(),
            true
        ); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless
           // you have a better solution.
        this.xmlhttp.setRequestHeader("Authorization", `Bearer ${cookie.get("token")}`);
        this.xmlhttp.send();
    }

    componentWillUnmount() {
        this.xmlhttp.abort();
    }

    render() {
        return (
            <ul className="navbar">
                {
                    this.state.links.reverse().map((link, id) => {
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
        );
    }
}

export default NavBar;
