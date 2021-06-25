import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WrappedRouter from "./utils/WrappedRouter";

const App = () => {
    return (
        <Router>
            <Navbar />

            <div className="screens__container">
                <WrappedRouter />
            </div>

            <Footer />
        </Router>
    );
};

export default App;
