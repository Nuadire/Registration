import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Alert } from "antd";
import { history } from "../_helpers";
import { alertClear } from "../_actions/actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      const { clearAlerts } = this.props;
      clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="app">
        {alert.message && <Alert type={alert.type} message={alert.message} />}
        <HashRouter>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={RegisterPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

App.propTypes = {
  clearAlerts: PropTypes.func.isRequired,
  alert: PropTypes.objectOf(PropTypes.string).isRequired,
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
