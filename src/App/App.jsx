import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from 'antd';
import { history } from "../_helpers";
import { alertClear } from "../_actions/actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="app">
            {alert.message && (
              <Alert type={alert.type} message={alert.message} />
            )}
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={RegisterPage} />
              </Switch>
            </Router>
      </div>
    );
  }
}

App.propTypes = {
  clearAlerts: PropTypes.func.isRequired,
  alert: PropTypes.objectOf(PropTypes.string).isRequired
};

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertClear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
