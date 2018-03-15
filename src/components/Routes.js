import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Login from './Login';
import Sidebar from './Sidebar'

class Routes extends Component {

  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    if (this.props.auth.isAuthenticated) {
      return <Sidebar />
    } else if (this.props.location.pathname === '/') {
        return <Redirect from='/' to='/login' exact />
    }
  }

  render() {

    return (
      <div className="wrapper">
        {this.handleRedirect()}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(Routes))
