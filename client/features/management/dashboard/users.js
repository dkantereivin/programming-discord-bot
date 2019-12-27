import {NavLink, Route} from "react-router-dom";
import React, {Component} from "react";


class UserSelectionMenu extends Component {
    render() {
        return (
            <Route path={"/dashboard/users"} exact={false}>
                <div className="dashboard container">
                    <ul className="dashboard menu 2">
                        {
                            this.props.users.map((user, id) => {
                                return (
                                    <NavLink exact={false}
                                             key={id}
                                             to={`/dashboard/users/${user.id}`}
                                             activeClassName="active">
                                        <p>
                                            {user.name}{user.rank === "owner" ? " 👑" : ""}
                                        </p>
                                    </NavLink>
                                );
                            })
                        }
                    </ul>
                </div>
            </Route>
        );
    }
}

export default UserSelectionMenu;