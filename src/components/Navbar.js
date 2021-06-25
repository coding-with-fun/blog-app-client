import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg user-select-none navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Blog.It
                </a>

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
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Create New Post
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Sign Out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
