import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userActions } from "../_actions";

const HomePage = ({ user, logout }) => (
  <>
    <h1>Hi {user.username}!</h1>
    <p>
      <Link to="/login" onClick={logout}>
        Logout
      </Link>
    </p>
  </>
);

HomePage.propTypes = {
  user: PropTypes.shape({ username: PropTypes.string }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapState(state) {
  const {
    authentication: { user },
  } = state;
  return user;
}
function mapAction() {
  return {
    logout: userActions.logout,
  };
}

const connectedHomePage = connect(mapState, mapAction)(HomePage);
export { connectedHomePage as HomePage };
