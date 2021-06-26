import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSignOut = () => {
        history.push("/");
        handleToggleMenu();
    };

    return (
        <nav className="navbar">
            <div className="nav_container">
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
                    <li className="nav_item">
                        <div className="nav_link" onClick={handleSignOut}>
                            Sign Out
                        </div>
                    </li>
                    <li className="nav_item"></li>
                </ul>

                <div className="nav_icon" onClick={handleToggleMenu}>
                    {isMenuOpen ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                                fill="#000"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z"
                                fill="#000"
                            ></path>
                        </svg>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
