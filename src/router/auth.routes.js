import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "LandingPage";

// Tailwind CSS Style Sheet
import "../assets/styles/tailwind.css";

function Auth() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default Auth;
