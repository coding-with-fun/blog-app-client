import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const history = useHistory();

    const handleSignOut = () => {
        history.push("/");
        handleNavbarCollapse();
    };

    const handleNavbarCollapse = () => {
        document.querySelector("#navbarNav").classList.remove("show");
    };

    return (
        <nav className="navbar fixed-top navbar-expand-lg user-select-none navbar-light bg-light">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    onClick={handleNavbarCollapse}
                    to="/"
                >
                    Blog.It
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    location.pathname === "/" && "active"
                                }`}
                                aria-current={
                                    location.pathname === "/" ? "page" : "false"
                                }
                                onClick={handleNavbarCollapse}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    location.pathname === "/create" && "active"
                                }`}
                                aria-current={
                                    location.pathname === "/create"
                                        ? "page"
                                        : "false"
                                }
                                onClick={handleNavbarCollapse}
                                to="/create"
                            >
                                Create New Post
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    location.pathname === "/about" && "active"
                                }`}
                                aria-current={
                                    location.pathname === "/about"
                                        ? "page"
                                        : "false"
                                }
                                onClick={handleNavbarCollapse}
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                onClick={handleSignOut}
                                role="button"
                                tabIndex="0"
                            >
                                Sign Out
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
