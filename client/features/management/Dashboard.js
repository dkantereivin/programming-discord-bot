import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import './Dashboard.css';
import Cookies from 'universal-cookie';
import UserSelectionMenu from "./dashboard/users";

const cookie = new Cookies();

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.previous = false;
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
                        window.location = `https://discordapp.com/oauth2/authorize?
client_id=${window.DISCORD_CLIENT_ID}
&scope=guilds.join identify
&state=${window.CSRF_TOKEN}
&response_type=code
&redirect_uri=http://${window.location.host}/auth/callback`;
                    }
                } else {
                    console.log(responseJson.team.users);
                    this.setState({users: Object.values(responseJson.team.users)});
                }
            }
        };
    }

    componentWillUnmount() {
        this.xmlhttp.abort();
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={"/dashboard"} exact={false} children={
                        (match) => {
                            if (match && !this.previous) {
                                this.previous = true;
                                this.xmlhttp.open(
                                    "GET",
                                    "/api/get/team",
                                    new Date().getTime(),
                                    true
                                ); //we append the current timestamp to bypass caching, it's hacky but it works. Please
                                   // don't remove it unless you have a better solution.
                                this.xmlhttp.setRequestHeader(
                                    "Authorization",
                                    `Bearer ${cookie.get("token")}`
                                );
                                this.xmlhttp.send();
                            } else if (!match && this.previous) {
                                this.previous = false;
                                this.xmlhttp.abort();
                            }
                            return null;
                        }
                    }/>
                </Switch>
                <Route path={"/dashboard"} exact={false}>
                    <div className={"dashboard menu-container"}>
                        <div className="dashboard container">
                            <ul className="dashboard menu one">
                                <NavLink exact={false}
                                         to={`/dashboard/@me/`}
                                         activeClassName="active">
                                    <p>Your account</p>
                                </NavLink>
                                <NavLink exact={false}
                                         to={`/dashboard/team/`}
                                         activeClassName="active">
                                    <p>Team info</p>
                                </NavLink>
                                <NavLink exact={false}
                                         to={`/dashboard/users/`}
                                         activeClassName="active">
                                    <p>Users</p>
                                </NavLink>
                            </ul>
                        </div>
                        {" "}
                        <Route path={"/dashboard/users"} exact={false}>
                            <UserSelectionMenu users={this.state.users}/>
                        </Route>
                    </div>
                </Route>
            </React.Fragment>
        );
    }
}

export default NavBar;
