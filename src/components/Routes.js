import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Rubric from './Rubric';

class Routes extends Component {

  render() {
    return (
      <div className="wrapper">
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

export default Routes;
