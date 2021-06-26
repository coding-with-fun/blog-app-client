import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PostDataProvider } from "./contexts/PostDataContext";
import WrappedRouter from "./utils/WrappedRouter";

const App = () => {
    return (
        <PostDataProvider>
            <Router>
                <Navbar />

                <div className="screens__container">
                    <WrappedRouter />
                </div>

                <Footer />
            </Router>
        </PostDataProvider>
    );
};

export default App;
