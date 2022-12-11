import LayoutRoute from "./LayoutRoute";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <LayoutRoute path="/about" exact={true} component={AboutScreen} />
        <LayoutRoute path="/login" exact={true} component={LoginScreen} />
        <LayoutRoute path="/registration" exact={true} component={RegistrationScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;