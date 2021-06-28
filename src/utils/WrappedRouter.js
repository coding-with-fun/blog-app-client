import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";

const WrappedRouter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/create" component={NewPostScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Route exact path="/post/:id" component={PostScreen} />
        </Switch>
    );
};

export default withRouter(WrappedRouter);
