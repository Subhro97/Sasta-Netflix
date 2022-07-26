import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Landing from "./components/pages/Landing";
import Signup from "./components/pages/Signup";
import Browse from "./components/pages/Browse";

function App(props) {
  let status = localStorage.getItem("logStatus");
  return (
    <Switch>
      <Route path="/Sasta-Netflix" exact>
        <Redirect to="/Sasta-Netflix/in/" />
      </Route>
      <Route path="/Sasta-Netflix/in/" exact>
        {status ? <Redirect to="/Sasta-Netflix/browse" /> : <Landing />}
      </Route>
      <Route path="/Sasta-Netflix/in/login">
        {status ? <Redirect to="/Sasta-Netflix/browse" /> : <Signup />}
      </Route>
      <Route path="/Sasta-Netflix/browse">
        {status ? <Browse /> : <Redirect to="/Sasta-Netflix/in" />}
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
