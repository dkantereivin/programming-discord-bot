import React from 'react';
import { render } from 'react-dom';
import NavBar from "./features/navigation/index.jsx";
import Auth from "./features/oauth/index.jsx";
import "./main.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
          <NavBar links={[
              {
                title: "🔑 Login",
                link: "/auth",
                exact: false,
              },
          ]}/>
          <Route path="/auth">
            <Auth client_id={636856968874557442}/>
          </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
