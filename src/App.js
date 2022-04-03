import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "./components/pages/Landing";
import Signup from "./components/pages/Signup";
import Browse from "./components/pages/Browse";

function App(props) {
  let status = localStorage.getItem("logStatus");
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/in/" />
      </Route>
      <Route path="/in/" exact>
        {status ? <Redirect to="/browse" /> : <Landing />}
      </Route>
      <Route path="/in/login">
        {status ? <Redirect to="/browse" /> : <Signup />}
      </Route>
      <Route path="/browse">
        {status ? <Browse /> : <Redirect to="/in" />}
      </Route>
      <Route path="*"></Route>
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    logStatus: state.auth.logStatus,
  };
};

export default connect(mapStateToProps, null)(App);
