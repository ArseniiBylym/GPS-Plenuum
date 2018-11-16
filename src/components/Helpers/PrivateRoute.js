import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from "react-router-dom"

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          props.authState.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

const mapStateToProps = state => {
    return {
        authState: state.isAuth
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)