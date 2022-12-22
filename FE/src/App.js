import LayoutRoute from "./LayoutRoute";
import HomeScreen from "./HomeScreen";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProductScreen from "./AddProductScreen";
import GuestLayoutRoute from './GuestLayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';
import ProfileScreen from './ProfileScreen';
import ProductsScreen from "./ProductsScreen";
import UpdateProduct from "./UdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomeScreen} />
        <PrivateLayoutRoute path="/profile" exact={true} component={ProfileScreen} />
        <GuestLayoutRoute path="/register" exact={true} component={RegistrationScreen} />
        <GuestLayoutRoute path="/login" exact={true} component={LoginScreen} />
        <PrivateLayoutRoute path="/sell" exact={true} component={AddProductScreen}/>
        <LayoutRoute path="/buy" exact={true} component={ProductsScreen}/>
        <LayoutRoute path="/pupdate" exact={true} component={UpdateProduct}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;