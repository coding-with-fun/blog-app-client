import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";

const WrappedRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/create" component={NewPostScreen} />
            <Route exact path="/about" component={AboutScreen} />
        </Switch>
    );
};

export default WrappedRouter;
