import {NavLink} from "react-router-dom";
import React, {Component} from "react";

class UserMenu extends Component {
    render() {
        if (this.props.users.length !== 0) {
            return (
                <React.Fragment>
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
                </React.Fragment>
            );
        } else {
            return (
                <span>
                    <p>Loading users...</p>
                </span>
            );
        }
    }
}

class UserSelectionMenu extends Component {
    render() {
        return (
            <div className="dashboard container">
                <ul className="dashboard menu two users">
                    {
                        <UserMenu users={this.props.users}/>
                    }
                </ul>
            </div>
        );
    }
}

export default UserSelectionMenu;