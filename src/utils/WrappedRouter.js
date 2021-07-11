import React, { useContext, useEffect } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { UserDataContext } from "../contexts/UserDataContext";
import PageNotFoundScreen from "../screens/404";
import AboutScreen from "../screens/AboutScreen";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { getUserData } from "../api/user.api";

const WrappedRouter = () => {
    const { isUserAuthenticated, handleUserData } = useContext(UserDataContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleFetchUserData = async () => {
        const user = await getUserData();
        handleUserData(user.data.user);
    };

    useEffect(() => {
        handleFetchUserData();

        // eslint-disable-next-line
    }, []);

    return isUserAuthenticated ? (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/post/:id" component={PostScreen} />
            <Route exact path="/create" component={NewPostScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Route exact path="/404" component={PageNotFoundScreen} />
            <Redirect from="*" to="/404" />
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
            <Route exact path="/404" component={PageNotFoundScreen} />
            <Redirect from="*" to="/404" />
        </Switch>
    );
};

export default withRouter(WrappedRouter);
