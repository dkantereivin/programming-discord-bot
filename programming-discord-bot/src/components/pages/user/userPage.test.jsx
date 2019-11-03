import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './userPage';

//page render
it('renders the page without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});

