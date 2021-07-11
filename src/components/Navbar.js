import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserDataContext } from "../contexts/UserDataContext";
import { ToastNotification } from "../utils/ToastNotification";

const Navbar = () => {
    const history = useHistory();
    const { isUserAuthenticated, handleUserData, handleAuthenticateUser } =
        useContext(UserDataContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSignOut = () => {
        ToastNotification("success", "User signed out successfully.");
        history.push("/");
        handleToggleMenu();
        handleUserData();
        handleAuthenticateUser(false);
    };

    return (
        <nav className="navbar shadow-sm">
            <div className="nav__container">
                <NavLink exact to="/" className="nav_logo">
                    Blog.It
                </NavLink>

                <ul className={`nav_menu ${isMenuOpen && "active"}`}>
                    <li className="nav_item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav_link"
                            onClick={handleToggleMenu}
                        >
                            Home
                        </NavLink>
                    </li>

                    {isUserAuthenticated && (
                        <li className="nav_item">
                            <NavLink
                                exact
                                to="/create"
                                activeClassName="active"
                                className="nav_link"
                                onClick={handleToggleMenu}
                            >
                                Create
                            </NavLink>
                        </li>
                    )}

                    <li className="nav_item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav_link"
                            onClick={handleToggleMenu}
                        >
                            About
                        </NavLink>
                    </li>

                    {isUserAuthenticated && (
                        <li className="nav_item">
                            <NavLink
                                exact
                                to="/profile"
                                activeClassName="active"
                                className="nav_link"
                                onClick={handleToggleMenu}
                            >
                                Profile
                            </NavLink>
                        </li>
                    )}

                    {isUserAuthenticated && (
                        <li className="nav_item">
                            <div className="nav_link" onClick={handleSignOut}>
                                Sign Out
                            </div>
                        </li>
                    )}

                    {!isUserAuthenticated && (
                        <li className="nav_item">
                            <NavLink
                                exact
                                to="/signin"
                                activeClassName="active"
                                className="nav_link"
                                onClick={handleToggleMenu}
                            >
                                Sign In
                            </NavLink>
                        </li>
                    )}

                    {!isUserAuthenticated && (
                        <li className="nav_item">
                            <NavLink
                                exact
                                to="/signup"
                                activeClassName="active"
                                className="nav_link"
                                onClick={handleToggleMenu}
                            >
                                Sign Up
                            </NavLink>
                        </li>
                    )}

                    <li className="nav_item"></li>
                </ul>

                <div className="nav_icon" onClick={handleToggleMenu}>
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
