import React from 'react';
import {render} from 'react-dom';
import NavBar from "./features/navigation/NavBar";
import Dashboard from "./features/management/Dashboard";
import "./main.css";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <NavBar/>
          <Dashboard/>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
