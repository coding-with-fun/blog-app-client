import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WrappedRouter from "./utils/WrappedRouter";

const App = () => {
    return (
        <div className="light">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
            />
            <Router>
                <Navbar />

                <div className="screens__container">
                    <WrappedRouter />
                </div>

                <Footer />
            </Router>
        </div>
    );
};

export default App;
