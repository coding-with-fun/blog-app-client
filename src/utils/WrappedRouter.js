import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { UserDataContext } from "../contexts/UserDataContext";
import AboutScreen from "../screens/AboutScreen";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";

const WrappedRouter = () => {
    const { userData } = useContext(UserDataContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return userData ? (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/post/:id" component={PostScreen} />
            <Route exact path="/create" component={NewPostScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Redirect to="/" />
        </Switch>
    ) : (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/post/:id" component={PostScreen} />
            <Route exact path="/signin">
                <AuthScreen flag={0} />
            </Route>
            <Route exact path="/signup">
                <AuthScreen flag={1} />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};

export default withRouter(WrappedRouter);
