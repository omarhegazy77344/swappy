import React from "react";
import TopNav from "./LayoutComponents/TopNav";
import Header from "./LayoutComponents/Header";
import Footer from "./LayoutComponents/Footer";
import { Route } from 'react-router-dom';

function LayoutRoute(props) {
    return(
        <div>
            <TopNav />
            <Header />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer />
        </div>
    )
}

export default LayoutRoute