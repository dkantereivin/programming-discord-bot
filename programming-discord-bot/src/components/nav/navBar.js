import React from 'react';
import UserPage from '../pages/user/userPage';

class navBar extends React.Component {
    render() {
        return (
            <div>
                <p> navBar works! </p>
                <div>
                    <UserPage></UserPage>
                </div>
            </div>
        )
    };
}

export default navBar;